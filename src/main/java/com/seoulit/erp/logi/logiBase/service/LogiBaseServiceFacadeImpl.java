package com.seoulit.erp.logi.logiBase.service;

import java.util.HashMap;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.logiBase.dao.DispositionWorkmanDao;
import com.seoulit.erp.logi.logiBase.dao.FactoryDao;
import com.seoulit.erp.logi.logiBase.dao.FactoryProductionLineDao;
import com.seoulit.erp.logi.logiBase.dao.ProductionLineDao;
import com.seoulit.erp.logi.logiBase.to.DispositionWorkTo;
import com.seoulit.erp.logi.logiBase.to.FactoryPLTo;
import com.seoulit.erp.logi.logiBase.to.FactoryTo;
import com.seoulit.erp.logi.logiBase.to.ProductionLineTo;

@Service
public class LogiBaseServiceFacadeImpl implements LogiBaseServiceFacade {

	@Autowired
	FactoryDao factoryDao;
	@Autowired
	FactoryProductionLineDao factoryProductionLineDao;
	@Autowired
	DispositionWorkmanDao dispositionWorkmanDao;
	@Autowired
	ProductionLineDao productionLineDao;

	@Override
	public List<FactoryTo> findFactoryList(String itemCode) {
		// String으로 그냥 넘기면 동적쿼리에서 안먹혀서 Map으로 넘김
		HashMap<String, String> param = new HashMap<>();
		param.put("itemCode", itemCode);
		return factoryDao.selectFactoryList(param);
	}

	@Override
	public void registFactory(FactoryTo factoryTo) {
		if (factoryTo.getStatus().equals("inserted")) {
			factoryDao.insertFactory(factoryTo);
		}
	}

	@Override
	public List<FactoryPLTo> findFactoryProductionLines(HashMap<String, String> params) {
		return factoryProductionLineDao.selectFactoryProductionLines(params);
	}

	@Override
	public void registerFactoryPLs(FactoryPLTo factoryPLTo) {
		if (factoryPLTo.getStatus().equals("inserted")) {
			factoryProductionLineDao.insertFactoryPLs(factoryPLTo);
		}
	}

	@Override
	public List<DispositionWorkTo> findDispositionOfWorkman(HashMap<String, String> params) {
		return dispositionWorkmanDao.selectDispositionOfWorkman(params);
	}

	@Override
	public List<ProductionLineTo> findProductionLineList() {
		return productionLineDao.selectProductionLineList();
	}

	@Override
	public void batchProductionLine(List<ProductionLineTo> productionLineList) {
		for (ProductionLineTo productionLineTo : productionLineList) {
			if (productionLineTo.getStatus().equals("inserted")) {

				productionLineDao.insertProductionLine(productionLineTo);

			} else if (productionLineTo.getStatus().equals("updated")) {

				productionLineDao.updateProductionLine(productionLineTo);

			} else if (productionLineTo.getStatus().equals("deleted")) {

				productionLineDao.deleteProductionLine(productionLineTo);
			}
		}
	}
}
