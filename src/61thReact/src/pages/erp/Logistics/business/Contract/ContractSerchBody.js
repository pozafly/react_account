import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import { makeUseAxios } from 'axios-hooks';

import { Typography } from "@material-ui/core";


// useAxios 라이브러리 사용 준비
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
  });

const ContractSearchBody = ({contractNo})=> {


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
      setUrl('logi/business/selectEstimateDetail?contractNo='+contractNo);
      refetch();
    },[contractNo]);


    console.log("컬럼설정해봅시다 : "+data);
    console.log(data);
    


  const amountColumnDefs = [
    { headerName: "수주상세번호", field: "contractDetailNo", width: 150 },
    { headerName: "수주번호", field: "contractNo", width: 150 },
    { headerName: "아이템코드", field: "itemCode", width: 150 },
    { headerName: "단위", field: "unitOfContract", width: 150 },
    { headerName: "납기일", field: "dueDateOfContract", width: 150 },
    { headerName: "수주수량", field: "contractAmount", width: 150 },
    { headerName: "수주단가", field: "unitPriceOfContract", width: 150 },
    { headerName: "합계액", field: "sumPriceOfContract", width: 150 },
    { headerName: "mps상태", field: "mpsApplyStatus", width: 150 },
    { headerName: "납품상태", field: "deliveryStatus", width: 150 },
    { headerName: "비고", field: "description", width: 150 }
  ];

return (
<div>
    <Typography variant={"h6"}> [ 수주 조회 ] </Typography>
    <br/>
    <div
        className={"ag-theme-material"}
        style={{
        height: "250px",
        width: "100%"
        }}
    >
        <AgGridReact
        columnDefs={amountColumnDefs}
        rowData={data}
        rowSelection={rowSelection}
        onGridReady={onGridReady}
        />
    </div>    
</div>
);

}

export default ContractSearchBody;