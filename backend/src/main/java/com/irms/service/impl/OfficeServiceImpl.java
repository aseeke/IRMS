package com.irms.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.irms.entity.Office;
import com.irms.mapper.OfficeMapper;
import com.irms.service.IOfficeService;
import org.springframework.stereotype.Service;

@Service
public class OfficeServiceImpl extends ServiceImpl<OfficeMapper, Office> implements IOfficeService {
}
