package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class WarehousingTo extends BaseTo {

	private String itemCode;
	private String orderNo;
	private String itemName;
	private String orderAmount;
	private String warehousingAmount;
	private String unitWarehousing;
	private String customer;
	private String description;
	private String warehousingDate;
	private String warehousingNo;

}
