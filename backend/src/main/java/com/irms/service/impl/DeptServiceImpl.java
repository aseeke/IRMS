package com.irms.service.impl;

import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import com.irms.entity.Dept;
import com.irms.mapper.DeptMapper;
import com.irms.service.IDeptService;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Service
public class DeptServiceImpl extends ServiceImpl<DeptMapper, Dept> implements IDeptService {

    @Override
    public List<Dept> getDeptTree() {
        List<Dept> allDepts = this.list();
        Map<Long, List<Dept>> groupByParent = allDepts.stream()
                .collect(Collectors.groupingBy(Dept::getParentId));

        List<Dept> roots = groupByParent.getOrDefault(0L, new ArrayList<>());

        buildTree(roots, groupByParent);
        return roots;
    }

    private void buildTree(List<Dept> nodes, Map<Long, List<Dept>> groupByParent) {
        for (Dept node : nodes) {
            List<Dept> children = groupByParent.get(node.getId());
            if (children != null) {
                node.setChildren(children);
                buildTree(children, groupByParent);
            }
        }
    }
}
