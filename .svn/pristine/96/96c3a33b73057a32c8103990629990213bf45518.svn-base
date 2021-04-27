import React, {useState} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button } from "@material-ui/core";
import accountApi from '../../../../../api/axios/accountApi';


const TotalTrialBalance_Grid = ({date}) => {
    // prop 값을 사용하기 편하게 비구조 할당
    const {approvalDate} = date;

    const [data, setData] = useState([]);

const selectData = async event => {

    const response = await accountApi.get('/statement/findTotalTrialBalanceList', {
        params:{
            approvalDate: approvalDate
        }
    });
    console.log(response.data);
    setData(response.data);
}

const currencyFormatter = (params) => {
   return '₩'+ formatNumber(params.value);
}

const formatNumber = (number) => {
   return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
}

    const TTBcolumnDefs = [
      {
          headerName: '차변',
          children: [
              { headerName: '잔액', field: 'debitsSumBalance', valueFormatter : currencyFormatter}, 
              { headerName: '합계', field: 'debitsSum', valueFormatter : currencyFormatter }
          ]
      },
 
      { headerName: "과목", field: "accountName" },
 
      {
          headerName: '대변',
          children: 
          [
              { headerName: '합계', field: 'creditsSum', valueFormatter : currencyFormatter },
              { headerName: '잔액', field: 'creditsSumBalance', valueFormatter : currencyFormatter}
      ]
  }
  ];

    return (
    <React.Fragment>
        <br/>

        <div
                className={"ag-theme-balham"}
                style={{
                    height: "220px",
                    width: "100%",
                    paddingTop: "20px"
                }}>
                <AgGridReact
                    columnDefs={TTBcolumnDefs}
                    rowData={data}
                    rowSelection='single'
                    // onGridReady={onGridReady}
                    // onCellClicked={onCellClicked}
                />
                        <div align="right">
                            <br/>
                            <Button
                                variant={"outlined"}
                                color={"primary"}
                                onClick={selectData}
                            > 검색
                            </Button>
                        </div>
        </div>

    </React.Fragment>
    );
}

export default TotalTrialBalance_Grid;