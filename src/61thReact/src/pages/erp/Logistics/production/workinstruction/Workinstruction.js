import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import useAxios from "../../../../../api/util/useAxios";

import axios from "axios";
import Typography from "@material-ui/core/Typography";
//import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
//import useInput from "utils/useInput";
//import { workinstruction } from "../../Logistics";

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

//const axiosOptions = {
 // url: 'http://localhost:8282/hr/attendance/findWorkInstructionList/',
  //method: "POST",
  //fetchOnStart: false
//};


const Workinstruction = () => {
  const classes = useStyles();
  const rowSelection = "single";
  //const fromdate = useInput();
  //const todate = useInput();
  //onst attdTypeCode = useInput();
  
  const [positionGridApi, setPositionGridApi] = useState();
  //const [positionGridApi1, setPositionGridApi1] = useState();
  //const [amountGridApi, setAmountGridApi] = useState();

  const onGridReady = params => {
    setPositionGridApi(params.api);
  };
  
  let selectedDetailCode = "";
  let selectedDetailCodeName = "";
  const onSelectionChanged = params => {
    const selectedRows = positionGridApi.getSelectedRows();
    selectedRows.forEach(function(selectedRow, index) {
      selectedDetailCode = selectedRow.workInstructionNo;
      selectedDetailCodeName = selectedRow.detailCodeName;
    });
    selectedRows.forEach(function(selectedRow, index) {
      selectedDetailCode = selectedRow.workInstructionNo;
      selectedDetailCodeName = selectedRow.detailCodeName;
    });
    console.log(selectedDetailCode);
    console.log(selectedDetailCodeName);
  };

 
//   --------------------- update ---------------
//   let positionInfo = "";
//   const savePositionBtn = () => {
//     positionGridApi.forEachNode(function(rowNode, index) {
//       positionInfo = rowNode.data;
//       fetchSavePosition();
//     });
//  };

//   const fetchSavePosition = () => {
//    console.log(positionInfo);
//     console.log(typeof positionInfo); //object

//     axios({
//       method: "post",
//       url: `http://localhost:8282/logi/production/findWorkInstruction`,
//      data:positionInfo
    
//    });
//   };

  //------------update----------------------
  
  const savePositionBtn = () => {
    
    fetchAmountList1();
    console.log();
  };
let aa="";


  const fetchAmountList1 = () => {
    const selectedData = positionGridApi.getSelectedRows();
    selectedData.forEach(function(selectedRow, index) {
      aa = selectedRow.workInstructionNo;
    });
   // const positionCode = selectedDetailCode;
   console.log('@@'+aa);
   axios({
    method: "post",
    url: `http://localhost:8282/logi/production/updateWorkInstruction`,
   data: aa
  
 });
 fetchPayStepCodeList1();
  };

  //---------------update2--------------------------------------

 
 
  const savePositionBtn1 = () => {
    
    fetchAmountList2();
    console.log("???????????????????????????");
  };
let bb="";

  //const [amountList3, setAmountList3] = useState([]);
  const fetchAmountList2 = () => {
    const selectedData = positionGridApi.getSelectedRows();
   selectedData.forEach(function(selectedRow, index) {
      bb = selectedRow.workInstructionNo;
    });
    const positionCode = selectedDetailCode;
   console.log('@@'+bb);
   axios({
    method: "post",
    url: `http://localhost:8282/logi/production/updateWorkInstruction2`,
   data: bb
  
 });
 fetchPayStepCodeList2();
  };

//------------------ fetch ----------------
  const axiosOptions = {
    url: 'http://localhost:8282/logi/production/findWorkInstructionList',
    fetchOnStart: false,
    method: "post"
  };
  const [amountList, setAmountList] = useState([]); // ?????????????????? ????????? ??? ?????? ???
  
  const { data, fetch } = useAxios(axiosOptions);     

  const fetchPayStepCodeList = () => {
    axios({
      method: "post",
      url: `http://localhost:8282/logi/production/findWorkInstructionList`,
    }).then(response => {       //???????????? ??????.
        setAmountList(response.data);     //?????? setAmountList 
      console.log(response.data);
      })
      .catch(reason => {   //??????????????? ????????????
        console.log(reason);
      });
  };
//---------------------fetch2---------------------------------------
const [amountList2, setAmountList2] = useState([]);
const fetchPayStepCodeList1 = () => {
  axios({
    method: "post",
    url: `http://localhost:8282/logi/production/findWorkInstructionList2`,
  }).then(response => {       //???????????? ??????.
      setAmountList2(response.data);     //?????? setAmountList 
    console.log("?????????");
    })
    .catch(reason => {   //??????????????? ????????????
      console.log(reason);
    });
};

//----------------------fetch3-=------------------------------------------

const fetchPayStepCodeList2 = () => {
  axios({
    method: "post",
    url: `http://localhost:8282/logi/production/findWorkInstructionList3`,
  }).then(response => {       //???????????? ??????.
      setAmountList2(response.data);     //?????? setAmountList 
    console.log("????????????");
    })
    .catch(reason => {   //??????????????? ????????????
      console.log(reason);
    });
};
  
  //----------??????------------------
  const deletePositionBtn = () => {
    const selectedData = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???
 
    console.log('??????'+typeof selectedData);
    if(selectedData.length === 0){
      alert('???????????? ????????????');
    }else{
    positionGridApi.update`RowData`({ remove: selectedData });
    }
  };

  const positionColumnDefs = [
    { headerName: "",checkboxSelection: true,width: 80,headerCheckboxSelection: true},
    { headerName: "??????????????????", field: "workInstructionNo", width: 150 },
    { headerName: "?????????????????????", field: "mrpGatheringNo", width: 150 },
    { headerName: "????????????",field: "itemCode", width: 150},
    { headerName: "?????????", field: "itemName", width: 150 },
    { headerName: "????????????", field: "instructionDate", editable: true, width: 150 },
    { headerName: "??????", field: "unitOfWorkInstruction", width: 150 },
    { headerName: "??????????????????", field: "workInstructionAmount", editable: true, width: 150 },
    { headerName: "??????????????????", field: "productionStatus", editable: true, width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
    { headerName: "????????????", field: "workInstructionStatus", editable: true, width: 150 },
    { headerName: "????????????", field: "productionLineCode", editable: true, width: 150 }
  ];
  const amountColumnDefs = [
    { headerName: "",checkboxSelection: true,width: 80,headerCheckboxSelection: true},
    { headerName: "??????????????????", field: "workInstructionNo", width: 150 },
    { headerName: "?????????????????????", field: "mrpGatheringNo", width: 150 },
    { headerName: "????????????",field: "itemCode", width: 150},
    { headerName: "?????????", field: "itemName", width: 150 },
    { headerName: "????????????", field: "instructionDate", editable: true, width: 150 },
    { headerName: "??????", field: "unitOfWorkInstruction", width: 150 },
    { headerName: "??????????????????", field: "workInstructionAmount", editable: true, width: 150 },
    { headerName: "??????????????????", field: "productionStatus", editable: true, width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
    { headerName: "????????????", field: "workInstructionStatus", editable: true, width: 150 },
    { headerName: "????????????", field: "productionLineCode", editable: true, width: 150 }
  ];
  const deliveryColumnDefs = [
    { headerName: "",checkboxSelection: true,width: 80,headerCheckboxSelection: true},
    { headerName: "??????????????????", field: "workInstructionNo", width: 150 },
    { headerName: "?????????????????????", field: "mrpGatheringNo", width: 150 },
    { headerName: "????????????",field: "itemCode", width: 150},
    { headerName: "?????????", field: "itemName", width: 150 },
    { headerName: "????????????", field: "instructionDate", editable: true, width: 150 },
    { headerName: "??????", field: "unitOfWorkInstruction", width: 150 },
    { headerName: "??????????????????", field: "workInstructionAmount", editable: true, width: 150 },
    { headerName: "??????????????????", field: "productionStatus", editable: true, width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
    { headerName: "????????????", field: "workInstructionStatus", editable: true, width: 150 },
    { headerName: "????????????", field: "productionLineCode", editable: true, width: 150 }
  ];
  const [value, setValue] = React.useState(0);  // tap value??? ?????? ????????????.
  const tabChange = (event, newValue) => {
    console.log(newValue); // newValue??? ????????? ?????? ????????? ??????
    setValue(newValue);
  };
  
  return (
    <React.Fragment>
        <div>
        <div> <Typography variant = {"h6"}>???????????? ???????????? ?????? * ????????????</Typography></div>
        <AppBar position="static">
          <Tabs value={value} onChange={tabChange}>
            <Tab label="????????????" /> {/* 0 */}
            <Tab label="??????????????????" /> {/* 1 */}
          </Tabs>
        </AppBar>
        </div>
        {value === 0 ?
          <React.Fragment>
    <div><Typography variant = {"h6"}>???????????? ?????? ?????????</Typography></div>
    <div align="right">
     
          <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList}
            >
              ??????????????????????????????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}>
              ?????? ???????????? 
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtn}>
                  ??????
              </Button>

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
        {value === 0 ?<Typography variant = {"h6"}>???????????? ???????????????</Typography> : <Typography variant = {"h6"}>?????????????????? ?????? ??? ???????????? ??????</Typography>}
        {value === 1 ?
        <div align="right">
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList1}
              //values = "click1"
            >
              ???????????? ?????? ??????
            </Button>
            <Button
            variant={"outlined"}
            color={"primary"}
            className={classes.buttons}
            onClick={savePositionBtn1}>
            ??????????????????
            </Button>
            </div>
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
             <AgGridReact columnDefs={amountColumnDefs} rowData={amountList2} /> 
             : 
            <AgGridReact columnDefs={deliveryColumnDefs} rowData={amountList2} 
            />}
            </div>
          </Paper>
          </div>
     
    </React.Fragment> 
  );
};

export default Workinstruction;