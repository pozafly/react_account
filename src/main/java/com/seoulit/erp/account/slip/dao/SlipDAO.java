package com.seoulit.erp.account.slip.dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.seoulit.erp.account.slip.to.SlipTO;

@Mapper
public interface SlipDAO {

	public List<SlipTO> getSlipTotalList(Map<String, Object> map);
	public List<SlipTO> getSlipList(Map<String, Object> map);
	public void insertSlipInfo(SlipTO slipTo);
	public void approvalSlip(HashMap<String, String> map);
	
	//전표번호
	public List<SlipTO> addNewSlipNo(String strDate);
	public int getSlipRowCount(String reportingDate);
	public void updateDifference(String slipNo);
	
}
