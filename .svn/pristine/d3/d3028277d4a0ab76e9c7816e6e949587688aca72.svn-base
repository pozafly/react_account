package com.seoulit.erp.hr.appointment.service;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.hr.appointment.dao.AppointmentDao;
import com.seoulit.erp.hr.appointment.dao.PersonalAppointmentDao;
import com.seoulit.erp.hr.appointment.dao.PersonalAppointmentDetailDao;
import com.seoulit.erp.hr.appointment.to.AppointmentTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentDetailTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentTo;
import com.seoulit.erp.hr.appointment.to.TempAppointmentTo;
import com.seoulit.erp.hr.pm.to.EmployeeTo;

@Service
public class AppointmentServiceFacadeImpl implements AppointmentServiceFacade {

	@Autowired
	private AppointmentDao appointmentDao;

	@Autowired
	private PersonalAppointmentDao personalAppointmentDao;

	@Autowired
	private PersonalAppointmentDetailDao personalAppointmentDetailDao;

//	@Autowired
//	private EmpApplicationService empApplicationService;

	@Override
	public List<AppointmentTo> findAppointmentList() {

		return appointmentDao.selectAppointment();
	}

	@Override
	public List<PersonalAppointmentTo> findPersonalAppointmentList() {

		return personalAppointmentDao.selectPersonalAppointment();
	}

	@Override
	public void batchAppointment(List<AppointmentTo> appointment, List<PersonalAppointmentTo> personalAppointment) {

		for (AppointmentTo AppointmentTo : appointment) {
			System.out.println("&&&&&&&&&& :  " + AppointmentTo.getStatus());
			switch (AppointmentTo.getStatus()) {
			case "inserted":
				appointmentDao.insertAppointment(AppointmentTo);
				break;
			case "updated":
				appointmentDao.updateAppointment(AppointmentTo);
				break;
			case "deleted":
//					appointmentDao.deleteAppointment(AppointmentTo);
				break;
			}
		}
		if (personalAppointment != null) {
			batchPersonalAppointment(personalAppointment);
		}
	}

	@Override
	public void batchPersonalAppointment(List<PersonalAppointmentTo> personalAppointment) {

		for (PersonalAppointmentTo personalAppointmentTo : personalAppointment) {
			System.out.println("&&&&&&&&&& personalAppointmentTo.getStatus() :  " + personalAppointmentTo.getStatus());
			switch (personalAppointmentTo.getStatus()) {
			case "inserted":
				personalAppointmentDao.insertPersonalAppointment(personalAppointmentTo);
				break;
			case "updated":
				personalAppointmentDao.updatePersonalAppointment(personalAppointmentTo);
				break;
			case "deleted":
//					personalAppointmentDao.deletePersonalAppointment(personalAppointmentTo);dao 미구현
				break;
			}
		}
	}

	@Override
	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList(
			Map<String, Object> appointmentDetailMap) {

		return personalAppointmentDetailDao.selectPersonalAppointmentDetail(appointmentDetailMap);
	}

	@Override
	public void batchPersonalAppointmentDetail(List<AppointmentTo> appointment,
			List<PersonalAppointmentTo> personalAppointment,
			List<PersonalAppointmentDetailTo> personalAppointmentDetail, List<EmployeeTo> employeeList) {

		for (PersonalAppointmentDetailTo PersonalAppointmentDetailTo : personalAppointmentDetail) {
			System.out.println(
					"&&&&&&&&&& PersonalAppointmentDetailTo.getStatus() :  " + PersonalAppointmentDetailTo.getStatus());
			switch (PersonalAppointmentDetailTo.getStatus()) {
			case "inserted":
				personalAppointmentDetailDao.insertPersonalAppointmentDetail(PersonalAppointmentDetailTo);
				break;
			case "updated":
				personalAppointmentDetailDao.updatePersonalAppointmentDetail(PersonalAppointmentDetailTo);
				break;
			case "deleted":
//					personalAppointmentDetailDao.deletePersonalAppointmentDetail(PersonalAppointmentDetailTo);
				// dao 미구현
				break;
			}
		}
		if (appointment != null) {
			batchAppointment(appointment, personalAppointment);
		}
//		if(personalAppointment!=null){
//			batchPersonalAppointment(personalAppointment);
//		}
//		if(employeeList!=null){
//			empApplicationService.batchEmployeeList(employeeList);
//		}
	}

//	@Override
//	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList2() {
//		// TODO Auto-generated method stub
//		return personalAppointmentDetailDAO.selectPersonalAppointmentDetail2();
//	}

	@Override
	public List<TempAppointmentTo> findAppointmentHistory(Map<String, Object> appointmentNoMap) {

		return personalAppointmentDetailDao.selectAppointmentHistory(appointmentNoMap);
	}

	@Override
	public List<TempAppointmentTo> findCanceledAppointment(Map<String, Object> appointmentInfoMap) {

		return personalAppointmentDetailDao.selectCanceledAppointment(appointmentInfoMap);
	}

}
