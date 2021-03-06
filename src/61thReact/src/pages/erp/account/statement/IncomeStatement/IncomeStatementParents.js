import React, { useState } from 'react';
import IncomeStatement_Menu from './IncomeStatementMenu';
import IncomeStatement_Grid from './IncomeStatementGrid';


const IncomeStatement_Parents = () => {

    // 날짜 관련 상태값 정의
    const [date, setDate] = useState({
        approvalDate : ''
    });

    return (
        <React.Fragment>
            <IncomeStatement_Menu date={date} setDate={setDate}/>
            <IncomeStatement_Grid date={date} />
        </React.Fragment >
    );
}

export default IncomeStatement_Parents;