package com.seoulit.erp.logi.production.service;


import com.seoulit.erp.account.accBookMgt.to.JournalFormTO;
import com.seoulit.erp.logi.business.to.ContractDetailTo;
import com.seoulit.erp.logi.production.to.*;

import java.util.List;
import java.util.Map;

public interface ProductionServiceFacade {
    /*MpsHandler*/
	List<MpsTo> getMpsList(String startDate, String endDate);

    void registMps(List<MpsTo> mpsList, List<ContractDetailTo> contractDetailList);

    /*MrpHandler*/
    List<MrpTo> findMrpList(Map<String, Object> paramMap);

    List<MrpOpenTempTo> findMrpOpenTempProcessList(List<MpsTo> paramMap);

    void registMrpGathering(Map<String, Object> paramMap);

    List<MrpGatheringTo> findMrpGatheringList(Map<String, Object> paramMap);

    void batchMrpGathering(List<MrpGatheringTo> mrpGatheringList);

    /*PrmHandler*/
    List<PrmTo> findPrmList();

    void registPrm(String empCode, List<PrmTo> prmList);

    /*WorkInstructionHandler*/

    void findMaterialCheckTempList(Map<String, Object> paramMap);
    
    void updateWorkInstruction(String paramMap);

    void updateWorkInstruction2(String paramMap);
    
    
    List<WorkInstructionTo> findWorkInstructionList();
    List<WorkInstructionTo> findWorkInstructionList2();
    List<WorkInstructionTo> findWorkInstructionList3();

	
}