package com.seoulit.erp.logi.business.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.business.to.EstimateTo;

@Mapper
public interface ContractDao {

	public List<EstimateTo> selectEstimateListInContractAvailable();
	public void statusChange(String estimateNo);
	public String createContractNo();
	public void insertNewContractDetail(HashMap<String, String> map);

}