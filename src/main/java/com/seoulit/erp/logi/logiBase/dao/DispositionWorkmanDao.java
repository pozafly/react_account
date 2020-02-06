package com.seoulit.erp.logi.logiBase.dao;

import java.util.HashMap;
import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.logi.logiBase.to.DispositionWorkTo;

@Mapper
public interface DispositionWorkmanDao {

	public List<DispositionWorkTo> selectDispositionOfWorkman(HashMap<String, String> params);
}
