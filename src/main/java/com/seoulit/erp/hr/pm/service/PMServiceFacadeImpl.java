package com.seoulit.erp.hr.pm.service;

import com.seoulit.erp.hr.pm.dao.*;
import com.seoulit.erp.hr.pm.to.*;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;

@Service
public class PMServiceFacadeImpl implements PMServiceFacade {

	@Autowired
	private EmployeeDao employeeDao;
	@Autowired
	private EmpInfoDao empInfoDao;
	@Autowired
	private WorkInfoDao workInfoDao;
	@Autowired
	private FamilyInfoDao familyInfoDao;
	@Autowired
	private LicenseInfoDao licenseInfoDao;
	@Autowired
	private EducationInfoDao educationInfoDao;
//	@Autowired
//	private SalInfoDao salInfoDao;
	@Autowired
	private ReportDao reportDao;

	@Override
	public List<EmployeeTo> findEmployeeList() {
		// TODO Auto-generated method stub
		return employeeDao.selectEmployeeList();
	}

//	@Override
//	public void batchEmployeeList(List<EmployeeTo> employeeList) {
//		// TODO Auto-generated method stub
//		for (EmployeeTo EmployeeTo : employeeList) {
//			System.out.println("&&&&&&&&&& EmployeeTo.getStatus() :  " + EmployeeTo.getStatus());
//			switch (EmployeeTo.getStatus()) {
//
//			case "inserted":
//				employeeDao.insertEmployee(EmployeeTo);
//				break;
//			case "updated":
//				employeeDao.updateEmployee(EmployeeTo);
//				break;
//			case "deleted ":
//				employeeDao.deleteEmployee(EmployeeTo);
//				break;
//
//			}
//		}
//	}

	@Override
	public EmployeeTo findEmployee(String empCode) {
		// TODO Auto-generated method stub
		return employeeDao.selectEmployee(empCode);
	}

	@Override
	/* 사원의 모든 상세정보를 가지고 오는 메서드 */
	public EmployeeInfoTo findEmployeeInfoAll() {
		EmployeeInfoTo EmployeeInfoTo = new EmployeeInfoTo();
		EmployeeInfoTo.setEmpInfoList(empInfoDao.selectEmpInfoAll());
		EmployeeInfoTo.setWorkInfoList(workInfoDao.selectWorkInfoAll());
		EmployeeInfoTo.setFamilyInfoList(familyInfoDao.selectFamilyInfoAll());
		EmployeeInfoTo.setLicenseInfoList(licenseInfoDao.selectLicenseInfoAll());
		EmployeeInfoTo.setEducationInfoList(educationInfoDao.selectEducationInfoAll());
		// EmployeeInfoTo.setSalInfoList(salInfoDao.selectSalInfoAll());

		return EmployeeInfoTo;
	}

	/* 사원관련정보를 일괄처리하는 메서드 */
	@Override
	public void batchEmployeeInfoAll(EmployeeInfoTo EmployeeInfoTo) {
		// 사원상세정보 있으면 여기 실행(수정된것) [사원코드랑 연결 되어 있는 구조는 insert,delete가 안됨 update 뿐임..
		// insert는 기본 사원정보 넣을 때 실시 삭제는 내가 막아 놨음]
		for (EmpInfoTo EmpInfoTo : EmployeeInfoTo.getEmpInfoList()) {
			switch (EmpInfoTo.getStatus()) {
			case "inserted":
				empInfoDao.insertEmpinfo(EmpInfoTo);
				break;
			case "updated":
				empInfoDao.updateEmpInfo(EmpInfoTo);
				break;
			/*
			 * case "deleted": empInfoDao.deleteEmpinfo(EmpInfoTo); break;
			 */
			}
		}
		for (WorkInfoTo WorkInfoTo : EmployeeInfoTo.getWorkInfoList()) {
			workInfoDao.updateWorkInfo(WorkInfoTo);
		}

//		for(SalInfoTO salInfoTO:EmployeeInfoTo.getSalInfoList()){
//			salInfoDao.updateSalInfo(salInfoTO);
//		}

		for (FamilyInfoTo familyInfoTO : EmployeeInfoTo.getFamilyInfoList()) {
			switch (familyInfoTO.getStatus()) {
			case "inserted":
				familyInfoDao.insertFamilyInfo(familyInfoTO);
				break;
			case "updated":
				familyInfoDao.updateFamilyInfo(familyInfoTO);
				break;
			case "deleted":
				familyInfoDao.deleteFamilyInfo(familyInfoTO);
				break;
			}
		}

		for (LicenseInfoTo licenseInfoTO : EmployeeInfoTo.getLicenseInfoList()) {
			switch (licenseInfoTO.getStatus()) {
			case "inserted":
				licenseInfoDao.insertLicenseInfo(licenseInfoTO);
				break;
			case "updated":
				licenseInfoDao.updateLicenseInfo(licenseInfoTO);
				break;
			case "deleted":
				licenseInfoDao.deleteLicenseInfo(licenseInfoTO);
				break;
			}
		}

		for (EducationInfoTo educationInfoTO : EmployeeInfoTo.getEducationInfoList()) {
			switch (educationInfoTO.getStatus()) {
			case "inserted":
				educationInfoDao.insertEducationInfo(educationInfoTO);
				break;
			case "updated":
				educationInfoDao.updateEducationInfo(educationInfoTO);
				break;
			case "deleted":
				educationInfoDao.deleteEducationInfo(educationInfoTO);
				break;
			}
		}

	}

	@Override
	public List<ReportTo> findEmpInfoReport(String empCode) {
		return reportDao.selectReport(empCode);
	}

	@Override
	public List<EmpInfoTo> findEmpInfoList() {
		// TODO Auto-generated method stub
		return empInfoDao.selectEmpInfoAll();
	}

	@Override
	public void batchEmpInfoList(List<EmpInfoTo> batchEmpInfo) {
		// TODO Auto-generated method stub

		for (EmpInfoTo empinfo : batchEmpInfo) {

			switch (empinfo.getStatus()) {

			case "inserted":
				empInfoDao.insertEmpinfo(empinfo);
				break;
			case "updated":
				empInfoDao.updateEmpInfo(empinfo);
				break;
			/*
			 * case "deleted": empInfoDao.deleteEmpinfo(empinfo);
			 */

			}
		}
	}

	// 업데이트 메서드
	public void empInfoUpdate(List<EmpInfoTo> empInfoSave) {
		// TODO Auto-generated method stub

		for (EmpInfoTo empinfoTo : empInfoSave) {

			empInfoDao.updateEmpInfo(empinfoTo);
		}
	}

	// 삭제 메서드
	public void empInfoDelete(String empCode) {
		// TODO Auto-generated method stub

		empInfoDao.deleteEmpinfo(empCode);

	}

	@Override
	public String findEmpCode() {
		// TODO Auto-generated method stub
		return empInfoDao.selectLastEmpCode();
	}

	// Work Information 리스트 조회
	@Override
	public List<WorkInfoTo> findWorkInfoAll() {
		// TODO Auto-generated method stub
		return workInfoDao.selectWorkInfoAll();
	}

	@Override
	public List<WorkInfoTo> findWorkInfoCode() {
		// TODO Auto-generated method stub
		return workInfoDao.selectWorkInfoCode();
	}

	@Override
	public void saveImg(EmpInfoTo empInfoTo) {
		empInfoDao.updateEmpInfo(empInfoTo);
	}

}
