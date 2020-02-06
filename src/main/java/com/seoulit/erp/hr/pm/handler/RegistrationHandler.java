package com.seoulit.erp.hr.pm.handler;

import com.seoulit.erp.hr.pm.service.PMServiceFacade;
import com.seoulit.erp.hr.pm.to.EmpInfoTo;
import com.seoulit.erp.hr.pm.to.EmployeeInfoTo;
import com.seoulit.erp.hr.pm.to.WorkInfoTo;
import org.apache.commons.io.FilenameUtils;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.util.HashMap;
import java.util.List;

//import com.seoulit.common.email.EmailManagement;

@RestController
@CrossOrigin("*")
@RequestMapping("/hr/pm/*")
public class RegistrationHandler {
	/* PMServiceFacade setting */
	@Autowired
	private PMServiceFacade pmServiceFacade;

	/*
	 * @Autowired private EmailManagement emailManagement;
	 */

	// 사원관련 정보를 가져오는 메서드
	@RequestMapping("/findEmpInfoList")
	public List<EmpInfoTo> findEmpInfoList() throws Exception {
		return pmServiceFacade.findEmpInfoList();
	}

	// 사원 한명의 코드를 가져오는 메서드
	@RequestMapping("/findEmpCode")
	public String findEmpCode() throws Exception {
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//		PlatformData outData = (PlatformData) request.getAttribute("outData");
//		String empCode = inData.getVariable("empCode").getString();
//		map.put("empCode", empCode);
		System.out.println("ddd");
		return pmServiceFacade.findEmpCode();
	}

	// 인설트하는 메서드
	@RequestMapping("/batchEmpInfoList")
	public void batchEmpInfoList(@RequestBody List<EmpInfoTo> batchEmpInfo) throws Exception {
		pmServiceFacade.batchEmpInfoList(batchEmpInfo);
		System.out.println(batchEmpInfo);
//		saveEmpImg(request, response);
	}

	// 업데이트하는 메서드
	@RequestMapping("/empInfoUpdate")
	public void batchEmpInfoList2(@RequestBody List<EmpInfoTo> empInfoSave) throws Exception {
		System.out.println(empInfoSave);
		pmServiceFacade.empInfoUpdate(empInfoSave);
//		saveEmpImg(request, response);
	}

	// 삭제메서드
	@RequestMapping("/empInfoDelete")
	public void batchEmpInfoList3(@RequestBody String empCode) throws Exception {
		System.out.println(empCode);
		String dd = empCode.substring(0, 4);
		System.out.println(dd);
		pmServiceFacade.empInfoDelete(dd);
//		saveEmpImg(request, response);
	}

	// 사원의 이미지를 저장하는 메서드
	@RequestMapping("/saveEmpImg/{empCode}")
	public void saveEmpImg(@RequestPart MultipartFile file, @PathVariable String empCode) throws Exception {
		EmpInfoTo empInfoTo = new EmpInfoTo();
		File destinationFile = null;
		String destinationFileName = null;
		String sourceFileName = file.getOriginalFilename();
		String sourceFileNameExtension = FilenameUtils.getExtension(sourceFileName).toLowerCase();

		String fileUrl = "D:\\spring01\\src\\main\\resources\\uploadFiles\\";

		do {

			destinationFileName = RandomStringUtils.randomAlphanumeric(30) + "." + sourceFileNameExtension;
			destinationFile = new File(fileUrl + destinationFileName);

		} while (destinationFile.exists());

		destinationFile.getParentFile().mkdirs();
		file.transferTo(destinationFile);

//        empInfoTo.setStatus("updated");
		empInfoTo.setImgSrc("destinationFileName");
		empInfoTo.setEmpCode(empCode);

		pmServiceFacade.saveImg(empInfoTo);

	}

	// 사원의 상세정보를 일괄처리하는 메서드
	@RequestMapping("/batchEmployeeInfoAll")
	public void batchEmployeeInfoAll(@RequestBody EmployeeInfoTo EmployeeInfoTo) throws Exception {
//		EmployeeInfoTo.setEmpInfoList(datasetBeanMapper.datasetToBeans(inData, EmpInfoTo.class));
//		EmployeeInfoTo.setWorkInfoList(datasetBeanMapper.datasetToBeans(inData, WorkInfoTo.class));
//		EmployeeInfoTo.setFamilyInfoList(datasetBeanMapper.datasetToBeans(inData, FamilyInfoTO.class));
//		EmployeeInfoTo.setLicenseInfoList(datasetBeanMapper.datasetToBeans(inData, LicenseInfoTO.class));
//		EmployeeInfoTo.setEducationInfoList(datasetBeanMapper.datasetToBeans(inData, EducationInfoTO.class));
		// EmployeeInfoTo.setSalInfoList(datasetBeanMapper.datasetToBeans(inData,
		// SalInfoTO.class));
		pmServiceFacade.batchEmployeeInfoAll(EmployeeInfoTo);
		// findEmployeeInfoAll(request,response);
	}

	// 해당사원의 모든 사원관련 상세정보를 가져오는 메서드
	@RequestMapping("/findEmployeeInfoAll")
	public EmployeeInfoTo findEmployeeInfoAll() throws Exception {
		return pmServiceFacade.findEmployeeInfoAll();
//		datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getEmpInfoList(), EmpInfoTo.class);
//		datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getWorkInfoList(), WorkInfoTo.class);
//		datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getFamilyInfoList(), FamilyInfoTO.class);
//		datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getLicenseInfoList(), LicenseInfoTO.class);
//		datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getEducationInfoList(), EducationInfoTO.class);
		// datasetBeanMapper.beansToDataset(outData, EmployeeInfoTo.getSalInfoList(),
		// SalInfoTO.class);
	}

//     재직증명서 pdf
//	@RequestMapping(value = "/pdfPrintEmp")
//    @ResponseBody()
//	public ModelAndView pdfPrintEmp(HttpServletRequest request, HttpServletResponse response) throws Exception {
//		String empCode = request.getParameter("empCode");
//		String format = request.getParameter("format");
//		System.out.println("empCode : "+empCode);
//		System.out.println("format : "+format);
//		List<ReportTo> reportList = pmServiceFacade.findEmpInfoReport(empCode);
//		JRBeanCollectionDataSource source = new JRBeanCollectionDataSource(reportList);
//
//		ModelMap modelMap = new ModelMap();
//		modelMap.put("format", format);
//		modelMap.put("source", source);
//		ModelAndView modelAndView = new ModelAndView("multiformat-view", modelMap);
//		//request.setAttribute("outData", null);
//		return modelAndView;
//	}

	// email 보내기
//	@RequestMapping("/sendEmail")
//	public void sendEmail(HttpServletRequest request, HttpServletResponse response) throws Exception {
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//		String empCode = inData.getVariable("sEmpCode").getString();
//		String sEmail = inData.getVariable("sEmail").getString();
//		emailManagement.sendEmailMgt(empCode, sEmail);
//	}

	// WorkInfo 테이블 정보를 조회
	@RequestMapping("/findWorkInfoAll")
	public List<WorkInfoTo> findWorkInfoAll() throws Exception {
		return pmServiceFacade.findWorkInfoAll();
	}

	// WorkInfo 테이블 사원코드정보를 조회
	@RequestMapping("/findWorkInfoCode")
	public List<WorkInfoTo> findWorkInfoCode() throws Exception {
		return pmServiceFacade.findWorkInfoCode();
	}
}