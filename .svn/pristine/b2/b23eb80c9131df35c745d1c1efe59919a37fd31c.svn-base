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
@Table(name = "CONTRACT_DETAIL")
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ContractDetailTo extends BaseTo {

	@Id
	private String contractDetailNo;
	private String contractNo;
	private String itemCode;
	private String itemName;
	private String unitOfContract;
	private String dueDateOfContract;
	private String estimateAmount;
	private String stockAmountUse;
	private String productionRequirement;
	private String unitPriceOfContract;
	private String sumPriceOfContract;
	private String processingStatus;
	private String operationCompletedStatus;
	private String deliveryCompletionStatus;
	private String description;

}
