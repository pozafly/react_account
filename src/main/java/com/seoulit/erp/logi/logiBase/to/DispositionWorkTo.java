package com.seoulit.erp.logi.logiBase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class DispositionWorkTo extends BaseTo{

	private String factoryCode;
	private String factoryProductionLineNo;
	private String productionLineCode;
	private String empCode;
	private String empName;
	private String position;
	private String employmentStatus;

}
