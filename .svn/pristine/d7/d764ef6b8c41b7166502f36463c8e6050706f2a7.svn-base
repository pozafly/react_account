package com.seoulit.erp.logi.business.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.seoulit.erp.logi.business.repository.DeliveryRepository;
import com.seoulit.erp.logi.business.to.DeliveryTo;

@Service
public class DeliveryServiceFacadeImpl implements DeliveryServiceFacade{
	
	@Autowired
	private DeliveryRepository deliveryRepository;
	
	// ============= Delivery ==============
	@Override
	public List<DeliveryTo> findDeliveryList() {
		return deliveryRepository.findAll();
	}

	@Override
	public void registDelivery(List<DeliveryTo> DeliveryList) {
		for (DeliveryTo DeliveryTo : DeliveryList) {
			if (DeliveryTo.getStatus().equals("inserted")) {
				deliveryRepository.save(DeliveryTo);
			}
		}
	}
}
