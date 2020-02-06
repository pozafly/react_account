package com.seoulit.erp.logi.business.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.business.repository.CustomerRepository;
import com.seoulit.erp.logi.business.to.CustomerTo;



@Service
public class CustomerServiceFacadeImpl implements CustomerServiceFacade{
	
	@Autowired
	private CustomerRepository customerRepository;
	
	// ============= 거래처 조회 ==============
	@Override
	public List<CustomerTo> findCustomerList() {
		return customerRepository.findAll();
	}
	// 거래처 저장&삭제
	@Override
	public void batchCustomer(List<CustomerTo> customerList) {
		for (CustomerTo customerTo : customerList) {
			if (customerTo.getStatus().equals("inserted")) {
				customerRepository.save(customerTo);
			} else if (customerTo.getStatus().equals("updated")) {
				customerRepository.save(customerTo);
			} else { 
				customerRepository.delete(customerTo);
				
			}
		}
	}
}

