import React, { useState } from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';

import Common_Menu from '../../../../../api/common/Common_Menu';
import Common_Grid from '../../../../../api/common/Common_Grid';

const CashJournal = () => {
    
        const [ gridData, setGridData ] = useState({
            title : "기간 조회",
            fromDate :'0',
            toDate : '0',
            columDefs : [
                { headerName: "시작 날짜", field: "monthReportingDate", width: 150 },
                { headerName: "종료 날짜", field: "reportingDate", width: 150 },
                { headerName: "바용보고서", field: "expenseReport", width: 150 },
                { headerName: "회사 코드", field: "customerCode", width: 150 },
                { headerName: "회사명", field: "customerName", width: 150 },
                { headerName: "차변", field: "deposit", width: 150 },
                { headerName: "대변", field: "withdrawal", width: 150 },
                { headerName: "balance", field: "balance", width: 150 } 
            ],
    
            getUrl : '/account/accBookMgt/getCashJournal',
            // putUrl : '/account/accBookMgt/getCashJournal',
    
            // newData : [{
            //     monthReportingDate : 1,
            //     reportingDate : 2,
            //     expenseReport : 3,
            //     customerCode : 4,
            //     customerName : 5,
            //     deposit : 6,
            //     withdrawal : 7,
            //     balance : 8,
            //     status : 'insert'
            // }]
        }) 
          
        return (
            <React.Fragment>
                <Common_Menu gridData={gridData} setGridData={setGridData}/>
                <Common_Grid gridData={gridData}/>
            </React.Fragment >
        );
    }
    export default CashJournal;
