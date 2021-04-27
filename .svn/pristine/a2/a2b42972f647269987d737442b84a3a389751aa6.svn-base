package com.seoulit.erp.hr.pay.service;

import com.seoulit.erp.hr.pay.dao.PayDao;
import com.seoulit.erp.hr.pay.to.SalaryInputTo;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class PayServiceFacadeImpl implements PayServiceFacade {

	private PayDao payDao;

	@Override
	public List<SalaryInputTo> payCalculate(Map<String, Object> vList) {

		payDao.payCalculate(vList);
		return payDao.selectSalaryInputList(vList);// 급여 조회
	}

}
