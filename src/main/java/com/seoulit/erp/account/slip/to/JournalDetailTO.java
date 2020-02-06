package com.seoulit.erp.account.slip.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Entity
@Data
@Table(name = "JOURNAL_DETAIL")
public class JournalDetailTO extends BaseTo{

	@Id
	private String journalDetailNo;
	private String journalNo;
	private String accountControlCode; 
	private String description;
	private String accountControlName;	
	
	
}
