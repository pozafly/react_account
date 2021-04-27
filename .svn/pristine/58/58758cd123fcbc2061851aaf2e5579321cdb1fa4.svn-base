package com.seoulit.erp.logi.business.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@Table(name = "ESTIMATE_DETAIL")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class EstimateDetailTo extends BaseTo{

	@Id
	private String estimateDetailNo;
	private String estimateNo;
	private String itemCode;
	private String itemName;
	private String unitOfEstimate;
	private String dueDateOfEstimate;
	private String estimateAmount;
	private String unitPriceOfEstimate;
	private String sumPriceOfEstimate;
	private String description;
	

}
