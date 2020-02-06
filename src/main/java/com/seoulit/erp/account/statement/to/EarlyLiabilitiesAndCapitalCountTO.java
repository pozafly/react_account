package com.seoulit.erp.account.statement.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class EarlyLiabilitiesAndCapitalCountTO extends BaseTo{
	
	private String groupCode;
	private String accountInnerCode;
	private String accountName;
	private String price;


}
