package com.seoulit.erp.logi.production.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;
import com.seoulit.erp.logi.production.to.MpsTo;

public interface MpsRepository extends JpaRepository<MpsTo, String>{

	public List<MpsTo> findByContractDetailNoBetween(String startDate, String endDate);
}
