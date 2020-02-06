package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class OrderDetailTo extends BaseTo {

	private String orderDetailNo;
	private String orderNo;
	private String itemCode;
	private String itemName;
	private String unitOfOrder;
	private String dueDateOfOrder;
	private String deliveryScheduleDate;
	private String orderAmount;
	private String unitPriceOfOrder;
	private String sumPriceOfOrder;
	private String description;
	private String mrpGatheringNo;
	private String orderDetailStatus;
	private String slipRegistStatus;
	
}
