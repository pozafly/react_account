package com.seoulit.erp.hr.circumstance.service;

import com.seoulit.erp.hr.circumstance.to.*;

import java.util.List;
import java.util.Map;

public interface CircumstanceServiceFacade {

	// ------------- AnnualLeave ---------------------
	public List<AnnualLeaveTo> findAnnualLeaveList();

	public void registAnnualLeave(Map<String, String> map);

	public void batchAnnualLeave(AnnualLeaveTo annualLeaveTo);

	// ------------- BaseWorkTime --------------------
	public List<BaseWorkTimeTo> findBaseWorkTimeList();

	public void registBaseWorkTime(BaseWorkTimeTo baseWorkTimeTo);

	public void batchBaseWorkTime(List<BaseWorkTimeTo> baseWorkTimeList);

	// ------------- DeductionInsurance -----------------------------
	public List<DeductionTaxTo> findDeductionTaxList(String year);

	public List<IncomeTaxTo> findIncomeTaxList(String year);

	public void batchDeductionTax(DeductionTaxTo deductionTaxTo);

	public 	void batchIncomeTax(IncomeTaxTo incomeTaxTo);

	// ----------------- Holiday ---------------
	public List<HolidayTo> findHolidayList(String fromDate, String toDate);

	public void batchHoliday(List<HolidayTo> holidayToList);

	// ---------------- PayDeduction -------------
	public List<PayDeductionItemTo> findPayDeductionList(Map<String, String> data);

	public void batchPayDeduction(List<PayDeductionItemTo> payDeductionItemList);

	// ------------- sudang --------------------
	public Map<String, Object> findSudangList();

	public void batchSudangProcess(Map<String, Object> sudangInfoList);

	// ------------- 호봉 관리 --------------------
	public List<PayStepTo> findPayStepList(String positionCode);

	public void batchPayStepList(List<PayStepTo> payStepList);

	// ------------- 급여 상여 지급 일자--------------------
	public List<SalPaymentDateTo> findSalPaymentDateList(String inputedYearMonth);

	public void batchSalPaymentDate(List<SalPaymentDateTo> salPaymentDateList);

	public EmpAnnualDataTo findEmpAnnualData(String empCode);
}
