package com.seoulit.erp.account.slip.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.dao.DataAccessException;

import com.seoulit.erp.account.slip.to.AccountControlDetailTO;
import com.seoulit.erp.account.slip.to.JournalDetailTO;
import com.seoulit.erp.account.slip.to.JournalTO;
import com.seoulit.erp.account.slip.to.SlipTO;


public interface SlipServiceFacade {

	//Slip
	public List<SlipTO> getSlipTotalList(String startDate,String endDate) throws DataAccessException;
	public List<SlipTO> getSlipList(String startDate,String endDate,String slipStatus);
	public int getSlipRowCount(String reportingDate);
	public ArrayList<SlipTO> batchSlipInfo(ArrayList<SlipTO> slipList);
	public void updateDifference(String slipNo);
	public void approvalSlip(ArrayList<SlipTO> slipList);
	
	//Journal
	public List<JournalTO> getJournalListForSlip(String slipNo);
	public ArrayList<JournalTO> batchJournalInfo(ArrayList<JournalTO> journalList);
	public List<JournalTO> getJournalList(String startDate,String endDate);
	public int getJournalRowCount(String slipNo);
	
	//JournalDetail
	public List<JournalDetailTO> getJournalDetailList(String journalNo) throws DataAccessException;
	public List<AccountControlDetailTO> getAccountControlDetailList(String accountCode) throws DataAccessException;
	public void batchJournalDetailInfo(JournalDetailTO journalDetailTO);

	
	//전표번호
	public List<SlipTO> addNewSlipNo(String strDate);
	
}
