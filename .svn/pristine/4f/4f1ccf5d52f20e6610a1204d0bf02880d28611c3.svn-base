package com.seoulit.erp.account.statement.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.statement.to.EarlyAssetsCountTO;
import com.seoulit.erp.account.statement.to.EarlyFinancialStatementsTO;
import com.seoulit.erp.account.statement.to.EarlyLiabilitiesAndCapitalCountTO;

@Mapper
public interface EarlyFinancialStatementsDAO {
	
	public List<EarlyAssetsCountTO> ComputeAssets();
	public List<EarlyLiabilitiesAndCapitalCountTO> ComputeLiabilitiesAndCapital();
	public List<EarlyFinancialStatementsTO> ComputeEarlyFinancialStatements();

}
