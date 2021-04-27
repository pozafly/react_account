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
import com.seoulit.erp.account.slip.to.AccountControlDetailTO;
import com.seoulit.erp.account.slip.to.JournalDetailTO;
import com.seoulit.erp.account.slip.to.JournalTO;

@CrossOrigin("*")
@RestController
@RequestMapping("/account/slip/*")
public class JournalHandler {
	
	@Autowired
	private SlipServiceFacade slipServiceFacade;
	
	@GetMapping("/getJournalListForSlip")
	public List<JournalTO> getJournalListForSlip(@RequestParam String slipNo) {
		
		return slipServiceFacade.getJournalListForSlip(slipNo);
	}
	
	@GetMapping("/getJournalRowCount")
	public int getJournalRowCount(@RequestParam String slipNo) {
		
		return slipServiceFacade.getJournalRowCount(slipNo);
		
	}
	
	@PutMapping("/batchJournalInfo")
	public ArrayList<JournalTO> batchJournalInfo(@RequestBody ArrayList<JournalTO> journalList) {
		System.out.println(journalList);
		return slipServiceFacade.batchJournalInfo(journalList);		
	}
	
	@GetMapping("/getAccountControlDetailList")
	public List<AccountControlDetailTO> getAccountControlDetailList(@RequestParam String accountCode) {
		
		return slipServiceFacade.getAccountControlDetailList(accountCode);
	}
	
	@GetMapping("/getJournalDetailList")
	public List<JournalDetailTO> getJournalDetailList(@RequestParam String journalNo) {
		
		return slipServiceFacade.getJournalDetailList(journalNo);
	}
	

	
	@PostMapping("/batchJournalDetailList")
	public void batchJournalDetailList(@RequestBody JournalDetailTO journalDetailTO) {
		
		slipServiceFacade.batchJournalDetailInfo(journalDetailTO);
		
	}
	
}
