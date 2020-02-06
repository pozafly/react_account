package com.seoulit.erp.account.statement.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class TotalTrialBalanceTO extends BaseTo{
	
	
    private String leftDebtorBalance;
    private String leftDebtorSum;
    private String accountName;
    private String rightCreditsSum;
    private String rightCreditsBalance;
    private String gid;
    private String drn;
}
