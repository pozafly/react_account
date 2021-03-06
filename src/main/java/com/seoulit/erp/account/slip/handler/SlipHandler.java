package com.seoulit.erp.account.slip.handler;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.account.slip.service.SlipServiceFacade;
import com.seoulit.erp.account.slip.to.SlipTO;

@CrossOrigin("*")
@RestController
@RequestMapping("/account/slip/*")
public class SlipHandler {
	
	@Autowired
	private SlipServiceFacade slipServiceFacade;
	
	@GetMapping("/getSlipList")
	public List<SlipTO> getSlipList(@RequestParam String startDate, 
			@RequestParam String endDate, @RequestParam String slipStatus) {
		
		return slipServiceFacade.getSlipList(startDate, endDate, slipStatus);
	}
	
	@GetMapping("/getSlipRowCount")
	public int getSlipRowCount(@RequestParam String reportingDate) {
		
		return slipServiceFacade.getSlipRowCount(reportingDate);		
	}
	
	@PutMapping("/batchSlipInfo")
	public ArrayList<SlipTO> batchSlipInfo(@RequestBody ArrayList<SlipTO> slipList) {
		
		return slipServiceFacade.batchSlipInfo(slipList);
		
	}
	
	@PutMapping("/updateDifference")
	public void updateDifference(@RequestParam String slipNo) {
		
		slipServiceFacade.updateDifference(slipNo);
		
	}
	
	@PutMapping("/approvalSlip")
	public void approvalSlip(@RequestBody ArrayList<SlipTO> slipList) {
		
		slipServiceFacade.approvalSlip(slipList);
		
	}
	
	
}
