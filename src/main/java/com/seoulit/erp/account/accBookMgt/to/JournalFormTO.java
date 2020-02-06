package com.seoulit.erp.account.accBookMgt.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Entity
@Data
@Table(name = "JOURNAL")
public class JournalFormTO extends BaseTo {
	
	@Id
	private String journalNo;
	private String slipNo;
	private String balanceDivision;
	private String accountInnerCode;
	private String accountName;
	private String summaryNumber;
	private String summaryComment;
	private String customerCode;
	private String customerName;
	private String leftDebtorPrice;
	private String rightCreditsPrice;
	private String journalDescription;
	private String slipApprovalDate;
	private String price;	

}
