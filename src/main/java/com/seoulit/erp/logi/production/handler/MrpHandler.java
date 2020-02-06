package com.seoulit.erp.logi.production.handler;

import com.seoulit.erp.logi.production.service.ProductionServiceFacade;
import com.seoulit.erp.logi.production.to.MpsTo;
import com.seoulit.erp.logi.production.to.MrpGatheringTo;
import com.seoulit.erp.logi.production.to.MrpOpenTempTo;
import com.seoulit.erp.logi.production.to.MrpTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/logi/production/*")
public class MrpHandler {

	@Autowired
	private ProductionServiceFacade productionServiceFacade;

	// mrp리스트 조회 메서드
	@RequestMapping("/findMrpList")
	public List<MrpTo> findMrpList(@RequestParam() String mrpgStatus) throws Exception {
		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.put("mrpgStatus", mrpgStatus);
		return productionServiceFacade.findMrpList(paramMap);

	}

	// 소요량 일괄 전개 MRP_OPEN_TEMP 프로시져 메서드
	@RequestMapping("/findMrpOpenTempList")
	public List<MrpOpenTempTo> findMrpOpenTempList(@RequestBody List<MpsTo> mpsToList) throws Exception {
		return productionServiceFacade.findMrpOpenTempProcessList(mpsToList);
	}

	// 소요량 취합 프로시져 메서드
	@RequestMapping("/registMrpGathering")
	public void registMrpGathering(@RequestBody List<MrpTo> MrpToList) throws Exception {

		Map<String, Object> paramMap = new HashMap<>();
		paramMap.put("MrpToList", MrpToList);
		productionServiceFacade.registMrpGathering(paramMap);

	}

	@RequestMapping("/findMrpGatheringList")
	public List<MrpGatheringTo> findMrpGatheringList(@RequestParam String gatheringStatus) throws Exception {

		HashMap<String, Object> paramMap = new HashMap<>();
		paramMap.put("gatheringStatus", gatheringStatus);
		return productionServiceFacade.findMrpGatheringList(paramMap);
	}

	// 소요량취합 저장
	@RequestMapping("/batchMrpGathering")
	public void batchMrpGathering(@RequestBody List<MrpGatheringTo> mrpGatheringList) throws Exception {
		productionServiceFacade.batchMrpGathering(mrpGatheringList);
	}
}
