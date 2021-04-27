package com.seoulit.erp.hr.attendance.handler;

import com.seoulit.erp.hr.attendance.service.AttendanceServiceFacade;
import com.seoulit.erp.hr.attendance.to.DayAnnualTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/attendance/*")
public class DayAnnualHandler {
	
	/* AttendanceServiceFacade setting */
	@Autowired
	private AttendanceServiceFacade attendanceServiceFacade;

	@RequestMapping("/aa")
	private void aa() {
		System.out.println("여긴 아무것도 안하는 곳입니다.");
	}

	/* 해당년도, 해당사원의 연차정보, 사원정보를 조회하는 메서드 */
	@RequestMapping("/findAnnualMgt")
	private List<DayAnnualTo> findAnnualMgt(@RequestBody HashMap<String, String> param) throws Exception {

//		String empCode = inData.getVariable("empCode").getString();
//		String standardYear = inData.getVariable("standardYear").getString();
		return attendanceServiceFacade.findAnnualMgt(param);
	}

	// 연차를 신청하는 메서드
	@RequestMapping("/addDayAnnual")
	public List<DayAnnualTo> addDayAnnual(@RequestBody DayAnnualTo dayAnnualTO) throws Exception {
		return attendanceServiceFacade.addDayAnnual(dayAnnualTO);
	}

	// 연차 승인, 관리부분에서 조건에 따라 조회하는 메서드
	@RequestMapping("/findDayAnnualListByCondition")
	public List<DayAnnualTo> findDayAnnualListByCondition(@RequestBody Map<String, Object> params) throws Exception {
//        String deptCode = inData.getVariable("deptCode").getString();
//        String fromDate = inData.getVariable("fromDate").getString();
//        String toDate = inData.getVariable("toDate").getString();
//        String approvalStatus = inData.getVariable("approvalStatus").getString();
		return attendanceServiceFacade.findDayAnnualListByCondition(params);
	}

	// 연차를 일괄적으로 승인처리 하는 메서드
	@RequestMapping("/batchDayAnnual")
	public void batchDayAnnual(@RequestBody List<DayAnnualTo> dayAnnualList) throws Exception {
		attendanceServiceFacade.batchDayAnnual(dayAnnualList);
	}
}
