package com.seoulit.erp.account.accountTitle.service;

import java.util.ArrayList;

import com.seoulit.erp.account.accountTitle.to.AccountControlTO;
import com.seoulit.erp.account.accountTitle.to.AccountTO;

public interface AccountServiceFacade {

	public ArrayList<AccountTO> findParentAccountList();
	public ArrayList<AccountTO> findDetailAccountList(String code);
	
}
