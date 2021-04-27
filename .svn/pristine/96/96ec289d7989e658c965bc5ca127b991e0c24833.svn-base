package com.seoulit.erp.hr.circumstance.service;

import com.seoulit.erp.hr.circumstance.dao.*;
import com.seoulit.erp.hr.circumstance.to.*;
import com.seoulit.erp.sys.service.BaseServiceFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CircumstanceServiceFacadeImpl implements CircumstanceServiceFacade {

	@Autowired
	AnnualLeaveDao annualLeaveDao;
	@Autowired
	BaseWorkTimeDao baseWorkTimeDao;
	@Autowired
	DeductionInsurDao deductionInsurDao;
	@Autowired
	EtcSudangDao etcSudangDao;
	@Autowired
	HolidayDao holidayDao;
	@Autowired
	OvertimeSudangDao overtimeSudangDao;
	@Autowired
	PayDeductionDao payDeductionDao;
	@Autowired
	PayStepDao payStepDao;
	@Autowired
	SalPaymentDateDao salPaymentDateDao;
	@Autowired
	BaseServiceFacade baseServiceFacade;

	// ================= AnnualLeave ====================
	@Override
	public List<AnnualLeaveTo> findAnnualLeaveList() {
		return annualLeaveDao.selectAnnualLeaveList();
	}

	@Override
	public void registAnnualLeave(Map<String, String> map) {
		annualLeaveDao.createAnnualLeave(map);
	}

	@Override
	public void batchAnnualLeave(AnnualLeaveTo annualLeaveTo) {
		if (annualLeaveTo.getStatus().equals("updated")) {
			annualLeaveDao.updateAnnualLeave(annualLeaveTo);
		} else if (annualLeaveTo.getStatus().equals("deleted")) {

			annualLeaveDao.deleteAnnualLeave(annualLeaveTo);
		} else {
			annualLeaveDao.insertAnnualLeave(annualLeaveTo);
		}
	}

	// ----------------- BaseWorkTime -------------------------
	@Override
	public List<BaseWorkTimeTo> findBaseWorkTimeList() {
		return baseWorkTimeDao.selectBaseWorkTimeList();
	}

	@Override
	public void registBaseWorkTime(BaseWorkTimeTo baseWorkTimeTo) {
		baseWorkTimeDao.insertBaseWorkTime(baseWorkTimeTo);
	}

	@Override
	public void batchBaseWorkTime(List<BaseWorkTimeTo> baseWorkTimeList) {

		for (BaseWorkTimeTo baseWorkTimeTo : baseWorkTimeList) {
			if (baseWorkTimeTo.getStatus().equals("updated")) {
				baseWorkTimeDao.updateBaseWorkTime(baseWorkTimeTo);
			} else {
				baseWorkTimeDao.deleteBaseWorkTime(baseWorkTimeTo);
			}
		}
	}

	// ----------------- tax ---------------------------------

	@Override
	public List<DeductionTaxTo> findDeductionTaxList(String year) {
		return deductionInsurDao.selectDeductionTaxList(year);
	}

	@Override
	public List<IncomeTaxTo> findIncomeTaxList(String year) {
		return deductionInsurDao.selectIncomeTaxList(year);
	}

	@Override
	public void batchDeductionTax(DeductionTaxTo deductionTaxTo) {
//		for(DeductionTaxTo deductionTaxTo : deductionTaxToList) {
//			//업데이트는 쿼리 없어용~~
//			if(deductionTaxTo.getStatus().equals("updated")) {
//				deductionInsurDao.updateDeductionTaxList(deductionTaxTo);
//			}else if(deductionTaxTo.getStatus().equals("deleted")) {
//				deductionInsurDao.deleteDeductionTaxList(deductionTaxTo);
//			}else {
//				deductionInsurDao.insertDeductionTaxList(deductionTaxTo);
//			}
//		}
		if (deductionTaxTo.getStatus().equals("inserted")) {
			deductionInsurDao.insertDeductionTaxList(deductionTaxTo);
		}
	}

	@Override
	public void batchIncomeTax(IncomeTaxTo incomeTaxTo) {
//		for(IncomeTaxTo incomeTaxTo : incomeTaxToList) {
//			//업데이트는 쿼리 없어용~~
//			if(incomeTaxTo.getStatus().equals("updated")) {
//				deductionInsurDao.updateIncomeTaxList(incomeTaxTo);
//			}else if(incomeTaxTo.getStatus().equals("deleted")) {
//				deductionInsurDao.deleteIncomeTaxList(incomeTaxTo);
//			}else {
//				deductionInsurDao.insertIncomeTaxList(incomeTaxTo);
//			}
//		}
		if (incomeTaxTo.getStatus().equals("inserted")) {
			deductionInsurDao.insertIncomeTaxList(incomeTaxTo);
		}
	}

	// ------------------ holiday -------------------------------
	@Override
	public List<HolidayTo> findHolidayList(String fromDate, String toDate) {
		Map<String, String> map = new HashMap<>();
		map.put("fromDate", fromDate);
		map.put("toDate", toDate);
		return holidayDao.selectHolidayList(map);
	}

	@Override
	public void batchHoliday(List<HolidayTo> holidayToList) {
		for (HolidayTo holidayTo : holidayToList) {
			if (holidayTo.getStatus().equals("updated")) {
				holidayDao.updateHoliday(holidayTo);
			} else if (holidayTo.getStatus().equals("deleted")) {
				holidayDao.deleteHoliday(holidayTo);
			} else {
				holidayDao.insertHoliday(holidayTo);
			}
		}
	}

	// ----------------------- PayDeduction -------------------
	@Override
	public List<PayDeductionItemTo> findPayDeductionList(Map<String, String> map) {
		return payDeductionDao.selectPayDeductionList(map);
	}

	@Override
	public void batchPayDeduction(List<PayDeductionItemTo> payDeductionItemList) {
		for (PayDeductionItemTo payDeductionItemTo : payDeductionItemList) {
			if (payDeductionItemTo.getStatus().equals("inserted")) {
				payDeductionDao.insertPayDeduction(payDeductionItemTo);
			} else if (payDeductionItemTo.getStatus().equals("updated")) {
				payDeductionDao.updatePayDeduction(payDeductionItemTo);
			} else {
				payDeductionDao.deletePayDeduction(payDeductionItemTo);
			}
		}
	}

	// ----------------- Sudang -------------------------
	@Override
	public Map<String, Object> findSudangList() {
		Map<String, Object> sudangInfoList = new HashMap<>();
		List<OvertimeSudangTo> overtimeSudangList = overtimeSudangDao.selectOvertimeSudangList();
		List<EtcSudangTo> etcSudangList = etcSudangDao.selectEtcSudangList();
		sudangInfoList.put("overtimeSudangList", overtimeSudangList);
		sudangInfoList.put("etcSudangList", etcSudangList);
		return sudangInfoList;
	}

	@Override
	public void batchSudangProcess(Map<String, Object> sudangInfoList) {
		for (String key : sudangInfoList.keySet()) {
			if (key.equals("overtimeSudangList")) {
				List<OvertimeSudangTo> overtimeSudangList = (List<OvertimeSudangTo>) sudangInfoList.get(key);

				for (OvertimeSudangTo overtimeSudangTo : overtimeSudangList) {
					Map<String, Object> codeColumn = new HashMap<>();
					codeColumn.put("divisionCodeNo", "HR26");
					codeColumn.put("detailCode", overtimeSudangTo.getOvertimeSalCode());
					codeColumn.put("detailCodeName", overtimeSudangTo.getOvertimeSalName());
					switch (overtimeSudangTo.getStatus()) {
					case "inserted":
						overtimeSudangDao.insertOvertimeSudang(overtimeSudangTo);
						baseServiceFacade.batchDetailCodeProcess(overtimeSudangTo, codeColumn);
						break;
					case "updated":
						overtimeSudangDao.updateOvertimeSudang(overtimeSudangTo);
						baseServiceFacade.batchDetailCodeProcess(overtimeSudangTo, codeColumn);
						break;
					case "deleted":
						overtimeSudangDao.deleteOvertimeSudang(overtimeSudangTo);
						baseServiceFacade.batchDetailCodeProcess(overtimeSudangTo, codeColumn);
						break;
					}
				}

			} else if (key.equals("etcSudangList")) {
				List<EtcSudangTo> etcSudangList = (List<EtcSudangTo>) sudangInfoList.get(key);
				for (EtcSudangTo etcSudangTo : etcSudangList) {
					Map<String, Object> codeColumn = new HashMap<>();
					codeColumn.put("divisionCodeNo", "HR27");
					codeColumn.put("detailCode", etcSudangTo.getEtcSalCode());
					codeColumn.put("detailCodeName", etcSudangTo.getEtcSalName());
					switch (etcSudangTo.getStatus()) {
					case "inserted":
						etcSudangDao.insertEtcSudang(etcSudangTo);
						baseServiceFacade.batchDetailCodeProcess(etcSudangTo, codeColumn);
						break;
					case "updated":
						etcSudangDao.updateEtcSudang(etcSudangTo);
						baseServiceFacade.batchDetailCodeProcess(etcSudangTo, codeColumn);
						break;
					case "deleted":
						etcSudangDao.deleteEtcSudang(etcSudangTo);
						baseServiceFacade.batchDetailCodeProcess(etcSudangTo, codeColumn);
						break;
					}
				}
			}
		}
	}

	// -----------------payStepDao
	@Override
	public List<PayStepTo> findPayStepList(String positionCode) {
		return payStepDao.selectPayStepList(positionCode);
	}

	@Override
	public void batchPayStepList(List<PayStepTo> payStepList) {
		for (PayStepTo payStepTo : payStepList) {
			System.out.println(payStepTo.getStatus());
			switch (payStepTo.getStatus()) {

			case "inserted":
				payStepDao.insertPayStep(payStepTo);
				break;
			case "updated":
				payStepDao.updatePayStep(payStepTo);
				break;
			case "deleted":
				payStepDao.deletePayStep(payStepTo);
				break;

			}
		}
	}

	// -----------------salpaymentDao

	@Override
	public List<SalPaymentDateTo> findSalPaymentDateList(String inputedYearMonth) {
		return salPaymentDateDao.selectSalPaymentDateList(inputedYearMonth);
	}

	@Override
	public void batchSalPaymentDate(List<SalPaymentDateTo> salPaymentDateList) {
		for (SalPaymentDateTo salPaymentDateTo : salPaymentDateList) {
			switch (salPaymentDateTo.getStatus()) {
			case "inserted":
				salPaymentDateDao.insertSalPaymentDate(salPaymentDateTo);
				break;
			case "updated":
				salPaymentDateDao.updateSalPaymentDate(salPaymentDateTo);
				break;
			case "deleted":
				salPaymentDateDao.deleteSalPaymentDate(salPaymentDateTo);
				break;
			}
		}
	}

	@Override
	public EmpAnnualDataTo findEmpAnnualData(String empCode) {
		return annualLeaveDao.selectEmpAnnualData(empCode);
	}

}
