package com.seoulit.erp.account.statement.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.statement.to.TotalTrialBalanceTO;

@Mapper
public interface TotalTrialBalanceDAO {

	public List<TotalTrialBalanceTO> selectTotalTrialBalanceList(Map<String, Object> map);
}
