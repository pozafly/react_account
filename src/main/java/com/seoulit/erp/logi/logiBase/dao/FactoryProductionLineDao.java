package com.seoulit.erp.logi.logiBase.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.logiBase.to.FactoryPLTo;

@Mapper
public interface FactoryProductionLineDao {

	public List<FactoryPLTo> selectFactoryProductionLines(HashMap<String, String> params);
	public void insertFactoryPLs(FactoryPLTo factoryPLTo);
}
