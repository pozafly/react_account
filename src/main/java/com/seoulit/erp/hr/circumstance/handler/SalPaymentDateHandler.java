package com.seoulit.erp.hr.circumstance.handler;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.SalPaymentDateTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
public class SalPaymentDateHandler {

	@Autowired
	private CircumstanceServiceFacade circumstanceFacade;

	@RequestMapping("hr/circumstance/findSalPaymentDateList.do/{inputedYearMonth}")
	public List<SalPaymentDateTo> findSalPaymentDateList(@PathVariable String inputedYearMonth) throws Exception {
		return circumstanceFacade.findSalPaymentDateList(inputedYearMonth);
	}

	// 귀속년월의 급/상여 지급일 및 관련정보를 등록및 수정,삭제한 내용을 일괄처리하는 메서드
	@RequestMapping("hr/circumstance/batchSalPaymentDate.do")
	public void batchSalPaymentDate(@RequestBody List<SalPaymentDateTo> salPaymentDateList) throws Exception {
		circumstanceFacade.batchSalPaymentDate(salPaymentDateList);
	}

}
