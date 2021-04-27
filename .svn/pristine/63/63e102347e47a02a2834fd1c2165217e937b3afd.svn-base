package com.seoulit.erp.hr.circumstance.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.BaseWorkTimeTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/hr/circumstance/*")
public class BaseWorkTimeHandler {

	@Autowired
	CircumstanceServiceFacade circumstanceServiceFacade;

	@RequestMapping("/findBaseWorkTimeList")
	public List<BaseWorkTimeTo> findBaseWorkTimeList() {
		return circumstanceServiceFacade.findBaseWorkTimeList();
	}

	@RequestMapping("/registBaseWorkTime")
	public void registBaseWorkTime(@RequestBody BaseWorkTimeTo baseWorkTimeTo) {
		circumstanceServiceFacade.registBaseWorkTime(baseWorkTimeTo);
	}

	@RequestMapping("/batchBaseWorkTime")
	public void batchBaseWorkTime(@RequestBody List<BaseWorkTimeTo> baseWorkTimeList) {
		circumstanceServiceFacade.batchBaseWorkTime(baseWorkTimeList);
	}
}
