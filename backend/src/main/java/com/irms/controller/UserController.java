package com.irms.controller;

import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.irms.common.Result;
import com.irms.entity.User;
import com.irms.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import jakarta.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@RestController
@RequestMapping("/system/user")
@RequiredArgsConstructor
public class UserController {

    private final IUserService userService;

    @GetMapping("/list")
    public Result<Page<User>> list(@RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize,
            User user) {
        return Result.success(userService.selectUserPage(new Page<>(pageNum, pageSize), user));
    }

    @PostMapping
    public Result<Boolean> add(@RequestBody User user) {
        // In real world, encode password here
        return Result.success(userService.save(user));
    }

    @PutMapping
    public Result<Boolean> update(@RequestBody User user) {
        return Result.success(userService.updateById(user));
    }

    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        return Result.success(userService.removeById(id));
    }

    @GetMapping("/{id}")
    public Result<User> getInfo(@PathVariable Long id) {
        User user = userService.getById(id);
        user.setPassword(null);
        return Result.success(user);
    }

    @GetMapping("/export")
    public void export(HttpServletResponse response, User user) throws IOException {
        Page<User> page = userService.selectUserPage(new Page<>(1, 10000), user);
        List<User> list = page.getRecords();

        response.setContentType("application/vnd.ms-excel");
        response.setCharacterEncoding("utf-8");
        response.setHeader("Content-disposition", "attachment;filename=user_list.csv");

        PrintWriter writer = response.getWriter();
        writer.println("用户账号,用户姓名,所属部门,办公室,手机号码,状态,备注,创建时间");
        for (User u : list) {
            String dept = u.getDept() != null ? u.getDept().getDeptName() : "";
            String office = u.getOffice() != null ? u.getOffice().getOfficeName() : "";
            String status = "0".equals(u.getStatus()) ? "正常" : "停用";
            writer.printf("%s,%s,%s,%s,%s,%s,%s,%s%n",
                    u.getUserName(), u.getNickName(), dept, office, u.getPhonenumber(), status, u.getRemark(),
                    u.getCreateTime());
        }
        writer.flush();
        writer.close();
    }
}
