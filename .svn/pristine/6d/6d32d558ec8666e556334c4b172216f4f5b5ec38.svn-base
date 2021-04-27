import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { Button } from "@material-ui/core";
import accountApi from "../../../../../api/axios/accountApi";

const FinancialStatementsGrid = ({ date }) => {
  // prop 값을 사용하기 편하게 비구조 할당
  const { approvalDate } = date;

  const [data, setData] = useState([]);

  const selectData = async event => {
    const response = await accountApi.get(
      "/statement/findFinancialStatements",
      {
        params: {
          approvalDate: approvalDate,
        },
      },
    );
    console.log(response.data);
    setData(response.data);
  };

  const FinancialStatementscolumnDefs = [
    // 칼럼정의
    {
      headerName: "계정과목",
      field: "accountName",
      cellStyle: { textAlign: "center" },
    },
    {
      headerName: "당기",
      children: [
        {
          headerName: "세부금액",
          field: "balanceDetail",
        },
        {
          headerName: "합계금액",
          field: "balanceSummary",
        },
      ],
    },
    {
      headerName: "전기",
      children: [
        {
          headerName: "세부금액",
          field: "preBalanceDetail",
        },
        {
          headerName: "합계금액",
          field: "preBalanceSummary",
        },
      ],
    },
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
          columnDefs={FinancialStatementscolumnDefs}
          rowData={data}
          rowSelection="single"
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
          // onGridReady={onGridReady}
          // onCellClicked={onCellClicked}
        />
      </div>
    </React.Fragment>
  );
};

export default FinancialStatementsGrid;
