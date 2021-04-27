package com.seoulit.erp.hr.circumstance.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.circumstance.to.HolidayTo;

@Mapper
public interface HolidayDao {

	public List<HolidayTo> selectHolidayList(Map<String, String> map);
	
	public void updateHoliday(HolidayTo holidayTo);
	public void deleteHoliday(HolidayTo holidayTo);
	public void insertHoliday(HolidayTo holidayTo);
}
