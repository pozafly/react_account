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

const ApprovalSlipGrid = ({ headInfo, setSlipNo, today, empInfo }) => {

    const { startDate, endDate } = headInfo;
    const classes = useStyles();
    const [data, setData] = useState('');

    //========================== 그리드 객체 준비 ==========================
    const [positionGridApi, setPositionGridApi] = useState();
    const onGridReady = params => {
        setPositionGridApi(params.api);
        params.api.sizeColumnsToFit();
    };

    //========================== 그리드내용 ==========================
    const accountColumnDefs = [
        { headerName: '', field: 'check', width: 50, checkboxSelection:true },
        { headerName: "전표일련번호", field: "slipNo", width: 220 },
        { headerName: "전표유형", field: "slipType", width: 100 },
        { headerName: "날짜", field: "reportingDate", width: 130 },
        { headerName: "작성자코드", field: "reportingEmpCode", width: 110 },
        { headerName: "품의내역", field: "expenseReport", width: 180, editable: true },
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
                slipStatus: '미결'
            }
        });
        setData(response.data);
    };

    //========================== 그리드초기화 ==========================
    const initalBtn = () => {
        positionGridApi.selectAll();
        const allData = positionGridApi.getSelectedRows();
        positionGridApi.updateRowData({ remove: allData });
    };

    //========================== 전표승인 ==========================
    const batchArray = [];
    const rowSelected = props => {    
        if(props.node.selected){
            props.data.approvalEmpCode = empInfo.empCode;
            props.data.approvalDate = today;

            batchArray.push(props.data);
        }else{
            batchArray.pop(props.data);
        }
    };

    const approvalBtn = async () => {
        if(positionGridApi.getSelectedRows()[0] !== undefined){
            await accountApi.put('/slip/approvalSlip', batchArray);
            alert(`선택하신 전표가 승인되었습니다.★`);
            getSlipList();       //전표 승인 후 그리드 다시 조회함.
        } else {
            alert('선택된 전표가 없습니다.');
        }
    };
    
    //========================== 전표 그리드 눌렀을 때, 이벤트 ==========================

    const slipChange = () => {
        const rowData = positionGridApi.getSelectedRows(); // rowData
        setSlipNo(rowData[0].slipNo);
    };
    
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.root} style={{ width: '30%', float: 'left' }}>
                    <Button variant="contained" color="primary" onClick={getSlipList}>
                        미결전표조회
                    </Button>
                    <Button variant="contained" color="primary" onClick={initalBtn}>
                        그리드초기화
                    </Button>
                </div>
                <div className={classes.root} style={{ width: '9%', float: 'right' }}>
                    <Button variant="contained" color="secondary" onClick={approvalBtn}>
                        전표승인
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
                        rowData={data}
                        rowSelection='multiple'
                        onGridReady={onGridReady}
                        onCellClicked={slipChange}
                        onRowSelected={rowSelected}
                    />
                </div>
                <br />
            </Paper>
        </div>
    );
};


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

const mapStateToProps = (state) => {
    return {
        empInfo: state.logInOutReducer.empInfo
    }
}

export default connect(mapStateToProps)(ApprovalSlipGrid);