package com.seoulit.erp.hr.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.pm.to.SalInfoTo;

@Mapper
public interface SalInfoDao {
	
	public List<SalInfoTo> selectSalInfoAll();

	public void updateSalInfo(SalInfoTo salInfoTO);
}
