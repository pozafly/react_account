package com.seoulit.erp.logi.production.dao;

import com.seoulit.erp.logi.production.to.PrmTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface PrmDao {

	public List<PrmTo> selectPrmList();

	public void insertPrm(PrmTo PrmTo);

	public void callRegisterPrm(Map<String, String> params);

}
