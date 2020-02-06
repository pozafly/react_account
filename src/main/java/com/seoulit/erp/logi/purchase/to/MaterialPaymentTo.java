package com.seoulit.erp.logi.purchase.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class MaterialPaymentTo extends BaseTo {

	private String itemCode;
	private String paymentDate;
	private String workInstructionNo;
	private String itemName;
	private String paymentAmount;
	private String unitPayment;
	private String description;
	private String inputItemNo;
	private String releaseNo;

}
