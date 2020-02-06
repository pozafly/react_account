package com.seoulit.erp.hr.attendance.service;

import com.seoulit.erp.hr.attendance.to.*;

import java.util.List;
import java.util.Map;

public interface AttendanceServiceFacade {

	//일근태 정보 가져 오기
	public List<DailyAttdTo> findDailyAttdList(Map<String, String> map);
	// 근태신청한 내용을 추가하는 메서드
	public List<DailyAttdTo> registerDailyAttd(DailyAttdTo dailyAttdTO);
	//일근태 등록,수정,삭제 
	public void batchDailyAttd(List<DailyAttdTo> dailyAttd);
	
	//해당 사원의 연차 신청 정보 얻어 오기 
	public List<DayAnnualTo> findAnnualMgt(Map<String, String> map);
	
	//근태외 신청 리스트 가져 오기
	public List<DailyAttdRestTo> findAttdRestList(Map<String, Object> map);
	
	//근태외 신청 등록,수정,삭제 
	public void batchDailyAttdRest(List<DailyAttdRestTo> dailyAttdRestList);

	// 일근태 승인관리 부분에서 조건에 따라 조회하기 위한 메서드 
	public List<DailyAttdTo> findDailyAttdListByCondition(Map<String, Object> map);
	
	// 근태외 승인관리 부분에서 조건에 따라 조회하기 위한 메서드
	public List<DailyAttdRestTo> findAttdRestListByCondition(Map<String, Object> map);
	
	// 연차 신청 
	public List<DayAnnualTo> addDayAnnual(DayAnnualTo dayAnnualTO);
	
	//연장 심야 승인 저장
	public void batchOverNight(List<OverNightReportTo> overNightReportList);

	//연장심야 신청 찾기
	public List<OverNightReportTo> findOverNightReport(Map<String, String> map);
	
	// 일근태관리테이블에서 기준일에 해당하는 데이터를 생성,조회하는 메서드 
	public List<DailyAttdReportTo> findDailyAttdReport(String basicDate);

	//월근태 미 마감 조회 시 
	public List<DailyAttdReportTo> findUnClosedDailyAttdReport(Map<String, Object> map);
	
	//월근태 계산 하는 부분 
	public List<MonthAttdReportTo> findMonthAttdReport(Map<String, Object> map);
	
	//월근태에서 일근태 미마감 항목 일광 승인시 
	public List<DailyAttdReportTo> batchDailyAttdCloseYN(List<DailyAttdReportTo> dailyAttdReportList);

	// 일근태관리테이블에서 기준일에 해당하는 승인된 데이터를 조회하는 메서드 
	public List<DailyAttdReportTo> findApprovalDailyAttdReport(String basicDate);
	
	/*해당날짜의 일근태를 마감하는 메서드 (마감여부를 Y -> N으로 )(N -> Y)*/
	public void updateDailyAttdCloseYN(List<DailyAttdReportTo> dailyAttdReportList);
	
	// 월근태 마감 내역 조회 
	public List<MonthAttdReportTo> findClosedMonthAttdReport(Map<String, Object> map);
	//월근태 마감 승인 (N -> Y)
	public void updateMonthAttdCloseYN(List<MonthAttdReportTo> monthAttdReportList);
	// 연장 심야 승인관리 
	public List<OverNightReportTo> findOverNightReportByCondition(Map<String, Object> map);
	
	// 연차 승인, 관리부분에서 조건에 따라 조회하는 메서드
	public List<DayAnnualTo> findDayAnnualListByCondition(Map<String, Object> map);
	
	//연차를 일괄적으로 승인처리 하는 메서드 
	public void batchDayAnnual(List<DayAnnualTo> dayAnnualList);
}
