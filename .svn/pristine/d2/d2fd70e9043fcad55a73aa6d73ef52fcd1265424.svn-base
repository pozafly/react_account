package com.seoulit.erp.hr.pm.service;

import com.seoulit.erp.hr.pm.to.*;

import java.util.HashMap;
import java.util.List;

public interface PMServiceFacade {

	//전체사원조회
	public List<EmployeeTo> findEmployeeList();

	//사원조회
	public EmployeeTo findEmployee(String empCode);

	//사원 추가, 수정, 삭제
//	public void batchEmployeeList(List<EmployeeTo> employeeList);

	//사원 상세정보 조회
	public List<EmpInfoTo> findEmpInfoList();

	//사원의 모든 상세정보 조회
	public EmployeeInfoTo findEmployeeInfoAll();

	//사원상세정보 추가, 수정, 삭제 
	public void batchEmployeeInfoAll(EmployeeInfoTo employeeInfoTo);

	public List<ReportTo> findEmpInfoReport(String empCode);

	public void batchEmpInfoList(List<EmpInfoTo> batchEmpInfo);
	
	
	
	//업데이트 추가
	
	public void empInfoUpdate(List<EmpInfoTo> empInfoSave);
	
	//삭제 추가
	
	public void empInfoDelete(String empCode);
	
	

	//사원 상세정보 조회
	public String findEmpCode();

	// Work Information 리스트 조회
	public List<WorkInfoTo> findWorkInfoAll();

	public List<WorkInfoTo> findWorkInfoCode();

	public void saveImg(EmpInfoTo empInfoTo);
}
