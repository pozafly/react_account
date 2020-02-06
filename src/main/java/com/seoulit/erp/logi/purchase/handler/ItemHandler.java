package com.seoulit.erp.logi.purchase.handler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.purchase.service.PurchaseServiceFacade;
import com.seoulit.erp.logi.purchase.to.ItemTo;

@CrossOrigin("*")
@RestController
@RequestMapping("logi/purchase/*")
public class ItemHandler {

	@Autowired
	private PurchaseServiceFacade purchaseServiceFacade;

	@RequestMapping("searchItem")
	public List<ItemTo> searchList(@RequestBody Map<String, Object> itemCode) {// {itemCode=DK-01}
		// itemCode.put("itemCode", itemCode.get("itemCode").toString().replaceAll("=",
		// ""));

		System.out.println("@@@@:" + itemCode);

		List<ItemTo> list = purchaseServiceFacade.searchItem(itemCode);
		System.out.println(list);
		return list;
	}

	// 품목조회
	@RequestMapping("findItemList")
	public List<ItemTo> findItemList() {
		return purchaseServiceFacade.findItemList();
	}

	// 품목일괄저장
	@RequestMapping("logi/purchase/batchItem")
	public void batchItem(@RequestBody List<ItemTo> itemList) {
		purchaseServiceFacade.batchItem(itemList);
	}

}
