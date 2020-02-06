package com.seoulit.erp.logi.business.handler;

import com.seoulit.erp.logi.business.service.EstimateServiceFacade;
import com.seoulit.erp.logi.business.to.EstimateDetailTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/logi/business/*")
public class EstimateHandler {

	@Autowired
	private EstimateServiceFacade estimateServiceFacade;
	
	
	// ================ Estimate ================
	@GetMapping("/findEstimateList")
	public List<EstimateTo> findEstimateList(@RequestParam String fromDate, @RequestParam String toDate) {
		
		System.out.println("fromDate : " + fromDate);
		System.out.println("toDate : " + toDate);

		return estimateServiceFacade.findEstimateList(fromDate, toDate);

	}
	
	@GetMapping("/createEstimateNo")
	public String createEstimateNo() {
		return estimateServiceFacade.createEstimateNo();
	}
	
	@PutMapping("/registEstimate")
	public void registEstimate(@RequestBody ArrayList<EstimateTo> estimateToList) {
		System.out.println("여기도착했다222~~");
		System.out.println(estimateToList);
		// estimateServiceFacade.registEstimate(estimateTo);
	}

	@DeleteMapping("/deleteEstimateList")
	public void deleteEstimateList(@RequestParam String id) {

		//estimateServiceFacade.deleteEstimateList(id);
		System.out.println("삭제완료");

	}
	
	
	
	// ================ EstimateDetail ================
	@GetMapping("findEstimateDetail")
	public List<EstimateDetailTo> findEstimateDetail(@RequestParam String estimateNo) {
		return estimateServiceFacade.findEstimateDetail(estimateNo);
	}
	
	@PostMapping("/registEstimateDetail")
	public void registEstimateDetail(@RequestBody EstimateDetailTo estimateDetailTo) {
		estimateServiceFacade.registEstimateDetail(estimateDetailTo);
	}
	
	@DeleteMapping("/deleteEstimateDetail")
	public void deleteEstimateDetail(@RequestParam String estimateDetailNo) {
		estimateServiceFacade.deleteEstimateDetail(estimateDetailNo);
	}
	
}
