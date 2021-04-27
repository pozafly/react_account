package com.seoulit.erp.hr.circumstance.handler;

import com.seoulit.erp.hr.circumstance.service.CircumstanceServiceFacade;
import com.seoulit.erp.hr.circumstance.to.PayStepTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.ModelMap;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sql.DataSource;
import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/hr/circumstance/*")
public class PayStepHandler {

	@Autowired
	private CircumstanceServiceFacade circumstanceFacade;

	@Autowired
	private DataSource dataSource;

	/* 호봉목록을 가져오는 메서드 */
	@RequestMapping("/findPayStepList")
	@ResponseBody
	public List<PayStepTo> findPayStepList(String positionCode) throws Exception {
		return circumstanceFacade.findPayStepList(positionCode);
	}

	/* 호봉관련처리를 일괄적으로 하는 메서드 */
	@RequestMapping("/batchPayStep")
	public void batchPayStep(@RequestBody List<PayStepTo> payStepList) throws Exception {
		circumstanceFacade.batchPayStepList(payStepList);

	}

	@RequestMapping("/pdfPrint")
	public ModelAndView pdfPrintEmp(HttpServletRequest request, HttpServletResponse response) throws Exception {
		String contract_no = request.getParameter("contractNo");
		// response.getOutputStream().flush();

		ModelMap modelMap = new ModelMap();
		modelMap.put("format", "pdf");
		modelMap.put("contract_no", contract_no);
		modelMap.put("jdbcDataSource", dataSource);
		ModelAndView modelAndView = new ModelAndView("multiformat-view", modelMap);

		return modelAndView;
	}

}
