package com.seoulit.erp.hr.appointment.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.hr.appointment.to.PersonalAppointmentDetailTo;
import com.seoulit.erp.hr.appointment.to.TempAppointmentTo;

@Mapper
public interface PersonalAppointmentDetailDao {
   
   public List<PersonalAppointmentDetailTo> selectPersonalAppointmentDetail(Map<String,Object> appointmentDetailMap);
//   public List<PersonalAppointmentDetailTo> selectPersonalAppointmentDetail2();
   public void insertPersonalAppointmentDetail(PersonalAppointmentDetailTo PersonalAppointmentDetailTo);
   public void updatePersonalAppointmentDetail(PersonalAppointmentDetailTo PersonalAppointmentDetailTo);
//   public void deletePersonalAppointmentDetail(PersonalAppointmentDetailTo PersonalAppointmentDetailTo);
   public List<TempAppointmentTo> selectAppointmentHistory(Map<String, Object> appointmentNoMap);
   public List<TempAppointmentTo> selectCanceledAppointment(Map<String, Object> appointmentInfoMap);
}