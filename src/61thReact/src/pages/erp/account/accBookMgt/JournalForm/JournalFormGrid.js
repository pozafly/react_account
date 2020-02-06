import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button } from "@material-ui/core";
import accountApi from "../../../../../api/axios/accountApi";

const JournalFormGrid = ({ date }) => {
  // prop 값을 사용하기 편하게 비구조 할당
  const { startDate, endDate } = date;

  const [data, setData] = useState([]);

  const selectData = async () => {
    const response = await accountApi.get("/accBookMgt/getJournalList", {
      params: {
        startDate: startDate,
        endDate: endDate,
      },
    });
    setData(response.data);
  };

  const JournalFoamColumnDefs = [
    { headerName: "전표번호", field: "slipNo", width: 150 },
    { headerName: "분개번호", field: "journalNo", width: 150 },
    { headerName: "구분", field: "balanceDivision", width: 150 },
    { headerName: "개정과목", field: "accountName", width: 150 },
    { headerName: "차변", field: "leftDebtorPrice", width: 150 },
    { headerName: "대변", field: "rightCreditsPrice", width: 150 },
    {
      headerName: "분개상세",
      field: "journalDetail",
      width: 150,
      hide: "true",
    },
    { headerName: "거래처명", field: "customerName", width: 150 },
  ];

  return (
    <React.Fragment>
      <br />
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
        }}
      >
        <AgGridReact
          columnDefs={JournalFoamColumnDefs}
          rowData={data}
          rowSelection="single"
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
          //onCellClicked={onCellClicked}
        />
      </div>
    </React.Fragment>
  );
};

export default JournalFormGrid;
