package com.seoulit.erp.account.statement.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Component;

import com.seoulit.erp.account.statement.dao.EarlyFinancialStatementsDAO;
import com.seoulit.erp.account.statement.dao.EarlyIncomeStatementDAO;
import com.seoulit.erp.account.statement.dao.FinancialStatementsDAO;
import com.seoulit.erp.account.statement.dao.IncomeStatementDAO;
import com.seoulit.erp.account.statement.dao.TotalTrialBalanceDAO;
import com.seoulit.erp.account.statement.to.EarlyAssetsCountTO;
import com.seoulit.erp.account.statement.to.EarlyFinancialStatementsTO;
import com.seoulit.erp.account.statement.to.EarlyIncomeStatementTO;
import com.seoulit.erp.account.statement.to.EarlyLiabilitiesAndCapitalCountTO;
import com.seoulit.erp.account.statement.to.EarlyrevenuesAndExpenseTO;
import com.seoulit.erp.account.statement.to.FinancialStatementsTO;
import com.seoulit.erp.account.statement.to.IncomeStatementTO;
import com.seoulit.erp.account.statement.to.TotalTrialBalanceTO;

@Component
public class StatementServiceImpl implements StatementService {

	@Autowired
	private TotalTrialBalanceDAO totalTrialBalanceDAO;
	@Autowired
	private FinancialStatementsDAO financialStatementsDAO;
	@Autowired
	private EarlyIncomeStatementDAO earlyIncomeStatementDAO;
	@Autowired
	private IncomeStatementDAO incomeStatementDAO;
	@Autowired
	private EarlyFinancialStatementsDAO earlyFinancialStatementsDAO;
	
	
	@Override
	public List<TotalTrialBalanceTO> getTotalTrialBalanceList(String approveDate) throws DataAccessException {

		Map<String, Object> map = new HashMap<>();
			map.put("approveDate", approveDate);
			
		totalTrialBalanceDAO.selectTotalTrialBalanceList(map);		
		
		List<TotalTrialBalanceTO> TotalTrialBalanceList =(List<TotalTrialBalanceTO>)map.get("result");
		System.out.println(map);
		
		return TotalTrialBalanceList;
	}

	@Override
	public List<FinancialStatementsTO> getFinancialStatements(String approvalDate) throws DataAccessException {
		
		Map<String, Object> map = new HashMap<>();
			map.put("approvalDate", approvalDate);		
		
		financialStatementsDAO.selectFinancialStatements(map);
		
		List<FinancialStatementsTO> FinancialStatementsList =(List<FinancialStatementsTO>)map.get("result");
		
		return FinancialStatementsList;		
	}

	@Override
	public List<EarlyrevenuesAndExpenseTO> ComputerevenuesAndExpense() throws DataAccessException {
		List<EarlyrevenuesAndExpenseTO> EarlyrevenuesAndExpenseList = null;
		EarlyrevenuesAndExpenseList = earlyIncomeStatementDAO.ComputerevenuesAndExpense();
		return EarlyrevenuesAndExpenseList;
	}

	@Override
	public List<EarlyIncomeStatementTO> ComputeIncomeStatement() throws DataAccessException {
		List<EarlyIncomeStatementTO> EarlyIncomeStatementList = null;
		EarlyIncomeStatementList = earlyIncomeStatementDAO.ComputeIncomeStatement();
		return EarlyIncomeStatementList;
	}

	@Override
	public List<IncomeStatementTO> getIncomeStatement(String approvalDate) throws DataAccessException {
		
		Map<String, Object> map = new HashMap<>();
			map.put("approvalDate", approvalDate);		
	
		incomeStatementDAO.selectIncomeStatement(map);	
	
		List<IncomeStatementTO> incomeStatementList =(List<IncomeStatementTO>)map.get("result");

		return incomeStatementList;
	}

	@Override
	public List<EarlyAssetsCountTO> getComputeAssets() throws DataAccessException {
		List<EarlyAssetsCountTO> earlyAccountCountList = null;
		earlyAccountCountList = earlyFinancialStatementsDAO.ComputeAssets();
		return earlyAccountCountList;
	}

	@Override
	public List<EarlyLiabilitiesAndCapitalCountTO> getComputeLiabilitiesAndCapital() throws DataAccessException {
		List<EarlyLiabilitiesAndCapitalCountTO> earlyAccountCountList = null;
		earlyAccountCountList = earlyFinancialStatementsDAO.ComputeLiabilitiesAndCapital();
		return earlyAccountCountList;
	}

	@Override
	public List<EarlyFinancialStatementsTO> getComputeEarlyFinancialStatements() throws DataAccessException {
		List<EarlyFinancialStatementsTO> earlyFinancialStatementsList = null;
		earlyFinancialStatementsList = earlyFinancialStatementsDAO.ComputeEarlyFinancialStatements();
		return earlyFinancialStatementsList;
	}
}
