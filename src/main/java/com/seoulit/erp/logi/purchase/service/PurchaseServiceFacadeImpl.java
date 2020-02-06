package com.seoulit.erp.logi.purchase.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.purchase.dao.BomDao;
import com.seoulit.erp.logi.purchase.dao.ItemDao;
import com.seoulit.erp.logi.purchase.dao.MaterialPaymentDao;
import com.seoulit.erp.logi.purchase.dao.OrderDetailDao;
import com.seoulit.erp.logi.purchase.dao.OrderInfoDao;
import com.seoulit.erp.logi.purchase.dao.StockDao;
import com.seoulit.erp.logi.purchase.dao.WarehousingDao;
import com.seoulit.erp.logi.purchase.to.BomDeployTo;
import com.seoulit.erp.logi.purchase.to.BomTo;
import com.seoulit.erp.logi.purchase.to.ItemTo;
import com.seoulit.erp.logi.purchase.to.MaterialPaymentTo;
import com.seoulit.erp.logi.purchase.to.OrderDetailTo;
import com.seoulit.erp.logi.purchase.to.OrderGatheringTo;
import com.seoulit.erp.logi.purchase.to.OrderInfoTo;
import com.seoulit.erp.logi.purchase.to.StockTo;
import com.seoulit.erp.logi.purchase.to.WarehousingTo;

@Service
public class PurchaseServiceFacadeImpl implements PurchaseServiceFacade {

	@Autowired
	private BomDao bomDao;
	@Autowired
	private ItemDao itemDao;
	@Autowired
	private MaterialPaymentDao materialPaymentDao;
	@Autowired
	private OrderDetailDao orderDetailDao;
	@Autowired
	private OrderInfoDao orderInfoDao;
	@Autowired
	private StockDao stockDao;
	@Autowired
	private WarehousingDao warehousingDao;

	// 재고목록 조회
	@Override
	public List<StockTo> findStockList() {
		return stockDao.selectStockList();
	}

	// 부품재고이력 조회
	@Override
	public List<MaterialPaymentTo> findMaterialPaymentList() {
		return materialPaymentDao.selectMaterialPaymentList();
	}

	// 발주취합
	@Override
	public List<OrderGatheringTo> findOrderGatheringList(String page) {
		return orderDetailDao.selectOrderGatheringList(page);
	}

	// 발주목록 조회
	@Override
	public List<OrderInfoTo> findOrderInfoList() {
		return orderInfoDao.selectOrderInfoList();
	}

	// 발주상세목록 조회
	@Override
	public List<OrderDetailTo> findOrderDetailList() {
		return orderDetailDao.selectOrderDetailList();
	}

	// 발주등록
	@Override
	public void registOrder(List<OrderInfoTo> orderInfoList, List<OrderDetailTo> orderDetailList,
			List<OrderGatheringTo> orderGatheringList) {

		for (OrderInfoTo orderInfoTO : orderInfoList) {
			switch (orderInfoTO.getStatus()) {
			case "insert":
				orderInfoDao.insertOrderInfo(orderInfoTO);
				break;
			case "update":
				orderInfoDao.updateOrderInfo(orderInfoTO);
				break;
			}
		}

		for (OrderDetailTo orderDetailTO : orderDetailList) {
			System.out.println(orderDetailTO.getOrderAmount() + orderDetailTO.getItemName());
			switch (orderDetailTO.getStatus()) {
			case "insert":
				orderDetailDao.insertOrderDetail(orderDetailTO);
				break;
			case "update":
				orderDetailDao.updateOrderDetail(orderDetailTO);
				break;
			}
		}

		// 조건에 맞게 취합한!! 정보이므로 itemcode만 꺼내고 보내서 ON_GOING_PROCESS_STATUS를 y로만 바꿔줍니다.
		// 취합이므로 itemcode가 사실상 유일키 기능을 가지게 되므로 이렇게 수정
//		mrpGatheringTO mrpGatheringTO = null;
//		List<MrpGatheringTO> mrpGatheringList = null;
//		if (orderGatheringList != null) {
//			mrpGatheringList = new List<MrpGatheringTO>();
//			for (OrderGatheringTo orderGatheringTO : orderGatheringList) {
//				mrpGatheringTO = new MrpGatheringTO();
//				String itemCode = orderGatheringTO.getItemCode();
//				mrpGatheringTO.setItemCode(itemCode);
//				mrpGatheringTO.setStatus("update");
//				mrpGatheringList.add(mrpGatheringTO);
//			}
//			
//			mrpApplicationService.batchMrpGathering(mrpGatheringList);
	}

	@Override
	public List<OrderDetailTo> findOrderDetailList(Map<String, Object> logiSlipReq) {

		return orderDetailDao.selectOrderDetailList2(logiSlipReq);
	}

	public List<ItemTo> searchItem(Map<String, Object> itemCode) {

		return itemDao.searchItem(itemCode);
	}

	// 품목조회
	@Override
	public List<ItemTo> findItemList() {
		return itemDao.selectItemList();
	}

	// 품목저장
	@Override
	public void batchItem(List<ItemTo> itemList) {

		for (ItemTo itemTo : itemList) {
			switch (itemTo.getStatus()) {
			case "update":
				itemDao.updateItem(itemTo);
				break;
			case "insert":
				itemDao.insertItem(itemTo);
				break;
			case "delete":
				itemDao.deleteItem(itemTo);
				break;
			}
		}

	}

	// 입고정보조회
	@Override
	public List<WarehousingTo> findWarehousingList() {

		return warehousingDao.selectWarehousingList();
	}

	// BOM목록 조회
	@Override
	public List<BomTo> findBomList() {
		return bomDao.selectBomList();
	}

	// BOM전개 조회
	@Override
	public List<BomDeployTo> findBomDeployList(Map<String, String> deployCondition) {
		return bomDao.selectBomDeployList(deployCondition);
	}

	@Override
	public void registWarehousing(List<OrderInfoTo> orderInfoList, List<OrderDetailTo> orderDetailList,
			List<StockTo> stockList, List<WarehousingTo> warehousingList) {

		if (orderInfoList != null && orderDetailList != null) {
			registOrder(orderInfoList, orderDetailList, null);
		}

		if (stockList != null) {
			for (StockTo stockTO : stockList) {
				stockDao.updateStock(stockTO);
			}
		}

		if (warehousingList != null) {
			for (WarehousingTo warehousingTO : warehousingList) {
				warehousingDao.insertWarehousing(warehousingTO);
			}
		}
	}

	@Override
	public String findItemCost(String itemCode) {
		return itemDao.selectItemCost(itemCode);
	}

	@Override
	public void registMaterialPayment(List<MaterialPaymentTo> materialPaymentList) {
		for (MaterialPaymentTo materialPaymentTO : materialPaymentList) {
			materialPaymentDao.insertMaterialPayment(materialPaymentTO);
		}

	}

	@Override
	public void updateStock(List<StockTo> stockList) {
		for (StockTo stockTO : stockList) {
			stockDao.updateStock(stockTO);
		}
	}

}
