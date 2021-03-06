import React, { useState, useEffect } from 'react';
import { AgGridReact } from "ag-grid-react";
import accountApi from '../../../../../api/axios/accountApi';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';

import {connect} from 'react-redux';

const SlipGrid = ({ headInfo, setSlipNo, today, setFlag, empInfo }) => {
    // headInfo : 날짜, 유형 정보를 가지고 있는 props
    // setSlipNo : 전표 그리드를 클릭했을 시 해당 slipNo를 부모 컴포넌트 state를 변화시킴
    // setFlag : 분개 그리드의 버튼 활성화 state
    // empInfo : session 단위로 올라가 있는 현재 로그인 된 emp 정보를 담고 있다.  cf) 부모객체에서 props로 받는게 아니라 맨 밑에 처리된 로직으로 동작됨.(즉 나도 잘 모른다는 말임.)

    const { startDate, endDate, slipStatus } = headInfo;  // props로 받아온 headInfo의 상태 값을 비구조 할당.
    const classes = useStyles();  // 스타일 먹임
    let [no, setNo] = useState(0);  // 뒷단에 가서 전표일련번호 먹일 때 count값을 가져옴.
    const [data, setData] = useState('');  // 전표 그리드에 뿌릴 data의 state.




    //========================== 전표를 가져오기 위해 맨처음 no를 세팅하는 작업 ==========================
    useEffect(() => {
        async function fetchData(){
            const response = await accountApi.get('/slip/getSlipRowCount', {
                params: {
                    reportingDate: today
                }
            });
            setNo(response.data);
        };
        fetchData();
    }, []);   //초기 랜더링 될 때, 오늘날짜로 등록된 전표 수를 count해서 setNo 함.



    //========================== 그리드 객체 준비 ==========================
    const [positionGridApi, setPositionGridApi] = useState();
    const onGridReady = params => {
        setPositionGridApi(params.api);
        params.api.sizeColumnsToFit();   // 그리드 초기화 시 칼럼 사이즈 자동조절.
    };   // 여긴 그냥 ag Grid의 api를 사용하기 위해 선언. 그리고 이곳은 ag Grid 초기화 시 실행된다.



    //========================== 그리드내용 ==========================
    const accountColumnDefs = [
        { headerName: '', field: 'check', width: 50, checkboxSelection: true },  // checkboxSelection : 체크박스 추가함
        { headerName: "전표일련번호", field: "slipNo", width: 220 },
        { headerName: "전표유형", field: "slipType", width: 100 },
        { headerName: "날짜", field: "reportingDate", width: 130 },
        { headerName: "작성자코드", field: "reportingEmpCode", width: 110 },
        { headerName: "품의내역", field: "expenseReport", width: 180, editable: true },  // editable : 편집가능
        { headerName: "승인날짜", field: "approvalDate", width: 130 },
        { headerName: "승인자", field: "approvalEmpCode", width: 130 },
        { headerName: "승인상태", field: "slipStatus", width: 130 },
        { headerName: "부서코드", field: "deptCode", hide: true},
        { headerName: "기수일련번호", field: "accountPeriodNo", hide: true},
        { headerName: "status", field: 'status', hide: true}
    ];


    //========================== 조회 ==========================
    const getSlipList = async e => {
        const response = await accountApi.get('/slip/getSlipList', {
            params: {
                startDate: startDate,
                endDate: endDate,
                slipStatus: slipStatus
            }
        });
        setData(response.data);
    };   // 전표조회 버튼 클릭했을 때 파라미터 가져가서 전표 데이터 들고와서 setData 해줌.



    //========================== 전표추가 ==========================
    const addBtn = () => {
        if(positionGridApi.getDisplayedRowCount() === 0){  // getDisplayedRowCount : 그리드에 표시된 row 수 count 해줌.
            const newItem = createNewRowData();   // 새로운 row를 만들어라.
            positionGridApi.updateRowData({ add: [newItem] });   // 만들어진 새로운 row를 그리드에 add 해라.
        } else {
            alert('전표는 한번에 한개씩만 등록 가능합니다. 초기화를 통해 진행해주세요.');
        }  // 즉, 그리드에 암것도 없을 때 1줄 추가 가능함.
    }
    const createNewRowData = () => {
        let newData = {
            slipNo: `${today.replace(/-/gi, "")}SLIP00${++no}`,  // 전표 번호 생성
            slipType: '대체',
            reportingDate: today,
            reportingEmpCode: empInfo.empCode,   // session단위로 올라간 empCode
            slipStatus: '미결',
            deptCode: empInfo.deptCode,   // session단위로 올라간 deptCode
            accountPeriodNo: new Date().getFullYear(),   //올해 년도
            status : 'insert'
        };
        return newData;
    };



    //========================== 전표삭제 ==========================
    const deleteBtn = () => {
        const selectedData = positionGridApi.getSelectedRows();   // 그리드에 선택된 모든 정보를 들고와라.
        if (selectedData.length === 0) {   // 선택된게 없으면.
            alert('삭제할거 선택해라');
        } else {
            positionGridApi.updateRowData({ remove: selectedData });   // 선택된걸 삭제해라.
        }
    };



    //========================== 그리드초기화 ==========================
    const initalBtn = () => {
        positionGridApi.selectAll();   // 그리드에 뿌려진 모든 데이터를 선택해라.
        const allData = positionGridApi.getSelectedRows();   // 선택된 데이터를 담아라.
        positionGridApi.updateRowData({ remove: allData });  // 그리드에서 제거해라.
    };



    //========================== 전표저장 ==========================
    const saveBtn = async () => {
        if(positionGridApi.getSelectedRows()[0] !== undefined){   // 그리드에서 체크 한게 있으면.
            const response = await accountApi.put('/slip/batchSlipInfo', batchArray);  // 전표 put으로 저장시킴.
            const newData = [];
            response.data.forEach(element => {
                newData.push(element.slipNo);    // newData 배열에 담아서.
            });
            alert(`전표일련번호 [${newData}] 가 저장되었습니다. 분개추가로 넘어가세요.`)  // 전표일련번호 alert 해라.

            setFlag(false);   // 분개 버튼 3개 활성화 해라.
        } else {
            alert('선택된 전표가 없습니다.');
        }
    };

    const batchArray = [];
    const rowSelected = props => {     // 그리드의 row를 'check'할 때마다,
        if(props.node.selected){
            batchArray.push(props.data);   // 전표보낼 batchArray에 담아라. put으로 보낼라고.
        }else{
            batchArray.pop(props.data);   //  check 풀면 array에서 빼라.
        }
    };



    //========================== 전표그리드 row를 눌렀을 때, 이벤트 ==========================
    const slipChange = () => {
        const rowData = positionGridApi.getSelectedRows();   // 선택된 row 정보
        setSlipNo(rowData[0].slipNo);  // row 정보의 slipNo를 세팅해라. JournalGrid 컴포넌트로 보내기 위함.
    };


    //==============================================================================
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.root} style={{ width: '30%', float: 'left' }}>
                    <Button variant="contained" color="primary" onClick={getSlipList}>
                        조회
                    </Button>
                    <Button variant="contained" color="primary" onClick={initalBtn}>
                        그리드초기화
                    </Button>
                </div>
                <div className={classes.root} style={{ width: '26%', float: 'right' }}>
                    <Button variant="contained" color="primary" onClick={addBtn}>
                        전표추가
                    </Button>
                    <Button variant="contained" color="primary" onClick={deleteBtn}>
                        전표삭제
                    </Button>
                    <Button variant="contained" color="secondary" onClick={saveBtn}>
                        전표저장
                    </Button>
                </div>
                <AppBar position="relative" className={classes.subCategory}>
                    <Toolbar>
                        <Typography variant="h5">전표</Typography>
                    </Toolbar>
                </AppBar>
                <div
                    className={"ag-theme-balham"}
                    style={{
                        height: "200px",
                        width: "100%",
                        paddingTop: "20px"
                    }}>
                    <AgGridReact
                        columnDefs={accountColumnDefs}
                        rowData={data}  // setData된 state를 결국 여기 넣어서 그리드에 표현함.
                        rowSelection='multiple'  // 그리드 여러개 선택가능
                        onGridReady={onGridReady}
                        onCellClicked={slipChange}   // 그리드 cell 하나 클릭할 때,
                        onRowSelected={rowSelected}  // 그리드 row check 할 때.
                    />
                </div>
                <br />
            </Paper>
        </div>
    );
};

// 스타일 관련
const useStyles = makeStyles(theme => ({
    paper: {
        padding: theme.spacing(1),
        height: 330,
        width: 1190
    },
    subCategory: {
        background: "#232f3e",
        color: "white"
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// empCode를 session 단위로 가져올 때 필요한거.
const mapStateToProps = (state) => {
    return {
        empInfo: state.logInOutReducer.empInfo
    }
}

export default connect(mapStateToProps)(SlipGrid);