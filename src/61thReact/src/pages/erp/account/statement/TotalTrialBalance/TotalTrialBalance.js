import React, { useState } from 'react';
import TotalTrialBalance_Grid from './TotalTrialBalanceGrid';
import TotalTrialBalance_Search from './TotalTrialBalanceSearch';


const TotalTrialBalance = () => {

    // 날짜 관련 상태값 정의
   const [date, setDate] = useState({
      approvalDate :''
   });

    return (
        <React.Fragment>
            <TotalTrialBalance_Search date={date} setDate={setDate}/>
            <TotalTrialBalance_Grid date={date} />
        </React.Fragment >
    );

}


export default TotalTrialBalance;