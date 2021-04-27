package com.seoulit.erp.account.statement.handler;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.account.statement.service.StatementService;
import com.seoulit.erp.account.statement.to.EarlyIncomeStatementTO;
import com.seoulit.erp.account.statement.to.EarlyrevenuesAndExpenseTO;

@RestController
@RequestMapping("/account/statement/*")
@CrossOrigin("*")
public class EarlyIncomeStatementHandler {
	
	/* 
	 * '전기분 손익계산서'에 대한 핸들어임
	 * 5차(Xplatform)를 토대로 전기분 재무재표는
	 *  
	 * 1. 계정별 합계
	 * 2. 전기분 손익계산서
	 * 
	 * 이 2가지 TO를 반환함.
	 * */
	
	@Autowired
	private StatementService statementService;
	
	@GetMapping("/getComputeEarlyIncomeStatement")
	public HashMap<String, List<?>> getComputeEarlyIncomeStatement() throws Exception{
		
		List<EarlyrevenuesAndExpenseTO> earlyrevenuesAndExpenseTO = statementService.ComputerevenuesAndExpense();
		List<EarlyIncomeStatementTO> earlyIncomeStatementTO = statementService.ComputeIncomeStatement();
		
		HashMap<String, List<?>> map = new HashMap<>();
		map.put("earlyrevenuesAndExpense", earlyrevenuesAndExpenseTO);
		map.put("earlyIncomeStatement", earlyIncomeStatementTO);

		return map;
		
	}

}
