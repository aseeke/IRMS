package com.irms.controller;

import com.irms.common.Result;
import com.irms.entity.Dept;
import com.irms.service.IDeptService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/system/dept")
@RequiredArgsConstructor
public class DeptController {

    private final IDeptService deptService;

    @GetMapping("/tree")
    public Result<List<Dept>> tree(@RequestParam(required = false) String status) {
        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Dept> wrapper = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
        if (status == null) {
            wrapper.eq(Dept::getStatus, "0");
        } else if (org.springframework.util.StringUtils.hasText(status)) {
            wrapper.eq(Dept::getStatus, status);
        }
        // Note: getDeptTree currently doesn't take a wrapper, need to adjust service or
        // filter here
        List<Dept> allDepts = deptService.list(wrapper);
        return Result.success(buildTree(allDepts));
    }

    private List<Dept> buildTree(List<Dept> allDepts) {
        java.util.Map<Long, List<Dept>> groupByParent = allDepts.stream()
                .collect(java.util.stream.Collectors.groupingBy(Dept::getParentId));
        List<Dept> roots = groupByParent.getOrDefault(0L, new java.util.ArrayList<>());
        buildTreeRecursive(roots, groupByParent);
        return roots;
    }

    private void buildTreeRecursive(List<Dept> nodes, java.util.Map<Long, List<Dept>> groupByParent) {
        for (Dept node : nodes) {
            List<Dept> children = groupByParent.get(node.getId());
            if (children != null) {
                node.setChildren(children);
                buildTreeRecursive(children, groupByParent);
            }
        }
    }

    @GetMapping("/list")
    public Result<List<Dept>> list(@RequestParam(required = false) String status) {
        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Dept> wrapper = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
        if (status == null) {
            wrapper.eq(Dept::getStatus, "0");
        } else if (org.springframework.util.StringUtils.hasText(status)) {
            wrapper.eq(Dept::getStatus, status);
        }
        return Result.success(deptService.list(wrapper));
    }

    @PostMapping
    public Result<Boolean> add(@RequestBody Dept dept) {
        return Result.success(deptService.save(dept));
    }

    @PutMapping
    public Result<Boolean> update(@RequestBody Dept dept) {
        return Result.success(deptService.updateById(dept));
    }

    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        // In real world, check if have children
        return Result.success(deptService.removeById(id));
    }

    @GetMapping("/{id}")
    public Result<Dept> getInfo(@PathVariable Long id) {
        return Result.success(deptService.getById(id));
    }
}
