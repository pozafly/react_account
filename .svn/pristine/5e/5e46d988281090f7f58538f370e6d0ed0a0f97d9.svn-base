package com.seoulit.erp.account.accountTitle.service;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.account.accountTitle.dao.AccountDao;
import com.seoulit.erp.account.accountTitle.to.AccountControlTO;
import com.seoulit.erp.account.accountTitle.to.AccountTO;

@Service
public class AccountServiceFacadeImpl implements AccountServiceFacade {

	@Autowired
	private AccountDao accountDao;


	@Override
	public ArrayList<AccountTO> findParentAccountList() {
		return accountDao.selectParentAccountList();
	}

	@Override
	public ArrayList<AccountTO> findDetailAccountList(String code) {
		return accountDao.selectDetailAccountList(code);
	}

}
