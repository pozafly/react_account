package com.seoulit.erp.account.accBookMgt.to;


import com.seoulit.common.to.BaseTo;

import lombok.Data;


@Data
public class DetailTrialBalanceTO extends BaseTo {
	
	
	private int lev;
	private String accountInnerCode;
	private int debitsSum; //HERE
	private int exceptCashDebits;
	private int cashDebits;
	private String accountName;
	private int cashCredits;
	private int exceptCashCredits;
	private int creditsSum;

}
