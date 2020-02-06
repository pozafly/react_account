package com.seoulit.erp.hr.pm.service;

import com.seoulit.erp.hr.pm.dao.*;
import com.seoulit.erp.hr.pm.repository.DeptRepository;
import com.seoulit.erp.hr.pm.to.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class DeptServiceFacadeImpl implements DeptServiceFacade {

	@Autowired
	private DeptRepository deptRepository;
	
	
	@Override
	public List<DeptTo> findDeptList() {
		// TODO Auto-generated method stub
		return deptRepository.findAll();
	}

}
