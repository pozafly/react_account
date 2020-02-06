package com.seoulit.erp.logi.business.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.business.to.EstimateDetailTo;

@Mapper
public interface EstimateDetailDao {

	public int countRecode(String estimateNo);
	public List<EstimateDetailTo> selectEstimateDetailList();
	public void deleteEstimateDetail(String estimateNo);
	
}
