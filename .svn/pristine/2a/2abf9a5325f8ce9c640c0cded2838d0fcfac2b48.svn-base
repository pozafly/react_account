package com.seoulit.erp.logi.purchase.handler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.purchase.service.PurchaseServiceFacade;
import com.seoulit.erp.logi.purchase.to.BomDeployTo;
import com.seoulit.erp.logi.purchase.to.BomTo;

@RestController
@RequestMapping("logi/purchase/*")
public class BomHandler {

	@Autowired
	private PurchaseServiceFacade purchaseServiceFacade;

	// BOM 목록 조회
	@RequestMapping("findBomList")
	public List<BomTo> findBomList() {
		return purchaseServiceFacade.findBomList();
	}

	// BOM 정전개,역전개 조회
	@RequestMapping("findBomDeployList")
	public List<BomDeployTo> findBomDeployList(@RequestBody Map<String, String> deployCondition) {
		return purchaseServiceFacade.findBomDeployList(deployCondition);
	}

}
