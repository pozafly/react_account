package com.seoulit.erp.hr.pm.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Entity
@Data
@Table(name = "DEPARTMENT")
public class DeptTo extends BaseTo{
	
	@Id
	private String deptCode;
	private String deptName;
	private String deptTel;
	private String businessPlaceCode;
}
