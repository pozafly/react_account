package com.seoulit.erp.hr.appointment.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class AppointmentTo extends BaseTo{

	private String appointmentNo;
	private String appointmentTitle;
	private String appointmentDivision;
	private String appointmentDate;
	private String appointmentDirector;
	private String approvalStatus;
	private String note;
	private String appointmentSeq;
	
}
