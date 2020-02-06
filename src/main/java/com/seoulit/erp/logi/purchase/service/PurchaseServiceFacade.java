package com.seoulit.erp.logi.purchase.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp.logi.purchase.to.BomDeployTo;
import com.seoulit.erp.logi.purchase.to.BomTo;
import com.seoulit.erp.logi.purchase.to.ItemTo;
import com.seoulit.erp.logi.purchase.to.MaterialPaymentTo;
import com.seoulit.erp.logi.purchase.to.OrderDetailTo;
import com.seoulit.erp.logi.purchase.to.OrderGatheringTo;
import com.seoulit.erp.logi.purchase.to.OrderInfoTo;
import com.seoulit.erp.logi.purchase.to.StockTo;
import com.seoulit.erp.logi.purchase.to.WarehousingTo;

public interface PurchaseServiceFacade {
	
	public List<ItemTo> searchItem(Map<String, Object> itemCode);
	//재고목록 조회
	public List<StockTo> findStockList();

	//부품재고이력 조회
	public List<MaterialPaymentTo> findMaterialPaymentList();
	
	//발주취합
	public List<OrderGatheringTo> findOrderGatheringList(String page);

	//발주목록 조회
	public List<OrderInfoTo> findOrderInfoList();

	//반주상세 조회
	public List<OrderDetailTo> findOrderDetailList();
	
	//발주등록
	public void registOrder(List<OrderInfoTo> orderInfoList,List<OrderDetailTo> orderDetailList,List<OrderGatheringTo> orderGatheringList);
	
	//품목조회
	public List<ItemTo> findItemList(); 

	//품목저장
	public void batchItem(List<ItemTo> itemList);
	
	public List<WarehousingTo> findWarehousingList();
	
	//BOM목록 조회
	public List<BomTo> findBomList();

	//BOM전개 조회
	public List<BomDeployTo> findBomDeployList(Map<String, String> deployCondition);
	
	//입고정보등록
	public void registWarehousing(List<OrderInfoTo> orderInfoList, List<OrderDetailTo> orderDetailList, List<StockTo> stockList,List<WarehousingTo> warehousingList);
	
	//품목가격조회
	public String findItemCost(String itemCode);

	public List<OrderDetailTo> findOrderDetailList(Map<String, Object> logiSlipReq);

	public void registMaterialPayment(List<MaterialPaymentTo> materialPaymentList);

	public void updateStock(List<StockTo> stockList);
	
}
