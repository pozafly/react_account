import React, {useState} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import accountApi from '../../../../../api/axios/accountApi';
import { Button } from "@material-ui/core";


const DetailTrialBalance_Grid = ({date}) => {
    // prop 값을 사용하기 편하게 비구조 할당
    const {fromDate, toDate} = date;

    const [data, setData] = useState([]);

    const selectData = async event => {

    const response = await accountApi.get('/accBookMgt/getDetailTrialBalanceList', {
        params:{
            fromDate: fromDate,
            toDate: toDate
        }
    });
    console.log(response.data);
    setData(response.data);
}


    const DetailTrialBalanceColumnDefs = [
            {
                headerName: '차변',  width: 700,
                children: [
                    {headerName: '계', field: 'debitsSum', width: 150, cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter },
                    {headerName: '대체', field: 'exceptCashDebits', width: 150, cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter},
                    {headerName: '현금', field: 'cashDebits', width: 150, cellStyle :{'textAlign':'right'},valueFormatter: currencyFormatter},
                    {headerName: '과목', field: 'accountName', width: 250 }
                ]
            },
            {
                headerName: '대변', width: 600,
                children: [
                    {headerName: '현금', field: 'cashCredits', width: 200, cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter},
                    {headerName: '대체', field: 'exceptCashCredits', width: 200, cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter},
                    {headerName: '계', field: 'creditsSum', width: 200, cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter}
                ]
            }
        ];

        function currencyFormatter(params) {
            return formatNumber(params.value);
        }
    
        function formatNumber(number) {
            // this puts commas into the number eg 1000 goes to 1,000,
            // i pulled this from stack overflow, i have no idea how it works
            return Math.floor(number).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
        }
        
    return (
    <React.Fragment>
        <br/>
      <div align="right">
        <Button variant={"outlined"} color={"primary"} onClick={selectData}>
          조회
        </Button>
      </div>
      <br />
        <div
                className={"ag-theme-balham"}
                style={{
                    height: "60%",
                    width: "100%",
                    paddingTop: "20px",
                }}>
                <AgGridReact
                    columnDefs={DetailTrialBalanceColumnDefs}
                    rowData={data}
                    rowSelection='single'
                    onGridReady={event => {
                        event.api.sizeColumnsToFit();
                      }}
                      
                />
        </div>
    </React.Fragment>
    );
}

export default DetailTrialBalance_Grid;