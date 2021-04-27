package com.seoulit.erp.logi.business.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.logi.business.to.ContractTo;

public interface ContractRepository extends JpaRepository<ContractTo, String>{
	
	public List<ContractTo> findByContractDateBetween(String fromDate, String toDate);
	
}
