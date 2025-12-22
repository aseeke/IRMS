package com.irms.service.impl;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.irms.entity.User;
import com.irms.mapper.UserMapper;
import com.irms.service.IUserService;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl extends ServiceImpl<UserMapper, User> implements IUserService {

    @org.springframework.beans.factory.annotation.Autowired
    private com.irms.mapper.DeptMapper deptMapper;

    @Override
    public String login(String username, String password) {
        User user = this.getOne(new LambdaQueryWrapper<User>()
                .eq(User::getUserName, username));

        if (user == null) {
            throw new RuntimeException("User not found");
        }

        // Check password (BCrypt or Plain Text with Lazy Migration)
        boolean isMatch = false;
        boolean needUpgrade = false;

        // 1. Try BCrypt check first
        try {
            if (cn.hutool.crypto.digest.BCrypt.checkpw(password, user.getPassword())) {
                isMatch = true;
            }
        } catch (Exception e) {
            // Not a BCrypt hash, ignore
        }

        // 2. If not match, try plain text (Legacy)
        if (!isMatch && user.getPassword().equals(password)) {
            isMatch = true;
            needUpgrade = true;
        }

        if (!isMatch) {
            throw new RuntimeException("Invalid password");
        }

        if ("1".equals(user.getStatus())) {
            throw new RuntimeException("Account is disabled");
        }

        // Lazy Migration: Upgrade plain text to BCrypt
        if (needUpgrade) {
            user.setPassword(cn.hutool.crypto.digest.BCrypt.hashpw(password));
            this.updateById(user);
        }

        StpUtil.login(user.getId());
        return StpUtil.getTokenValue();
    }

    @Override
    public boolean save(User entity) {
        checkUserNameUnique(entity);
        if (entity.getPassword() != null && !entity.getPassword().isEmpty()) {
            entity.setPassword(cn.hutool.crypto.digest.BCrypt.hashpw(entity.getPassword()));
        }
        return super.save(entity);
    }

    @Override
    @org.springframework.transaction.annotation.Transactional
    public boolean updateById(User entity) {
        checkUserNameUnique(entity);
        if (entity.getPassword() != null && !entity.getPassword().isEmpty()) {
            // If it looks like a BCrypt hash, don't re-hash (simple check: starts with
            // $2a$)
            if (!entity.getPassword().startsWith("$2a$")) {
                entity.setPassword(cn.hutool.crypto.digest.BCrypt.hashpw(entity.getPassword()));
            }
        } else {
            entity.setPassword(null);
        }

        // Sync to devices if dept or office changed
        User oldUser = this.getById(entity.getId());
        boolean deptChanged = entity.getDeptId() != null && !entity.getDeptId().equals(oldUser.getDeptId());
        boolean officeChanged = entity.getOfficeId() != null && !entity.getOfficeId().equals(oldUser.getOfficeId());

        if (deptChanged || officeChanged) {
            com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<com.irms.entity.Device> updateWrapper = new com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<>();
            updateWrapper.eq(com.irms.entity.Device::getOwnerId, entity.getId());
            if (deptChanged) {
                updateWrapper.set(com.irms.entity.Device::getDeptId, entity.getDeptId());
            }
            if (officeChanged) {
                updateWrapper.set(com.irms.entity.Device::getOfficeId, entity.getOfficeId());
            }
            deviceMapper.update(null, updateWrapper);
        }

        return super.updateById(entity);
    }

    private void checkUserNameUnique(User user) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        wrapper.eq(User::getUserName, user.getUserName());
        if (user.getId() != null) {
            wrapper.ne(User::getId, user.getId());
        }
        if (this.count(wrapper) > 0) {
            throw new RuntimeException("User account '" + user.getUserName() + "' already exists");
        }
    }

    @org.springframework.beans.factory.annotation.Autowired
    private com.irms.mapper.OfficeMapper officeMapper;

    @Override
    public com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> selectUserPage(
            com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> page, User user) {
        LambdaQueryWrapper<User> wrapper = new LambdaQueryWrapper<>();
        if (user != null) {
            if (user.getUserName() != null && !user.getUserName().isEmpty()) {
                wrapper.like(User::getUserName, user.getUserName());
            }
            if (user.getNickName() != null && !user.getNickName().isEmpty()) {
                wrapper.like(User::getNickName, user.getNickName());
            }
            if (user.getDeptId() != null) {
                wrapper.eq(User::getDeptId, user.getDeptId());
            }
            if (user.getOfficeId() != null) {
                wrapper.eq(User::getOfficeId, user.getOfficeId());
            }
            if (user.getStatus() == null) {
                wrapper.eq(User::getStatus, "0");
            } else if (!user.getStatus().isEmpty()) {
                wrapper.eq(User::getStatus, user.getStatus());
            }
        } else {
            wrapper.eq(User::getStatus, "0");
        }

        com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> result = this.page(page, wrapper);
        result.getRecords().forEach(u -> {
            u.setPassword(null);
            if (u.getDeptId() != null) {
                u.setDept(deptMapper.selectById(u.getDeptId()));
            }
            if (u.getOfficeId() != null) {
                u.setOffice(officeMapper.selectById(u.getOfficeId()));
            }
        });
        return result;
    }

    @org.springframework.beans.factory.annotation.Autowired
    private com.irms.mapper.DeviceMapper deviceMapper;

    @Override
    public boolean removeById(java.io.Serializable id) {
        // Unbind devices first
        com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<com.irms.entity.Device> updateWrapper = new com.baomidou.mybatisplus.core.conditions.update.LambdaUpdateWrapper<>();
        updateWrapper.eq(com.irms.entity.Device::getOwnerId, id)
                .set(com.irms.entity.Device::getOwnerId, null);
        deviceMapper.update(null, updateWrapper);

        return super.removeById(id);
    }
}
