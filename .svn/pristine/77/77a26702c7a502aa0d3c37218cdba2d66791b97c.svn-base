package com.seoulit.erp.hr.attendance.handler;

import com.seoulit.erp.hr.attendance.service.AttendanceServiceFacade;
import com.seoulit.erp.hr.attendance.to.DailyAttdTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/hr/attendance/*")
@CrossOrigin("*")
public class DailyAttdHandler {

	@Autowired
	private AttendanceServiceFacade attendanceServiceFacade;

	// 일근태 목록을 가지고 오는 메서드
	@RequestMapping("/findDailyAttdList")
	public List<DailyAttdTo> findDailyAttdList(@RequestBody Map<String, String> param) throws Exception {

		param.put("fromDate", param.get("fromDate").replaceAll("-", ""));
		param.put("toDate", param.get("toDate").replaceAll("-", ""));

		return attendanceServiceFacade.findDailyAttdList(param);
	}

	// 일근태 승인, 관리부분에서 조건에 따라 조회하는 메서드
	@RequestMapping("/findDailyAttdListByCondition")
	public List<DailyAttdTo> findDailyAttdListByCondition(@RequestBody Map<String, Object> param) throws Exception {
//		map.put("approvalStatus", approvalStatus);
//		map.put("basicDay", basicDay);
//		map.put("deptCode", deptCode);
		return attendanceServiceFacade.findDailyAttdListByCondition(param);
	}

	// 일근태 등록,수정,삭제 메서드
	@RequestMapping("/batchDailyAttd")
	public void batchDailyAttd(@RequestBody List<DailyAttdTo> dailyAttdList) throws Exception {
		attendanceServiceFacade.batchDailyAttd(dailyAttdList);
	}
}
