import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { makeUseAxios } from 'axios-hooks';

import { Typography } from "@material-ui/core";


// useAxios 라이브러리 사용 준비
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
  });

const ContractSearchBody = ({estimateNo})=> {

    console.log("수주 상세 출력: "+estimateNo);
    // 그리드 객체 선언
    
    const [gridApi, setGridApi] = useState();

    const onGridReady = params => {
        setGridApi(params.api);
    }
    const rowSelection = "single";

    const [url, setUrl] = useState('');
    const [{ data }, refetch] = useAxios(url);

    useEffect(()=>{
      // console.log("자식태그 리렌더링")
      setUrl('logi/business/findEstimateDetail?estimateNo='+estimateNo);
      refetch();
    },[estimateNo]);


    console.log("컬럼설정해봅시다 : "+data);
    console.log(data);
    


  const estimateDetailColumnDefs = [
    { headerName: "견적상세번호", field: "estimateDetailNo", width: 150 },
    { headerName: "견적번호", field: "estimateNo", width: 150 },
    { headerName: "품목코드", field: "itemCode", width: 150 },
    { headerName: "품목명", field: "itemName", width: 150 },
    { headerName: "단위", field: "unitOfContract", width: 150 },
    { headerName: "견적요청일", field: "dueDateOfEstimate", width: 150 },
    { headerName: "견적수량", field: "estimateAmount", width: 150 },
    { headerName: "견적단가", field: "unitPriceOfEstimate", width: 150 },
    { headerName: "합계액", field: "sumPriceOfEstimate", width: 150 },
    { headerName: "비고", field: "description", width: 150 }
  ];

return (
<div>
    <Typography variant={"h6"}> [ 견적상세 조회 ] </Typography>
    <br/>
    <div
        className={"ag-theme-material"}
        style={{
        height: "250px",
        width: "100%"
        }}
    >
        <AgGridReact
        columnDefs={estimateDetailColumnDefs}
        rowData={data}
        rowSelection={rowSelection}
        onGridReady={onGridReady}
        />
    </div>    
</div>
);

}

export default ContractSearchBody;