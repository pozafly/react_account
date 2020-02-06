import React, { useState, useEffect } from 'react';
import axios from "axios";
import { makeUseAxios } from 'axios-hooks';

import { AgGridReact } from "ag-grid-react";
import { Button, Typography } from "@material-ui/core";

// useAxios 라이브러리 사용 준비
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
});

const ContractHead = ({ estimateNo, setEstimateNo }) => {

    // 그리드 객체 선언
    const [gridApi, setGridApi] = useState();
    const onGridReady = params => {
        setGridApi(params.api);
    }

    const rowSelection = "single";
    const onRowSelected = (event) => {
        //console.log(event.node.selected + event.data.estimateNo)
        if(event.node.selected){
            setEstimateNo(event.data.estimateNo);
        }
    }

    const [url, setUrl] = useState({
        method :'get',
        url : 'logi/business/selectEstimateListInContractAvailable'
    });
    const [{ data }, refetch] = useAxios(url);

    //url이 변경될 때 마다 호출 
    useEffect( () =>{
        setUrl({
            method : 'get',
            url : 'logi/business/selectEstimateListInContractAvailable'
        });
        refetch();
    },[url.url]);

    // [ 수주 등록 ]
    const registContractBtn = ()=>{
        const selectedData = gridApi.getSelectedRows();

        if(selectedData.length === 0){
            alert('등록할 견적 내용을 선택해주세요 ^^');
            return;
        }else{
            // setEstimateNo(selectedData[0].estimateNo);
        }
        setUrl({
            method: "post",
            url: `http://localhost:3000/logi/business/registContract`,
            data: data,
          });
          refetch();
    }

    // [ 견적취소 ]
    const estimateCancelBtn = () => {
        const selectedData = gridApi.getSelectedRows();

        if(selectedData.length === 0){
            alert('취소할 견적 내용을 선택해주세요 ^^');
            return;
        }else{
            // setEstimateNo(selectedData[0].estimateNo);
        }

        setUrl({
            method : 'delete',
            url : 'logi/business/estimateCancel?estimateNo='+estimateNo
        });
        refetch();
    }


    //console.log(data);
    const positionColumnDefs = [
        { headerName: "수주일련번호", field: "contractNo", width: 200, hide:true},
        { headerName: "견적일련번호", field: "estimateNo", width: 200},
        { headerName: "수주유형", field: "contractType", width: 200 , hide:true},
        { headerName: "거래처명", field: "customerCode", width: 200 },
        { headerName: "수주요청날자", field: "estimateDate", width: 200 },
        { headerName: "수주상태", field: "contractStatus", width: 200 },
        { headerName: "견적담당자", field: "personCodeInCharge", width: 200 },
        { headerName: "수주요청자", field: "estimateRequester", editable: true, width: 200, hide:true },
        { headerName: "납품요청날짜", field: "effectiveDate", width: 200 },
        { headerName: "비고", field: "description", editable: true, width: 200 },
        { headerName: "전표등록상태", field: "slipRegistStatus", editable: true, width: 200, hide:true },
    ];


    // 화면을 구성하는 요소
    return (
        <React.Fragment>
            <Typography variant={"h6"}> [ 수주가능 견적조회 ] </Typography>
            <br/>
            <div
                className={"ag-theme-material"}
                style={{
                    height: "300px",
                    width: "100%"
                }}
            >
                    <AgGridReact
                        onRowSelected={onRowSelected}
                        columnDefs={positionColumnDefs}
                        rowData={data}
                        rowSelection={rowSelection}
                        onGridReady={onGridReady}
                    />
                </div>
                <div>
                <br/>
                <Button
                    variant={"outlined"}
                    color={"primary"}
                    onClick={registContractBtn}
                >
                    수주등록
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
                <Button
                    variant={"outlined"}
                    color={"primary"}
                    onClick={estimateCancelBtn}
                >
                    견적취소
                </Button>
                &nbsp;&nbsp;&nbsp;&nbsp;
            </div>
        </React.Fragment>
    );
}

export default React.memo(ContractHead);