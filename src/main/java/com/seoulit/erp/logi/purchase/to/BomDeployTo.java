package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class BomDeployTo extends BaseTo{

	private String itemCode;
	private String parentItemCode;
	private String itemName;
	private String itemClassification;
	private String leadTime;
	private String lossRate;
	private String netAmount;
	private String standardUnitPrice;
	private String parentItemName;
	
}
