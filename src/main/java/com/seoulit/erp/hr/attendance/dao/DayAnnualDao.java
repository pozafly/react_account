package com.seoulit.erp.hr.attendance.dao;

import com.seoulit.erp.hr.attendance.to.DayAnnualTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;
import java.util.List;

@Mapper
public interface DayAnnualDao {
	
	public List<DayAnnualTo> selectAnnualMgt(Map<String, String> map);
	
	public void insertDayAnnual(DayAnnualTo dayAnnualTO);
	
	public void updateDayAnnual(DayAnnualTo dayAnnualTO);
	
	public void deleteDayAnnual(DayAnnualTo dayAnnualTO);
	
	public List<DayAnnualTo> selectDayAnnualListByCondition(Map<String, Object> map);
}
