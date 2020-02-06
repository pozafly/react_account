package com.seoulit.erp.account.accBookMgt.service;

import java.util.List;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp.account.accBookMgt.to.CashJournalTO;
import com.seoulit.erp.account.accBookMgt.to.DetailTrialBalanceTO;
import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;



public interface JournalFormServiceFacade {

	
	public List<JournalFormTO> getJournalList(String startDate,String endDate);

	public List<DetailTrialBalanceTO> getDetailTrialBalanceList(String fromDate, String toDate);

	public List<CashJournalTO> getCashJournal(String fromDate, String toDate);

	
	
}
