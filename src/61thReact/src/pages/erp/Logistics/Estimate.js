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
  const [open, setOpen] = useState(false);
  const [opens, setOpens] = useState(false);
  const [stat, setStat] = useState(false);
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

  const onGridReady = event => {
    setPositionGridApi(event.api);
  };
  const onGridReadyy = event => {
    setAmountGridApi(event.api);
  };

  //--------------------  ???????????? -----------------

  const addPositionBtn = () => {
    
      console.log(date1.value);
      console.log(date2.value);
      console.log(attdTypeCode.value);
      if(date1.value === undefined || date2.value === undefined || attdTypeCode.value === undefined || 
        date1.value === "" || date2.value === "" || attdTypeCode.value === ""){
        alert('????????????,????????????,??????????????? ?????????????????????');
      }
      else if(stat===true){
        alert('????????? ????????? ????????????~');
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

//============================== ???????????????????????? ????????? ????????????  ==================================

  const searchItemBtn = () => {
    if(stat === false){
      alert('???????????? ????????????');
    }
    else if(date3.value === undefined || date4.value === undefined || attdTypeCode.value === undefined || 
      date1.value === "" || date2.value === "" || attdTypeCode.value === ""){
        alert('??? ?????????');
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
      alert('???????????? ????????????');
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

  //------------------- delete ???????????? ?????????~~ Lee Good---------------
  const deletePositionBtn = () => {
   
    const selectedData = positionGridApi.getSelectedRows(); //????????? ?????? status??? normal???
    console.log('??????'+typeof selectedData);
    if(selectedData.length === 0){
      alert('???????????? ????????????');
    }else{
    positionGridApi.updateRowData({ remove: selectedData });
    statfalse();
    }
  };

  const deletePositionBtnn = () => {
  
     const selectedDataD = amountGridApi.getSelectedRows();
     console.log('??????'+typeof selectedData);
     if(selectedDataD.length === 0){
       alert('???????????? ????????????');
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
    alert('??????????????????~');
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
    alert('????????????????????????~');
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
    { headerName: "????????????", field: "estimateNo", width: 150, editable: true },
    { headerName: "????????????", field: "customerCode", width: 150 },
    { headerName: "????????????", field: "estimateDate", width: 150 },
    {
      headerName: "????????????",
      field: "effectiveDate",
      width: 150
    },
    { headerName: "???????????????", field: "personCodeInCharge", width: 150 },
    { headerName: "???????????????", field: "estimateRequester", editable: true, width: 150 },
    { headerName: "????????????", field: "contractStatus", width: 150 },
    { headerName: "??????", field: "description", editable: true, width: 150 },
  ];

  const amountColumnDefs = [
    { headerName: "??????????????????", field: "estimateDetailNo",  width: 150, editable: true },
    { headerName: "????????????", field: "estimateNo",  width: 150, editable: true },
    { headerName: "???????????????", field: "itemCode",  width: 150 },
    { headerName: "??????", field: "itemName", width: 150 },
    { headerName: "??????", field: "unitOfEstimate", width: 150 },
    { headerName: "?????????", field: "dueDateOfEstimate", width: 150 },
    { headerName: "????????????", field: "estimateAmount", width: 150 },
    { headerName: "????????????", field: "unitPriceOfEstimate", width: 150 },
    { headerName: "?????????", field: "sumPriceOfEstimate", width: 150 },
    { headerName: "??????", field: "description", width: 150, editable: true }
  ];

  return (
    <React.Fragment>
        <Typography variant = {"h6"}>????????????!</Typography>
      <div align="left">
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"????????????"} // label	node		The label content.
          type = {"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date1.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date1.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"????????????"} // label	node		The label content.
          type = {"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date2.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date2.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
         <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            ?????????
          </InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={attdTypeCode.value}
            onChange={attdTypeCode.onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="(???)??????">(???)??????</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="SARA CO., LTD">SARA CO., LTD</MenuItem>
            <MenuItem value="JAMES CO., LTD">JAMES CO., LTD</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="??????(???)">??????(???)</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="(???)????????????">(???)????????????</MenuItem>
            <MenuItem value="??????(???)">??????(???)</MenuItem>
          </Select>
        </FormControl>
      </div>
      {/* <Grid container spacing={2}>
        <Grid item xs={4}> */}
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
                onGridReady={onGridReady}
              />
            </div>
            
          </Paper>
       
        <br/>
        
        <Typography variant = {"h6"}>??????????????????!</Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            ?????????
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
            <MenuItem value="DK-01">?????????????????? NO.1</MenuItem>
            <MenuItem value="DK-02">?????????????????? NO.2</MenuItem>
            <MenuItem value="DK-AP01">????????? ?????? NO.1</MenuItem>
            <MenuItem value="DK-AP02">????????? ?????? NO.2</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"?????????"} // label	node		The label content.
          type = {"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date3.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date3.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
        <TextField
          id = {"day"} // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          label = {"????????????"} // label	node		The label content.
          type = {"text"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue = {date4.value} // defaultValue	any		The default value of the input element.
                      //date = useInupt();
          onChange = {date4.onChange} // onChange = ?????? ???????????? ????????? ??????.
        />
        <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={searchItemBtn}
            >
              ??????
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtnn}
            >
              ??????
            </Button>
           
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