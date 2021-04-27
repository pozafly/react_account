package com.seoulit.erp.hr.appointment.handler;

import com.seoulit.erp.hr.appointment.service.AppointmentServiceFacade;
import com.seoulit.erp.hr.appointment.to.AppointmentTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/hr/appointment/*")
public class AppointmentHandler {
	
	@Autowired
	private AppointmentServiceFacade appointmentServiceFacade;

	@RequestMapping("/findAppointmentList")
	public List<AppointmentTo> findAppointmentList() throws Exception {
		return appointmentServiceFacade.findAppointmentList();
		// System.out.println(appointmentList.get(0).getAppointmentSeq());
	}

	@RequestMapping("/batchAppointment")
	public void batchAppointment(@RequestBody List<AppointmentTo> appointment,
			@RequestBody List<PersonalAppointmentTo> personalAppointment) throws Exception {
		appointmentServiceFacade.batchAppointment(appointment, personalAppointment);
	}

}
