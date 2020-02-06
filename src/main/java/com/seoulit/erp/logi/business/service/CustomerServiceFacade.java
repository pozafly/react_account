package com.seoulit.erp.logi.business.service;

import java.util.List;

import com.seoulit.erp.logi.business.to.CustomerTo;
import com.seoulit.erp.logi.business.to.DeliveryTo;

public interface CustomerServiceFacade {
	
	
	public List<CustomerTo> findCustomerList(); //거래처관리

	public void batchCustomer(List<CustomerTo> customerList);

}
