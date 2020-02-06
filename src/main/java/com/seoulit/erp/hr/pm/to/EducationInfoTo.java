package com.seoulit.erp.hr.pm.to;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
public class EducationInfoTo extends BaseTo{

	private String empCode;
	private String educationSeq;
	private String campus;
	private String major;
	private String subMajor;
	private String enterDate;
	private String graduationDate;
	private String grade;

}
