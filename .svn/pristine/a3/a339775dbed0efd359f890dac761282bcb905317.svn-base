package com.seoulit.erp.hr.pay.handler;

import com.seoulit.erp.hr.pay.service.PayServiceFacade;
import com.seoulit.erp.hr.pay.to.SalaryInputTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/hr/pay/*")
public class PayHandler {

	/* PayServiceFacade SETTING */
	@Autowired
	private PayServiceFacade payServiceFacade;

	/* 급여를 계산하는 메서드 */
	@RequestMapping("/payCalculateProcess/{paymentDate}/{standardDate}")
	public List<SalaryInputTo> payCalculateProcess(@PathVariable String paymentDate, @PathVariable String standardDate)
			throws Exception {

		Map<String, Object> vList = new HashMap<>();
		vList.put("paymentDate", paymentDate);
		vList.put("standardDate", standardDate);

		return payServiceFacade.payCalculate(vList);

	}

}