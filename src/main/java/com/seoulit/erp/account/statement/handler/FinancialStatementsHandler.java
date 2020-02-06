package com.seoulit.erp.account.statement.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.account.statement.service.StatementService;
import com.seoulit.erp.account.statement.to.FinancialStatementsTO;

@RestController
@RequestMapping("/account/statement/*")
@CrossOrigin("*")
public class FinancialStatementsHandler {

	@Autowired
	private StatementService statementService;

	@GetMapping("/findFinancialStatements")
	public List<FinancialStatementsTO> findFinancialStatements(@RequestParam String approvalDate) throws Exception {

		System.out.println(" approvalDate : " + approvalDate);
		List<FinancialStatementsTO> financialStatementsBeanList = statementService.getFinancialStatements(approvalDate);

		return financialStatementsBeanList;

	}
}
