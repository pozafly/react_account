package com.seoulit.erp.hr.circumstance.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class DeductionTaxTo extends BaseTo {
	
	private String inputedYear;
	private String healthInsurRate;
	private String nationalPenRate;
	private String longTermCareRate;
	private String employeementInsurRate;
	
}
