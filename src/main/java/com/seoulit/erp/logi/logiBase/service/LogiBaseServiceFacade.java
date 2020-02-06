package com.seoulit.erp.logi.logiBase.service;

import java.util.HashMap;
import java.util.List;

import com.seoulit.erp.logi.logiBase.to.DispositionWorkTo;
import com.seoulit.erp.logi.logiBase.to.FactoryPLTo;
import com.seoulit.erp.logi.logiBase.to.FactoryTo;
import com.seoulit.erp.logi.logiBase.to.ProductionLineTo;

public interface LogiBaseServiceFacade {

	//--------------- Factory -----------------
	public List<FactoryTo> findFactoryList(String itemCode);
	public void registFactory(FactoryTo factoryTo);
	
	//--------------- FactoryPL -----------------
	public List<FactoryPLTo> findFactoryProductionLines(HashMap<String, String> params);
	public void registerFactoryPLs(FactoryPLTo factoryPLTo);
	
	//--------------- DispositionOfWorkman ---------------
	public List<DispositionWorkTo> findDispositionOfWorkman(HashMap<String, String> params);
	
	//--------------- ProductionLine -----------------
	public List<ProductionLineTo> findProductionLineList();
	public void batchProductionLine(List<ProductionLineTo> productionLineList);
}
