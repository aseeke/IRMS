package com.irms.service;

import com.baomidou.mybatisplus.extension.service.IService;
import com.irms.entity.Dept;

import java.util.List;

public interface IDeptService extends IService<Dept> {
    List<Dept> getDeptTree();
}
