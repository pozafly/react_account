package com.seoulit.erp.logi.business.service;

import java.util.List;

import com.seoulit.erp.logi.business.to.EstimateDetailTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

public interface EstimateServiceFacade {

	// ================ Estimate ================
	public List<EstimateTo> findEstimateList(String fromDate, String toDate);
	public void registEstimate(EstimateTo estimateTo);
	public String createEstimateNo();
	public void estimateCancel(String estimateNo);
	public void deleteEstimateList(String id);
	
	// ================ EstimateDetail ================
	public List<EstimateDetailTo> findEstimateDetail(String estimateNo);
	public void registEstimateDetail(EstimateDetailTo estimateDetailTo);
	public void deleteEstimateDetail(String estimateDetailNo);
	
}
