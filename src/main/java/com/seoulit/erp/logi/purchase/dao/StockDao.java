package com.seoulit.erp.logi.purchase.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.purchase.to.StockTo;

@Mapper
public interface StockDao {

	//재고정보조회
	public List<StockTo> selectStockList();
	
	//재고정보수정
	public void updateStock(StockTo stockTO);
	
}
