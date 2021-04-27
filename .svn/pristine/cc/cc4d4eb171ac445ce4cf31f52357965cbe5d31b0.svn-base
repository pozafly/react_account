package com.seoulit.erp.logi.purchase.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.purchase.to.ItemTo;

@Mapper
public interface ItemDao {
	
	public List<ItemTo> searchItem(Map<String, Object> itemCode);
	
	//품목조회
	public List<ItemTo> selectItemList();
	
	//품목수정
	public void updateItem(ItemTo itemTO);

	//품목등록
	public void insertItem(ItemTo itemTO);

	//품목삭제
	public void deleteItem(ItemTo itemTO);

	//품목가격조회
	public String selectItemCost(String itemCode);
	
}
