package com.seoulit.erp.hr.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.pm.to.EmployeeTo;

@Mapper
public interface EmployeeDao {

	public List<EmployeeTo> selectEmployeeList();

	public EmployeeTo selectEmployee(String empCode);

	public void insertEmployee(EmployeeTo employee);

	public void updateEmployee(EmployeeTo employee);

	public void deleteEmployee(EmployeeTo employee);
}
