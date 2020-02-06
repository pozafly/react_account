package com.seoulit.erp.account.accBookMgt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;
import com.seoulit.erp.account.slip.to.JournalTO;
@Repository
public interface JournalFormRepository extends JpaRepository<JournalFormTO, String>{
	
	public List<JournalFormTO> findBySlipApprovalDateBetween(String startDate, String endDate);
}
