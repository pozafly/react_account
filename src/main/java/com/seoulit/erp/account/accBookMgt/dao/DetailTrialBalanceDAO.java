package com.seoulit.erp.account.accBookMgt.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.accBookMgt.to.DetailTrialBalanceTO;
import com.seoulit.erp.account.slip.to.SlipTO;

@Mapper
public interface DetailTrialBalanceDAO {

	public List<DetailTrialBalanceTO> selectDetailTrialBalance(Map<String, String> map);
	
}
