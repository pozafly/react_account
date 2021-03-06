package com.seoulit.erp.logi.business.service;

import java.util.List;
import java.util.Map;

import com.seoulit.erp.logi.business.to.ContractDetailTo;
import com.seoulit.erp.logi.business.to.ContractTo;
import com.seoulit.erp.logi.business.to.EstimateDetailTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

public interface ContractServiceFacade {
	
	// =============== Contract ======================
	public List<ContractTo> findContractList(String fromDate, String toDate);
	public void registContract(ContractTo contractTo);
	public void statusChange(String estimateNo);
	public List<EstimateTo> selectEstimateListInContractAvailable();
	public void estimateCancel(String estimateNo);
	public List<ContractDetailTo> selectContractDetail(String contractNo);
	//MPS 화면에서 수주목록 조회!
	public List<ContractDetailTo> selectContractDetail(String fromDate,String toDate);
	public List<ContractTo> findDeliveryContractList();

}
