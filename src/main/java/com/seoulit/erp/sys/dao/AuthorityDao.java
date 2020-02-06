package com.seoulit.erp.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.sys.to.AuthorityTo;

@Mapper
public interface AuthorityDao {

	public List<AuthorityTo> selectAuthorityList();
	
	public List<AuthorityTo> selectMenuAuthorityList(String authorityCode);
}

