package com.seoulit.erp.hr.pay.service;
/**
 * @Package  com.seoul.erp.common.hr
 * @Class    PayServiceFacade.java
 * @Create
 * @Author
 * @Description
 *
 * @LastUpdated
 *
 */

import com.seoulit.erp.hr.pay.to.SalaryInputTo;

import java.util.List;
import java.util.Map;

public interface PayServiceFacade {

	public List<SalaryInputTo> payCalculate(Map<String, Object> vList);

}
