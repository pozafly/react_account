package com.seoulit.erp.logi.production.handler;


import com.seoulit.erp.logi.business.service.ContractServiceFacade;
import com.seoulit.erp.logi.business.to.ContractDetailTo;
import com.seoulit.erp.logi.production.service.ProductionServiceFacade;
import com.seoulit.erp.logi.production.to.MpsTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/logi/production/*")
public class MpsHandler {
	@Autowired
	private ProductionServiceFacade productionServiceFacade;
	@Autowired
	private ContractServiceFacade contractServiceFacade;


	//MPS 화면에서 수주목록 조회!
	@GetMapping("/findContractDetailVariableList")
	public List<ContractDetailTo> findContractDetailVariableList(@RequestParam String startDate, @RequestParam String endDate) {
		System.out.println(startDate);
		return contractServiceFacade.selectContractDetail(startDate, endDate);
	} 
	
	@RequestMapping("/registerMps")
	public void registerMps(@RequestBody List<MpsTo> mpsToList,
			@RequestBody List<ContractDetailTo> contractDetailTOList) throws Exception {
		productionServiceFacade.registMps(mpsToList, contractDetailTOList);
	}
}
