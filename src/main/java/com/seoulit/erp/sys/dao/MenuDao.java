package com.seoulit.erp.sys.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.sys.to.MenuTo;

@Mapper
public interface MenuDao {
	
	public List<MenuTo> selectMenuList();
	
}
