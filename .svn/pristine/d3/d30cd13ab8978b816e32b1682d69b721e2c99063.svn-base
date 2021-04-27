import React, { useState } from 'react';
import DetailTrialBalance_Menu from './DetailTrialBalanceMenu';
import DetailTrialBalance_Grid from './DetailTrialBalanceGrid';


const DetailTrialBalance_Parents = () => {

    // 날짜 관련 상태값 정의
    const [date, setDate] = useState({
        fromDate :'',
        toDate : ''
        });

    return (
        <React.Fragment>
            <DetailTrialBalance_Menu date={date} setDate={setDate}/>
            <DetailTrialBalance_Grid date={date} />
        </React.Fragment >
    );

}


export default DetailTrialBalance_Parents;