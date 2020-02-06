package com.seoulit.erp.hr.circumstance.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.circumstance.to.BaseWorkTimeTo;

@Mapper
public interface BaseWorkTimeDao {

	public List<BaseWorkTimeTo> selectBaseWorkTimeList();
	
	public void insertBaseWorkTime(BaseWorkTimeTo baseWorkTimeTo);
	
	public void updateBaseWorkTime(BaseWorkTimeTo baseWorkTimeTo);
	
	public void deleteBaseWorkTime(BaseWorkTimeTo baseWorkTimeTo);
}
