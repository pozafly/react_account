import React, { useState } from "react";
import PropTypes from "prop-types";
import { Paper, makeStyles, Grid, Button } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { AgGridReact } from "ag-grid-react";
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import useAxios from "../../../../api/util/useAxios";
import useInput from "../../../../api/util/useInput";
import MenuItem from '@material-ui/core/MenuItem';



// const axiosOptions = {
//   url: `http://localhost:8282/hr/pm/findEmpCode`,
//   method: 'POST',
//   fetchOnStart: false,
// };


const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(3, 4)
    },
    subCategory: {
      background: "#232f3e",
      color: "white"
    },
    buttons: {
      margin: theme.spacing(1)
    },
    textField: {
      margin: theme.spacing(1),
      width: 260
    }
}));




const RegistPersonnelByEmpoyee = () => {
  
    const classes = useStyles();
    return <div>
        <Grid>
            <Paper className={classes.paper}>
                <EmpoyeeSign/>
            </Paper>
            <br/>
            <Paper className={classes.paper}>
                <EmpoyeeSearch/>
            </Paper>
        </Grid>
    </div>
};


//신청

const EmpoyeeSign = () => {

  

const classes = useStyles();

 const empCode = useInput();
 const empName = useInput();
 const residentNumber = useInput();
 const birthDate = useInput();
 const gender = useInput();
 const tel = useInput();
 const phoneNumber = useInput();
 const nativeTypeCode = useInput();
 const email = useInput();
 const highestEducationCode = useInput();
 const baseAddress = useInput();
 const detailAddress = useInput();
 const zipCode = useInput();
 const disabilityCode = useInput();

 const axiosOptions = { //비동기통신,
  url: "http://localhost:8282/hr/pm/batchEmpInfoList",  
  fetchOnStart: false,
  method: "post",
    data: [{
       empCode: empCode.value,
       empName: empName.value,
       residentNumber: residentNumber.value,
       birthDate: birthDate.value,
       gender: gender.value,
       tel: tel.value,
       phoneNumber: phoneNumber.value, 
       nativeTypeCode: nativeTypeCode.value,
       email: email.value,
       highestEducationCode: highestEducationCode.value,
       baseAddress: baseAddress.value,
       detailAddress: detailAddress.value,
       zipCode: zipCode.value,
       status: 'inserted',
       imgSrc:"11",
       disabilityCode : disabilityCode.value
    }]
   
};

const {fetch} = useAxios(axiosOptions);


//---------------emp번호 발급------------------
const creatEmpCode = () => {
  
  axios
  .get(`http://localhost:8282/hr/pm/findEmpCode`)
  .then(response => {
    empCode.setValue(response.data+1);
    alert("사원번호 발급 : "+(response.data+1));
  })
  .catch(reason => {
    console.log(reason);
  });
};

//================================================셀렉트
const genderSelect = [
  {
    value: "M",
    label: "남성"
  },
  {
    value: "F",
    label: "여성"
  }
];

const nativeTypeSelect = [
  {
    value: "Korean",
    label: "내국인"
  },
  {
    value: "foreigner",
    label: "외국인"
  }
];

const highestEducationSelect = [
  {
    value: "고졸",
    label: "고졸"
  },
  {
    value: "전문학사",
    label: "전문학사"
  },
  {
    value: "학사",
    label: "학사"
  },
  {
    value: "석사",
    label: "석사"
  },
  {
    value: "박사",
    label: "박사"
  }
];

const disabilitySelect = [
  {
    value: "비대상",
    label: "비대상"
  },
  {
    value: "대상",
    label: "대상"
  }
];


    return (
      <Grid>
       <AppBar position="relative" className={classes.subCategory} >
            <Toolbar>
              <Typography variant="h5">신청</Typography>
            </Toolbar>
          </AppBar>
      <br/>
      <Grid container>
      
          <Grid item sm={12}>
         
          <TextField
        id="empCode"
        label="사원번호"
        type="String"
        className={classes.textField}
        defaultValue={empCode.value}
        value={empCode.value && empCode.value}
        onChange={empCode.onChange}
        placeholder="번호발급 버튼!"
        margin="dense"
        InputLabelProps={{
          shrink: true
        }}
      />
        <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
                onClick={creatEmpCode}
            >
                번호발급
            </Button>
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="empName"
        label="사원명"
        type="String"
        className={classes.textField}
        value={empName.value}
        onChange={empName.onChange}
        placeholder="예) 정민찬"
        margin="dense"
      />
          </Grid>
          
          <br />
          <Grid item sm={12}>
          <TextField
        id="residentNumber"
        label="주민번호"
        type="String"
        className={classes.textField}
        value={residentNumber.value}
        onChange={residentNumber.onChange}
        placeholder="예) 000000-0000000"
        margin="dense"
      />
          </Grid>
          
          <Grid item sm={12}>
          <TextField
        id="birthDate"
        label="생년월일"
        type="date"
        className={classes.textField}
        value={birthDate.value}
        onChange={birthDate.onChange}
        placeholder="예) 86-10-24"
        margin="dense"
          InputLabelProps={{
            shrink: true
          }}
      />
          </Grid>

          <Grid item sm={12}>
      <TextField
        id="gender"
        select
        label="성별"
        className={classes.textField}
        value={gender.value}
        onChange={gender.onChange}
        helperText="성별을 선택하세요"
        margin="dense"
      >
        
        {genderSelect.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}

      </TextField>
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="tel"
        label="자택전화번호"
        type="String"
        className={classes.textField}
        value={tel.value}
        onChange={tel.onChange}
        placeholder="예) 055-777-7777 없을경우 '무' 입력"
        margin="dense"
      />
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="phoneNumber"
        label="휴대전화번호"
        type="String"
        className={classes.textField}
        value={phoneNumber.value}
        onChange={phoneNumber.onChange}
        placeholder="예) 010-5703-6677 없을경우 '무' 입력"
        margin="dense"
      />
          </Grid>

          <Grid item sm={12}>
        <TextField
        id="nativeTypeCode"
        select
        label="내국인여부"
        className={classes.textField}
        value={nativeTypeCode.value}
        onChange={nativeTypeCode.onChange}
        margin="normal"
      >
        {nativeTypeSelect.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
          </Grid>

          <Grid item sm={12}>
      <TextField
        id="highestEducationCode"
        select
        label="최종학력"
        className={classes.textField}
        value={highestEducationCode.value}
        onChange={highestEducationCode.onChange}
        margin="normal"
      >
        {highestEducationSelect.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="baseAddress"
        label="주소"
        type="String"
        className={classes.textField}
        value={baseAddress.value}
        onChange={baseAddress.onChange}
        placeholder="예) 경남 진주시 가좌동"
        margin="dense"
      />
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="detailAddress"
        label="상세주소"
        type="String"
        className={classes.textField}
        value={detailAddress.value}
        onChange={detailAddress.onChange}
        placeholder="예) 혜람빌딩 5층 서울IT학원"
        margin="dense"
      />
          </Grid>

          <Grid item sm={12}>
          <TextField
        id="zipCode"
        label="우편번호"
        type="String"
        className={classes.textField}
        value={zipCode.value}
        onChange={zipCode.onChange}
        placeholder="예) 신우편번호 64533"
        margin="dense"
      />
          </Grid>
          <Grid item sm={12}>
        <TextField
        id="disabilityCode"
        select
        label="장애여부"
        className={classes.textField}
        value={disabilityCode.value}
        onChange={disabilityCode.onChange}
        margin="normal"
      >
        {disabilitySelect.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>

          </Grid>

          
          <Grid item sm={12}>
          <TextField
        id="email"
        label="EMAIL"
        type="String"
        className={classes.textField}
        value={email.value}
        onChange={email.onChange}
        placeholder="예) seoulit@naver.com"
        margin="dense"
      />
          </Grid>

          <br/>
          <br/>
              <Button variant="outlined"
                      color="primary"
                      className={classes.buttons}
                      onClick={fetch}
              >
                  신청
              </Button>
          </Grid>

      <br/>

  </Grid>
    );
};


//조회
const EmpoyeeSearch = () => {
  const rowSelection = "single";
  const classes = useStyles();

    const columnDefs = [
        {
            headerName: "사번",
            field: "empCode",
            editable: true,
            width: 110
          },
          {
            headerName: "사원명",
            field: "empName",
            editable: true,
            width: 110
          },
            {
              headerName: "성별",
              field: "gender",
              editable: true,
              width: 90
            },
            {
              headerName: "생일",
              field: "birthDate",
              editable: true,
              width: 120
            },
            {
              headerName: "휴대전화",
              field: "phoneNumber",
              editable: true,
              width: 140
            },
            {
                headerName: "주소",
                field: "baseAddress",
                editable: true,
                width: 300
              },
              {
                headerName: "주소상세",
                field: "detailAddress",
                editable: true,
                width: 300
              },
              {
                headerName: "이메일",
                field: "email",
                editable: true,
                width: 190
              }
    ];
  

//---------------------------------------------------------------

const onGridReady = params => {
  setPositionGridApi(params.api);
};

let selectedDetailData = [];
const onSelectionChanged = params => {

  selectedData = positionGridApi.getSelectedRows();
  
  selectedDetailData = selectedData[0];
  console.log(selectedDetailData);
};


//--------------조회----------------
 

  const axiosOptions = {
        url: `http://localhost:8282/hr/pm/findEmpInfoList`,
        fetchOnStart: false,
        method: 'post',
    };

  const {data, fetch} = useAxios(axiosOptions); //data는 json fetch는 함수


 //--------------업데이트----------------

 let positionInfo = [];
 const savePositionBtn = () => {
   positionGridApi.forEachNode(function(rowNode, index) {
    console.log(index);
     positionInfo[index] = rowNode.data;
     
//      fetchSavePosition();
//    });
//  };

//  const fetchSavePosition = () => {
   console.log(positionInfo);
   console.log(typeof positionInfo); //object

   axios({
     method: "post",
     url: `http://localhost:8282/hr/pm/empInfoUpdate`,
     data: positionInfo

    });
  });
  };


//--------------- delete ---------------


const [positionGridApi, setPositionGridApi] = useState();


let selectedData = "";
const deleteEmployeeBtn = () => {

  selectedData = positionGridApi.getSelectedRows();
  
//   fetchDeletePosition();

// };

// const fetchDeletePosition = () => {
  console.log(selectedData[0].empCode);
  console.log(typeof selectedData); //object

  axios({
    method: "post",
    url: `http://localhost:8282/hr/pm/empInfoDelete`,
    data: selectedData[0].empCode

   });
 };


//--------------------상세뷰 작업중----------------------------------



const [open, setOpen] = React.useState(false);
const [scroll, setScroll] = React.useState('paper');


const handleClickOpen = scrollType => () => {
  setOpen(true);
  setScroll(scrollType);
};

const handleClose = () => {
  setOpen(false);
};
      

    return (
      
        <Grid>
           
       <AppBar position="relative" className={classes.subCategory} >
            <Toolbar>
              <Typography variant="h5">사원 상세조회</Typography>
            </Toolbar>
          </AppBar>
            
            <br/>
            <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
                onClick={fetch}
            >
                조회
            </Button>
            
            <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
                onClick={deleteEmployeeBtn}
            >
                선택삭제
            </Button>

            <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
                onClick={savePositionBtn}
            >
                일괄저장
            </Button>

            <Button
                variant="outlined"
                color="primary"
                className={classes.buttons}
                onClick={handleClickOpen}
            >
                상세뷰
            </Button>
            <br/>
            <div className={"ag-theme-material"}
                 style={{
                     height: "300px",
                     width: "80%"
                 }}>

                <AgGridReact
                columnDefs={columnDefs}
                rowData={data}
                rowSelection={rowSelection}
                onSelectionChanged={onSelectionChanged}
                onGridReady={onGridReady}
              />
            </div>
            
            <br/>
        </Grid>
    );
};


// RegistPersonnelByEmpoyee.propTypes = {
//     classes: PropTypes.object
// };


export default RegistPersonnelByEmpoyee;