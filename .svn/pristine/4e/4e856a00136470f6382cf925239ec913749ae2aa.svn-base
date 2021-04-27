package com.seoulit.erp.logi.logiBase.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.logiBase.service.LogiBaseServiceFacade;
import com.seoulit.erp.logi.logiBase.to.ProductionLineTo;

@RestController
@RequestMapping("/logi/logiBase/*")
public class ProductionLineController {

	@Autowired
	LogiBaseServiceFacade logiBaseServiceFacade;

	@RequestMapping("/findProductionLineList")
	public List<ProductionLineTo> findProductionLineList() {
		return logiBaseServiceFacade.findProductionLineList();
	}

	@RequestMapping("/batchProductionLine")
	public void batchProductionLine(@RequestBody List<ProductionLineTo> productionLineList) {
		logiBaseServiceFacade.batchProductionLine(productionLineList);
	}
}