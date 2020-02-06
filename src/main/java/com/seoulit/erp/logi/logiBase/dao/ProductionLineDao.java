package com.seoulit.erp.logi.logiBase.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.logiBase.to.ProductionLineTo;

@Mapper
public interface ProductionLineDao {

	public List<ProductionLineTo> selectProductionLineList();
	
	public void insertProductionLine(ProductionLineTo productionLineTo);
	public void updateProductionLine(ProductionLineTo productionLineTo);
	public void deleteProductionLine(ProductionLineTo productionLineTo); 
}
