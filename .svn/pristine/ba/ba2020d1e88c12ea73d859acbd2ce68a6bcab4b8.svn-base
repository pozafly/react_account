package com.seoulit.erp.logi.business.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.business.dao.EstimateDao;
import com.seoulit.erp.logi.business.dao.EstimateDetailDao;
import com.seoulit.erp.logi.business.repository.EstimateDetailRepository;
import com.seoulit.erp.logi.business.repository.EstimateRepository;
import com.seoulit.erp.logi.business.to.EstimateDetailTo;
import com.seoulit.erp.logi.business.to.EstimateTo;

@Service
public class EstimateServiceFacadeImpl implements EstimateServiceFacade {


	@Autowired
	private EstimateDao estimateDao;
	@Autowired
	private EstimateDetailDao estimateDetailDao;
	
	@Autowired
	private EstimateRepository estimateRepository;
	@Autowired
	private EstimateDetailRepository estimateDetailRepository;

	

	// ============= Estimate ==============
	@Override
	public List<EstimateTo> findEstimateList(String fromDate, String toDate) {
		if (fromDate == "" && toDate == "") {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
			Calendar today = Calendar.getInstance();

			fromDate = sdf.format(today.getTime());
			toDate = sdf.format(today.getTime());

		}
		
		String newfromDate = fromDate.toString().replaceAll("-", "");
		String newtoDate = toDate.toString().replaceAll("-", "");
		
		return estimateRepository.findByEstimateDateBetween(newfromDate, newtoDate);
		
	}
	
	@Override
	public String createEstimateNo() {
		
		int no = Integer.parseInt(estimateDao.createEstimateNo());
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyyMMdd");
		Calendar today = Calendar.getInstance();
		String day = sdf.format(today.getTime());
		
		String newNo = "ESTI" + day.substring(2) + "-" + String.format("%04d", no + 1);
		
		System.out.println(newNo);
		return newNo;
	}

	@Override
	public void registEstimate(EstimateTo estimateTo) {
		
		estimateRepository.save(estimateTo);
		// TODO 견적상세 일괄처리 로직 추가해야함.
		
	}
	
	@Override
	public void deleteEstimateList(String id) {
		estimateRepository.deleteById(id);
	}
	
	@Override
	public void estimateCancel(String estimateNo) {
		//견적 삭제
		estimateDao.deleteEstimate(estimateNo);
		//견적상세 삭제(견적이 삭제되면, 그에 따른 견적상세도 없어져야함.)
		estimateDetailDao.deleteEstimateDetail(estimateNo);
	}
	

	
	// ============= EstimateDetail ==============
	@Override
	public List<EstimateDetailTo> findEstimateDetail(String estimateNo) {
		return estimateDetailRepository.findByEstimateNo(estimateNo);
	}
	
	@Override
	public void registEstimateDetail(EstimateDetailTo estimateDetailTo) {
		int countNo = estimateDetailDao.countRecode(estimateDetailTo.getEstimateNo());
		String estimateDetailNo = estimateDetailTo.getEstimateNo() + "-" + String.format("%02d",(countNo + 1));		
		estimateDetailTo.setEstimateDetailNo(estimateDetailNo);
		
		estimateDetailRepository.save(estimateDetailTo);
		
	}
	
	@Override
	public void deleteEstimateDetail(String estimateDetailNo) {
		estimateDetailRepository.deleteById(estimateDetailNo);
	}
	
	
}
