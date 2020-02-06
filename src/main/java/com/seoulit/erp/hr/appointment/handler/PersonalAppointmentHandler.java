package com.seoulit.erp.hr.appointment.handler;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.appointment.service.AppointmentServiceFacade;
import com.seoulit.erp.hr.appointment.to.AppointmentTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentDetailTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentTo;
import com.seoulit.erp.hr.appointment.to.TempAppointmentTo;
import com.seoulit.erp.hr.pm.to.EmployeeTo;

@RestController
@RequestMapping("/hr/appointment/*")
public class PersonalAppointmentHandler {
	
	@Autowired
	private AppointmentServiceFacade appointmentServiceFacade;

	@RequestMapping("hr/appointment/findPersonalAppointmentList")
	public List<PersonalAppointmentTo> findPersonalAppointmentList() throws Exception {
		return appointmentServiceFacade.findPersonalAppointmentList();
	}

	@RequestMapping("/batchPersonalAppointment")
	public void batchPersonalAppointment(@RequestBody List<PersonalAppointmentTo> personalAppointmentList)
			throws Exception {
		appointmentServiceFacade.batchPersonalAppointment(personalAppointmentList);
	}

	@RequestMapping("/findPersonalAppointmentDetailList")

	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList(
			@RequestBody Map<String, Object> appointmentDetailMap) throws Exception {
//		Map<String,Object> appointmentDetailMap = new HashMap<>();
//		HashMap<String, Object> appointmentDetailMap = new HashMap<>();

//		PlatformData outData = (PlatformData) request.getAttribute("outData");
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//		String appointmentNo = inData.getVariable("appointmentNo").getString();
//		String employeeNo = inData.getVariable("employeeNo").getString();
//		String applyDate = inData.getVariable("applyDate").getString();
//		String appointmentHistory = inData.getVariable("appointmentDivision").getString();
//		appointmentDetailMap.put("appointmentNo", appointmentNo);
//		appointmentDetailMap.put("employeeNo", employeeNo);
//		appointmentDetailMap.put("applyDate", applyDate);
//		appointmentDetailMap.put("appointmentHistory", appointmentHistory);
		return appointmentServiceFacade.findPersonalAppointmentDetailList(appointmentDetailMap);
//		datasetBeanMapper.beansToDataset(outData, personalAppointmentDetailList, PersonalAppointmentDetailTo.class);
	}

//	@RequestMapping("hr/appointment/findPersonalAppointmentDetailList2") // 테스트
//	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList2() throws Exception {
//		return appointmentServiceFacade.findPersonalAppointmentDetailList2();
//	}	

	@RequestMapping("/batchPersonalAppointmentDetail")
	public void batchPersonalAppointmentDetail(@RequestBody List<AppointmentTo> appointment,
			@RequestBody List<PersonalAppointmentTo> personalAppointment,
			@RequestBody List<PersonalAppointmentDetailTo> personalAppointmentDetail,
			@RequestBody List<EmployeeTo> employeeList) throws Exception {
		appointmentServiceFacade.batchPersonalAppointmentDetail(appointment, personalAppointment,
				personalAppointmentDetail, employeeList);
	}

	// 20190224 프로시저 테스트

	@RequestMapping("/findAppointmentHistory")
	public List<TempAppointmentTo> findAppointmentHistory(@RequestBody Map<String, Object> appointmentNoMap)
			throws Exception {

//		HashMap<String, Object> appointmentNoMap = new HashMap<>();

//		PlatformData outData = (PlatformData) request.getAttribute("outData");
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//		String appointmentNo = inData.getVariable("appointmentNo").getString();
//		String appointmentDivision = inData.getVariable("appointmentDivision").getString();
//		appointmentNoMap.put("appointmentNo", appointmentNo);
//		appointmentNoMap.put("appointmentDivision", appointmentDivision);

		appointmentServiceFacade.findAppointmentHistory(appointmentNoMap);
		return (List<TempAppointmentTo>) appointmentNoMap.get("result");

//		datasetBeanMapper.beansToDataset(outData, appointmentHistoryList, TempAppointmentTo.class);

	}

	// 20190225 프로시저 테스트
	@RequestMapping("/findCanceledAppointment")
	public List<TempAppointmentTo> findCanceledAppointment(@RequestBody Map<String, Object> appointmentInfoMap)
			throws Exception {
//		PlatformData outData = (PlatformData) request.getAttribute("outData");
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//		String appointmentNo = inData.getVariable("appointmentNo").getString();
//		String appointmentDivision = inData.getVariable("appointmentDivision").getString();
//		appointmentInfoMap.put("appointmentNo", appointmentNo);
//		appointmentInfoMap.put("appointmentDivision", appointmentDivision);
		appointmentServiceFacade.findCanceledAppointment(appointmentInfoMap);
		return (List<TempAppointmentTo>) appointmentInfoMap.get("result");
//		appointmentServiceFacade.findCanceledAppointment(appointmentInfoMap);
//		List<TempAppointmentTo> appointmentHistoryList =(List<TempAppointmentTo>)appointmentInfoMap.get("result");
//		datasetBeanMapper.beansToDataset(outData, appointmentHistoryList, TempAppointmentTo.class);
	}
}
