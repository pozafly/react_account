package com.seoulit.erp.hr.pay.to;
import com.seoulit.common.to.BaseTo;

import lombok.Data;

import java.util.List;

@Data
public class SalaryInputTo extends BaseTo{

	private String paymentDate;
	private String empCode;
	private String salaryTypeCode;
	private String totalSalary;
	private String totalDeductionPrice;
	private String deptCode;
	private String positionCode;
	private String hireDate;
	private String retireDate;
	private String chinePayments;
	private List<PayDeductionTo> payDeductionList;

}
