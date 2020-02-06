import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import accountApi from '../../../../../../api/axios/accountApi';

// AccountDialog : 계정과목만 뿌려주는 Dialog임.
const AccountDialog = (props) => {

    //========================== 그리드 객체 준비 ==========================
    const [positionGridApi, setPositionGridApi] = useState();
    const onGridReady = params => {
        setPositionGridApi(params.api);
    };
    
    
    //========================== 그리드내용 ==========================
    const accountColumnDefs = [
        { headerName: "계정과목 코드", field: "accountInnerCode", width: 210, cellStyle: {textAlign: 'center'} },
        { headerName: "계정과목 명", field: "accountName", width: 210, cellStyle: {textAlign: 'center'} }
    ];



    //========================== 계정과목 조회 ==========================
    // 이 Dialog가 한번 랜더링 되면 get 방식으로 뒷단에서 모든 계정과목 data를 들거와서 data에 저장함.
    const [data, setData] = useState('');
    useEffect(() => {
        async function findDetailAccountList() {
            const response = await accountApi.get('/accountTitle/findDetailAccountList', {
                params: {
                    code: 'null'  // code를 null을 주면 마이바티스의 동적쿼리로 모든 계정과목이 조회되어 날라옴.
                }
            });
            setData(response.data);
        };
        findDetailAccountList();
    }, []);



    //========================== 그리드를 클릭했을 때 발생되는 이벤트 ==========================
    // onClose 와 open 값을 비구조 할당과 동시에 Dialog가 닫히면서
    // onClose안에 객체(data, division) 을 가지고 JournalGrid 컴포넌트로 감.
    const { onClose, open } = props;   
    const handleClose = () => {
        onClose({
            data : positionGridApi.getSelectedRows(),  // data는 클릭한 row의 정보이고,
            division : 'accountDialog'  // 구분은 accountDialog다.
        });
    };


    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth={'xs'}>
            <DialogTitle id="simple-dialog-title">계정과목 선택창</DialogTitle>
            <List >
                <div className={"ag-theme-balham"}
                    style={{
                        height: "300px",
                        width: "100%",
                        paddingTop: "8px"
                    }}>
                    <AgGridReact
                        columnDefs={accountColumnDefs}
                        rowData={data}   // 뿌릴 data
                        rowSelection='single'  // 하나만 선택 가능.
                        onGridReady={onGridReady}
                        onCellClicked={handleClose}  // cell을 클릭하면, handleClose가 실행된다.
                    />
                </div>
            </List>
        </Dialog>
    );
}

AccountDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default AccountDialog; 