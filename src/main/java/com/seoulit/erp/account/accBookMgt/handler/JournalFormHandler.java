package com.seoulit.erp.account.accBookMgt.handler;

import com.seoulit.erp.account.accBookMgt.service.JournalFormServiceFacade;
import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/account/accBookMgt/*")
@CrossOrigin("*")
public class JournalFormHandler {

	@Autowired
	private JournalFormServiceFacade journalFormServiceFacade;

	@GetMapping("/getJournalList")
	public List<JournalFormTO> getJournalList(@RequestParam String startDate, @RequestParam String endDate) {
		System.out.println(startDate);
		return journalFormServiceFacade.getJournalList(startDate, endDate);
	} 
}
//http://localhost:8282/account/accBookMgt/getjournalList