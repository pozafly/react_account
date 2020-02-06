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
    
    //ag Gird 지우려고 선택한 애
    const selectedData = positionGridApi.getSelectedRows(); //여기선 아직 status가 normal임
     
    
    if(selectedData.length === 0){
      alert('취소 할 견적을 선택하세요');
    }else{
        //ag그리드 삭제
        positionGridApi.updateRowData({ remove: selectedData });
        console.log("ㅇㅇ"+selectedData[0].estimateNo);
        //db가서 삭제
    axios({
      method: "post",
      url: 'http://localhost:8282/logi/business/estimateCancel',
      data: {
          estimateNo:selectedData[0].estimateNo,
         // contractStatus:contractStatus
      }

    });

    alert('취소되었습니다');

  
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

  //--------------------- 수주등록 ---------------
  let positionInfo = [];
  let contractdetail = [];
 // 현재일자 !!!!!! 
 let st_date = new Date().toISOString().substr(0, 10).replace(/-/gi, '');
 
 
 //const onselectrow = positionGridApi.getSelectedRows(); //여기선 아직 status가 normal임

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

    alert("수주가 등록 되었습니다 ");
    console.log("dddddddzsdada");

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    axios({
      method: "post",
      url: 'http://localhost:8282/logi/business/insertContractDetail',
      data:positionInfo[0]

    });
    console.log("수주상세");

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
    console.log(date1.value+"//"+fromDate+"//"+searchDate+"ㅇㅇㅇ");
   
  };

  const [amountList, setAmountList] = useState([]);
  const fetchAmountList = () => {
    const positionCode = selectedDetailCode;
    console.log(positionCode+"ㅇㅇㅇㅇㄴ");
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
    console.log(positionCode+"ㅇㅇㅇㅇㄴ");
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
    { headerName: "수주일련번호", field: "contractNo", width: 150},
    { headerName: "견적일련번호", field: "estimateNo", width: 150},
    { headerName: "수주유형", field: "contractType", width: 150 , hide:true},
    { headerName: "거래처명", field: "customerCode", width: 150 },
    { headerName: "수주일자", field: "contractDate", width: 150 ,hide:true },
    { headerName: "수주상태", field: "contractStatus", width: 150 ,hide:true },
    //{ headerName: "유효일자", field: "effectiveDate", width: 150},
    { headerName: "견적담당자", field: "personCodeInCharge", width: 150 },
    { headerName: "수주요청자", field: "contractRequester", editable: true, width: 150 },
    { headerName: "납품완료상태", field: "deliveryResultStatus", width: 150 },
    { headerName: "비고", field: "description", editable: true, width: 150 },
    { headerName: "이게모지", field: "slipRegistStatus", editable: true, width: 150 },
  ];

  const amountColumnDefs = [
    { headerName: "견적상세번호", field: "estimateDetailNo", width: 150 },
    { headerName: "아이템코드", field: "itemCode", width: 150 },
    { headerName: "템명", field: "itemName", width: 150 },
    { headerName: "단위", field: "unitOfEstimate", width: 150 },
    { headerName: "납기일", field: "dueDateOfEstimate", width: 150 },
    { headerName: "견적수량", field: "estimateAmount", width: 150 },
    { headerName: "견적단가", field: "unitPriceOfEstimate", width: 150 },
    { headerName: "합계액", field: "sumPriceOfEstimate", width: 150 },
    { headerName: "비고", field: "description", width: 150 }
  ];

  const contractdetailColumnDefs = [
    { headerName: "수주상세번호", field: "contractDetailNo", width: 150 },
    { headerName: "수주번호", field: "contractNo", width: 150 },
    { headerName: "아이템코드", field: "itemCode", width: 150 },
    { headerName: "단위", field: "unitOfContract", width: 150 },
    { headerName: "납기일", field: "dueDateOfContract", width: 150 },
    { headerName: "수주수량", field: "contractAmount", width: 150 },
    { headerName: "수주단가", field: "unitPriceOfContract", width: 150 },
    { headerName: "합계액", field: "sumPriceOfContract", width: 150 },
    { headerName: "mps상태", field: "mpsApplyStatus", width: 150 },
    { headerName: "납품상태", field: "deliveryStatus", width: 150 },
    { headerName: "비고", field: "description", width: 150 },
    { headerName: "deliveryRemain", field: "deliveryRemain", width: 150 },
    { headerName: "slipRegistStatus", field: "slipRegistStatus", width: 150 }  
  ];

  return (
    <React.Fragment>
     {/* <Grid container spacing={2}>
        <Grid item xs={4}> */}
        <Typography variant = {"h6"}>수주가능견적조회!</Typography>
      <div align="left">
        
        <div>
          <fieldset>
          <legend>수주 가능한 견적 검색조건 </legend>
        <label><input type='radio' name='Radio' id="searchByDateRadio" onClick={radioclick} value="searchByDate"/>일자검색</label>
        <label><input type='radio' name='Radio' id="searchByPeriodRadio" onClick={radioclick} value="searchByPeriod"/>기간검색</label>

        <Button
              variant={"outlined"}
              color={"secondary"}
              className={classes.buttons}
              onClick={fetchPayStepCodeList}
            >
              수주가능견적조회
            </Button>
        </fieldset>
        
        </div>
        
        <div id="searchByPeriod" >
        <TextField
          id = {"date1"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          // label = {"견적일자"} // label   node      The label content.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date1.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {date1.onChange} // onChange = 값이 변경되면 콜백이 발생.
          // type="hidden"
                />
        {searchDate && <TextField
          id = {"date2"} // id   string      The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          // label = {"유효일자"} // label   node      The label content.
          type = {"date"} // type   string      Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date2.value} // defaultValue   any      The default value of the input element.
                      //date = useInupt();
          onChange = {date2.onChange} // onChange = 값이 변경되면 콜백이 발생.
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
              견적취소
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}
            >
              수주등록
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
        <Typography variant = {"h6"}>견적상세</Typography>
      
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
              추가
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              삭제
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              저장
            </Button> */}
          </Paper>
         {/* </Grid>
      </Grid> */}


<br/>
        {/* <Grid item xs={8}> */}
        <Typography variant = {"h6"}>견적상세</Typography>
      
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
              추가
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              삭제
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              // onClick={fetchDailyAttdList}
            >
              저장
            </Button> */}
          </Paper>
         {/* </Grid>
      </Grid> */}
    </React.Fragment> 
  );
};

export default Contract;