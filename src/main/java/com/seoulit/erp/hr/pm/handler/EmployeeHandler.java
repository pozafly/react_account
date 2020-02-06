package com.seoulit.erp.hr.pm.handler;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.seoulit.erp.hr.pm.service.PMServiceFacade;
import com.seoulit.erp.hr.pm.to.EmployeeTo;

@CrossOrigin("*")
@RestController
@RequestMapping("/hr/pm/*")
public class EmployeeHandler {

	@Autowired
	private PMServiceFacade pmServiceFacade;

	@RequestMapping("/findEmployeeList")
	public List<EmployeeTo> findEmployeeList() throws Exception {
		System.out.println("이승석1111");
		return pmServiceFacade.findEmployeeList();
	}

//	@RequestMapping("/batchEmployeeList")
//	public void batchEmployeeList(@RequestBody List<EmployeeTo> employeeList) throws Exception {
//		pmServiceFacade.batchEmployeeList(employeeList);
//		//saveEmpImg(request, response);
//
//	}

//	@RequestMapping("/saveEmpImg")
//	public void saveEmpImg(HttpServletRequest request, HttpServletResponse response) throws Exception {
//
//		request.getAttribute("outData");
//		PlatformData inData = (PlatformData) request.getAttribute("inData");
//
//
//		DataSet dataset = inData.getDataSet("ds_Img");
//		FileOutputStream out = null;
//		String fileName = dataset.getColumn("EMP_FILENAME").toString();
//		try {
//			if (fileName != null) {
//				out = new FileOutputStream("C:\\eclipse-workspaceLogi\\HOHZERP\\src\\main\\webapp\\Photos\\empPhoto\\" + fileName);//�궗吏꾩��옣 寃쎈줈
//
//
//				byte[] file = dataset.getBlob(0,"IMG_FILE_DATA");
//				BufferedOutputStream bufferedOut = new BufferedOutputStream(out);
//				bufferedOut.write(file);
//				bufferedOut.flush();
//				bufferedOut.close();
//				out.close();
//				bufferedOut = null;
//				out = null;
//			}
//		}catch(Exception e){
//			System.out.println(e.getMessage());
//		}
//	}
}
