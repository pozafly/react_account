package com.seoulit.erp.hr.appointment.dao;

import com.seoulit.erp.hr.appointment.to.PersonalAppointmentTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PersonalAppointmentDao {
	
	public List<PersonalAppointmentTo> selectPersonalAppointment();
	public void insertPersonalAppointment(PersonalAppointmentTo personalAppointmentTo);
	public void updatePersonalAppointment(PersonalAppointmentTo personalAppointmentTo);
//	public void deletePersonalAppointment(PersonalAppointmentTO personalAppointmentTO);

}
