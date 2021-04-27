import React, { useState } from "react";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import {Typography, AppBar, Toolbar, Button} from "@material-ui/core";


import axiosApi from "../axios/axiosApi";

const Common_Grid = ({ gridData }) => {
  // prop 값을 사용하기 편하게 비구조 할당
  const { titleGrid, fromDate, toDate, columDefs, getUrl, putUrl, newData } = gridData;

  // 그리드 데이터 처리
  const ColumnDefs = columDefs;
  const [data, setData] = useState([]);

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 조회 이벤트 처리
  const selectData = async event => {
    const response = await axiosApi.get(getUrl, {
      params: {
        fromDate: fromDate,
        toDate: toDate,
      },
    });
    setData(response.data);
  };

  // 등록 이벤트 처리
  const addData = () => {
    setData(newData);
  };


  // 일괄처리 이벤트 처리
  const batchData = async event => {
    event.preventDefault();

    const response = await axiosApi.put(putUrl, data);
    console.log(response);
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const onCellEditingStopped = event => {
    if (event.data.status === "insert") return;
    event.data.status = "update";
  };

  const onRowSelected = event => {
    if (event.data.status === "insert") return;
    if (event.node.selected) {
      event.data.status = "delete";
    }
  };

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      <br />
      <AppBar position="relative" >
        <Toolbar>
          <Typography variant="h5">{titleGrid}</Typography>
        </Toolbar>
      </AppBar>

      <div
        className={"ag-theme-balham"}
        style={{
          height: "400px",
          width: "100%",
          paddingTop: "20px",
        }}
      >
        <AgGridReact
          columnDefs={ColumnDefs}
          rowData={data}
          rowSelection="single"
          onRowSelected={onRowSelected}
          onCellEditingStopped={onCellEditingStopped}
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
        />
        <div align="right">
          <br />
          <Button
            style={{
              color: "#ecf0f1",
              backgroundColor: "#4b4b4b",
            }}
            variant={"outlined"}
            color={"primary"}
            onClick={selectData}
          >
            {" "}
            조회
          </Button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {newData && (
            <Button variant={"outlined"} color={"primary"} onClick={addData}>
              {" "}
              추가
            </Button>
          )}
          &nbsp;&nbsp;&nbsp;&nbsp;
          {putUrl && (
            <Button variant={"outlined"} color={"primary"} onClick={batchData}>
              {" "}
              일괄처리
            </Button>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Common_Grid;
