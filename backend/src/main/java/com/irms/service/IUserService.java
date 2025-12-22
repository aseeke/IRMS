package com.irms.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.irms.entity.User;

public interface IUserService extends IService<User> {
    String login(String username, String password);

    com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> selectUserPage(
            com.baomidou.mybatisplus.extension.plugins.pagination.Page<User> page, User user);
}
