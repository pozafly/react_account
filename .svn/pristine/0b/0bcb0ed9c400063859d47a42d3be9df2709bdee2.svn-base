package com.seoulit.erp.account.accBookMgt.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.seoulit.erp.account.accBookMgt.to.CashJournalTO;
import com.seoulit.erp.account.accBookMgt.to.DetailTrialBalanceTO;
import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;
import com.seoulit.erp.account.accBookMgt.dao.CashJournalDAO;
import com.seoulit.erp.account.accBookMgt.dao.DetailTrialBalanceDAO;
import com.seoulit.erp.account.accBookMgt.repository.JournalFormRepository;


@Service
public class JournalFormServiceFacadeImpl implements JournalFormServiceFacade{

	@Autowired
	private JournalFormRepository journalFormRepository;

	@Autowired
	private DetailTrialBalanceDAO detailTrialBalanceDAO;
	
	@Autowired
	private CashJournalDAO cashJournalDAO;


	@Override
	public List<JournalFormTO> getJournalList(String startDate, String endDate) {
		
		System.out.println(startDate);
	    return journalFormRepository.findBySlipApprovalDateBetween(startDate, endDate);		 
	}
	
	@Override
	public List<DetailTrialBalanceTO> getDetailTrialBalanceList(String fromDate, String toDate) {
		Map<String, String> map = new HashMap<>();
		map.put("fromDate", fromDate);
		map.put("toDate", toDate);
		return detailTrialBalanceDAO.selectDetailTrialBalance(map);
	}
	
	@Override
	public List<CashJournalTO> getCashJournal(String fromDate, String toDate) {
		Map<String, String> map = new HashMap<>();
		map.put("fromDate", fromDate);
		map.put("toDate", toDate);
		return cashJournalDAO.selectCashJournal(map);
	}

}
