
package com.seoulit.erp.account.accBookMgt.handler;
  
import com.seoulit.erp.account.accBookMgt.service.JournalFormServiceFacade;
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
  
public class DetailTrialBalanceHandler {
  
@Autowired 
private JournalFormServiceFacade journalFormServiceFacade;
  
  @GetMapping("/getDetailTrialBalanceList") 
  public List<DetailTrialBalanceTO> getDetailTrialBalanceList(@RequestParam String fromDate, @RequestParam String toDate) { 
	  
	  System.out.println(fromDate); 
  
  return journalFormServiceFacade.getDetailTrialBalanceList(fromDate, toDate); } 
  }
 
