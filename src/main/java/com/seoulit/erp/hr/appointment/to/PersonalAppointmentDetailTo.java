package com.seoulit.erp.hr.appointment.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class PersonalAppointmentDetailTo extends BaseTo{

	private String appointmentNo;
	private String employeeNo;
	private String appointmentHistory;
	private String currentInformation;
	private String preAppointmentInformation;
	private String appointmentInformation;
	private String note;
	
}
