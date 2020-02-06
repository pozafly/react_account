package com.seoulit.erp.hr.attendance.dao;

import com.seoulit.erp.hr.attendance.to.DailyAttdRestTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;
import java.util.List;
@Mapper
public interface DailyAttdRestDao {

	public List<DailyAttdRestTo> selectAttdRestList(Map<String, Object> map);
	
	public void insertAttdRestList(DailyAttdRestTo dailyAttdRestTO);
	
	public void updateAttdRestList(DailyAttdRestTo dailyAttdRestTO);
	
	public void deleteAttdRestList(DailyAttdRestTo dailyAttdRestTO);
	
	public List<DailyAttdRestTo> selectAttdRestListByCondition(Map<String, Object> map);
	
}
