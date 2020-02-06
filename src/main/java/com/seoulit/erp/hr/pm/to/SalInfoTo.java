package com.seoulit.erp.hr.pm.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class SalInfoTo extends BaseTo{
	
	private String empCode;
	private String hobong;
	private String salaryTypeCode;
	private String pensionType;
	private String nationalPension;
	private String healthInsurance;
	private String employeementInsurance;
	private String longTermCareInsurance;
	private String supportTwentyBelow;
	private String supportSixtyAbove;
	private String manyChildDeduction;
	private String accountCode;
	private String accountHolder;
	private String salTransBank;

}
