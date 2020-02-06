package com.seoulit.erp.account.statement.handler;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.account.statement.service.StatementService;
import com.seoulit.erp.account.statement.to.EarlyAssetsCountTO;
import com.seoulit.erp.account.statement.to.EarlyFinancialStatementsTO;
import com.seoulit.erp.account.statement.to.EarlyLiabilitiesAndCapitalCountTO;

@RestController
@RequestMapping("/account/statement/*")
@CrossOrigin("*")
public class EarlyFinancialStatementsHandler {
	
	/* 
	 * '전기분 재무재표'에 대한 핸들어임
	 * 5차(Xplatform)를 토대로 전기분 재무재표는
	 *  
	 * 1. 자산
	 * 2. 부채 및 자본
	 * 3. 계정별합계 
	 * 
	 * 이 3가지 TO를 반환함.
	 * */
	
	@Autowired
	private StatementService statementService;
	
	@GetMapping("/getComputeEarlyFinancialStatements")
	public HashMap<String, List<?>> getComputeEarlyFinancialStatements() throws Exception{
		
		List<EarlyAssetsCountTO> earlyAssetsCountTO = statementService.getComputeAssets();
		List<EarlyLiabilitiesAndCapitalCountTO> earlyLiabilitiesAndCapitalCountTO = statementService.getComputeLiabilitiesAndCapital();
		List<EarlyFinancialStatementsTO> earlyFinancialStatementsTO = statementService.getComputeEarlyFinancialStatements();
		
		HashMap<String, List<?>> map = new HashMap<>();
		map.put("earlyAssetsCount", earlyAssetsCountTO);
		map.put("earlyLiabilitiesAndCapitalCount", earlyLiabilitiesAndCapitalCountTO);
		map.put("earlyFinancialStatements", earlyFinancialStatementsTO);
		
		return map;
	}
	
}
