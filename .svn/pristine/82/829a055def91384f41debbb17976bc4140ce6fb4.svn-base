package com.seoulit.erp.hr.circumstance.dao;

import com.seoulit.erp.hr.circumstance.to.AnnualLeaveTo;
import com.seoulit.erp.hr.circumstance.to.EmpAnnualDataTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface AnnualLeaveDao {

	public List<AnnualLeaveTo> selectAnnualLeaveList();
	public void createAnnualLeave(Map<String, String> map);
	public void updateAnnualLeave(AnnualLeaveTo annualLeaveTo);
	public void deleteAnnualLeave(AnnualLeaveTo annualLeaveTo);
	public void insertAnnualLeave(AnnualLeaveTo annualLeaveTo);
	public EmpAnnualDataTo selectEmpAnnualData(String empCode);
}
