package com.seoulit.erp.hr.pm.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.pm.service.DeptServiceFacade;
import com.seoulit.erp.hr.pm.service.PMServiceFacade;
import com.seoulit.erp.hr.pm.to.DeptTo;
import com.seoulit.erp.hr.pm.to.EmployeeTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/hr/pm/*")
public class DeptHandler {

	@Autowired
	private DeptServiceFacade deptServiceFacade;

	@GetMapping("/findDeptList")
	public List<DeptTo> findDeptList() throws Exception {
		return deptServiceFacade.findDeptList();
	}
}
