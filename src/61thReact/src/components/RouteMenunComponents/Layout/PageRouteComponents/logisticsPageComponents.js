// 영업 관리 /logi/business  ===================================================================================

import estimate  from '../../../../pages/erp/Logistics/business/Estimate/Estimate';                  //견적 관리	/app/logi/business/estimate 
import contract from '../../../../pages/erp/Logistics/business/Contract/Contract';                   //수주 관리	/app/logi/business/contract
import deliveryPlans from '../../../../pages/erp/Logistics/business/deliveryPlans/DeliveryPlans';    //납품 계획	/app/logi/business/deliveryPlans
//import slipStatements from '../../../../pages/erp/Logistics/business/slip';                        //전표 관리	/app/logi/business/slip             미구현


// 자재구매 관리 /logi/purchase  ===================================================================================

//import inventory from '../../../../pages/erp/Logistics/purchase/Inventory';       // 재고 관리	/app/logi/purchase/inventory    미구현
//import order from '../../../../pages/erp/Logistics/purchase/Order';               // 발주 관리	/app/logi/purchase/order        미구련
//import bom from '../../../../pages/erp/Logistics/purchase/Bom';                   // 자재 명세서(BOM) 	/app/logi/purchase/bom  미구현
//import item from '../../../../pages/erp/Logistics/purchase/Item';                 // 품목 관리	/app/logi/purchase/item         미구현
//import warehousing from '../../../../pages/erp/Logistics/purchase/Warehousing';   // 입출고 관리	/app/logi/purchase/warehousing  미구현



// 생산 관리 /logi/production  ===================================================================================

import workinstruction from '../../../../pages/erp/Logistics/production/workinstruction/Workinstruction';               // 작업 지시	/app/logi/production/workinstruction    미구현
//import productionPerformance from '../../../../pages/erp/Logistics/production/ProductionPerformance';   // 생산 실적 관리	/app/logi/production/productionPerformance  미구현
import mps from '../../../../pages/erp/Logistics/production/mps/Mps';                // 주생산계획 (MPS)	/app/logi/production/mps

export { estimate, contract, mps, workinstruction, deliveryPlans}; // 구현되면 export 하기 