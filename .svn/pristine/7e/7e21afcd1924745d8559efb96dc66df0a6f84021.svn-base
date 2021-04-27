package com.seoulit.erp.hr.attendance.service;

import com.seoulit.erp.hr.attendance.dao.AttdReportDao;
import com.seoulit.erp.hr.attendance.dao.DailyAttdDao;
import com.seoulit.erp.hr.attendance.dao.DailyAttdRestDao;
import com.seoulit.erp.hr.attendance.dao.DayAnnualDao;
import com.seoulit.erp.hr.attendance.to.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class AttendanceServiceFacadeImpl implements AttendanceServiceFacade {

	@Autowired
	private AttdReportDao attdReportDao;
	@Autowired
	private DailyAttdDao dailyAttdDao;
	@Autowired
	private DailyAttdRestDao dailyAttdRestDao;
	@Autowired
	private DayAnnualDao dayAnnualDao;

	
	/* AttdReportDao */
	// 연장 심야 신청 리스트
	@Override
	public List<OverNightReportTo> findOverNightReport(Map<String, String> map) {

		return attdReportDao.selectOverNightReport(map);
	}

	// 연장 심야 신청등록, 신청삭제, 승인업데이트
	public void batchOverNight(List<OverNightReportTo> overNightReportList) {

		for (OverNightReportTo overNightReportTO : overNightReportList) {

			switch (overNightReportTO.getStatus()) {

			case "inserted":
				overNightReportTO.setBasicDay(overNightReportTO.getBasicDay().replaceAll("-", ""));
				overNightReportTO.setRequestDate(overNightReportTO.getRequestDate().replaceAll("-", ""));
				overNightReportTO.setFromTime(overNightReportTO.getFromTime().replaceAll(":", ""));
				overNightReportTO.setToTime(overNightReportTO.getToTime().replaceAll(":", ""));

				attdReportDao.insertOverNightReport(overNightReportTO);
				break;
			case "updated":
				attdReportDao.updateApprovalStatus(overNightReportTO);
				break;
			case "deleted":
				attdReportDao.deleteOverNightReport(overNightReportTO);
				break;

			}
		}
	}

	@Override
	// 해당년월의 일근태관리테이블의 데이터중 미마감인 day관련 정보를 조회하는 항목
	public List<DailyAttdReportTo> findUnClosedDailyAttdReport(Map<String, Object> map) {

		return attdReportDao.selectUnClosedDailyAttdReport(map);
	}

	@Override
	// 일근태관리테이블에서 기준일에 해당하는 데이터를 생성,조회하는 메서드
	public List<DailyAttdReportTo> findDailyAttdReport(String basicDate) {

		Map<String, String> map = new HashMap<>();
		map.put("basicDate", basicDate);

		attdReportDao.createDailyAttdReport(map);

		int errorCode = Integer.parseInt((String) map.get("errorCode"));

		return attdReportDao.selectDailyAttdReportByDate(basicDate);
	}

	@Override
	// 일근태관리테이블에서 기준일에 해당하는 승인된 데이터를 조회하는 메서드
	public List<DailyAttdReportTo> findApprovalDailyAttdReport(String basicDate) {

		return attdReportDao.selectApprovalDailyAttdReport(basicDate);
	}

	@Override
	// 월근태관리테이블에서 기준일에 해당하는 데이터를 생성,조회하는 메서드
	public List<MonthAttdReportTo> findMonthAttdReport(Map<String, Object> map) {

		attdReportDao.createMonthAttdReport(map);
		int errorCode = Integer.parseInt((String) map.get("errorCode"));
		// System.out.println("프로시저에서 에러발생 ::"+map.get("errorMsg"));

		return attdReportDao.selectDailyAttdReportByYearMonth(map);
	}

	@Override
	// 해당날짜의 일근태를 마감하는 메서드 (Y-> N / N-> Y )
	public void updateDailyAttdCloseYN(List<DailyAttdReportTo> dailyAttdReportList) {
		for (DailyAttdReportTo dailyAttdReportTO : dailyAttdReportList) {
			attdReportDao.updateDailyAttdCloseYN(dailyAttdReportTO);
		}
	}

	@Override
	// 월근태 미마감항목 조회에서 일근태/근태외를 미마감한 경우 일괄적으로 처리하는 메서드
	public List<DailyAttdReportTo> batchDailyAttdCloseYN(List<DailyAttdReportTo> dailyAttdReportList) {

		String baseYearMonth = null;
		for (DailyAttdReportTo dailyAttdReportTO : dailyAttdReportList) {
			attdReportDao.updateDailyAttdCloseYN(dailyAttdReportTO);
			if (baseYearMonth == null) {
				baseYearMonth = dailyAttdReportTO.getBasicDay(); // 날짜를 얻어옴
			}

		}
		baseYearMonth = baseYearMonth.substring(0, 6);
		Map<String, Object> map = new HashMap<>();
		map.put("baseYearMonth", baseYearMonth);
		return findUnClosedDailyAttdReport(map);
	}

	@Override
	public List<MonthAttdReportTo> findClosedMonthAttdReport(Map<String, Object> map) {

		return attdReportDao.selectClosedMonthAttdReport(map);
	}

	@Override
	public void updateMonthAttdCloseYN(List<MonthAttdReportTo> monthAttdReportList) {

		String basicYearMonth = monthAttdReportList.get(0).getBasicYearMonth();
		String closeYn = monthAttdReportList.get(0).getCloseYn();
		Map<String, String> map = new HashMap<>();
		map.put("basicYearMonth", basicYearMonth);
		map.put("closeYn", closeYn); // map에 담아서 넘김..
		attdReportDao.updateMonthAttdCloseYN(map);

	}

	@Override
	// 연장 심야 승인관리
	public List<OverNightReportTo> findOverNightReportByCondition(Map<String, Object> map) {

		return attdReportDao.selectOverNightReportByCondition(map);
	}

	/* DailyAttdDAO */
	@Override
	// 일근태목록을 가지고 오는 메서드
	public List<DailyAttdTo> findDailyAttdList(Map<String, String> map) {

		return dailyAttdDao.selectDailyAttdList(map);
	}

	@Override
	// 근태신청한 내용을 추가하는 메서드
	public List<DailyAttdTo> registerDailyAttd(DailyAttdTo dailyAttdTO) {

		dailyAttdDao.insertDailyAttdList(dailyAttdTO);

		Map<String, String> map = new HashMap<>();
		map.put("empCode", dailyAttdTO.getEmpCode());
		map.put("basicDay", dailyAttdTO.getBasicDay());
		map.put("basicDay", dailyAttdTO.getBasicDay());

		return dailyAttdDao.selectDailyAttdList(map);
	}

	// 일근태 목록을 수정,추가,삭제 하는 메서드
	@Override
	public void batchDailyAttd(List<DailyAttdTo> dailyAttdList) {

		for (DailyAttdTo dailyAttdTO : dailyAttdList) {
			switch (dailyAttdTO.getStatus()) {

			case "inserted":
				dailyAttdTO.setBasicDay(dailyAttdTO.getBasicDay().replaceAll("-", ""));
				dailyAttdTO.setTime(dailyAttdTO.getTime().replaceAll(":", ""));
				dailyAttdDao.insertDailyAttdList(dailyAttdTO);
				break;

			case "deleted":
				dailyAttdDao.deleteDailyAttdList(dailyAttdTO);
				break;
			}

		}

	}

	// 일근태 승인부분에서 일근태를 조건에 따라 조회하는 메서드
	@Override
	public List<DailyAttdTo> findDailyAttdListByCondition(Map<String, Object> map) {

		return dailyAttdDao.selectDailyAttdListByCondition(map);
	}

	/* DailyAttdRestDAO */
// 근태외 목록을 가지고오는 메서드
	@Override
	public List<DailyAttdRestTo> findAttdRestList(Map<String, Object> map) {

		return dailyAttdRestDao.selectAttdRestList(map);
	}

	// 근태외 목록을 등록,수정,삭제 하는 메서드
	@Override
	public void batchDailyAttdRest(List<DailyAttdRestTo> dailyAttdRestList) {

		for (DailyAttdRestTo dailyAttdRestBean : dailyAttdRestList) {
			switch (dailyAttdRestBean.getStatus()) {
			case "inserted":
				dailyAttdRestDao.insertAttdRestList(dailyAttdRestBean);
				break;
			case "updated":
				dailyAttdRestDao.updateAttdRestList(dailyAttdRestBean);
				break;
			case "deleted":
				dailyAttdRestDao.deleteAttdRestList(dailyAttdRestBean);
				break;
			}
		}
	}

	@Override
	public List<DailyAttdRestTo> findAttdRestListByCondition(Map<String, Object> map) {

		return dailyAttdRestDao.selectAttdRestListByCondition(map);
	}

	/* DayAnnualDAO */

	/* 해당년도, 해당사원의 연차정보, 사원정보를 조회하는 메서드 */
	@Override
	public List<DayAnnualTo> findAnnualMgt(Map<String, String> map) {
		return dayAnnualDao.selectAnnualMgt(map);
	}

	// 연차를 신청하는 메서드
	@Override
	public List<DayAnnualTo> addDayAnnual(DayAnnualTo dayAnnualTO) {
		dayAnnualDao.insertDayAnnual(dayAnnualTO);
		Map<String, String> map = new HashMap<>();
		map.put("empCode", dayAnnualTO.getEmpCode());
		map.put("standardYear", dayAnnualTO.getStandardYear());
		return findAnnualMgt(map);
	}

	@Override
	public List<DayAnnualTo> findDayAnnualListByCondition(Map<String, Object> map) {

		return dayAnnualDao.selectDayAnnualListByCondition(map);
	}

	@Override
	public void batchDayAnnual(List<DayAnnualTo> dayAnnualList) {

		for (DayAnnualTo dayAnnualBean : dayAnnualList) {
			switch (dayAnnualBean.getStatus()) {

			case "inserted":
				dayAnnualDao.insertDayAnnual(dayAnnualBean);
				break;
			case "updated":
				dayAnnualDao.updateDayAnnual(dayAnnualBean);
				break;
			case "deleted":
				dayAnnualDao.deleteDayAnnual(dayAnnualBean);
				break;
			}
		}
	}
}
