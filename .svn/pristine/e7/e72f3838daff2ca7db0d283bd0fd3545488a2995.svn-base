import React, { useState, useEffect } from 'react';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";

import accountApi from '../../../../../api/axios/accountApi';
import AccountDialog from './Dialogs/AccountDialog';
import BalanceDialog from './Dialogs/BalanceDialog';
import CustomerDialog from './Dialogs/CustomerDialog'

import { makeStyles } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';

const JournalGrid = ({ slipNo, flag }) => {
    // slipNo : SlipGrid 컴포넌트에서 넘어온 slipNo로 journal 조회함.
    // flag : 3개 버튼 활성화.


    //========================== 그리드 객체 준비 ==========================
    const [gridApi, setGridApi] = useState();

    const onGridReady = params => {
        setGridApi(params.api);
        params.api.sizeColumnsToFit();
    };

    const classes = useStyles();

    const [data, setData] = useState('');      // 분개 그리드에 뿌릴 data.
    let [journalNo, setJournalNo] = useState('');     // 분개일련번호에 넣을 state.
    const [nodeId, setNodeId] = useState();    // 분개 그리드 한 cell을 클릭했을 때 어느 줄에 넣을지에 대한 정보를 가지고 있음.



    //========================== 그리드초기화 ==========================
    const initalBtn = () => {
        gridApi.selectAll();      // 그리드를 모두 선택해라.
        const allData = gridApi.getSelectedRows();   // 선택한 그리드 데이타 들고온나.
        gridApi.updateRowData({ remove: allData });  // 데이터 전부 지아라.
    };



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
    }, [slipNo]);   // SlipGrid 컴포넌트에서 보낸 slipNo 가 바뀔 때마다, slipNo 를 파라미터로 분개 List를 가져와라. setData 해라.



    //========================== 분개추가 ==========================
    useEffect(() => {
        async function getJournalRowCount() {
            const response = await accountApi.get('/slip/getJournalRowCount', {
                params: {
                    slipNo: slipNo
                }
            });
            setJournalNo(response.data);
        };
        getJournalRowCount();
    }, []);   // 페이지가 렌더링 될 때 한번만 분개 몇개 등록되어있는지 count 세와서 setjournal 해라.

    const addBtn = () => {
        setJournalNo(
            ++journalNo
        );    // 위에서 가져온 journalNo를 +1 하고 
        const newItem = createNewRowData();   // 새 row 만들어서
        gridApi.updateRowData({ add: [newItem] });   // 그리드에 추가시켜라.
    }
    const createNewRowData = () => {
        let newData = {
            journalNo: `${slipNo}JOURNAL0${journalNo}`,   // 여기서 분개 번호가 만들어짐.
            slipNo: slipNo,
            leftDebtorPrice: 0,   // 차변
            rightCreditsPrice: 0,   // 대변
            summaryNumber: 0,   // 몰라. db에 있길래 걍 넣었음.
        };
        return newData;
    };



    //========================== 분개그리드 클릭 이벤트 ==========================

    // Dialog는 분개 그리드의 각 cell을 클릭했을 때 띄위지는데, 밑에 return 문에 이미 컴포넌트화 해서 뿌려놓았다. 그게 뜨는 것임.
    // 각 cell을 클릭했을 때, ...DialogOpen 이라는 state로  값이 true가 되면서 Dialog가 띄워짐.
    // 그러면서 Dialog 컴포넌트에서 보낸 ...Value 값이 각 state에 저장되어,
    // 다시 분개 그리드에 뿌려지는 형태가 되는 것.
    // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓

    const [accountDialogOpen, setAccountDialogOpen] = useState(false);
    const [accountValue, setAccountValue] = useState('');
    const [balanceDialogOpen, setBalanceDialogOpen] = useState(false);
    const [balanceValue, setBalanceValue] = useState('');
    const [customerDialogOpen, setCustomerDialogOpen] = useState(false);
    const [customerValue, setCustomerValue] = useState('');

    const handleClose = value => {  // Dialog가 닫힐 때마다 handleClose 이 메서드가 실행됨. value라는 객체를 가지고 있음.
        if (value.division === 'accountDialog') {
            setAccountDialogOpen(false);
            setAccountValue(value.data);
        } else if (value.division === 'balanceDialog') {
            setBalanceDialogOpen(false);
            setBalanceValue(value.data);
        } else if (value.division === 'customerDialog') {
            setCustomerDialogOpen(false);
            setCustomerValue(value.data);
        }
    };   // value는 어느 그리드인지 구분하기 위해서 division 이라는 key와 Dialog를 클릭했을 때 저장되는 data 라는 key를 가지고 있다.

    useEffect(() => {
        if (accountValue[0] !== undefined) {  // accountDialog에서 accountValue 를 주는데 이게 존재한다면,
            let itemsToUpdate = [];
            gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
                if (index !== nodeId) {
                    return;
                }   // nodeId : 그리드의 몇 번째 cell에 값을 박을 것인지를 알려줌.
                let accountData = rowNode.data;   // rowNode : Dialog에서 넘어온 data를 accountData에 넣고,
                accountData.accountInnerCode = accountValue[0].accountCode;   // 계정코드와
                accountData.accountName = accountValue[0].accountName;   // 계정명을 넣고,
                itemsToUpdate.push(accountData);  // 배열에 집어넣고,
            });
            gridApi.updateRowData({ update: itemsToUpdate });   // 그리드 컴포넌트에 update 시켜준다. 즉, 값이 들어간다.
        };
    }, [accountValue]);  // accountValue가 변할 때마다 이 useEffect를 실행하라.

    useEffect(() => {
        if (balanceValue) {  // 대차구분 value가 존재한다면,
            let itemsToUpdate = [];
            gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
                if (index !== nodeId) {
                    return;
                }
                let balanceData = rowNode.data;
                balanceData.balanceDivision = balanceValue;
                itemsToUpdate.push(balanceData);
            });
            gridApi.updateRowData({ update: itemsToUpdate });   // 대차구분 cell에 update 시켜라.
        };
    }, [balanceValue]);   // balanceValue 변할 때마다 이 useEffect를 실행하라.

    useEffect(() => {
        if (customerValue) {
            let itemsToUpdate = [];
            gridApi.forEachNodeAfterFilterAndSort(function (rowNode, index) {
                if (index !== nodeId) {
                    return;
                }
                let customerData = rowNode.data;
                customerData.customerCode = customerValue[0].customerCode;
                customerData.customerName = customerValue[0].customerName;
                itemsToUpdate.push(customerData);
            });
            gridApi.updateRowData({ update: itemsToUpdate });
        };
    }, [customerValue]);   // 마찬가지다.

    const onCellClicked = id => {   // cell을 클릭했을 때마다 일어나는 event.
        if (id.colDef.field === 'accountInnerCode' || id.colDef.field === 'accountName') {   // 계정코드 또는 계정명 cell을 클릭했을 때,
            setAccountDialogOpen(true);
            setNodeId(id.rowIndex);  // rowIndex : 몇번째 줄인지 알려줌.
        } else if (id.colDef.field === 'balanceDivision') {   // 대차구분 cell을 클릭했을 때,
            setBalanceDialogOpen(true);
            setNodeId(id.rowIndex);
        } else if (id.colDef.field === 'customerCode' || id.colDef.field === 'customerName') {   // 거래처코드, 거래처명 cell을 클릭했을 때,
            setCustomerDialogOpen(true);
            setNodeId(id.rowIndex);
        }
    };



    //========================== 분개삭제 ==========================
    const deleteBtn = () => {
        const selectedData = gridApi.getSelectedRows();   // 분개 그리드에서 check된 녀석 가져오고,
        if (selectedData.length === 0) {
            alert('삭제할거 선택해라');
        } else {
            gridApi.updateRowData({ remove: selectedData });  // 그리드에서 없애라.
        }
    };



    //========================== 분개저장 ==========================
    const saveBtn = async () => {   // 분개 저장버튼을 눌렀을 때,
        if (gridApi.getSelectedRows()[0] !== undefined) {   // 분개 그리드에서 check 했는지 안했는지 판별.
            let batchArray = gridApi.getSelectedRows();   // 선택된 row 정보를 array에 다 담음.
            let lPrice;   // 차변
            let rPrice;   // 대변
            for (let i = 0; i < batchArray.length; i++) {
                if (batchArray[i].balanceDivision === '차변') {   // 대차구분이 차변이면,
                    batchArray[i].leftDebtorPrice = batchArray[i].price;   // leftDebtorPrice(차변) 칼럼에 price를 담고,
                    lPrice = batchArray[i].price;   // 밑에서 차변 - 대변 = 0(대차평균의 원리) 검증을 해야하므로 lPrice에 담는다.
                } else if (batchArray[i].balanceDivision === '대변') {
                    batchArray[i].rightCreditsPrice = batchArray[i].price;
                    rPrice = batchArray[i].price;
                }
            }
            if (lPrice - rPrice === 0) {
                const response = await accountApi.put('/slip/batchJournalInfo', batchArray);  // 대차 평균이 맞다면 보낸다. put으로.
                await accountApi.put(`/slip/updateDifference?slipNo=${slipNo}`);   
                // 그리고 journal 대차가 맞으므로 slip의 ACCOUNT_DIFFERENCE 칼럼을 0으로 만들어줄 녀석을 post로 보냄.
                const newData = [];
                response.data.forEach(element => {  // 분개가 저장되어 뒷단에서 return 된 List가 담긴 response의 데이터를,
                    newData.push(element.journalNo);  // newData 배열에 집어 넣고(분개번호를),
                });
                alert(`분개번호 [${newData}]가 저장되었습니다.`);  // alert으로 분개번호 띄와줌.
            } else {
                alert('차변과 대변의 금액이 맞지 않습니다. 다시 작성해주세요.');
            }
        } else {
            alert('선택된 분개가 없습니다.');
        }
    };


    //========================== 그리드내용 ==========================
    const accountColumnDefs = [
        { headerName: '', field: 'check', width: 50, checkboxSelection: true },
        { headerName: "분개일련번호", field: "journalNo", width: 230 },
        { headerName: "계정코드", field: "accountInnerCode", width: 100 },
        { headerName: "계정명", field: "accountName", width: 130 },
        { headerName: "대차구분", field: "balanceDivision", width: 100 },
        { headerName: "적요", field: "summaryComment", width: 230, editable: true },
        { headerName: "거래처코드", field: "customerCode", width: 110 },
        { headerName: "거래처명", field: "customerName", width: 110 },
        { headerName: "금액", field: "price", width: 110, editable: true, valueFormatter: currencyFormatter },
        // valueFormatter : 그리드의 표시형식.
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
    };   // 몰라. 통화표시 형식임.


    //==============================================================================
    return (
        <div>
            <Paper className={classes.paper}>
                <div className={classes.root} style={{ width: '30%', float: 'left' }}>
                    <Button variant="contained" color="primary" onClick={initalBtn}>
                        그리드초기화
                    </Button>
                </div>
                <div className={classes.root} style={{ width: '26%', float: 'right' }}>
                    <Button variant="contained" color="primary" disabled={flag} onClick={addBtn}>
                        분개추가
                    </Button>
                    <Button variant="contained" color="primary" disabled={flag} onClick={deleteBtn}>
                        분개삭제
                    </Button>
                    <Button variant="contained" color="secondary" disabled={flag} onClick={saveBtn}>
                        분개저장
                    </Button>
                </div>
                <AppBar position="relative" className={classes.subCategory}>
                    <Toolbar>
                        <Typography variant="h5">분개</Typography>
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
                        rowData={data}   // 그리드에 data 뿌림.
                        rowSelection='multiple'  // 여러 줄 선택가능.
                        onGridReady={onGridReady}  // 그리드가 초기화 되면.
                        onCellClicked={onCellClicked}  // cell 한개 클릭했을 때 발생 event.
                    />
                </div>
                <br />
            </Paper>
            {/* 여기 각 Dialog가 컴포넌트가 선언되어 있음. */}
            {/* 그리고 각 Dialog는 단순하게 뒷단과 연결되어 값을 agGrid로 뿌리게 되어있고, */}
            {/* onClose 이벤트로 value라는 객체에 data를 담아, 매개변수로 넘겨줘서 작업을 함. */}
            <AccountDialog open={accountDialogOpen} onClose={handleClose} />
            <BalanceDialog open={balanceDialogOpen} onClose={handleClose} />
            <CustomerDialog open={customerDialogOpen} onClose={handleClose} />
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

export default JournalGrid;