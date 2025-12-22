package com.irms.controller;

import cn.dev33.satoken.stp.StpUtil;
import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.irms.common.Result;
import com.irms.entity.User;
import com.irms.service.IUserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final IUserService userService;

    @PostMapping("/login")
    public Result<Map<String, String>> login(@RequestBody Map<String, String> params) {
        String token = userService.login(params.get("username"), params.get("password"));
        Map<String, String> map = new HashMap<>();
        map.put("tokenName", StpUtil.getTokenName());
        map.put("tokenValue", token);
        return Result.success(map);
    }

    @PostMapping("/logout")
    public Result<String> logout() {
        StpUtil.logout();
        return Result.success("Logged out successfully");
    }

    @GetMapping("/info")
    public Result<User> getInfo() {
        Long userId = StpUtil.getLoginIdAsLong();
        User user = userService.getById(userId);
        user.setPassword(null); // hide password
        return Result.success(user);
    }
}
