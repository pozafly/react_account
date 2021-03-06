package com.seoulit.erp.account.slip.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import com.seoulit.erp.account.slip.dao.JournalDAO;
import com.seoulit.erp.account.slip.dao.SlipDAO;
import com.seoulit.erp.account.slip.repository.JournalDetailRepository;
import com.seoulit.erp.account.slip.repository.JournalRepository;
import com.seoulit.erp.account.slip.repository.SlipRepository;
import com.seoulit.erp.account.slip.to.AccountControlDetailTO;
import com.seoulit.erp.account.slip.to.JournalDetailTO;
import com.seoulit.erp.account.slip.to.JournalTO;
import com.seoulit.erp.account.slip.to.SlipTO;

@Service
public class SlipServiceFacadeImpl implements SlipServiceFacade{
	@Autowired
	private SlipRepository slipRepository;
	@Autowired
	private JournalRepository journalRepository;
	@Autowired
	private JournalDetailRepository journalDetailRepository;
	
	@Autowired
	private SlipDAO slipDAO;
	@Autowired
	private JournalDAO journalDAO;

	//전표번호
	@Override
	public List<SlipTO> addNewSlipNo(String strDate) {
		List<SlipTO> addNewSlipNo=slipDAO.addNewSlipNo(strDate);
		return addNewSlipNo;
	}
	
	
	@Override
	public List<SlipTO> getSlipTotalList(String startDate, String endDate) throws DataAccessException {
		Map<String,Object> map=new HashMap<>();
		map.put("startDate", startDate);
		map.put("endDate", endDate);
		List<SlipTO> slip=slipDAO.getSlipTotalList(map);
		return slip;
	}

	@Override
	public List<SlipTO> getSlipList(String startDate, String endDate, String slipStatus) {
		Map<String,Object> map=new HashMap<>();
			map.put("startDate", startDate);
			map.put("endDate", endDate);
			map.put("slipStatus", slipStatus);
			
		return slipDAO.getSlipList(map);
	}

	@Override
	public int getSlipRowCount(String reportingDate) {

		return slipDAO.getSlipRowCount(reportingDate);
	}
	
	@Override
	public int getJournalRowCount(String slipNo) {
		// TODO Auto-generated method stub
		return journalDAO.getJournalRowCount(slipNo);
	}

	@Override
	public ArrayList<SlipTO> batchSlipInfo(ArrayList<SlipTO> slipList) {
		
		ArrayList<SlipTO> completeSlipList = new ArrayList<SlipTO>();
		
		for(SlipTO slipTO : slipList) {
			SlipTO newSlipTO = slipRepository.save(slipTO);
			completeSlipList.add(newSlipTO);
		}
		
		return completeSlipList;
		
	}
	

	@Override
	public List<JournalTO> getJournalListForSlip(String slipNo) {		
		
		return journalRepository.findBySlipNo(slipNo);
		
	}

	@Override
	public ArrayList<JournalTO> batchJournalInfo(ArrayList<JournalTO> journalList) {
		
		ArrayList<JournalTO> newList = new ArrayList<JournalTO>();
		
		for(JournalTO journal : journalList) {
			JournalTO newJournalTO = journalRepository.save(journal);
			newList.add(newJournalTO);
		}	
		
		return newList;
	}

	@Override
	public List<JournalTO> getJournalList(String startDate, String endDate) {
		
		Map<String, Object> map = new HashMap<String, Object>();
	    map.put("startDate", startDate);
	    map.put("endDate", endDate);
		
	    return journalRepository.findBySlipApprovalDateBetween(startDate, endDate);		 
	}

	@Override
	public List<JournalDetailTO> getJournalDetailList(String journalNo) throws DataAccessException {
		
		return journalDetailRepository.findByJournalNo(journalNo);		
	}

	@Override
	public List<AccountControlDetailTO> getAccountControlDetailList(String accountCode) throws DataAccessException {
		
		return journalDAO.getAccountControlDetailList(accountCode);		
	}

	@Override
	public void batchJournalDetailInfo(JournalDetailTO journalDetailTO) {
		switch (journalDetailTO.getStatus()) {
		case "insert":
			journalDAO.insertJournalDetailInfo(journalDetailTO);
			break;
		case "delete":
			journalDAO.deleteJournalDetailInfo(journalDetailTO);
			break;
		case "update":
			journalDAO.updateJournalDetailInfo(journalDetailTO);
			break;
		}
	
	}

	@Override
	public void updateDifference(String slipNo) {
				
		slipDAO.updateDifference(slipNo);
	}


	@Override
	public void approvalSlip(ArrayList<SlipTO> slipList) {
		
		for(SlipTO slipTO : slipList) {
			HashMap<String, String> map = new HashMap<>();
			
			map.put("slipNo", slipTO.getSlipNo());
			map.put("approvalEmpCode", slipTO.getApprovalEmpCode());
			map.put("approvalDate", slipTO.getApprovalDate());
			

			slipDAO.approvalSlip(map);
		}		
	}

}
