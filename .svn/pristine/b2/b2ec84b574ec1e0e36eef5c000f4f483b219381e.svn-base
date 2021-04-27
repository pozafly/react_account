package com.seoulit.erp.logi.purchase.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.purchase.service.PurchaseServiceFacade;
import com.seoulit.erp.logi.purchase.to.OrderDetailTo;
import com.seoulit.erp.logi.purchase.to.OrderGatheringTo;
import com.seoulit.erp.logi.purchase.to.OrderInfoTo;

@RestController
@RequestMapping("logi/purchase/*")
public class OrderHandler {

	@Autowired
	private PurchaseServiceFacade purchaseServiceFacade;

	// 발주취합및조회
	@RequestMapping("findOrderGatheringList")
	public List<OrderGatheringTo> findOrderGatheringList(@RequestBody String page) {
		return purchaseServiceFacade.findOrderGatheringList(page);
	}

	// 발주목록조회
	@RequestMapping("findOrderInfoList")
	public List<OrderInfoTo> findOrderInfoList() {
		return purchaseServiceFacade.findOrderInfoList();
	}

	// 발주상세목록조회
	public List<OrderDetailTo> findOrderDetailList() {
		return purchaseServiceFacade.findOrderDetailList();
	}

	// 발주등록
	@RequestMapping("registerOrder")
	public void registerOrder(@RequestBody List<OrderInfoTo> orderInfoList,
			@RequestBody List<OrderDetailTo> orderDetailList, @RequestBody List<OrderGatheringTo> orderGatheringList) {
		purchaseServiceFacade.registOrder(orderInfoList, orderDetailList, orderGatheringList);
		findOrderInfoList();
		findOrderDetailList();
	}

}
