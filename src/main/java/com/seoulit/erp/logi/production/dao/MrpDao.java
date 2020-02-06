package com.seoulit.erp.logi.production.dao;

import com.seoulit.erp.logi.production.to.MpsTo;
import com.seoulit.erp.logi.production.to.MrpOpenTempTo;
import com.seoulit.erp.logi.production.to.MrpTo;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;
import java.util.Map;

@Mapper
public interface MrpDao {

	public List<MrpTo> selectMrpList(Map<String, Object> paramMap);

	public MrpOpenTempTo MrpOpenTempProcessList(MpsTo parameters);
}
