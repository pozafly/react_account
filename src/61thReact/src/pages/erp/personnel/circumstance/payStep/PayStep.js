import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import useAxios from "../../../../../api/util/useAxios";

import axios from "axios";

const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(2),
    height: 650,
    width: 1000
  },
  leftPaper: {
    padding: theme.spacing(2),
    height: 650
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  subCategory: {
    background: "#232f3e",
    color: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  buttons: {
    margin: theme.spacing(1)
  }
}));

const PayStep = () => {
  const classes = useStyles();
  const rowSelection = "single";

  const [positionGridApi, setPositionGridApi] = useState();
  //const [amountGridApi, setAmountGridApi] = useState();

  const onGridReady = params => {
    setPositionGridApi(params.api);
  };

  let selectedDetailCode = "";
  let selectedDetailCodeName = "";
  const onSelectionChanged = params => {
    const selectedRows = positionGridApi.getSelectedRows();
    selectedRows.forEach(function(selectedRow, index) {
      selectedDetailCode = selectedRow.detailCode;
      selectedDetailCodeName = selectedRow.detailCodeName;
    });
    console.log(selectedDetailCode);
    console.log(selectedDetailCodeName);
  };

  //--------------------  add -----------------
  const addPositionBtn = () => {
    const newItem = createNewRowData();
    positionGridApi.updateRowData({ add: [newItem] });
  };

  let newCount = "16";
  const createNewRowData = () => {
    let newData = {
      divisionCodeNo: "SYS06",
      detailCode: "POS0" + newCount,
      detailCodeName: "",
      status: "inserted",
      codeUseCheck: "Y"
    };
    console.log(newData);
    newCount++;
    return newData;
  };
  let deletedList = [];
  //------------------- delete ???????????? ?????????~~ Lee Good---------------
  const deletePositionBtn = () => {
    const deleteItem = deleteRowData();
    const selectedData = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???

    positionGridApi.updateRowData({ remove: selectedData });
    positionGridApi.updateRowData({ remove: [deleteItem] });

    deletedList.push(deleteItem);
  };

  const deleteRowData = () => {
    let deleteCode = selectedDetailCode;
    let deleteCodeName = selectedDetailCodeName;
    let deleteData = {
      divisionCodeNo: "SYS06",
      detailCode: deleteCode,
      detailCodeName: deleteCodeName,
      status: "deleted"
    };
    //console.log("delete:" + deleteData);
    return deleteData;
  };

  //--------------------- save ---------------
  let positionInfo = "";
  const savePositionBtn = () => {
    positionGridApi.forEachNode(function(rowNode, index) {
      positionInfo = rowNode.data;
      fetchSavePosition();
    });
  };

  const fetchSavePosition = () => {
    console.log(positionInfo);
    console.log(typeof positionInfo); //object

    axios({
      method: "post",
      url: `http://localhost:8282/sys/batchDetailCode`,
      data: [positionInfo, ...deletedList]
    });
  };

  //------------------ fetch ----------------
  const fetchPositionCodeList_axiosOptions = {
    url: `http://localhost:8282/sys/findPayStepCodeDetailList?divisionCode=SYS06`,
    fetchOnStart: false,
    method: "get"
  };

  const { data, fetch } = useAxios(fetchPositionCodeList_axiosOptions);

  const fetchPayStepCodeList = () => {
    fetch();
  };

  const [amountList, setAmountList] = useState([]);
  const fetchAmountList = () => {
    const positionCode = selectedDetailCode;
    axios
      .get(`http://localhost:8282/hr/circumstance/findPayStepList`, {
        params: {
          positionCode: positionCode
        }
      })
      .then(response => {
        setAmountList(response.data);
      })
      .catch(reason => {
        console.log(reason);
      });
  };

  const positionColumnDefs = [
    { headerName: "????????????", field: "divisionCodeNo", width: 150 },
    { headerName: "????????????", field: "detailCode", width: 150 },
    {
      headerName: "?????????",
      field: "detailCodeName",
      editable: true,
      width: 150
    }
  ];
  const amountColumnDefs = [
    { headerName: "??????", field: "hobong", width: 180 },
    { headerName: "????????????", field: "positionCode", width: 180 },
    { headerName: "?????????", field: "baseSal", width: 180 },
    { headerName: "?????????", field: "bonus", width: 180 },
    { headerName: "??????", field: "sigub", width: 180 }
  ];
  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Paper className={classes.leftPaper}>
            <div
              className={"ag-theme-material"}
              style={{
                height: "500px",
                width: "100%"
              }}
            >
              <AgGridReact
                columnDefs={positionColumnDefs}
                rowData={data}
                rowSelection={rowSelection}
                onSelectionChanged={onSelectionChanged}
                onGridReady={onGridReady}
              />
            </div>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={addPositionBtn}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtn}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}
            >
              ??????
            </Button>
          </Paper>
        </Grid>
        <Grid item xs={8}>
          <Paper className={classes.rightPaper}>
            <div
              className={"ag-theme-material"}
              style={{
                height: "500px",
                width: "100%"
              }}
            >
              <AgGridReact columnDefs={amountColumnDefs} rowData={amountList} />
            </div>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchAmountList}
            >
              ??????
            </Button>
            {/*<Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              ??????
            </Button> */}
          </Paper>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default PayStep;
