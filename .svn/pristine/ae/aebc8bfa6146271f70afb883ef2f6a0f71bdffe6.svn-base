import React, { useState, useEffect } from 'react';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import accountApi from '../../../../../api/axios/accountApi';

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import { AllCommunityModules } from "ag-grid-community";


const ApprovalJournalGrid = ({ slipNo, today }) => {

    //========================== 그리드 객체 준비 ==========================
    const [gridApi, setGridApi] = useState();
    const onGridReady = params => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
    };

    const classes = useStyles();
    const [data, setData] = useState('');

    //========================== 분개조회 ==========================
    useEffect(() => {
        async function getJournalListForSlip() {
            const response = await accountApi.get('/slip/getJournalListForSlip', {
                params: {
                    slipNo: slipNo
                }
            });
            setData(response.data);
        };
        getJournalListForSlip();
    }, [slipNo]);

    //========================== 그리드내용 ==========================
    const accountColumnDefs = [
        { headerName: "분개일련번호", field: "journalNo", width: 230 },
        { headerName: "계정코드", field: "accountInnerCode", width: 100 },
        { headerName: "계정명", field: "accountName", width: 130 },
        { headerName: "대차구분", field: "balanceDivision", width: 100 },
        { headerName: "적요", field: "summaryComment", width: 230 },
        { headerName: "거래처코드", field: "customerCode", width: 110 },
        { headerName: "거래처명", field: "customerName", width: 110 },
        { headerName: "금액", field: "price", width: 110, valueFormatter: currencyFormatter },
        { headerName: "전표번호", field: "slipNo", width: 110, hide: true },
        { headerName: "차변", field: "leftDebtorPrice", width: 110, hide: true },
        { headerName: "대변", field: "rightCreditsPrice", width: 110, hide: true },
        { headerName: "적요번호", field: "summaryNumber", width: 110, hide: true },
    ];

    //========================== 통화표시 포매터 ==========================
    function currencyFormatter(params) {
        return "￦" + formatNumber(params.value);
    };
    function formatNumber(number) {
        return Math.floor(number)
            .toString()
            .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
    };


    //==============================================================================
    return (
        <div>
            <Paper className={classes.paper}>
                <AppBar position="relative" className={classes.subCategory}>
                    <Toolbar>
                        <Typography variant="h5">분개</Typography>
                    </Toolbar>
                </AppBar>
                <div
                    className={"ag-theme-balham"}
                    style={{
                        height: "245px",
                        width: "100%",
                        paddingTop: "20px"
                    }}>
                    <AgGridReact
                        columnDefs={accountColumnDefs}
                        rowData={data}
                        rowSelection='multiple'
                        onGridReady={onGridReady}
                        modules={AllCommunityModules}
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
}));

export default ApprovalJournalGrid;