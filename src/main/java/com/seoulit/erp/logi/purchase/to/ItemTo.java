package com.seoulit.erp.logi.purchase.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Data
@Entity
@Table(name = "ITEM")
public class ItemTo extends BaseTo {

	@Id
	private String itemCode;
	private String itemName;
	private String itemGroupCode;
	private String itemClassification;
	private String unitOfStock;
	private String lossRate;
	private String leadTime;
	private String standardUnitPrice;
	private String description;
	
}
