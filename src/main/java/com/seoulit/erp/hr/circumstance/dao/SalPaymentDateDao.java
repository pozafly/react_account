package com.seoulit.erp.hr.circumstance.dao;

import com.seoulit.erp.hr.circumstance.to.SalPaymentDateTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface SalPaymentDateDao {
    public List<SalPaymentDateTo> selectSalPaymentDateList(String inputedYearMonth);

    public void insertSalPaymentDate(SalPaymentDateTo salPaymentDateTo);
    public void updateSalPaymentDate(SalPaymentDateTo salPaymentDateTo);
    public void deleteSalPaymentDate(SalPaymentDateTo salPaymentDateTo);
}
