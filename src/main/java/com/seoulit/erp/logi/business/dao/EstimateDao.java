package com.seoulit.erp.logi.business.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.business.to.EstimateDetailTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

@Mapper
public interface EstimateDao {

	public String createEstimateNo();
	public void deleteEstimate(String estimateNo);
	
}
