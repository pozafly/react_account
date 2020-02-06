package com.seoulit.erp.logi.business.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.logi.business.to.EstimateDetailTo;

public interface EstimateDetailRepository extends JpaRepository<EstimateDetailTo, String>{
	
	public List<EstimateDetailTo> findByEstimateNo(String estimateNo);

}
