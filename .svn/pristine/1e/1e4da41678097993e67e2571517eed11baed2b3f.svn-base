package com.seoulit.erp.hr.circumstance.handler;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin("*")
@RestController
@RequestMapping("hr/circumstance/*")
public class SudangMgnHandler {

	@Autowired
	private CircumstanceServiceFacade circumstanceFacade;

	// 연장,야간,휴일,기타 수당관련 목록을 불러오는 메서드
	@RequestMapping("/findSudangList")
	public Map<String, Object> findSudangList(

	) throws Exception {

		return circumstanceFacade.findSudangList();

//		List<OvertimeSudangTo> overtimeSudangList=(List<OvertimeSudangTo>) sudangInfoList.get("overtimeSudangList");
//		List<EtcSudangTo> etcSudangList=(List<EtcSudangTo>) sudangInfoList.get("etcSudangList");

	}

	@RequestMapping("/batchSudangProcess")
	public void batchSudangProcess(@RequestBody Map<String, Object> sudangInfoList) throws Exception {

		// sudangInfoList.put("overtimeSudangList", overtimeSudangList);
//		sudangInfoList.put("etcSudangList", etcSudangList);

		circumstanceFacade.batchSudangProcess(sudangInfoList);
	}

}