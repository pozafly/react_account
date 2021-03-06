package com.seoulit.erp.account.statement.service;

import java.util.List;

import com.seoulit.erp.account.statement.to.EarlyAssetsCountTO;
import com.seoulit.erp.account.statement.to.EarlyFinancialStatementsTO;
import com.seoulit.erp.account.statement.to.EarlyIncomeStatementTO;
import com.seoulit.erp.account.statement.to.EarlyLiabilitiesAndCapitalCountTO;
import com.seoulit.erp.account.statement.to.EarlyrevenuesAndExpenseTO;
import com.seoulit.erp.account.statement.to.FinancialStatementsTO;
import com.seoulit.erp.account.statement.to.IncomeStatementTO;
import com.seoulit.erp.account.statement.to.TotalTrialBalanceTO;

public interface StatementService {

	public List<TotalTrialBalanceTO> getTotalTrialBalanceList(String approveDate);

	public List<FinancialStatementsTO> getFinancialStatements(String approveDate);
	

	public List<EarlyrevenuesAndExpenseTO> ComputerevenuesAndExpense();
	public List<EarlyIncomeStatementTO> ComputeIncomeStatement();
	public List<IncomeStatementTO> getIncomeStatement(String approveDate);

	public List<EarlyAssetsCountTO> getComputeAssets();
	public List<EarlyLiabilitiesAndCapitalCountTO> getComputeLiabilitiesAndCapital();
	public List<EarlyFinancialStatementsTO> getComputeEarlyFinancialStatements();
	
}
