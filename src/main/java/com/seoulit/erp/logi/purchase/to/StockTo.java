package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class StockTo extends BaseTo {

	private String warehouseCode;
	private String itemCode;
	private String deliveryNo;
	private String productionResultNo;
	private String inputItemNo;
	private String itemName;
	private String unitOfStock;
	private String safetyAllowanceAmount;
	private String stockAmount;
	private String description;
	
}
