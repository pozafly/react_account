package com.seoulit.erp.logi.business.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.logi.business.to.ContractDetailTo;

public interface ContractDetailRepository extends JpaRepository<ContractDetailTo, String>{
	
	public List<ContractDetailTo> findByContractNo(String contractNo);
	//MPS 화면에서 수주목록 조회!
	public List<ContractDetailTo> findByDueDateOfContractBetween(String startDate, String endDate);

}
