package com.seoulit.erp.logi.business.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.logi.business.to.CustomerTo;
import com.seoulit.erp.logi.business.to.DeliveryTo;

public interface CustomerRepository extends JpaRepository<CustomerTo, String>{

}
