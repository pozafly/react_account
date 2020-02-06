package com.seoulit.erp.account.slip.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.account.slip.to.JournalTO;

public interface JournalRepository extends JpaRepository<JournalTO, String>{
	public List<JournalTO> findBySlipNo(String slipNo);
	public List<JournalTO> findBySlipApprovalDateBetween(String startDate, String endDate);
}
