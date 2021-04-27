package com.seoulit.erp.logi.purchase.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.purchase.to.OrderInfoTo;

@Mapper
public interface OrderInfoDao {
	
	//발주목록 조회
	public List<OrderInfoTo> selectOrderInfoList();

	//발주정보등록
	public void insertOrderInfo(OrderInfoTo orderInfoTO);

	//발주정보수정
	public void updateOrderInfo(OrderInfoTo orderInfoTO);
	
}
