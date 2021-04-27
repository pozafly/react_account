
package com.seoulit.erp.account.accBookMgt.handler;
  
import com.seoulit.erp.account.accBookMgt.service.JournalFormServiceFacade;
import com.seoulit.erp.account.accBookMgt.to.CashJournalTO;
import com.seoulit.erp.account.accBookMgt.to.DetailTrialBalanceTO; 
  
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
  
 public class CashJournalHandler {
  
 @Autowired 
 private JournalFormServiceFacade journalFormServiceFacade;
  
 @GetMapping("/getCashJournal") 
  public List<CashJournalTO> getCashJournal(@RequestParam String fromDate, @RequestParam String toDate){ 
	  
	  System.out.println(fromDate); 
  	
  return journalFormServiceFacade.getCashJournal(fromDate, toDate); } 
  }
 
