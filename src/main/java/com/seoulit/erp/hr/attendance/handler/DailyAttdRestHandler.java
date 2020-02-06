package com.seoulit.erp.hr.attendance.handler;

import com.seoulit.erp.hr.attendance.service.AttendanceServiceFacade;
import com.seoulit.erp.hr.attendance.to.DailyAttdRestTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/hr/attendance/*")
@CrossOrigin("*")
public class DailyAttdRestHandler {
	/* AttendanceServiceFacade setting */
	@Autowired
	private AttendanceServiceFacade attendanceServiceFacade;

	// 근태외 목록을 가지고오는 메서드
	@RequestMapping("/findAttdRestList")
	public List<DailyAttdRestTo> findAttdRestList(@RequestBody Map<String, Object> param) throws Exception {
		return attendanceServiceFacade.findAttdRestList(param);
	}

	// 근태외 승인부분에서 일괄적으로 처리하는 메서드
	@RequestMapping("/batchDailyAttdRest")
	public void batchDailyAttdRest(@RequestBody List<DailyAttdRestTo> dailyAttdRestList) throws Exception {
		attendanceServiceFacade.batchDailyAttdRest(dailyAttdRestList);
	}

	// 근태외 승인, 일근태 관리부분에서 조건에 따라 조회하는 메서드
	@RequestMapping("/findAttdRestListByCondition")
	public List<DailyAttdRestTo> findAttdRestListByCondition(Map<String, Object> param) throws Exception {
		return attendanceServiceFacade.findAttdRestListByCondition(param);
	}
}