// 기초환경설정 /app/hr/circumstance-----------------------------------------------------------


import payStep from "../../../../pages/erp/personnel/circumstance/payStep/PayStep";                       // 호봉테이블 관리	/app/hr/circumstance/payStep 미구현
import registPayDeduction from "../../../../pages/erp/personnel/circumstance/registPayDeduction/RegistPayDeduction"; // 지급공제항목등록	/app/hr/circumstance/registPayDeduction	미구현
import registDeductionTax from '../../../../pages/erp/personnel/circumstance/registDeductionTax/RegistDeductionTax'; // 사회보험환경등록	/app/hr/circumstance/registDeductionTax	미구현
import basicWorktime from '../../../../pages/erp/personnel/circumstance/basicWorktime/BasicWorkTime';           // 기본근무시간관리	/app/hr/circumstance/basicWorktime 미구현
import holiday from '../../../../pages/erp/personnel/circumstance/holiday/Holiday';                       // 휴일관리	/app/hr/circumstance/holiday	미구현
import annualLeave from '../../../../pages/erp/personnel/circumstance/annualLeave/AnnualLeave';               // 휴가/연차관리	/app/hr/circumstance/annualLeave	미구현
import allowance from '../../../../pages/erp/personnel/circumstance/allowance/Allowance';                   // 수당관리	/app/hr/circumstance/allowance	미구현



// 인사관리	/app/hr/pm	-----------------------------------------------------------

import registPersonnelInfo from '../../../../pages/erp/personnel/pm/registPersonnelInfo/RegistPersonnelInfo';       // 인사정보등록	/app/hr/pm/registPersonnelInfo	미구현
import personnelRecordCard from '../../../../pages/erp/personnel/pm/personnelRecordCard/PersonnelRecordCard';       // 인사기록카드	/app/hr/pm/personnelRecordCard	미구현
//import educationTraining from '../../../../pages/erp/personnel/pm/EducationTraining';           // 교육등록	/app/hr/pm/educationTraining 미구현
import dept from '../../../../pages/erp/personnel/pm/dept/Dept';                                     // 교육등록	/app/hr/pm/dept 미구현

// 근태관리	/app/hr/attendance ---------------------------------------------------------------

import dailyAttdApply from '../../../../pages/erp/personnel/attendance/dailyAttdApply/DailyAttdApply';               // 일일근태관리	/app/hr/attendance/dailyAttdApply	미구현
import monthlyAttd from '../../../../pages/erp/personnel/attendance/monthlyAttd/MonthlyAttd';                     // 월간근태관리	/app/hr/attendance/monthlyAttd	미구현
import attdApproval from '../../../../pages/erp/personnel/attendance/attdApproval/AttdApproval';                   // 휴가/연차 신청	/app/hr/attendance/attdApproval	 미구현
import annualLeaveApply from '../../../../pages/erp/personnel/attendance/annualLeaveApply/AnnualLeaveApply';           // 근태승인관리	/app/hr/attendance/annualLeaveApply	 미구현
import restDailyAttdApply from "../../../../pages/erp/personnel/attendance/restDailyAttdApply/RestDailyAttdApply";       // 근태외신청 	/app/hr/attendance/restDailyAttdApply	미구현
import overNightApply from '../../../../pages/erp/personnel/attendance/overNightApply/OverNightApply';               // 초과근무신청	/app/hr/attendance/overNightApply	미구현


// 인사발령관리	/app/hr/appointment ------------------------------------------------------------------

import registPersonnelByEmpoyee from '../../../../pages/erp/personnel/appointment/RegistPersonnelByEmpoyee';   // 사원별 인사등록	/app/hr/appointment/registPersonnelByEmpoyee	
import registAppointment from '../../../../pages/erp/personnel/appointment/RegistAppointment';                 // 인사발령등록	/app/hr/appointment/registAppointment	

// 급여관리	/app/hr/pay	-------------------------------------------------------------------

//import salary  from "../../../../pages/erp/personnel/pay/Salary";   // 급여조회	/app/hr/pay/salary	


export {
    basicWorktime, holiday, dailyAttdApply, monthlyAttd, attdApproval, annualLeaveApply, restDailyAttdApply, overNightApply,
    registPersonnelByEmpoyee, registAppointment, dept, registPersonnelInfo, personnelRecordCard, payStep, registPayDeduction,
    registDeductionTax, annualLeave, allowance
} // 구현 되었을때만 export 하기


