package com.seoulit.erp.logi.purchase.handler;

import com.seoulit.erp.logi.purchase.service.PurchaseServiceFacade;
import com.seoulit.erp.logi.purchase.to.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("logi/purchase/*")
public class StockHandler {

	@Autowired
	PurchaseServiceFacade purchaseServiceFacade;

	// 재고목록조회
	@RequestMapping("findStockList")
	public List<StockTo> findStockList() {
		return purchaseServiceFacade.findStockList();
	}

	// 부품재고이력조회
	@RequestMapping("findMaterialPaymentList")
	public List<MaterialPaymentTo> findMaterialPaymentList() {
		return purchaseServiceFacade.findMaterialPaymentList();
	}

	// 입고조회
	@RequestMapping("findWarehousingList")
	public List<WarehousingTo> findWarehousingList() {
		return purchaseServiceFacade.findWarehousingList();
	}

	// 입고등록
	@RequestMapping("registWarehousing")
	public void registWarehousing(@RequestBody List<OrderInfoTo> orderInfoList,
			@RequestBody List<OrderDetailTo> orderDetailList, @RequestBody List<StockTo> stockList,
			@RequestBody List<WarehousingTo> warehousingList) {

		purchaseServiceFacade.registWarehousing(orderInfoList, orderDetailList, stockList, warehousingList);

		findStockList();
		findWarehousingList();
	}

}
