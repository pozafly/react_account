import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import useAxios from "utils/useAxios";
import axios from "axios";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import useInput from "utils/useInput";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import EstimateHead from "./EstimateHead"
import Estimate1 from "./Estimate"


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

const Estimate = () => {

  const classes = useStyles();
  const rowSelection = "single";
  const date1 = useInput();
  const date2 = useInput();
  const date3 = useInput();
  const date4 = useInput();
  const [open, setOpen] = React.useState(false);
  const [opens, setOpens] = React.useState(false);
  const [stat, setStat] = React.useState(false);
  const attdTypeCode = useInput();
  const attdTypeCodes = useInput();

  function statfalse() {
    setStat(false);
  }
  function statTrue() {
    setStat(true);
  }
  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }
  function handleCloses() {
    setOpens(false);
  }
  function handleOpens() {
    setOpens(true);
  }

  const [positionGridApi, setPositionGridApi] = useState();
  const [amountGridApi, setAmountGridApi] = useState();

  const onGridReady = params => {
    setPositionGridApi(params.api);
  };
  const onGridReadyy = params => {
    setAmountGridApi(params.api);
  };

  //--------------------  견적추가 -----------------

  const addPositionBtn = () => {
    
      console.log(date1.value);
      console.log(date2.value);
      console.log(attdTypeCode.value);
      if(date1.value === undefined || date2.value === undefined || attdTypeCode.value === undefined || 
        date1.value === "" || date2.value === "" || attdTypeCode.value === ""){
        alert('견적일자,유효일자,거래처명을 입력하여주세요');
      }
      else if(stat===true){
        alert('견적은 하나만 등록된다~');
      }
      else{
        statTrue();

    const newItem = createNewRowData();
    positionGridApi.updateRowData({ add: [newItem] });
      }
  };

  const createNewRowData = () => {
    let newData = {
        estimateDate : date1.value.replace(/-/gi, ""),
        effectiveDate : date2.value.replace(/-/gi, ""),
        customerCode : attdTypeCode.value,
        personCodeInCharge : 'estimulo',
        contractStatus : 'N'
    };
    console.log(newData);
    return newData;
  };

//============================== 견적상세추가함서 템네임 찾아오기  ==================================

  const searchItemBtn = () => {
    if(stat === false){
      alert('견적부터 등록해라');
    }
    else if(date3.value === undefined || date4.value === undefined || attdTypeCode.value === undefined || 
      date1.value === "" || date2.value === "" || attdTypeCode.value === ""){
        alert('값 넣어라');
      }
    else{
    console.log(attdTypeCodes.value);
      positionInfo = attdTypeCodes.value;
      searchItem();
    }
  };

  let va = "";

  const searchItem = () => {
    console.log(positionInfo);
    console.log(typeof positionInfo);//object
    axios({
      method: "post",
      url: `http://localhost:8282/logi/purchase/searchItem`,
      data : { itemCode :  positionInfo //{itemCode=DK-01}
    }
    }).then(res => {console.log(res.data)
      va=res.data;
    console.log('==============');
    addDetailBtn();
  })
  };

  const addDetailBtn = () => {

    if(stat === false){
      alert('견적부터 등록해라');
    }
    else if(stat===true){
      const newItem2 = createDetailRowData();
      amountGridApi.updateRowData({ add: [newItem2] });
      console.log(va[0].itemName);
    }
};

  const createDetailRowData = () => {
    let newData = {
      dueDateOfEstimate : date3.value.replace(/-/gi, ""),
      itemCode : attdTypeCodes.value,
      itemName : va[0].itemName,
      unitOfEstimate : 'EA',
      unitPriceOfEstimate : va[0].standardUnitPrice,
      estimateAmount : date4.value,
      sumPriceOfEstimate : parseInt(va[0].standardUnitPrice)*parseInt(date4.value)
    };
    console.log(newData);
    return newData;
  };

  //------------------- delete 안되던거 해결함~~ Lee Good---------------
  const deletePositionBtn = () => {
   
    const selectedData = positionGridApi.getSelectedRows(); //여기선 아직 status가 normal임
    console.log('딜렛'+typeof selectedData);
    if(selectedData.length === 0){
      alert('삭제할거 선택해라');
    }else{
    positionGridApi.updateRowData({ remove: selectedData });
    statfalse();
    }
  };

  const deletePositionBtnn = () => {
  
     const selectedDataD = amountGridApi.getSelectedRows();
     console.log('딜렛'+typeof selectedData);
     if(selectedDataD.length === 0){
       alert('삭제할거 선택해라');
     }else{
     amountGridApi.updateRowData({ remove: selectedDataD })
     }
   };

  //--------------------- save ---------------
  let positionInfo = "";
  let positionInfo2 = "";

  const savePositionBtn = () => {
    positionGridApi.forEachNode(function(rowNode, index) {
      positionInfo = rowNode.data;
      fetchSavePosition();
    });
    amountGridApi.forEachNode(function(rowNode, index) {
      positionInfo2 = rowNode.data;
      fetchSaveDetailPosition();
    });
  };

  const fetchSavePosition = () => {
    console.log(positionInfo);
    console.log(typeof positionInfo); //object
    axios({
      method: "post",
      url: `http://localhost:8282/logi/business/registEstimate`,
      data: 
       positionInfo
    });
    alert('견적등록완료~');
  };

  const fetchSaveDetailPosition = () => {
    console.log(positionInfo2);
    console.log(typeof positionInfo2); //object
    axios({
      method: "post",
      url: `http://localhost:8282/logi/business/batchEstimate`,
      data: 
       positionInfo2
    });
    alert('견적상세등록완료~');
    deletePositionBtnn();
    deletePositionBtn();
  };

  //------------------ fetch ----------------
  const fetchPositionCodeList_axiosOptions = {
    fetchOnStart: false,
    method: "post",
  };

  const { data, data1} = useAxios(fetchPositionCodeList_axiosOptions);

  const positionColumnDefs = [
    { headerName: "견적번호", field: "estimateNo", width: 150, editable: true },
    { headerName: "거래처명", field: "customerCode", width: 150 },
    { headerName: "견적일자", field: "estimateDate", width: 150 },
    {
      headerName: "유효일자",
      field: "effectiveDate",
      width: 150
    },
    { headerName: "견적담당자", field: "personCodeInCharge", width: 150 },
    { headerName: "견적요청자", field: "estimateRequester", editable: true, width: 150 },
    { headerName: "견적스텟", field: "contractStatus", width: 150 },
    { headerName: "비고", field: "description", editable: true, width: 150 },
  ];

  const amountColumnDefs = [
    { headerName: "견적상세번호", field: "estimateDetailNo",  width: 150, editable: true },
    { headerName: "견적번호", field: "estimateNo",  width: 150, editable: true },
    { headerName: "아이템코드", field: "itemCode",  width: 150 },
    { headerName: "템명", field: "itemName", width: 150 },
    { headerName: "단위", field: "unitOfEstimate", width: 150 },
    { headerName: "납기일", field: "dueDateOfEstimate", width: 150 },
    { headerName: "견적수량", field: "estimateAmount", width: 150 },
    { headerName: "견적단가", field: "unitPriceOfEstimate", width: 150 },
    { headerName: "합계액", field: "sumPriceOfEstimate", width: 150 },
    { headerName: "비고", field: "description", width: 150, editable: true }
  ];





  return (
    <React.Fragment>
    <Estimate1/>

      
       
        <br/>
        
        <Typography variant = {"h6"}>견적상세추가!</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            아이템
          </InputLabel>
          <Select
            open={opens}
            onClose={handleCloses}
            onOpen={handleOpens}
            value={attdTypeCodes.value}
            onChange={attdTypeCodes.onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="DK-01">디지털카메라 NO.1</MenuItem>
            <MenuItem value="DK-02">디지털카메라 NO.2</MenuItem>
            <MenuItem value="DK-AP01">카메라 본체 NO.1</MenuItem>
            <MenuItem value="DK-AP02">카메라 본체 NO.2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"납기일"} // label	node		The label content.
          type = {"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date3.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date3.onChange} // onChange = 값이 변경되면 콜백이 발생.
        />
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"견적수량"} // label	node		The label content.
          type = {"text"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date4.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date4.onChange} // onChange = 값이 변경되면 콜백이 발생.
        />
        <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={searchItemBtn}
            >
              추가
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtnn}
            >
              삭제
            </Button>
           
          <Paper className={classes}>
            <div
              className={"ag-theme-material"}
              style={{
                height: "400px",
                width: "100%"
              }}
            >
              <AgGridReact columnDefs={amountColumnDefs}  
               rowData={data1}
               rowSelection={rowSelection}
                onGridReady={onGridReadyy}
                 />
            </div>
          </Paper>
      
    </React.Fragment> 
  );
};

export default Estimate;