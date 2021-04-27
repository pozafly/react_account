package com.seoulit.erp.hr.attendance.handler;

import com.seoulit.erp.hr.attendance.service.AttendanceServiceFacade;
import com.seoulit.erp.hr.attendance.to.DailyAttdReportTo;
import com.seoulit.erp.hr.attendance.to.DailyAttdTo;
import com.seoulit.erp.hr.attendance.to.MonthAttdReportTo;
import com.seoulit.erp.hr.attendance.to.OverNightReportTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/attendance/*")
public class AttdReportHandler {
	/* AttendanceServiceFacade setting */
	@Autowired
	private AttendanceServiceFacade attendanceServiceFacade;

	/* 연장 심야 신청 조회버튼 */
	@RequestMapping("/findOverNightAttdReport")
	public List<OverNightReportTo> findOverNightAttdReport(@RequestBody Map<String, String> param) throws Exception {

		param.put("fromDate", param.get("fromDate").replaceAll("-", ""));
		param.put("toDate", param.get("toDate").replaceAll("-", ""));

		return attendanceServiceFacade.findOverNightReport(param);
	}

	/* 연장심야 승인 결과 저장 */
	@RequestMapping("/batchOverNight")
	public void batchOverNight(@RequestBody List<OverNightReportTo> overNightReportList) throws Exception {
		attendanceServiceFacade.batchOverNight(overNightReportList);
	}

	// 일근태관리테이블에서 기준일에 해당하는 데이터를 생성,조회하는 메서드
	@RequestMapping("/findDailyAttdReport/{basicDate}")
	public List<DailyAttdReportTo> findDailyAttdReport(@PathVariable String basicDate) throws Exception {
		basicDate = basicDate.replaceAll("-", "");

		List<DailyAttdReportTo> list = attendanceServiceFacade.findDailyAttdReport(basicDate);
		System.out.println(list);
		return list;

	}

	// 일근태관리테이블에서 기준일에 해당하는 승인된 데이터를 조회하는 메서드
	@RequestMapping("/findApprovalDailyAttdReport")
	public List<DailyAttdReportTo> findApprovalDailyAttdReport(

			@RequestParam String baseDay) throws Exception {
		return attendanceServiceFacade.findApprovalDailyAttdReport(baseDay);
	}

	// 해당날짜의 일근태를 마감하는 메서드 (마감여부를 N-> Y)
	@RequestMapping("/updateDailyAttdCloseYN")
	public void updateDailyAttdCloseYN(@RequestBody List<DailyAttdReportTo> dailyAttdReportList) throws Exception {

		attendanceServiceFacade.updateDailyAttdCloseYN(dailyAttdReportList);
	}

	// 해당년월의 일근태관리테이블의 데이터중 미마감인 day관련 정보를 조회하는 항목
	@RequestMapping("/findUnClosedDailyAttdReport")
	public List<DailyAttdReportTo> findUnClosedDailyAttdReport(@RequestBody Map<String, Object> param)
			throws Exception {
//        map.put("baseYearMonth", baseYearMonth);
		return attendanceServiceFacade.findUnClosedDailyAttdReport(param);
	}

	// 월근태관리테이블에서 기준일에 해당하는 데이터를 생성,조회하는 메서드
	@RequestMapping("/findMonthAttdReport")
	public List<MonthAttdReportTo> findMonthAttdReport(@RequestBody Map<String, Object> param) throws Exception {

//        map.put("baseYearMonth", baseYearMonth);
		return attendanceServiceFacade.findMonthAttdReport(param);

	}

	// 월근태 미마감항목 조회에서 일근태/근태외를 미마감한 경우 일괄적으로 처리하는 메서드
	@RequestMapping("/batchDailyAttdCloseYN")
	public List<DailyAttdReportTo> batchDailyAttdCloseYN(@RequestBody List<DailyAttdReportTo> dailyAttdReportList)
			throws Exception {

		return attendanceServiceFacade.batchDailyAttdCloseYN(dailyAttdReportList);
	}

	// 월근태 마감 항목 조회
	@RequestMapping("/findClosedMonthAttdReport")
	public List<MonthAttdReportTo> findClosedMonthAttdReport(Map<String, Object> param) throws Exception {
//        map.put("baseYearMonth", baseYearMonth);
		return attendanceServiceFacade.findClosedMonthAttdReport(param);
	}

	// 기준년월의 데이터를 마감처리하는 메서드
	@RequestMapping("/updateMonthAttdCloseYN")
	public void updateMonthAttdCloseYN(@RequestBody List<MonthAttdReportTo> monthAttdReportList) throws Exception {
		attendanceServiceFacade.updateMonthAttdCloseYN(monthAttdReportList);
	}

	// 연장 심야 승인관리
	@RequestMapping("/findOverNightReportByCondition")
	public List<OverNightReportTo> findOverNightReportByCondition(@RequestBody Map<String, Object> param)
			throws Exception {

//        map.put("deptCode", deptCode);
//        map.put("basicDay", basicDay);
//        map.put("approvalStatus", approvalStatus);

		return attendanceServiceFacade.findOverNightReportByCondition(param);

	}
}
