package com.seoulit.erp.logi.logiBase.handler;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.logiBase.service.LogiBaseServiceFacade;
import com.seoulit.erp.logi.logiBase.to.DispositionWorkTo;
import com.seoulit.erp.logi.logiBase.to.FactoryPLTo;
import com.seoulit.erp.logi.logiBase.to.FactoryTo;

@RestController
@RequestMapping("/logi/logiBase/*")
public class FactoryHandler {

	@Autowired
	LogiBaseServiceFacade logiBaseServiceFacade;

	// --------------- Factory -----------------
	@RequestMapping("/findFactoryList")
	// itemCode는 all or 특정 itemCode를 넘긴다
	// all은 디폴트로 받게 함
	// all일경우 모든 공장을 조회, 특정 itemCode를 넘기면 itemCode를 생산중인 공장 조회 --> 동적 쿼리로 되어 있음
	public List<FactoryTo> findFactoryList(@RequestParam(value = "itemCode", defaultValue = "all") String itemCode) {
		// String itemCode = req.getParameter("itemCode");
		return logiBaseServiceFacade.findFactoryList(itemCode);
	}

	@RequestMapping("/registerFactory")
	public void registFactory(@RequestBody FactoryTo factoryTo) {
		logiBaseServiceFacade.registFactory(factoryTo);
	}

	// --------------- FactoryPL -----------------
	@RequestMapping("/findFactoryProductionLines")
	// divisionCode로 구분
	// Ex) code => { "divisionCode":"factoryCode", "factoryCode":"FACTORY-01"}
	public List<FactoryPLTo> findFactoryProductionLines(@RequestBody HashMap<String, String> data) {
		String code = data.get("divisionCode");

		HashMap<String, String> params = new HashMap<>();
		params.put("code", code);

		String factoryCode = null;
		String workInstructionNo = null;

		if (data.get("divisionCode").equals("factoryCode")) {
			factoryCode = data.get("factoryCode");
			params.put("factoryCode", factoryCode);

		} else if (data.get("divisioncode").equals("workInstructionNo")) {
			workInstructionNo = data.get("workInstructionNo");
			params.put("workInstructionNo", workInstructionNo);
		}
		return logiBaseServiceFacade.findFactoryProductionLines(params);
	}

	// 무결성 제약 조건 때문에 테스트용으로 직접 값 넣는건 안됨
	// ADMIN.FK_PRODUCTION_LINE) violated - parent key not found
	@RequestMapping("/registerFactoryPLs")
	public void registerFactoryPLs(@RequestBody FactoryPLTo factoryPLTo) {
		logiBaseServiceFacade.registerFactoryPLs(factoryPLTo);
	}

	// --------------- DispositionOfWorkman ---------------
	@RequestMapping("/findDispositionOfWorkman")
	public List<DispositionWorkTo> findDispositionOfWorkman(
			@RequestParam(value = "code", defaultValue = "productionLine") String code, String factoryCode,
			String factoryPLNo) {

		HashMap<String, String> params = new HashMap<>();
		// 넥사에서 이걸 모달에서 부르는데 부모창에서 code값을 넘김 넘기는 code값이 productionLine으로 고정 시켜놨음
		// 그래서 일단 code 값은 디폴트로 productionLine으로 받겠음 다른 값이 필요할시 수정
		params.put("code", code);
		params.put("factoryCode", factoryCode);
		params.put("factoryPLNo", factoryPLNo);

		System.out.println("code : " + code + "   factoryCode : " + factoryCode + "    factoryPLNo : " + factoryPLNo);

		return logiBaseServiceFacade.findDispositionOfWorkman(params);

	}
}
