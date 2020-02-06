package com.seoulit.erp.logi.business.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "ESTIMATE")
@NoArgsConstructor
@AllArgsConstructor
public class EstimateTo extends BaseTo{
	
	@Id
	private String estimateNo;
	private String customerCode;
	private String estimateDate; 
	private String contractStatus;
	private String estimateRequester;
	private String effectiveDate; 
	private String personCodeInCharge;
	private String description;
	
}
