package com.seoulit.erp.logi.purchase.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.purchase.to.OrderDetailTo;
import com.seoulit.erp.logi.purchase.to.OrderGatheringTo;

@Mapper
public interface OrderDetailDao {

	//발주취합
	public List<OrderGatheringTo> selectOrderGatheringList(String page);

	//발주상세목록 조회
	public List<OrderDetailTo> selectOrderDetailList();
	public List<OrderDetailTo> selectOrderDetailList2(Map<String, Object> logiSlipReq);

	//발주상세등록
	public void insertOrderDetail(OrderDetailTo orderDetailTO);

	//발주상세수정
	public void updateOrderDetail(OrderDetailTo orderDetailTO);

}
