package com.seoulit.erp.hr.attendance.to;


import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class DailyAttdTo extends BaseTo {

	private String empCode;
	private String empName;
	private String dayAttdSeq;
	private String basicDay;
	private String attdTypeName;
	private String attdTypeCode;
	private String time;
	private String approvalStatus;
	private String cost;
	private String cause;

}
