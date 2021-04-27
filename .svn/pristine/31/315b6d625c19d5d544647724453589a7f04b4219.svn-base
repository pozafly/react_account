import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react";
import { Paper, makeStyles, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import axios from "axios";
import {makeUseAxios} from 'axios-hooks';

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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // 엑시오스 사용 준비
  const useAxios = makeUseAxios({
    axios: axios.create({ baseURL: "http://localhost:8282/" })
  });

  const EstimateBody=({state})=>{

    const rowSelection = "single";
    const {day1,day2,item} = state;
    
    // 그리드 객체 준비
    const [positionGridApi, setPositionGridApi] = useState();
  
    const onGridReady = params => {
      setPositionGridApi(params.api);
    };

    const [url, setUrl] = useState();
    const[no, setNo] = useState('');
    const [{ data }, refetch] = useAxios(url)

    // 조회
    const findEstimateList = () => {
      setUrl("logi/business/findEstimateList?toDate="+day2+"&fromDate="+day1);
      refetch();
    };
  
    // 삭제 
    const deletePositionBtn = () => {

      const selectedData = positionGridApi.getSelectedRows();
        //console.log(selectedData[0].estimateNo);

        if(selectedData.length === 0){
          alert('삭제할거 선택해라');
        }else{
        positionGridApi.updateRowData({ remove: selectedData });
        statfalse();
        }
        setUrl({url:"logi/business/deleteEstimateList?id="+selectedData[0].estimateNo,
          method:"delete"
      });
        refetch();
    }

    console.log(url);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


    const classes = useStyles();

    const [stat, setStat] = React.useState(false);

  
    function statfalse() {
      setStat(false);
    }
    function statTrue() {
      setStat(true);
    }

///////////////////////////////////////버튼 이벤트////////////////////////////////////////////
const addPositionBtn = () => {
    
    if(day1 === undefined || day2 === undefined || item === undefined || 
      day1 === "" || day2 === "" || item === ""){
      alert('견적일자,유효일자,거래처명을 입력하여주세요');
    }
    else if(stat===true){
      alert('견적은 하나만 등록된다~');
    }
    else{
      statTrue();

          
      axios({
        method: "GET",
        url: `http://localhost:8282/logi/business/createEstimateNo`
      }).then(function (response)
      {
        console.log(response.data);
        setNo(response.data);
      });
      console.log(no);
      
  const newItem = createNewRowData();
  positionGridApi.updateRowData({ add: [newItem] });
    }
};

const createNewRowData = () => {
  console.log(no);
  console.log("!@#!@#12#!@#!@#!@#!@#");
    let newData = {
        estimateNo  :  no,
        estimateDate : day1.replace(/-/gi, ""),
        effectiveDate : day2.replace(/-/gi, ""),
        customerCode : item,
        personCodeInCharge : 'estimulo',
        contractStatus : 'N'
    };
    console.log(newData);
    return newData;
  };

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
      data: 
       positionInfo
    });
    alert('견적등록완료~');
  };
//////////////////////////////////////////////////////////////

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

    return(
      
        <div>
        <Button
        variant={"outlined"}
        color={"primary"}
        className={classes.buttons}
        onClick={findEstimateList}
      >
        조회
      </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={addPositionBtn}
            >
              추가
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={deletePositionBtn}
            >
              삭제
            </Button>
            <Button
              variant={"outlined"}
              color={"primary"}
              className={classes.buttons}
              onClick={savePositionBtn}
            >
              일괄저장
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
         </div>
       );
    };
       export default EstimateBody;