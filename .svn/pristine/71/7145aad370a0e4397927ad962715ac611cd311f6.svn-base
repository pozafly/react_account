package com.seoulit.erp.sys.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.sys.service.BaseServiceFacade;
import com.seoulit.erp.sys.to.CodeDetailTo;
import com.seoulit.erp.sys.to.CodeTo;

@RestController
public class CodeHandler {

	@Autowired
	BaseServiceFacade baseServiceFacade;

	@CrossOrigin("*")
	@RequestMapping("/sys/findCodeList")
	public List<CodeTo> findCodeList() {
		return baseServiceFacade.findCodeList();
	};

//	@RequestMapping("/sys/findCodeDetailList")
//	public List<CodeDetailTo> findCodeDetailList(){
//		return baseServiceFacade.findCodeDetailList();
//	}

}
