import React, { useEffect } from 'react';
import useAxios from "../../../../api/util/useAxios";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import { makeStyles } from "@material-ui/styles";

// accountCode를 받아와서 뒷단에서 data받아와서 뿌리는 것밖에 없어서 설명할게 없음.
const AccountDetail = ({ accountCode }) => {

  const classes = useStyles();
  const accountColumnDefs = [
    { headerName: "계정과목 코드", field: "accountInnerCode", width: 150 },
    { headerName: "계정과목 명", field: "accountName", width: 220 }
  ];

  const axiosOptions = {
    url: `http://localhost:8282/account/accountTitle/findDetailAccountList?code=${accountCode}`,
    method: "GET",
    fetchOnStart: false
  };

  const { data, fetch } = useAxios(axiosOptions);
  useEffect(() => {
    fetch(axiosOptions);
  }, [accountCode]);

  return (
    <Paper className={classes.rightPaper}>
      <AppBar position="relative" className={classes.subCategory}>
        <Toolbar>
          <Typography variant="h5">상세 계정과목</Typography>
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
          columnDefs={accountColumnDefs}
          rowData={data}
          onGridReady={event => {
            event.api.sizeColumnsToFit();
          }}
        />
      </div>
    </Paper>
  );
};

const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(2),
    height: 650
  },
  subCategory: {
    background: "#232f3e",
    color: "white"
  }
}));

export default AccountDetail;