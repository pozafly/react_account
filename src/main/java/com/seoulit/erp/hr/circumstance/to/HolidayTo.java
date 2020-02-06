package com.seoulit.erp.hr.circumstance.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class HolidayTo extends BaseTo{
	
	private String basicDay;
	private String holidayName;
	private String note;
	private String holidayType;
	
}
