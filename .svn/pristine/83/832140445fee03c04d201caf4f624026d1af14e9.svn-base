package com.seoulit.erp.logi.business.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.logi.business.to.EstimateTo;

public interface EstimateRepository extends JpaRepository<EstimateTo, String>{

	public List<EstimateTo> findByEstimateDateBetween(String fromDate, String toDate);
	public List<EstimateTo> findByEstimateNo(String estimateNo);
	
}
