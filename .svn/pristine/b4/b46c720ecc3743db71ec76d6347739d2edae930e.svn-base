import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";

import axios from "axios";
import { makeUseAxios } from 'axios-hooks';

import Typography from "@material-ui/core/Typography";


// useAxios 라이브러리 사용 준비
const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
  });

const ContractBody = ({estimateNo})=> {
    
    //console.log("자식 컴포넌트 도착" + estimateNo);
    // 그리드 객체 선언
    const [gridApi, setGridApi] = useState();

    const onGridReady = params => {
        setGridApi(params.api);
    }
    
    const rowSelection = "single";

     const [url, setUrl] = useState('');
     const [{ data }, refetch] = useAxios(url);

    //그리드 CRUD 작업 

    useEffect(()=>{
      // console.log("자식태그 리렌더링")
      setUrl('logi/business/findEstimateDetail?estimateNo='+estimateNo);
      refetch();
    },[estimateNo]);



  const amountColumnDefs = [
      { headerName: "수주상세번호", field: "contractDetailNo", width: 150, hide: true},
      { headerName: "견적번호", field: "estimateNo", width: 150 },
      { headerName: "품목코드", field: "itemCode", width: 150 },
      { headerName: "품목명", field: "itemName", width: 150 },
      { headerName: "단위", field: "unitOfEstimate", width: 150 },
      { headerName: "견적일", field: "dueDateOfEstimate", width: 150 },
      { headerName: "견적수량", field: "estimateAmount", width: 150 },
      { headerName: "견적단가", field: "unitPriceOfEstimate", width: 150 },
      { headerName: "합계액", field: "sumPriceOfEstimate", width: 150 },
      { headerName: "비고", field: "description", width: 150 },
  ];

return (
  <React.Fragment>
    <Typography variant={"h6"}> [ 견적상세 조회 ] </Typography>
    <br/>
      <div
          className={"ag-theme-material"}
          style={{
          height: "300px",
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
  </React.Fragment>
);

}

export default ContractBody;