import React from "react";
import {
  Route,
  Switch,
  Redirect,
  withRouter,
} from "react-router-dom";
import classnames from "classnames";

// styles
import useStyles from "./styles";


// components
import HeaderContainer from "../Header/HeaderContainer";
import Sidebar from "../Sidebar/Sidebar";


// pages
import Dashboard from '../../../pages/dashboard/Dashboard';


import * as additional from './additionalFunctionRouteComponents/additionalFunctionComponent';

import * as account from "./PageRouteComponents/accountPageComponents";
import * as logistic from './PageRouteComponents/logisticsPageComponents';
import * as personnel from './PageRouteComponents/personnelPageComponents';

// context
import { useLayoutState } from "../../../api/context/LayoutContext";



function Layout(props) {


  
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
        <>
          <HeaderContainer history={props.history} />
          <Sidebar />
          <div
            className={classnames(classes.content, {
              [classes.contentShift]: layoutState.isSidebarOpened,
            })}
          >
            <div className={classes.fakeToolbar} />


            <Switch>

              {/* 메인 홈 */}
              <Route path="/app/dashboard" component={Dashboard} />

              {/* 회계업무 Route++ */}
              <Route exact path="/app/acc" render={() => <Redirect to="/app/acc/accBookMgt/journalForm" />} />

                  {/* 회계코드관리 */}
                    <Route path="/app/acc/accountCode/accountTitle" component={account.accountTitle} />                        {/* 계정과목코드 */}

                  {/* 장부관리 */}
                    <Route path="/app/acc/accBookMgt/journalForm" component={account.journalForm} />                          {/* 분개장 */}
                    <Route path="/app/acc/accBookMgt/cashJournal" component={account.cashjournal} />                          {/* 현금출납 */}
                    <Route path="/app/acc/accBookMgt/detailTrialBalance" component={account.detailTrialBalance} />            {/* 일월계표 */}

                  {/* 전표관리 */}
                    <Route path="/app/acc/slip/addSlip" component={account.addSlip} />                                        {/* 전표등록 */}
                    <Route path="/app/acc/slip/approval" component={account.approval} />                                        {/* 전표승인 */}

                  {/* 결산 & 재무재표 */}
                    <Route exact path="/app/acc/statement/totalTrialBalance"  component={account.totalTrialBalance} />        {/* 합계잔액시산표 */}
                    <Route exact path="/app/acc/statement/financialStatement"  component={account.financialStatement} />      {/* 재무상태표 */}
                    <Route exact path="/app/acc/statement/incomeStatement"  component={account.incomeStatement} />            {/* 손익계산서 */}

              {/* 인사업무 Route++ */}
              <Route exact path="/app/hr" render={() => <Redirect to="/app/hr/attendance/DailyAttdApply" />}/>

                  {/* 근태관리 */}
                    <Route exact path="/app/hr/attendance/dailyAttdApply"  component={personnel.dailyAttdApply} />            {/* 일일근태관리 */}
                    <Route exact path="/app/hr/attendance/monthlyAttd"  component={personnel.monthlyAttd} />                  {/* 월간근태관리 */}
                    <Route exact path="/app/hr/attendance/attdApproval"  component={personnel.attdApproval} />                {/* 휴가/연차 신청 */}
                    <Route exact path="/app/hr/attendance/annualLeaveApply"  component={personnel.annualLeaveApply} />        {/* 근태승인관리 */}
                    <Route exact path="/app/hr/attendance/restDailyAttdApply"  component={personnel.restDailyAttdApply} />    {/* 근태외신청 */}
                    <Route exact path="/app/hr/attendance/overNightApply"  component={personnel.overNightApply} />            {/* 초과근무신청 */}


                  {/* 기초환경설정 */}
                    <Route exact path="/app/hr/circumstance/payStep"  component={personnel.payStep} />                            {/* 호봉테이블관리 */}
                    <Route exact path="/app/hr/circumstance/registPayDeduction"  component={personnel.registPayDeduction} />      {/* 지급공제항목등록 */}
                    <Route exact path="/app/hr/circumstance/registDeductionTax"  component={personnel.registDeductionTax} />      {/* 사회보험환경등록 */}
                    <Route exact path="/app/hr/circumstance/basicWorktime"  component={personnel.basicWorktime} />                {/* 기본근무시간관리 */}
                    <Route exact path="/app/hr/circumstance/holiday"  component={personnel.holiday} />                            {/* 휴일관리 */}
                    <Route exact path="/app/hr/circumstance/annualLeave"  component={personnel.annualLeave} />                    {/* 휴가/연차관리 */}
                    <Route exact path="/app/hr/circumstance/allowance"  component={personnel.allowance} />                        {/* 수당관리 */}



                  {/* 인사발령관리 */}
                    <Route exact path="/app/hr/appointment/registPersonnelByEmpoyee"  component={personnel.registPersonnelByEmpoyee} />      {/* 사원별 인사등록 */}
                    <Route exact path="/app/hr/appointment/registAppointment"  component={personnel.registAppointment} />                    {/* 인사발령등록 */}

                  {/* 인사관리 */}
                    <Route path="/app/hr/pm/dept" component={personnel.dept} />                                           {/* 부서관리 */}
                    <Route path="/app/hr/pm/registPersonnelInfo" component={personnel.registPersonnelInfo} />             {/* 인사정보등록 */}
                    <Route path="/app/hr/pm/personnelRecordCard" component={personnel.personnelRecordCard} />             {/* 인사기록카드 */}



              {/* 물류업무 Route++ */}
              <Route exact path="/app/logi" render={() => <Redirect to="/app/logi/business/estimate" />}/>

                  {/* 영업 관리 */}
                  <Route path="/app/logi/business/estimate" component={logistic.estimate} />             {/* 견적 관리 */}
                  <Route path="/app/logi/business/contract" component={logistic.contract} />             {/* 수주 관리 */}
                  <Route path="/app/logi/business/deliveryPlans" component={logistic.deliveryPlans} />   {/* 납품 계획 */}


                  {/* 생산 관리 */}
                  <Route path='/app/logi/production/mps' component={logistic.mps} />                            {/* 주생산계획 (MPS) */}     
                  <Route path='/app/logi/production/workinstruction' component={logistic.workinstruction} />    {/* 작업 지시 */}


              {/* 부가기능 Route */}
              <Route path="/app/typography" component={additional.Typography} />
              <Route path="/app/tables" component={additional.Tables} />
              <Route path="/app/notifications" component={additional.Notifications} />

              <Route exact path="/app/ui" render={() => <Redirect to="/app/ui/icons" />}/>

                <Route path="/app/ui/maps" component={additional.Maps} />
                <Route path="/app/ui/icons" component={additional.Icons} />
                <Route path="/app/ui/charts" component={additional.Charts} />
            </Switch>
          </div>
        </>
    </div>
  );
}



export default withRouter(Layout);
