package com.seoulit.erp.logi.purchase.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.purchase.to.WarehousingTo;

@Mapper
public interface WarehousingDao {

	// 입고정보조회
	public List<WarehousingTo> selectWarehousingList();
	
	// 입고정보등록
	public void insertWarehousing(WarehousingTo warehousingTO);
	
	// 입고정보수정
	public void updateWarehousing(WarehousingTo warehousingTO);
	
	// 입고정보삭제
	public void deleteWarehousing(WarehousingTo warehousingTO);
}
