package com.irms.controller;

import com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper;
import com.baomidou.mybatisplus.extension.plugins.pagination.Page;
import com.irms.common.Result;
import com.irms.entity.Office;
import com.irms.service.IOfficeService;
import lombok.RequiredArgsConstructor;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/biz/office")
@RequiredArgsConstructor
public class OfficeController {

    private final IOfficeService officeService;

    @GetMapping("/list")
    public Result<Page<Office>> list(@RequestParam(defaultValue = "1") Integer pageNum,
            @RequestParam(defaultValue = "10") Integer pageSize,
            @RequestParam(required = false) String officeName,
            @RequestParam(required = false) String status) {
        LambdaQueryWrapper<Office> wrapper = new LambdaQueryWrapper<>();
        wrapper.like(StringUtils.hasText(officeName), Office::getOfficeName, officeName);
        if (status == null) {
            wrapper.eq(Office::getStatus, "0");
        } else if (StringUtils.hasText(status)) {
            wrapper.eq(Office::getStatus, status);
        }
        wrapper.orderByDesc(Office::getCreateTime);
        return Result.success(officeService.page(new Page<>(pageNum, pageSize), wrapper));
    }

    @GetMapping("/all")
    public Result<List<Office>> all() {
        return Result.success(officeService.list(new LambdaQueryWrapper<Office>().eq(Office::getStatus, "0")));
    }

    @PostMapping
    public Result<Boolean> add(@RequestBody Office office) {
        return Result.success(officeService.save(office));
    }

    @PutMapping
    public Result<Boolean> update(@RequestBody Office office) {
        return Result.success(officeService.updateById(office));
    }

    @DeleteMapping("/{id}")
    public Result<Boolean> delete(@PathVariable Long id) {
        return Result.success(officeService.removeById(id));
    }

    @GetMapping("/export")
    public void export(jakarta.servlet.http.HttpServletResponse response, Office office) throws java.io.IOException {
        com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<Office> wrapper = new com.baomidou.mybatisplus.core.conditions.query.LambdaQueryWrapper<>();
        wrapper.like(org.springframework.util.StringUtils.hasText(office.getOfficeName()), Office::getOfficeName,
                office.getOfficeName());
        wrapper.orderByDesc(Office::getCreateTime);

        List<Office> list = officeService.list(wrapper);

        response.setContentType("application/vnd.ms-excel");
        response.setCharacterEncoding("utf-8");
        response.setHeader("Content-disposition", "attachment;filename=office_list.csv");

        java.io.PrintWriter writer = response.getWriter();
        writer.println("ID,办公室名称,位置,备注,创建时间");
        for (Office o : list) {
            writer.printf("%d,%s,%s,%s,%s%n",
                    o.getId(), o.getOfficeName(), o.getLocation(), o.getRemark(), o.getCreateTime());
        }
        writer.flush();
        writer.close();
    }
}
