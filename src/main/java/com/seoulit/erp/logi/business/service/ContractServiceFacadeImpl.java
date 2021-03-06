package com.seoulit.erp.logi.business.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.business.dao.ContractDao;
import com.seoulit.erp.logi.business.repository.ContractDetailRepository;
import com.seoulit.erp.logi.business.repository.ContractRepository;
import com.seoulit.erp.logi.business.to.ContractDetailTo;
import com.seoulit.erp.logi.business.to.ContractTo;
import com.seoulit.erp.logi.business.to.DeliveryTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

@Service
public class ContractServiceFacadeImpl implements ContractServiceFacade {

	@Autowired
	private ContractDao contractDao;
	@Autowired
	private ContractDetailRepository contractDetailRepository;
	@Autowired
	private EstimateServiceFacade estimateServiceFacade;

	@Autowired
	private ContractRepository contractRepository;
	
	// 오늘날짜 만들기
	SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
	Calendar today = Calendar.getInstance();
	String day = sdf.format(today.getTime());
	

	@Override
	public List<ContractTo> findContractList(String fromDate, String toDate) {

		if (fromDate == "" && toDate == "") {

			fromDate = day;
			toDate = day;

		}

		String newfromDate = fromDate.toString().replaceAll("-", "");
		String newtoDate = toDate.toString().replaceAll("-", "");

		return contractRepository.findByContractDateBetween(newfromDate, newtoDate);
	}
	@Override
	public List<ContractTo> findDeliveryContractList() {
		return contractRepository.findAll();
	}

	@Override
	public List<EstimateTo> selectEstimateListInContractAvailable() {

		return contractDao.selectEstimateListInContractAvailable();

	}

	@Override
	public void registContract(ContractTo contractTo) {
		if (contractTo != null) {

			//=================수주 insert=================
			int contractNo = Integer.parseInt(contractDao.createContractNo());
			
			String newContractNo = "CONT" + day.substring(2) + "-" + String.format("%04d", contractNo + 1);
			contractTo.setContractNo(newContractNo);
			
			contractRepository.save(contractTo);
			
			
			
			//=================수주상세 insert=================
			// 수주상세 프로시저
			String estimateNo = contractTo.getEstimateNo();
			HashMap<String, String> map = new HashMap<>();
			map.put("estimateNo", estimateNo);
			map.put("contractNo", newContractNo);
			
			contractDao.insertNewContractDetail(map);
			
			System.out.println("프로시저 결과 : " + map);
			
		}
	}

	@Override
	public void statusChange(String estimateNo) {
		if (estimateNo != null) {
			contractDao.statusChange(estimateNo);
		}
	}

	@Override
	public void estimateCancel(String estimateNo) {
		estimateServiceFacade.estimateCancel(estimateNo);
	}
	
	@Override
	public List<ContractDetailTo> selectContractDetail(String contractNo){
		return contractDetailRepository.findByContractNo(contractNo);
	}
	//MPS 화면에서 수주목록 조회!
	@Override
	public List<ContractDetailTo> selectContractDetail(String startDate, String endDate) {
		return contractDetailRepository.findByDueDateOfContractBetween(startDate, endDate);
	}

}
