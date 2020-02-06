package com.seoulit.erp.hr.pm.dao;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.pm.to.LicenseInfoTo;

@Mapper
public interface LicenseInfoDao {
	
	public List<LicenseInfoTo> selectLicenseInfoAll();

	public void insertLicenseInfo(LicenseInfoTo LicenseInfoTo);

	public void updateLicenseInfo(LicenseInfoTo LicenseInfoTo);

	public void deleteLicenseInfo(LicenseInfoTo LicenseInfoTo);

}
