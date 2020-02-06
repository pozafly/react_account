package com.seoulit.erp.hr.circumstance.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class PayDeductionItemTo extends BaseTo {

	private String payDeductionItemSeq;
	private String payTypeCode;
	private String payDeductionTypeCode;
	private String inputedYear;
	private String payDeductionItemCode;
	private String payDeductionItemName;
	private String taxTypeCode;
	private String taxTypeCodeName;
	private String susubApply;
	private String susubApplyName;
	private String monthSal;
	private String monthSalName;
	private String price;
	private String inOutApply;	
	private String inOutApplyName;
	
}
