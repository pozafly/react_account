package com.seoulit.erp.account.slip.to;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import com.seoulit.common.to.BaseTo;

import lombok.Data;

@Entity
@Data
@Table(name = "ACCOUNT_CONTROL_DETAIL")
public class AccountControlDetailTO extends BaseTo{

	@Id
	private String accountCode;
	private String accountControlCode;
	private String accountControlName;
	private String accountControlType;
	private String accountControlDescription;


}
