package com.seoulit.erp.logi.purchase.dao;

import com.seoulit.erp.logi.purchase.to.BomDeployTo;
import com.seoulit.erp.logi.purchase.to.BomTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface BomDao {

	//BOM 목록 조회
	public List<BomTo> selectBomList();
	
	//BOM 정전개,역전개 조회
	public List<BomDeployTo> selectBomDeployList(Map<String,String> deployCondition);
	
}
