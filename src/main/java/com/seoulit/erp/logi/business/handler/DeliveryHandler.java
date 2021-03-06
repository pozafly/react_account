package com.seoulit.erp.logi.business.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.logi.business.service.ContractServiceFacade;
import com.seoulit.erp.logi.business.service.DeliveryServiceFacade;
import com.seoulit.erp.logi.business.to.ContractTo;
import com.seoulit.erp.logi.business.to.DeliveryTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/logi/business/*")
public class DeliveryHandler {

	@Autowired
	private DeliveryServiceFacade deliveryServiceFacade;
	@Autowired
	private ContractServiceFacade contractServiceFacade;

	@GetMapping("/findDeliveryList")
	public List<DeliveryTo> findDeliveryList() {
		return deliveryServiceFacade.findDeliveryList();
	}
	// 납품화면 에서 사용될 수주조회
		@GetMapping("/findDeliveryContractList")
		public List<ContractTo> findCustomerList() {
			return contractServiceFacade.findDeliveryContractList();
		}

	// 납품 정보 등록 --> 이후에 stock 조정, status도?...
	// 납품 정보 등록하면 바로 납품이 된다는 의미인듯
	@PutMapping("/registDelivery")
	public void registDelivery(@RequestBody List<DeliveryTo> Delivery) {
		deliveryServiceFacade.registDelivery(Delivery);
	}
}
