import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham-dark.css";

import logiApi from '../../../../../../api/axios/logiApi';


// CustomerDialog : 거래처만 뿌려주는 Dialog임. 따로 주석 안달겠음. 
// AccountDialog.js와 거의 동일하므로 거기 주석 보삼.
const CustomerDialog = (props) => {

    //========================== 그리드 객체 준비 ==========================
    const [positionGridApi, setPositionGridApi] = useState();
    const onGridReady = params => {
        setPositionGridApi(params.api);
    };
    
    //========================== 그리드내용 ==========================
    const CustomerColumnDefs = [
        { headerName: "거래처 코드", field: "customerCode", width: 210, cellStyle: {textAlign: 'center'} },
        { headerName: "거래처 명", field: "customerName", width: 210, cellStyle: {textAlign: 'center'}}
    ];


    const [data, setData] = useState('');
    useEffect(() => {
        async function findDetailAccountList() {
            const response = await logiApi.get('/business/findCustomerList');
            setData(response.data);
        };
        findDetailAccountList();
    }, []);

    const { onClose, open } = props;
    const handleClose = () => {
        onClose({
            data : positionGridApi.getSelectedRows(),
            division : 'customerDialog'
        });
    };

    return (
        <Dialog aria-labelledby="simple-dialog-title" open={open} fullWidth={true} maxWidth={'xs'}>
            <DialogTitle id="simple-dialog-title">거래처 선택창</DialogTitle>
            <List >
                <div className={"ag-theme-balham"}
                    style={{
                        height: "300px",
                        width: "100%",
                        paddingTop: "8px"
                    }}>
                    <AgGridReact
                        columnDefs={CustomerColumnDefs}
                        rowData={data}
                        rowSelection='single'
                        onGridReady={onGridReady}
                        onCellClicked={handleClose}
                    />
                </div>
            </List>
        </Dialog>
    );
}

CustomerDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default CustomerDialog; 