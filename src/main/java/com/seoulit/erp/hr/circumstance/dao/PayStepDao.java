package com.seoulit.erp.hr.circumstance.dao;

import com.seoulit.erp.hr.circumstance.to.PayStepTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface PayStepDao {
    public List<PayStepTo> selectPayStepList(String positionCode);

    //public List<PayStepTo> selectDirectPayStepList();

    public void insertPayStep(PayStepTo payStepTo);

    public void updatePayStep(PayStepTo payStepTo);

    public void deletePayStep(PayStepTo payStepTo);
}
