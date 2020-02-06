package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class BomTo extends BaseTo{

	private String no;
	private String itemCode;
	private String parentItemCode;
	private String netAmount;
	private String description;

}
