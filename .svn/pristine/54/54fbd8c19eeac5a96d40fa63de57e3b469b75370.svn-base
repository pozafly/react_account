package com.seoulit.erp.hr.circumstance.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.circumstance.to.PayDeductionItemTo;

@Mapper
public interface PayDeductionDao {

	public List<PayDeductionItemTo> selectPayDeductionList(Map<String, String> data);
	
	public void insertPayDeduction(PayDeductionItemTo payDeductionItemTo);
	public void updatePayDeduction(PayDeductionItemTo payDeductionItemTo);
	public void deletePayDeduction(PayDeductionItemTo payDeductionItemTo);
}
