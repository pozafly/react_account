package com.seoulit.erp.hr.circumstance.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.HolidayTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/hr/circumstance/*")
public class HolidayHandler {

	@Autowired
	CircumstanceServiceFacade circumstanceServiceFacade;

	@RequestMapping("/findHolidayList")
	public List<HolidayTo> findHolidayList(String fromDate, String toDate) {
		return circumstanceServiceFacade.findHolidayList(fromDate, toDate);
	}

	@RequestMapping("/batchHoliday")
	public void batchHoliday(@RequestBody List<HolidayTo> holidayToList) {
		circumstanceServiceFacade.batchHoliday(holidayToList);
	}
}
