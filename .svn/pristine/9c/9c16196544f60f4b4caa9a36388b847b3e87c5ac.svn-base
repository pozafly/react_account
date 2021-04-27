package com.seoulit.erp.hr.appointment.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp.hr.appointment.to.AppointmentTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentDetailTo;
import com.seoulit.erp.hr.appointment.to.PersonalAppointmentTo;
import com.seoulit.erp.hr.appointment.to.TempAppointmentTo;
import com.seoulit.erp.hr.pm.to.EmployeeTo;


public interface AppointmentServiceFacade {
	
	/*인사발령조회	*/
	public List<AppointmentTo> findAppointmentList();
	/*인사발령 사원조회	*/
	public List<PersonalAppointmentTo> findPersonalAppointmentList();
	/*인사발령 일괄처리	*/
	public void batchAppointment(List<AppointmentTo> appointment,List<PersonalAppointmentTo> personalAppointment);
	/*인사발령 개인  일괄처리	*/
	public void batchPersonalAppointment(List<PersonalAppointmentTo> personalAppointment);
	/*인사발령 사원조회 상세	*/
	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList(Map<String,Object> appointmentDetailMap);
	/*인사발령 일괄처리	*/
	public void batchPersonalAppointmentDetail(List<AppointmentTo> appointment, List<PersonalAppointmentTo> personalAppointment, List<PersonalAppointmentDetailTo> personalAppointmentDetail, List<EmployeeTo> employeeList);
	
	/*인사발령 사원조회 상세	*/
//	public List<PersonalAppointmentDetailTo> findPersonalAppointmentDetailList2();
	
	/*프로시저	*/
	public List<TempAppointmentTo> findAppointmentHistory(Map<String, Object> appointmentNoMap);
	/*삭제 프로시저	*/
	public List<TempAppointmentTo> findCanceledAppointment(Map<String,Object> appointmentInfoMap);
	
//
//	public void batchEmployeeList(List<EmployeeTO> employeeList);
//
//	/* 호봉 관리 */
//	public List<PayStepTO> findPayStepList();
//	
//	public void batchPayStepList(List<PayStepTO> payStepList);	
//
//	/* 휴일 관리 */
//	public List<HolidayTO> findHolidayList(Map<String, Object> dateList);
//	
//	public void batchHoliday(List<HolidayTO> holidayList);
//	
//	/*연차정보 구하기*/
//	public List<AnnualLeaveTO> findAnnualLeaveList();
//	public List<AnnualLeaveTO> createAnnualLeave(String standardYear,String empCode,String hireDate) throws ProcedureException;
//	public void batchAnnualLeave(List<AnnualLeaveTO> annualLeaveList);
//	
//	/*연차신청 후 변경 사항 반영*/
//	public List<AnnualLeaveTO> editAnnualLeaveMgt(String standardYear, String empCode, String days, String restDays);	
}
