import React, { useState } from 'react';
import useInputs from "../../../../../api/util/useInputs";
import axios from "axios";
import { makeUseAxios } from 'axios-hooks';

import { AgGridReact } from "ag-grid-react";
import {Button, Typography, TextField} from "@material-ui/core";


// useAxios 라이브러리 사용 준비
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
});

const ContractSearchHead = ({setEstimateNo}) => {

    // 사용할 날짜 값 state로 저장
    const [date, onChange] = useInputs({
        fromDate:"",
        toDate:''
    });
    const { toDate, fromDate } = date;

    // 그리드 객체 선언
    const [gridApi, setGridApi] = useState();
    const onGridReady = params => {
        setGridApi(params.api);
    };

    const rowSelection = "single";
    const onRowSelected = (event) => {
        console.log(event.node.selected + event.data.estimateNo);
        if(event.node.selected){
            setEstimateNo(event.data.estimateNo);
        }
    }

    const [url, setUrl] = useState('');
    const [{ data }, refetch] = useAxios(url);

    console.log("견적 조회를 작성해 보자:")
    console.log(data);

    // 그리드 이벤트 [ 기간 조회 ]
    const estimateList = () => {

        if(!fromDate && !toDate){
            alert('날짜를 선택해주세요 ^^');
            return;
        }else{
            setUrl('logi/business/findEstimateList?fromDate='+fromDate+'&toDate='+toDate);
            refetch();
        }
    };
    const estimateColumnDefs = [
        { headerName: '', checkboxSelection: true, width: 50, headerCheckboxSelection: true},
        // { headerName: "수주일련번호", field: "contractNo", width: 200},
        { headerName: "견적일련번호", field: "estimateNo", width: 200},
        { headerName: "수주유형", field: "contractType", width: 200 , hide:true},
        { headerName: "거래처명", field: "customerCode", width: 200 },
        { headerName: "수주요청일자", field: "estimateDate", width: 200 ,hide:true },
        { headerName: "수주상태", field: "contractStatus", width: 200 ,hide:true },
        { headerName: "견적담당자", field: "personCodeInCharge", width: 200 },
        { headerName: "견적요청자", field: "estimateRequester", editable: true, width: 200, hide:true },
        { headerName: "납품 예정일", field: "effectiveDate", width: 200 },
        { headerName: "비고", field: "description", editable: true, width: 200 },
        { headerName: "전표등록상태", field: "slipRegistStatus", editable: true, width: 200, hide:true },
    ];


    // 화면을 구성하는 요소
    return (
        <React.Fragment>
            <Typography variant={"h6"}> [ 견적 조회 ] </Typography>
            <div align="left">
                    <TextField
                        name="fromDate"
                        type={"date"}
                        defaultValue={fromDate}
                        onChange={onChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <TextField
                        name="toDate"
                        type={"date"}
                        defaultValue={toDate}
                        onChange={onChange}
                    />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <Button
                            variant={"outlined"}
                            color={"secondary"}
                            onClick={estimateList}
                        >
                            견적조회
                    </Button>
            </div>
            <br />
            <div>
                <div
                    className={"ag-theme-material"}
                    style={{
                        height: "250px",
                        width: "100%"
                    }}
                >
                    <AgGridReact
                        onRowSelected={onRowSelected}
                        columnDefs={estimateColumnDefs}
                        rowData={data}
                        rowSelection={rowSelection}
                        onGridReady={onGridReady}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default ContractSearchHead;