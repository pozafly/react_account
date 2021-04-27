package com.seoulit.erp.account.slip.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.slip.to.AccountControlDetailTO;
import com.seoulit.erp.account.slip.to.JournalDetailTO;

@Mapper
public interface JournalDAO {
	
	//JournalDetail
	public List<AccountControlDetailTO> getAccountControlDetailList(String accountCode);
	public void insertJournalDetailInfo(JournalDetailTO journalDetailTo);
	public void deleteJournalDetailInfo(JournalDetailTO journalDetailTo);
	public void updateJournalDetailInfo(JournalDetailTO journalDetailTo);
	
	public int getJournalRowCount(String slipNo);
	
}
