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
@Table(name = "CONTRACT")
@NoArgsConstructor
@AllArgsConstructor
public class ContractTo extends BaseTo{

	@Id
	private String contractNo;
	private String estimateNo; 
	private String contractType; 
	private String customerCode;
	private String contractDate;
	private String contractRequester;
	private String personCodeInCharge;
	private String description;
	private String deliveryResultStatus;
	
}
