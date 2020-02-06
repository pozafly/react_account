package com.seoulit.erp.hr.pay.dao;


import com.seoulit.erp.hr.pay.to.SalaryInputTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface PayDao {
	public List<SalaryInputTo> payCalculate(Map<String, Object> vList);
	public List<SalaryInputTo> selectSalaryInputList(Map<String, Object> vList);
}
