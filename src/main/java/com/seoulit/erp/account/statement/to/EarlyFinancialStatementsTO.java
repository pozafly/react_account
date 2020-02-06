package com.seoulit.erp.account.statement.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class EarlyFinancialStatementsTO extends BaseTo{
	
	private String groupCode;
	private String price;

}
