package com.seoulit.erp.logi.logiBase.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.logiBase.to.FactoryTo;

@Mapper
public interface FactoryDao {

	public List<FactoryTo> selectFactoryList(HashMap<String, String> param);
	public void insertFactory(FactoryTo factoryTo);
}
