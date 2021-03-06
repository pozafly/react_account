import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Grid, Button, Hidden } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import useAxios from "utils/useAxios";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useInput from "utils/useInput";
//import FormControl from "@material-ui/core/FormControl";
//import InputLabel from "@material-ui/core/InputLabel";
//import Select from "@material-ui/core/Select";
//import MenuItem from "@material-ui/core/MenuItem";
//import { equal } from "assert";

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

const Contract = () => {
  const classes = useStyles();
  const rowSelection = "single";
  const date1 = useInput();
  const date2 = useInput();
  const [open, setOpen] = React.useState(false);
  function handleClose() {
    setOpen(false);

  }  

  function handleOpen() {
    setOpen(true);
  }

  
    const radioclick = (e) => {
              if(e.target.value === 'searchByDate'){
                setSearchDate(false);
                
              } else{
                setSearchDate(true);                
              }
    };
    


  const [positionGridApi, setPositionGridApi] = useState();
  const [searchDate, setSearchDate]= useState(true);
  const [fromDate,setFromDate]= useState();

  //const [amountGridApi, setAmountGridApi] = useState();

  const onGridReady = params => {
    setPositionGridApi(params.api);
  };

  let selectedDetailCode = "";
  let contractStatus = "";
  const onSelectionChanged = params => {
    const selectedRows = positionGridApi.getSelectedRows();
    selectedRows.forEach(function(selectedRow, index) {
      selectedDetailCode = selectedRow.estimateNo;
      contractStatus = selectedRow.contractStatus;
    });
    console.log(selectedDetailCode);
    console.log(contractStatus);


    fetchAmountList();
  };

  let va="";
  
  const createDetailRowData = () => {
    positionInfo =  positionGridApi.getSelectedRows();
    let newData = {
      unitOfContract :positionInfo.unitOfEstimate,
      dueDateOfContract : positionInfo.dueDateOfEstimate,
      contractAmount : positionInfo.estimateAmount,
      unitPriceOfContract : positionInfo.unitPriceOfEstimate,
      umPriceOfContract : positionInfo.sumPriceOfEstimate,
     
    };
   // console.log('abc'+va[0].unitOfEstimate);
    return newData;
  };
  //let deletedList = [];
  //------------------- delete-------------
  const deletePositionBtn = () => {
    //const deleteItem = deleteRowData();
    
    //ag Gird ???????????? ????????? ???
    const selectedData = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???
     
    
    if(selectedData.length === 0){
      alert('?????? ??? ????????? ???????????????');
    }else{
        //ag????????? ??????
        positionGridApi.updateRowData({ remove: selectedData });
        console.log("??????"+selectedData[0].estimateNo);
        //db?????? ??????
    axios({
      method: "post",
      url: 'http://localhost:8282/logi/business/estimateCancel',
      data: {
          estimateNo:selectedData[0].estimateNo,
         // contractStatus:contractStatus
      }

    });

    alert('?????????????????????');

  
    }
  };

  const deleteRowData = () => {
    let deleteCode = selectedDetailCode;
    let deleteCodeName = contractStatus;
    let deleteData = {
      divisionCodeNo: "SYS06",
      estimateNo: selectedDetailCode,
      contractStatus: contractStatus,
      status: "deleted"


      

  
    };
    //console.log("delete:" + deleteData);
    return deleteData;
  };

  //--------------------- ???????????? ---------------
  let positionInfo = [];
  let contractdetail = [];
 // ???????????? !!!!!! 
 let st_date = new Date().toISOString().substr(0, 10).replace(/-/gi, '');
 
 
 //const onselectrow = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???

  const savePositionBtn = () => {
    positionInfo =  positionGridApi.getSelectedRows();
   // contractdetail = amountList.getSelectedRows();
    console.log(positionInfo);
    //console.log(contractdetail);
       positionInfo[0].contractType="CT-01";
       positionInfo[0].contractDate=st_date;
       positionInfo[0].contractNo=positionInfo[0].estimateNo.replace(/ESTI/gi,"CONT");
       positionInfo[0].deliveryResultStatus="N";
       positionInfo[0].slipRegistStatus="";
       positionInfo[0].estimatedetail="nn";
       positionInfo[0].description="";
       //positionInfo[0].contractStatus="Y";
   //   positionInfo.contractRequester=contractRequester.val();

 
    console.log(positionInfo[0]);
    console.log(typeof positionInfo); //object

    axios({
    method: "post",
    url: 'http://localhost:8282/logi/business/registContract',
    data:positionInfo[0]

    });

    alert("????????? ?????? ??????????????? ");
    console.log("dddddddzsdada");

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    axios({
      method: "post",
      url: 'http://localhost:8282/logi/business/insertContractDetail',
      data:positionInfo[0]

    });
    console.log("????????????");

    fetchPayStepCodeList();
  };

  //------------------ fetch ----------------
  const fetchPositionCodeList_axiosOptions = {
    url: 'http://localhost:8282/logi/business/selectEstimateListInContractAvailable',
    fetchOnStart: false,
    method: "post",
    data :{
    toDate: date1.value,
    fromDate: fromDate
  }
  };

  const { data, fetch } = useAxios(fetchPositionCodeList_axiosOptions);

  const fetchPayStepCodeList = () => {
    if(!searchDate){
      setFromDate(date1.value)}
      else{setFromDate(date2.value)}
    fetch();
    console.log(date1.value+"//"+fromDate+"//"+searchDate+"?????????");
   
  };

  const [amountList, setAmountList] = useState([]);
  const fetchAmountList = () => {
    const positionCode = selectedDetailCode;
    console.log(positionCode+"???????????????");
    axios({
      method: "post",
      fetchOnStart: false,
      url:  `http://localhost:8282/logi/business/selectEstimateDetailList`,
      data : {
         estimateNo: positionCode
      }
    }).then(response => {
      
      console.log('data='+response.data);
      setAmountList(response.data);
    })
    .catch(reason => {
      console.log(reason);
    });
    console.log('aaB+'+amountList);
  };


  const [contractdetailList, setcontractdetailList] = useState([]);
  const fetchcontractdetailList = () => {
    const positionCode = selectedDetailCode;
    console.log(positionCode+"???????????????");
    axios
      .post(`http://localhost:8282/logi/business/selectContractDetailList`, {
        params: {
          estimateNo: positionCode
        }
      })
      .then(response => {
        setcontractdetailList(response.data);
      })
      .catch(reason => {
        console.log(reason);
      });
  };

  const positionColumnDefs = [
    { headerName: '', checkboxSelection: true, width: 50, headerCheckboxSelection: true},
    { headerName: "??????????????????", field: "contractNo", width: 150},
    { headerName: "??????????????????", field: "estimateNo", width: 150},
    { headerName: "????????????", field: "contractType", width: 150 , hide:true},
    { headerName: "????????????", field: "customerCode", width: 150 },
    { headerName: "????????????", field: "contractDate", width: 150 ,hide:true },
    { headerName: "????????????", field: "contractStatus", width: 150 ,hide:true },
    //{ headerName: "????????????", field: "effectiveDate", width: 150},
    { headerName: "???????????????", field: "personCodeInCharge", width: 150 },
    { headerName: "???????????????", field: "contractRequester", editable: true, width: 150 },
    { headerName: "??????????????????", field: "deliveryResultStatus", width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
    { headerName: "????????????", field: "slipRegistStatus", editable: true, width: 150 },
  ];

  const amountColumnDefs = [
    { headerName: "??????????????????", field: "estimateDetailNo", width: 150 },
    { headerName: "???????????????", field: "itemCode", width: 150 },
    { headerName: "??????", field: "itemName", width: 150 },
    { headerName: "??????", field: "unitOfEstimate", width: 150 },
    { headerName: "?????????", field: "dueDateOfEstimate", width: 150 },
    { headerName: "????????????", field: "estimateAmount", width: 150 },
    { headerName: "????????????", field: "unitPriceOfEstimate", width: 150 },
    { headerName: "?????????", field: "sumPriceOfEstimate", width: 150 },
    { headerName: "??????", field: "description", width: 150 }
  ];

  const contractdetailColumnDefs = [
    { headerName: "??????????????????", field: "contractDetailNo", width: 150 },
    { headerName: "????????????", field: "contractNo", width: 150 },
    { headerName: "???????????????", field: "itemCode", width: 150 },
    { headerName: "??????", field: "unitOfContract", width: 150 },
    { headerName: "?????????", field: "dueDateOfContract", width: 150 },
    { headerName: "????????????", field: "contractAmount", width: 150 },
    { headerName: "????????????", field: "unitPriceOfContract", width: 150 },
    { headerName: "?????????", field: "sumPriceOfContract", width: 150 },
    { headerName: "mps??????", field: "mpsApplyStatus", width: 150 },
    { headerName: "????????????", field: "deliveryStatus", width: 150 },
    { headerName: "??????", field: "description", width: 150 },
    { headerName: "deliveryRemain", field: "deliveryRemain", width: 150 },
    { headerName: "slipRegistStatus", field: "slipRegistStatus", width: 150 }  
  ];

  return (
    <React.Fragment>
     {/* <Grid container spacing={2}>
        <Grid item xs={4}> */}
        <Typography variant = {"h6"}>????????????????????????!</Typography>
      <div align="left">
        
        <div>
          <fieldset>
          <legend>?????? ????????? ?????? ???????????? </legend>
        <label><input type='radio' name='Radio' id="searchByDateRadio" onClick={radioclick} value="searchByDate"/>????????????</label>
        <label><input type='radio' name='Radio' id="searchByPeriodRadio" onClick={radioclick} value="searchByPeriod"/>????????????</label>

        <Button
              variant={"outlined"}
              color={"secondary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList}
            >
              ????????????????????????
            </Button>
        </fieldset>
        
        </div>
        
        <div id="searchByPeriod" >
        <TextField
          id = {"date1"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          // label = {"????????????"} // label   node      The label content.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date1.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {date1.onChange} // onChange = ?????? ???????????? ????????? ??????.
          // type="hidden"
                />
        {searchDate && <TextField
          id = {"date2"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          // label = {"????????????"} // label   node      The label content.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date2.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {date2.onChange} // onChange = ?????? ???????????? ????????? ??????.
          // type='hidden'
        />}
        </div>
      </div>


            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtn}
            >
              ????????????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}
            >
              ????????????
            </Button>
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
                rowData={data}
                rowSelection={rowSelection}
                onSelectionChanged={onSelectionChanged}
                onGridReady={onGridReady}
              />
            </div>
            
          </Paper>
        {/* </Grid> */}
        <br/>
        {/* <Grid item xs={8}> */}
        <Typography variant = {"h6"}>????????????</Typography>
      
          <Paper className={classes}>

            <div
              className={"ag-theme-material"}
              style={{
                height: "400px",
                width: "100%"
              }}
            >
              <AgGridReact 
              columnDefs={contractdetailColumnDefs}
               rowData={amountList} />
            </div>
            
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
         {/* </Grid>
      </Grid> */}


<br/>
        {/* <Grid item xs={8}> */}
        <Typography variant = {"h6"}>????????????</Typography>
      
          <Paper className={classes}>

            <div
              className={"ag-theme-material"}
              style={{
                height: "400px",
                width: "100%"
              }}
            >
              <AgGridReact 
              columnDefs={amountColumnDefs}
               rowData={amountList} />
            </div>
            
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
         {/* </Grid>
      </Grid> */}
    </React.Fragment> 
  );
};

export default Contract;