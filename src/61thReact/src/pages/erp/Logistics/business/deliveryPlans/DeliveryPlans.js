import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import useAxios from "../../../../../api/util/useAxios";
import useInput from "../../../../../api/util/useInput";

const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(1),
    height: 300,
    width: 1000
  },
  leftPaper: {
    padding: theme.spacing(2),
    height: 300
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

const DeliveryPlans = () => {
  const classes = useStyles();
  const rowSelection = "single";
  const fromdate = useInput();
  const todate = useInput();
  const attdTypeCode = useInput();
  
  const [positionGridApi, setPositionGridApi] = useState();
  //const [amountGridApi, setAmountGridApi] = useState();

  const onGridReady = params => {
    setPositionGridApi(params.api);
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
      url: `http://localhost:8282/logi/business/registEstimate`,
      data:positionInfo
    });
  };

  //------------------ fetch ----------------
  const axiosOptions = {
    url: 'http://localhost:8282/logi/business/findContractList',
    fetchOnStart: false,
    method: "post",
    data : {
        fromDate : fromdate.value,
        toDate : todate.value}
  };

  const fetchfindDeliveryResultList = () => {
    axios({
      method: "post",
      fetchOnStart: false,
      url:  'http://localhost:8282/logi/business/findDeliveryResultList',
    }) .then(response => {
      setAmountList(response.data);
    })
    .catch(reason => {
      console.log(reason);
    });
  };

  const deletePositionBtn = () => {
    const selectedData = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???
 
    console.log('??????'+typeof selectedData);
    if(selectedData.length === 0){
      alert('??????????????? ??????????????????.');
    }else{
    positionGridApi.updateRowData({ remove: selectedData });
    }
  };

  const fetchPayStepCodeList = () => {

    if(fromdate.value === undefined || todate.value === undefined ||
      fromdate.value === "" || todate.value === ""){
      alert('???????????? or ??????????????? ??????????????????');
    }
    else{
      console.log(fromdate.value);
      console.log(todate.value);
    axios({
      method: "post",
      fetchOnStart: false,
      url:   'http://localhost:8282/logi/business/findContractList',
      data : {
        fromdate : fromdate.value,
        todate : todate.value}
    }) .then(response => {
      console.log( fromdate.value+'aa'+todate.value);
      //fetch(response.data);
      setAmountList(response.data);
      console.log(response.data);
    })
    .catch(reason => {
     console.log(reason);
    });
  };
};

let selectedDetailCode = "";

const onSelectionChanged = params => {
  const selectedRows = positionGridApi.getSelectedRows();
  selectedRows.forEach(function(selectedRow, index) {
    selectedDetailCode = selectedRow.contractNo;
  });
  console.log("selectedDetailCode    " + selectedDetailCode);


  fetchChangeList();
};

const fetchChangeList = () => {
  const positionCode = selectedDetailCode;
  console.log("positionCode   " + positionCode);
  axios({
    method: "post",
    fetchOnStart: false,
    url:   'http://localhost:8282/logi/business/findContractDetailList',
    data : {
      contractNo: positionCode,
    }
  }).then(response => {
    setAmountList1(response.data);
  })
  .catch(reason => {
    console.log(reason);
  });
};

  const { data, fetch } = useAxios(axiosOptions);
  const [amountList, setAmountList] = useState([]);
  const [amountList1, setAmountList1] = useState([]);

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
    { headerName: "??????????????????", field: "contractNo", width: 200, editable: true },
    { headerName: "??????????????????", field: "estimateNo", width: 150 },
    { headerName: "??????????????????", field: "contractType", width: 150 },
    { headerName: "???????????????",field: "customerCode", width: 150},
    { headerName: "????????????", field: "contractDate", width: 150 },
    { headerName: "???????????????", field: "contractRequester", editable: true, width: 150 },
    { headerName: "?????????????????????", field: "personCodeInCharge", width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
    { headerName: "??????????????????", field: "deliveryCompletionStatus", editable: true, width: 150 },
    { headerName: "????????????", field: "slipRegistStatus", editable: true, width: 150 },
  ];
  const amountColumnDefs = [
    { headerName: "????????????????????????", field: "contractDetailNo", width: 150 },
    { headerName: "??????????????????", field: "contractNo", width: 140},
    { headerName: "????????????", field: "itemCode", width: 100 },
    { headerName: "?????????", field: "itemName", width: 100 },
    { headerName: "??????", field: "unitOfContract", width: 80 },
    { headerName: "?????????", field: "dueDateOfContract", width: 90},
    { headerName: "????????????", field: "contractAmount", width: 100 },
    { headerName: "??????????????????", field: "deliveryRemain", width: 130 },
    { headerName: "??????", field: "unitPriceOfContract", width: 80 },
    { headerName: "?????????", field: "sumPriceOfContract", width: 100 },
    { headerName: "????????????", field: "deliveryStatus", width: 100 },
    { headerName: "????????????", field: "mpsApplyStatus", width: 100 },
    { headerName: "????????????", field: "slipRegistStatus", width: 100 },
    { headerName: "??????", field: "description", width: 100 },
  ];
  const deliveryColumnDefs = [
    { headerName: "????????????", field: "deliveryNo", width: 120 },
    { headerName: "????????????", field: "deliveryDate", width: 120 },
    { headerName: "????????????", field: "deliveryAmount", width: 120 },
    { headerName: "?????????", field: "itemName", width: 150 },
    { headerName: "????????????", field: "itemCode", width: 120},
    { headerName: "????????????", field: "customerCode", width: 150 },
    { headerName: "????????????????????????", field: "contractDetilNo", width: 150 },
    { headerName: "????????????", field: "releaseNo", width: 120 },
    { headerName: "??????????????????", field: "unitOfDeliveryResult", width: 130 },
    { headerName: "??????", field: "description", width: 150 },
  ];

  const [value, setValue] = React.useState(0);  // tap value??? ?????? ????????????.
  const tabChange = (event, newValue) => {
    console.log(newValue); // newValue??? ????????? ?????? ????????? ??????
    setValue(newValue);
  };
  
  return (
    <React.Fragment>
        <div>
        <AppBar position="static">
          <Tabs value={value} onChange={tabChange}>
            <Tab label="??????" /> {/* 0 */}
            <Tab label="????????????" /> {/* 1 */}
          </Tabs>
        </AppBar>
        </div>
        {value === 0 ?
          <React.Fragment>
     <div> <Typography variant = {"h6"}>?????? ?????? ???????????????</Typography>
    <div align="right">
        <TextField
          id = {"day"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {fromdate.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {fromdate.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
        <TextField
          id = {"day"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {todate.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {todate.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
          <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList}
            >
              ?????? ?????? ?????? ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}>
              ??????
            </Button>  
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtn}>
              ??????
            </Button>
        </div>
        </div>
        </React.Fragment>
      :""}
       {value === 0 ?
       <React.Fragment>
          <Paper className={classes}>
            <div
              className={"ag-theme-material"}
              style={{
                height: "200px",
                width: "100%"
              }}
            >
              <AgGridReact
                columnDefs={positionColumnDefs}
                rowData={amountList}
                rowSelection={rowSelection}
                onSelectionChanged={onSelectionChanged}
                onGridReady={onGridReady}
              />
            </div>
          </Paper>
        <br/>
        </React.Fragment>
        :""}
        <div>
        {value === 0 ?<Typography variant = {"h6"}>?????? ?????? ??????????????? ??????</Typography> : <Typography variant = {"h6"}>?????? ?????? ?????????</Typography>}
        {value === 1 ?<Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchfindDeliveryResultList}
            >
              ?????? ?????? ??????
            </Button>
          :""}
          <Paper className={classes}>
            <div
              className={"ag-theme-material"}
              style={{
                height: "400px",
                width: "100%"
              }}
            >
                  {value === 0 ?
             <AgGridReact columnDefs={amountColumnDefs} rowData={amountList1} /> :  <AgGridReact columnDefs={deliveryColumnDefs} rowData={amountList} />}
            </div>
          </Paper>
          </div>
     
    </React.Fragment> 
  );
};

export default DeliveryPlans;