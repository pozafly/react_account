package com.seoulit.erp.logi.production.dao;

import com.seoulit.erp.logi.production.to.MaterialCheckTempTo;
import com.seoulit.erp.logi.production.to.WorkInstructionTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;
@Mapper
public interface WorkInstructionDao {

	public List<MaterialCheckTempTo> materialCheckTempList(Map<String, Object> parameters);

	public List<WorkInstructionTo> selectWorkInstructionList();

	public List<WorkInstructionTo> selectWorkInstructionList2();
	
	public List<WorkInstructionTo> selectWorkInstructionList3();
	
	public void updateWorkInstruction(String parameters); 

	public void insertWorkInstruction(WorkInstructionTo WorkInstructionTo);
	
	public void updateWorkInstruction2(String parameters);

	//public void updateWorkInstruction(WorkInstructionTo WorkInstructionTo);

	public void deleteWorkInstruction(WorkInstructionTo WorkInstructionTo);
}