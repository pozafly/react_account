package com.seoulit.erp.account.statement.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.statement.to.IncomeStatementTO;

@Mapper
public interface IncomeStatementDAO {

	public List<IncomeStatementTO> selectIncomeStatement(Map<String, Object> map);
}
