import React, {useState} from 'react';
// 나나나ㅣㄹ이
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button } from "@material-ui/core";

import logiApi from '../api/logiApi';


const MpsContractGrid = ({date, gridData}) => {

    // prop 값을 사용하기 편하게 비구조 할당
    const { title, fromDate, toDate } = date;
    const a = '';
    const { columDefs, getUrl, putUrl, newData } = gridData;
    
    // 그리드 데이터 처리
    const ColumnDefs = columDefs;
    const [data, setData] = useState([]);
    const [batch, setBatch] = useState();
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  

    // 조회 이벤트 처리
    const selectData = async event => {
        const response = await logiApi.get(getUrl, {
            params:{
                fromDate: fromDate,
                toDate: toDate
            }
        });
        setData(response.data);
        setBatch(response.data);
    };

    console.log(batch);

    // 등록 이벤트 처리
    const addData = () => {
        setData(newData);
        setBatch(newData);
    };

    // 일괄처리 이벤트 처리
    const batchData = async event => {
        event.preventDefault();
        console.log(data);
        const response = await logiApi.put(putUrl, data
        );
        console.log(response);
    }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    const onCellEditingStopped = event => {
        console.log(event);
        if(event.data.status === 'insert')return;
        event.data.status ='update';
    }

    const onRowSelected = event => {
        // console.log(event.node.selected);
        if(event.data.status === 'insert')return;
        if(event.node.selected){
            event.data.status="delete";
        }
    }

    console.log(data);
    
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


    return (
    <React.Fragment>
        <br/>
        <div
                className={"ag-theme-balham"}
                style={{
                    height: "250px",
                    width: "100%",
                    paddingTop: "20px"
                }}>
                <AgGridReact
                    columnDefs={ColumnDefs}
                    rowData={data}
                    rowSelection='single'
                    onRowSelected={onRowSelected}
                    onCellEditingStopped={onCellEditingStopped}
                />
                <div align="right">
                    <br/>
                    <Button
                        style={{
                            color : '#ecf0f1',
                            backgroundColor:'#4b4b4b'}}
                        variant={"outlined"}
                        color={"primary"}
                        onClick={selectData}
                    > 조회
                    </Button>
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {newData&&<Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={addData}
                    > 추가
                    </Button>
                    }
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    {putUrl&&<Button
                        variant={"outlined"}
                        color={"primary"}
                        onClick={batchData}
                    > 일괄처리
                    </Button>}
                </div>
        </div>
    </React.Fragment>
    );
}

export default MpsContractGrid;