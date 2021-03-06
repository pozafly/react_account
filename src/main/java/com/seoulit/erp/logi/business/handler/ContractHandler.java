package com.seoulit.erp.logi.business.handler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.business.service.ContractServiceFacade;
import com.seoulit.erp.logi.business.to.ContractDetailTo;
import com.seoulit.erp.logi.business.to.ContractTo;
import com.seoulit.erp.logi.business.to.CustomerTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/logi/business/*")
public class ContractHandler {

	@Autowired
	private ContractServiceFacade contractServiceFacade;

	// 수주조회
	@GetMapping("/findContractList")
	public List<ContractTo> findContractList(@RequestParam String fromDate, @RequestParam String toDate) {

		return contractServiceFacade.findContractList(fromDate, toDate);
	}

	// 수주등록
	@PostMapping("/registContract")
	public void registContract(@RequestBody ContractTo contractTo) {

		String estimateNo = contractTo.getEstimateNo();
		contractServiceFacade.registContract(contractTo);
		contractServiceFacade.statusChange(estimateNo);

	}
	
	// 수주가능견적조회
	@GetMapping("/selectEstimateListInContractAvailable")
	public List<EstimateTo> selectEstimateListInContractAvailable() {

		return contractServiceFacade.selectEstimateListInContractAvailable();

	}
	
	// 견적취소(삭제) : 수주페이지에서
	@RequestMapping("/estimateCancel")
	public void estimateCancel(@RequestParam String estimateNo) {
		
		contractServiceFacade.estimateCancel(estimateNo);
	}
	
	// 수주상세조회(수주번호로)
	@GetMapping("/selectEstimateDetail")
	public List<ContractDetailTo> selectContractDetail(@RequestParam String contractNo){
		
		return contractServiceFacade.selectContractDetail(contractNo);
		
	}
	// Mps 화면에서 수주목록 조회
		@GetMapping("/findContractDetailVariableList")
		public List<ContractTo> findContractDetailVariableList(@RequestParam String fromDate, @RequestParam String toDate) {

			return contractServiceFacade.findContractList(fromDate, toDate);
		}

}