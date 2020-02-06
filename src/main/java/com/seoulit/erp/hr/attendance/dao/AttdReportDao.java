package com.seoulit.erp.hr.attendance.dao;

import com.seoulit.erp.hr.attendance.to.DailyAttdReportTo;
import com.seoulit.erp.hr.attendance.to.MonthAttdReportTo;
import com.seoulit.erp.hr.attendance.to.OverNightReportTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AttdReportDao {

	List<OverNightReportTo> selectOverNightReport(Map<String, String> map);
	
	//연장 심야 승인
	public void insertOverNightReport(OverNightReportTo overNightReportTO);
	
	public void updateApprovalStatus(OverNightReportTo overNightReportTO);
	
	public void deleteOverNightReport(OverNightReportTo overNightReportTO);
	
	public void createDailyAttdReport(Map<String, String> map);
	
	public List<DailyAttdReportTo> selectDailyAttdReportByDate(String basicDate);
	
	public List<DailyAttdReportTo> selectApprovalDailyAttdReport(String basicDate);
	//월근태 미마감 항목조회
	List<DailyAttdReportTo> selectUnClosedDailyAttdReport(Map<String, Object> map);
	//월근태 계산 프로시저
	public Map<String, Object> createMonthAttdReport(Map<String, Object> map);	
	//계산한 항목 호출 
	public List<MonthAttdReportTo> selectDailyAttdReportByYearMonth(Map<String, Object> map);
	//일근태 승인 N->Y 아람언니가 만들엇을듯
	public void updateDailyAttdCloseYN(DailyAttdReportTo attdReportTO);
	// 월근태 마감 내역 조회 
	public List<MonthAttdReportTo> selectClosedMonthAttdReport(Map<String, Object> map);

	void updateMonthAttdCloseYN(Map<String, String> map);
	// 연장 심야 승인관리 
	public List<OverNightReportTo> selectOverNightReportByCondition(Map<String, Object> map);
}
