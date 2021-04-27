package com.seoulit.erp.account.accountTitle.handler;

import com.seoulit.erp.account.accountTitle.service.AccountServiceFacade;
import com.seoulit.erp.account.accountTitle.to.AccountTO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/account/accountTitle/*")
@CrossOrigin("*")
public class AccountHandler {

	@Autowired
	private AccountServiceFacade accountServiceFacade;

	@GetMapping("/findParentAccountList")
	public List<AccountTO> findParentAccountList() throws Exception {
		return accountServiceFacade.findParentAccountList();
	}

	@GetMapping("/findDetailAccountList")
	public List<AccountTO> findDetailAccountList(@RequestParam String code) throws Exception {
		return accountServiceFacade.findDetailAccountList(code);
	}

}
