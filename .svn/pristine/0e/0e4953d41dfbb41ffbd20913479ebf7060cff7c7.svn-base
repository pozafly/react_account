package com.seoulit.erp.hr.pm.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.pm.to.EmpInfoTo;

@Mapper
public interface EmpInfoDao {
	
//	public List<EmployeeTO> selectEmployeeList();
	
	public List<EmpInfoTo> selectEmpInfoAll();

	public List<EmpInfoTo> selectEmpInfoList();	
	
    public void updateEmpInfo(EmpInfoTo EmpInfoTo);
    
    public String selectLastEmpCode();

	public void insertEmpinfo(EmpInfoTo EmpInfoTo);

	public void deleteEmpinfo(String empCode);

	public List<EmpInfoTo> selectEmpInfoList(HashMap<String, String> map);

}
