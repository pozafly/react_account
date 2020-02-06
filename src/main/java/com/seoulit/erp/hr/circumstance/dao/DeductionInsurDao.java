package com.seoulit.erp.hr.circumstance.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.circumstance.to.DeductionTaxTo;
import com.seoulit.erp.hr.circumstance.to.IncomeTaxTo;

@Mapper
public interface DeductionInsurDao {

	public List<DeductionTaxTo> selectDeductionTaxList(String year);
	
	public List<IncomeTaxTo> selectIncomeTaxList(String year);
	
	public void updateDeductionTaxList(DeductionTaxTo deductionTaxTo);
	public void deleteDeductionTaxList(DeductionTaxTo deductionTaxTo);
	public void insertDeductionTaxList(DeductionTaxTo deductionTaxTo);
	
	public void updateIncomeTaxList(IncomeTaxTo incomeTaxTo);
	public void deleteIncomeTaxList(IncomeTaxTo incomeTaxTo);
	public void insertIncomeTaxList(IncomeTaxTo incomeTaxTo);
}

