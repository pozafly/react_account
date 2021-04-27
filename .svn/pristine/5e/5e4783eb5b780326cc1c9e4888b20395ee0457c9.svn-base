package com.seoulit.erp.hr.attendance.dao;

import com.seoulit.erp.hr.attendance.to.DailyAttdTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.Map;
import java.util.List;

@Mapper
public interface DailyAttdDao {

	//근태 목록 가져오기 
	public List<DailyAttdTo> selectDailyAttdList(Map<String, String> map);
	
	// 일근태 정보  등록
	public void insertDailyAttdList(DailyAttdTo dailyAttdTO);
	
	// 일근태 정보  수정
	public void updateDailyAttdList(DailyAttdTo dailyAttdTO);
	
	// 일근태 정보  삭제
	public void deleteDailyAttdList(DailyAttdTo dailyAttdTO);

	//미승인 일근태 내역 조회 
	public List<DailyAttdTo> selectDailyAttdListByCondition(Map<String, Object> map);
}
