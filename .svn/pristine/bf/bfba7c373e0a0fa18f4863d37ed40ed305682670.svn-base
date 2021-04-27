import React, { useEffect } from 'react';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import { AllModules } from "ag-grid-enterprise";
// AllModules 가 있어야 계정과목별로 그룹화를 시킬 수 있음.
// 밑에 Grid의 속성값에서 modules={AllModules} 를 사용한다.

import useAxios from "../../../../api/util/useAxios";

import { makeStyles } from "@material-ui/styles";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";

// props로 setAccountCode 를 받았다.
const AccountParent = ({ setAccountCode }) => {

  const classes = useStyles();  // 스타일.
  const accountColumnDefs = [
    { headerName: "parentGroup", field: "parentGroup", width: 120, rowGroup: true, hide: true },  // rowGroup: true는 그룹으로 묶겠다는 뜻.
    { headerName: "secondGroup", field: "secondGroup", width: 120, rowGroup: true, hide: true },
    { headerName: "계정과목 코드", field: "accountInnerCode", width: 180 },
    { headerName: "계정과목 명", field: "accountName", width: 270 }
  ];

  const defaultColDef = { sortable: true };  
  // 그리드의 디폴트 속성으로 정렬 기능을 넣겠다.

  const onRowSelected = e => {
    if (e.node.selected) {
      setAccountCode(e.data.accountInnerCode);
    }
  };  // 그리드를 클릭할 때마다 계정과목코드를 setting 함.

  const axiosOptions = {
    url: `http://localhost:8282/account/accountTitle/findParentAccountList`,
    method: "GET",
    fetchOnStart: false
  };

  const { data, fetch } = useAxios(axiosOptions);
  useEffect(() => {
    fetch(axiosOptions);
  }, []);  // 난 유즈액시오스 몰라.


  return (
      <Paper className={classes.leftPaper}>
        <AppBar position="relative" className={classes.subCategory}>
          <Toolbar>
            <Typography variant="h5">상위 계정과목</Typography>
          </Toolbar>
        </AppBar>
        <div
          className={"ag-theme-balham"}
          style={{
            height: "550px",
            width: "100%",
            paddingTop: "20px"
          }}>
          <AgGridReact
            columnDefs={accountColumnDefs}  // 칼럼정의.
            rowData={data}  // 그리드에 집어넣을 data.
            onRowSelected={onRowSelected}  // 그리드를 클릭했을 때 발생하는 이벤트.
            rowSelection='single'  // 한줄만 선택할 수 있다.
            defaultColDef={defaultColDef}  // 그리드의 디폴트 옵션값.
            modules={AllModules}  // 그룹화를 하기위한 옵션임.
            animateRows={true}  // 그룹화 된 칼럼을 클릭하면 부드럽게 움직이는 animation.
            onGridReady={event => {  // 그리드 랜더링 시 발생.
              event.api.sizeColumnsToFit();  // 칼럼을 딱 맞게 정렬해라.
            }}
          />
        </div>
      </Paper>
    
  );
};

const useStyles = makeStyles(theme => ({
  leftPaper: {
    padding: theme.spacing(2),
    height: 650
  },
  subCategory: {
    background: "#232f3e",
    color: "white"
  }
}));

export default AccountParent;