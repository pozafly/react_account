
// 결산 & 재무재표 statement  =========================================================================================================================
import totalTrialBalance from '../../../../pages/erp/account/statement/TotalTrialBalance/TotalTrialBalance';            // 합계잔액시산표 
import financialStatement from '../../../../pages/erp/account/statement/FinancialStatements/FinancialStatements';       // 재무상태표
import incomeStatement from '../../../../pages/erp/account/statement/IncomeStatement/IncomeStatementParents';          // 손익계산서



// 장부관리 accBookMgt ================================================================================================================================
import journalForm from '../../../../pages/erp/account/accBookMgt/JournalForm/JournalForm';                                 // 분개장
import cashjournal from '../../../../pages/erp/account/accBookMgt/cashJournal/CashJournal';                                 // 현금출납
import detailTrialBalance from '../../../../pages/erp/account/accBookMgt/DetailTrialBalance/DetailTrialBalanceParents';    // 일월계표
//import accountant from '../../../../pages/erp/account/accBookMgt/Accountant';                                             // [미구현] 거래처원장


// 전표관리 slip ======================================================================================================================================
import approval from '../../../../pages/erp/account/slip/Approval/Approval';  // 전표승인
import addSlip from '../../../../pages/erp/account/slip/AddSlip/AddSlip';   // 전표입력


// 전기분 재무제표 quarterFinanceStatements ===========================================================================================================
//import preIncomeStatement from '../../../../pages/erp/account/quarterFinanceStatements/PreIncomeStatement';           // [미구현] 전기분 손익계산서
//import preFinancialStatement from '../../../../pages/erp/account/quarterFinanceStatements/PreFinancialStatement';     // [미구현] 전기분 재무상태표


// 회계코드관리 /app/acc/ =============================================================================================================================
import accountTitle from '../../../../pages/erp/account/accountCode/AccountTitle';



export { journalForm, accountTitle, addSlip, cashjournal,  detailTrialBalance, totalTrialBalance, financialStatement,  incomeStatement, approval};      // 구현하면 export 하기




// // 결산 & 재무재표 statement  =========================================================================================================================
// export {default as totalTrialBalance} from '../../../../pages/erp/account/statement/TotalTrialBalance/TotalTrialBalance';            // 합계잔액시산표 
// export {default as financialStatements} from '../../../../pages/erp/account/statement/FinancialStatements/FinancialStatements';       // 재무상태표
// export {default as incomeStatementParents} from '../../../../pages/erp/account/statement/IncomeStatement/IncomeStatementParents';          // 손익계산서




