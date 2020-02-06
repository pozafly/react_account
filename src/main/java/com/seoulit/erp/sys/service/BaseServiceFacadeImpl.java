package com.seoulit.erp.sys.service;

import com.seoulit.common.util.JwtUtil;
import com.seoulit.erp.hr.pm.dao.EmployeeDao;
import com.seoulit.erp.hr.pm.to.EmployeeTo;
import com.seoulit.erp.sys.dao.AuthorityDao;
import com.seoulit.erp.sys.dao.CodeDao;
import com.seoulit.erp.sys.dao.CodeDetailDao;
import com.seoulit.erp.sys.dao.MenuDao;
import com.seoulit.erp.sys.exception.IdNotFoundException;
import com.seoulit.erp.sys.exception.PwMissMatchException;
import com.seoulit.erp.sys.to.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;

import java.lang.reflect.Method;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class BaseServiceFacadeImpl implements BaseServiceFacade {

	@Autowired
	MenuDao menuDao;
	@Autowired
	EmployeeDao employeeDao;
	@Autowired
	CodeDao codeDao;
	@Autowired
	CodeDetailDao codeDetailDao;
	@Autowired
	AuthorityDao authorityDao;

	private JwtUtil jwtUtil = JwtUtil.getInstance();

	@Override
	public List<MenuTo> findMenuList() {
		List<MenuTo> flatMenuList = menuDao.selectMenuList();
		Map<String, MenuTo> treeMenuList = new HashMap<>();
		List<MenuTo> topMenuList = new ArrayList<>();

		for (MenuTo flatMenu : flatMenuList) {
			treeMenuList.put(flatMenu.getMenuCode(), flatMenu);
			// 자신이 최상위 메뉴일 경우
			if (flatMenu.getSuperMenuCode() == null)
				topMenuList.add(flatMenu);

			// 상위 메뉴가 존재할 경우
			else {
				if (!treeMenuList.containsKey(flatMenu.getSuperMenuCode())) {
					System.out.println("상위 메뉴가 존재하지 않습니다.");
					continue;
				}

				MenuTo menu = treeMenuList.get(flatMenu.getSuperMenuCode());

				// subMenuList가 생성되어 있지 않을 경우
				if (menu.getSubMenuList() == null)
					menu.setSubMenuList(new ArrayList<>());

				menu.getSubMenuList().add(flatMenu);
			}
		}
		return topMenuList;
	}

	@Override
	public String login(LoginTo loginTo) throws DataAccessException, IdNotFoundException, PwMissMatchException {
		EmployeeTo empTo = employeeDao.selectEmployee(loginTo.getEmpCode());

		String authorization;

		if (empTo == null)
			throw new IdNotFoundException("아이디를 찾을 수 없습니다.");
		else if (!empTo.getPassword().equals(loginTo.getPassword()))
			throw new PwMissMatchException("비밀번호가 틀렸습니다.");
		else
			authorization = jwtUtil.encode(empTo);

		return authorization;
	}

	@Override
	public List<CodeTo> findCodeList() {
		return codeDao.selectCodeList();
	}

	@Override
	public List<CodeDetailTo> findCodeDetailList() {
		return codeDetailDao.selectAllCodeDetailList();
	}

	@Override
	public List<CodeDetailTo> findPayStepCodeDetailList(String divisionCode) {
		// TODO Auto-generated method stub
		return codeDetailDao.selectPayStepCodeDetailList(divisionCode);
	}

	@Override
	public List<AuthorityTo> findAuthorityList() {
		return authorityDao.selectAuthorityList();
	}

	@Override
	public List<AuthorityTo> findMenuAuthorityList(Map<String, Object> data) {
		String authorityCode = data.get("authorityCode").toString();
		return authorityDao.selectMenuAuthorityList(authorityCode);
	}

	@Override
	public <T> void batchDetailCodeProcess(T TO, Map<String, Object> codeColumn) {
		// TODO Auto-generated method stub
		try {
			CodeDetailTo codeDetailTO = new CodeDetailTo();
			Method method = TO.getClass().getMethod("getStatus");
			codeDetailTO.setStatus((String) method.invoke(TO));
			for (String key : codeColumn.keySet()) {
				String colValue = (String) codeColumn.get(key);
				if (colValue != null) {
					switch (key) {
					case "divisionCodeNo":
						codeDetailTO.setDivisionCodeNo(colValue);
						break;
					case "detailCode":
						codeDetailTO.setDetailCode(colValue);
						break;
					case "detailCodeName":
						codeDetailTO.setDetailCodeName(colValue);
						break;
					}
				}
			}
			switch (codeDetailTO.getStatus()) {
			case "inserted":
				codeDetailDao.insertDetailCode(codeDetailTO);
				break;
			case "deleted":
				codeDetailDao.deleteDetailCode(codeDetailTO);
				break;
			case "updated":
				codeDetailDao.updateDetailCode(codeDetailTO);
				break;
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Override
	public void batchDetailCodeProcess(List<CodeDetailTo> codeDetailList) {
		for (CodeDetailTo codeDetailTo : codeDetailList) {
			switch (codeDetailTo.getStatus()) {
			case "inserted":
				codeDetailDao.insertDetailCode(codeDetailTo);
				break;
			case "updated":
				codeDetailDao.updateDetailCode(codeDetailTo);
				break;
			case "deleted":
				codeDetailDao.deleteDetailCode(codeDetailTo);
				break;
			}
		}
	}

	@Override
	public EmployeeTo myLogin(LoginTo loginTo) throws DataAccessException, IdNotFoundException, PwMissMatchException {
		EmployeeTo empTo = employeeDao.selectEmployee(loginTo.getEmpCode());

		if (empTo == null)
			throw new IdNotFoundException("아이디를 찾을 수 없습니다.");
		else if (!empTo.getPassword().equals(loginTo.getPassword()))
			throw new PwMissMatchException("비밀번호가 틀렸습니다.");
		else

			return empTo;
	}

}
