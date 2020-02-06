package com.seoulit.erp.sys.to;

import com.seoulit.common.to.BaseTo;
import lombok.Data;

@Data
public class LoginTo extends BaseTo {
	
    private String empCode;
    private String password;
    
}
