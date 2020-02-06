package com.seoulit.erp.logi.business.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.circumstance.to.BaseWorkTimeTo;
import com.seoulit.erp.logi.business.service.CustomerServiceFacade;

import com.seoulit.erp.logi.business.to.CustomerTo;


@CrossOrigin("*")
@RestController
@RequestMapping("/logi/business/*")
public class CustomerHandler {

	@Autowired
	private CustomerServiceFacade customerServiceFacade;

	@GetMapping("/findCustomerList")
	public List<CustomerTo> findCustomerList() {
		return customerServiceFacade.findCustomerList();
	}
	@PutMapping("/batchCustomer")
	public void batchBaseWorkTime(@RequestBody List<CustomerTo> customerList) {
		customerServiceFacade.batchCustomer(customerList);
	}
}
