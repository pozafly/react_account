package com.seoulit.erp.hr.circumstance.handler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.PayDeductionItemTo;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/circumstance/*")
public class PayDeductionHandler {

	@Autowired
	CircumstanceServiceFacade circumstanceServiceFacade;

	@RequestMapping("/findPayDeductionList")
	public List<PayDeductionItemTo> findPayDeductionList(@RequestBody Map<String, String> data) {
		return circumstanceServiceFacade.findPayDeductionList(data);
	}

	@RequestMapping("/batchPayDeduction")
	public void batchPayDeduction(@RequestBody List<PayDeductionItemTo> payDeductionItemList) {
		circumstanceServiceFacade.batchPayDeduction(payDeductionItemList);
	}
}
