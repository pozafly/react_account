import React, {useState} from 'react';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { Button } from "@material-ui/core";
import accountApi from '../../../../../api/axios/accountApi';


const IncomeStatement_Grid = ({date}) => {
    // prop 값을 사용하기 편하게 비구조 할당   
    const {approvalDate} = date;
    const [data, setData] = useState([]);

const selectData = async event => {

    const response = await accountApi.get('/statement/findIncomeStatement', {
        params:{
            approvalDate: approvalDate
        }
    });

    console.log(response.data);

    setData(response.data);
    console.log(setData);

}
    const incomeColumnDefs = [  // 칼럼정의
        { headerName: "과목", field: "accountName", cellStyle :{'textAlign':'left'}
        }, // headerName:칸제목 ,field:화면에보여지는이름 ,가로크기 150 
        {
            headerName: "당기",
            children: [
            { headerName: '세부금액', field: 'income', cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter}, 
            { headerName: '합계금액', field: 'incomeSummary', cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter}
            ]
        },
        {
            headerName: "전기",
            children: [
            { headerName: '세부금액', field: 'earlyIncome', cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter}, 
            { headerName: '합계금액', field: 'earlyIncomeSummary', cellStyle :{'textAlign':'right'}, valueFormatter: currencyFormatter}
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
        <div
            className={"ag-theme-balham"}
            style={{
                height: "520px",
                width: "100%",
                paddingTop: "0px"
            }}>
        <div align="right">
            <br/>
            <Button
                variant={"outlined"}
                color={"primary"}
                onClick={selectData}
            > 조회
            </Button>
        </div>
            <AgGridReact
                columnDefs={incomeColumnDefs}
                rowData={data}
                rowSelection='single'
                onGridReady={event => {
                    event.api.sizeColumnsToFit();
                }}
                // onCellClicked={onCellClicked}
            />
        </div>

    </React.Fragment>
    );
}

export default IncomeStatement_Grid;