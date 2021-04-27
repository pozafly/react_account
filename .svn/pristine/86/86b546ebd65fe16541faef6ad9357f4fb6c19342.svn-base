package com.seoulit.erp.hr.circumstance.handler;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.AnnualLeaveTo;
import com.seoulit.erp.hr.circumstance.to.EmpAnnualDataTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/circumstance/*")
public class AnnualLeaveHandler {

	@Autowired
	CircumstanceServiceFacade circumstanceServiceFacade;

	@RequestMapping("/findAnnualLeaveList")
	public List<AnnualLeaveTo> findAnnualLeaveList() {
		return circumstanceServiceFacade.findAnnualLeaveList();
	}

	@RequestMapping("/findEmpAnnualData/{empCode}")
	public EmpAnnualDataTo findEmpAnnualData(@PathVariable String empCode) {
		return circumstanceServiceFacade.findEmpAnnualData(empCode);

	}

	@RequestMapping("/registAnnualLeave")
	public void registAnnualLeave(String standardYear, String empCode, String hireDate) {
		
		Map<String, String> map = new HashMap<>();
		map.put("standardYear", standardYear);
		map.put("empCode", empCode);
		map.put("hireDate", hireDate);
		circumstanceServiceFacade.registAnnualLeave(map);
		
	}

	@RequestMapping("/batchAnnualLeave")
	// editAnnualLeaveMgt로 연차 신청할때 연차관리 테이블 수정하는 메서드 하나 뺏는데 왜 뺀지 모르겠음
	// standardYear, empCode, days, restDays
	public void batchAnnualLeave(@RequestBody AnnualLeaveTo annualLeaveTo) {
		circumstanceServiceFacade.batchAnnualLeave(annualLeaveTo);
	}
}
