package com.seoulit.erp.hr.circumstance.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class IncomeTaxTo extends BaseTo{
	
	private String incomeTaxRate;
	private String inputedYear;
	private String lowSal;
	private String highSal;
	private String progressiveDeduction;
	
}
