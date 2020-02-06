import React, {useState} from 'react';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button } from "@material-ui/core";
import accountApi from '../../../../../api/axios/accountApi';


const CashJournal_Grid = ({date}) => {
    // prop 값을 사용하기 편하게 비구조 할당
    const {fromDate, toDate} = date;

    const [data, setData] = useState([]);

const selectData = async event => {  

    const response = await accountApi.get('/accBookMgt/getCashJournal', {
        params:{
            fromDate: fromDate,
            toDate: toDate
           
        }
    });
    console.log(response.data);
    setData(response.data);
}
    const amountColumnDefs = [    
        { headerName: "시작 날짜", field: "monthReportingDate", width: 150 },
        { headerName: "종료 날짜", field: "reportingDate", width: 150 },
        { headerName: "바용보고서", field: "expenseReport", width: 150 },
        { headerName: "회사 코드", field: "customerCode", width: 150 },
        { headerName: "회사명", field: "customerName", width: 150 },
        { headerName: "차변", field: "deposit", width: 150 },
        { headerName: "대변", field: "withdrawal", width: 150 },
        { headerName: "balance", field: "balance", width: 150 }       
    ];


    return (
    <React.Fragment>
        <br/>

        <div
                className={"ag-theme-balham"}
                style={{
                    height: "500px",
                    width: "100%",
                    paddingTop: "20px"
                }}>
                <div align="left">
                    <Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={selectData}
                        > 조회
                    </Button>
                </div><br/>

                <AgGridReact
                    columnDefs={amountColumnDefs}
                    rowData={data}
                    rowSelection='single'
                />
        </div>

    </React.Fragment>
    );
}

export default CashJournal_Grid;