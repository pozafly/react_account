package com.seoulit.erp.hr.circumstance.handler;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.seoulit.erp.hr.circumstance.to.DeductionInsuranceTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.DeductionTaxTo;
import com.seoulit.erp.hr.circumstance.to.IncomeTaxTo;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/circumstance/*")
public class DeductionInsuranceHandler {

	@Autowired
	CircumstanceServiceFacade circumstanceServiceFacade;

	@RequestMapping("/findDeductionInsuranceList/{year}")
	public Map<String, Object> findDeductionInsuranceList(@PathVariable String year) {
		Map<String, Object> map = new HashMap<>();
		List<DeductionTaxTo> deductionTax = circumstanceServiceFacade.findDeductionTaxList(year);
		List<IncomeTaxTo> incomeTax = circumstanceServiceFacade.findIncomeTaxList(year);
		map.put("DeductionTaxList", deductionTax);
		map.put("IncomeTaxList", incomeTax);
		return map;
	}

	@RequestMapping("/batchDeductionTax")
	// public void batchAllTax(@RequestBody List<DeductionTaxTo> deductionTaxToList,
	// @RequestBody List<IncomeTaxTo> incomeTaxToList) {
	public void batchAllTax(@RequestBody DeductionInsuranceTo data) {
		System.out.println(data.getDeductionTaxTo());
		System.out.println(data.getIncomeTaxTo());

		DeductionTaxTo deductionTaxTo = data.getDeductionTaxTo();
		IncomeTaxTo incomeTaxTo = data.getIncomeTaxTo();

		circumstanceServiceFacade.batchDeductionTax(deductionTaxTo);
		circumstanceServiceFacade.batchIncomeTax(incomeTaxTo);
	}
}
