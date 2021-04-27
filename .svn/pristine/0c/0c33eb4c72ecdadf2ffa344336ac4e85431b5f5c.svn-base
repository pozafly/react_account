package com.seoulit.erp.logi.production.handler;

import com.seoulit.erp.logi.production.service.ProductionServiceFacade;
import com.seoulit.erp.logi.production.to.PrmTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/logi/production/*")
public class PrmHandler {

	@Autowired
	private ProductionServiceFacade productionServiceFacade;

	@RequestMapping("/findPrmList")
	public List<PrmTo> findPrmList() throws Exception {
		return productionServiceFacade.findPrmList();
	}

	@RequestMapping("/registPrm")
	public void registPrm(@RequestParam String empCode, @RequestBody List<PrmTo> prmList) throws Exception {
		productionServiceFacade.registPrm(empCode, prmList);
	}
}
