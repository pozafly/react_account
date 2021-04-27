package com.seoulit.erp.account.statement.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.account.statement.service.StatementService;
import com.seoulit.erp.account.statement.to.IncomeStatementTO;

@RestController
@RequestMapping("/account/statement/*")
@CrossOrigin("*")
public class IncomeStatementHandler {

	@Autowired
	private StatementService statementService;

	@GetMapping("/findIncomeStatement")
	public List<IncomeStatementTO> findIncomeStatement(@RequestParam String approvalDate) throws Exception {

		List<IncomeStatementTO> incomeStatementBeanList = statementService.getIncomeStatement(approvalDate);
		return incomeStatementBeanList;
	}

}
