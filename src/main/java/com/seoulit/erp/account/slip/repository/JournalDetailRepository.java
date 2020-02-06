package com.seoulit.erp.account.slip.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.account.slip.to.JournalDetailTO;

public interface JournalDetailRepository extends JpaRepository<JournalDetailTO, Integer>{
	
	public List<JournalDetailTO> findByJournalNo(String journalNo);
	
}
