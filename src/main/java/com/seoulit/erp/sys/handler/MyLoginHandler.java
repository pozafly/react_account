package com.seoulit.erp.sys.handler;

import com.seoulit.erp.hr.pm.to.EmployeeTo;
import com.seoulit.erp.sys.exception.IdNotFoundException;
import com.seoulit.erp.sys.exception.PwMissMatchException;
import com.seoulit.erp.sys.to.LoginTo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.ModelAndView;

import com.seoulit.erp.sys.service.BaseServiceFacade;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(value = "*", exposedHeaders = { "Authorization" })
public class MyLoginHandler {

	@Autowired
	BaseServiceFacade baseServiceFacade;

	@PostMapping("/api/auth/login")
	public Map<String, Object> login(@RequestBody Map<String, String> loginData, HttpServletResponse response)
			throws DataAccessException {
		Map<String, Object> result = new HashMap<>();
		LoginTo loginTo = new LoginTo();

		loginTo.setEmpCode(loginData.get("empCode"));
		loginTo.setPassword(loginData.get("password"));

		try {

			// response.addHeader("Authorization", baseServiceFacade.login(loginTo));

			// 여기부터
			EmployeeTo empTo = baseServiceFacade.myLogin(loginTo);
//			
//			if(empTo.getEmpCode()!=null) {
//				response.addHeader("Authorization", "enter");
//			}			
//			System.out.println(empTo);
			result.put("empInfo", empTo);

			// 여기까지

//			result.put("empName", logi)

			result.put("errorCode", loginTo.getErrorCode());
			result.put("errorMsg", loginTo.getErrorMsg());

		} catch (IdNotFoundException | PwMissMatchException e) {
			result.put("errorCode", 1);
			result.put("errorMsg", e.getMessage());
		}

		return result;
	}

	@PostMapping("/api/auth/logout")
	public Map<String, Object> logout(HttpServletRequest request, HttpServletResponse response) {
		Map<String, Object> result = new HashMap<>();

		try {
			request.getSession().invalidate();
			System.out.println("세션만료");
		} catch (Exception e) {
			result.put("errorCode", -1);
			result.put("errorMsg", e.getMessage());
		}

		return result;
	}

}
