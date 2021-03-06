import React, {useEffect} from "react";
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import TextField from "@material-ui/core/TextField";
import useAxios from "../../../../../api/util/useAxios";
import useInput from "../../../../../api/util/useInput";

const axiosOptions = {
    url: `http://localhost:8282/hr/attendance/findDailyAttdReport/`,
    method: 'POST',
    fetchOnStart: false,
};

const DailyAttd = () => {

    const columnDefs = [
        {
            headerName: '', checkboxSelection: true, width: 50, headerCheckboxSelection: true
        },
        {
            headerName: "사원코드", field: "empCode", width: 100,
        },
        {
            headerName: "사원명", field: "empName", width: 120
        },
        {
            headerName: "요일", field: "daily", width: 90
        },
        {
            headerName: "출근시각", field: "attendTime", width: 100
        },
        {
            headerName: "퇴근시각", field: "quitTime", width: 100
        },
        {
            headerName: "외출시각", field: "leaveTime", width: 100
        },
        {
            headerName: "귀사시각", field: "returnTime", width: 100
        },
        {
            headerName: "외출시간", field: "leaveHour", width: 100
        },
        {
            headerName: "근무시간", field: "workHour", width: 100
        },
        {
            headerName: "지각시간", field: "lateHour", width: 100
        },
        {
            headerName: "연장근무", field: "overWorkHour", width: 100
        },
        {
            headerName: "심야근무", field: "nightWorkHour", width: 100
        },
        {
            headerName: "마감여부", field: "closeYn", width: 100
        },
    ];
    const date = useInput();

    const {data, fetch} = useAxios(axiosOptions);
    const cancelFetch = () => {
        //여기여기여기
        axiosOptions.selectedRows.forEach((item, index, array) => {
            array[index].closeYn = 'N'
        });
        axiosOptions.data = axiosOptions.selectedRows;
        axiosOptions.url = 'http://localhost:8282/hr/attendance/updateDailyAttdCloseYN';
        fetch(axiosOptions);
        
       /*  axiosOptions.url = 'http://localhost:8282/hr/attendance/';
        fetch(axiosOptions.url); */
    };
    const findFetch = () => {
        axiosOptions.url = `http://localhost:8282/hr/attendance/findDailyAttdReport/${date.value}`;
        fetch(axiosOptions.url);
    };
    const updateFetch = () => {
        axiosOptions.selectedRows.forEach((item, index, array) => {
            array[index].closeYn = 'Y'
        });
        axiosOptions.data = axiosOptions.selectedRows;
        axiosOptions.url = 'http://localhost:8282/hr/attendance/updateDailyAttdCloseYN';
        fetch(axiosOptions);

    };
    useEffect(()=>{
        if(axiosOptions.url ==='http://localhost:8282/hr/attendance/updateDailyAttdCloseYN'){
            findFetch();
        }
    });

    const [value, setValue] = React.useState(0);
    const tabChange = (event, newValue) => {
        setValue(newValue);        
    };
    return <Paper><Typography variant={"h6"}>일근태관리</Typography>
        <div align="right">
            <TextField id={"day"} type={"date"}
                       defaultValue={date.value}
                       onChange={date.onChange}
            />
        </div>
        <div>
            <AppBar position="static">
                <Tabs value={value} onChange={tabChange}>
                    <Tab label="미마감 관리 항목"/>
                    <Tab label="마감 관리 항목"/>                   
                    
                </Tabs>
            </AppBar>
            <div align={"right"}>
                <Button variant="contained" onClick={findFetch}>조회</Button>
                <Button variant="contained" onClick={
                    value === 0 ? updateFetch : cancelFetch
                    }>
                    {value === 0 ? "마감" : "마감취소"}</Button>
            </div>
            {value === 0 && <UnfinishDailyAttd data={data ? data.filter((DC) => DC.closeYn === 'N') : ""}
                                               columnDefs={columnDefs}/>}
            {value === 1 && <FinishDailyAttd data={data ? data.filter((DC) => DC.closeYn === 'Y') : ""}
                                             columnDefs={columnDefs}/>}
        </div>
    </Paper>;
};

const UnfinishDailyAttd = ({data, columnDefs}) => {

    const onSelectionChanged = (event) => {
        const gridApi = event.api;
        const selectedRows = gridApi.getSelectedRows();
        axiosOptions.selectedRows = selectedRows;
    };

    return <div>
        <div className={"ag-theme-material"} style={{
            height: "500px",
            width: "100%"
        }}>
            <AgGridReact columnDefs={columnDefs} rowData={data} rowSelection={"multiple"}
                         onSelectionChanged={onSelectionChanged}/>
        </div>
    </div>
};
const FinishDailyAttd = ({data, columnDefs}) => {
    
    const onSelectionChanged = (event) => {
        const gridApi = event.api;
        const selectedRows = gridApi.getSelectedRows();
        axiosOptions.selectedRows = selectedRows;
    };

    return <div>
        <div className={"ag-theme-material"} style={{
            height: "500px", width: "100%"
        }}>
            <AgGridReact columnDefs={columnDefs} rowData={data} rowSelection={"multiple"}
                        onSelectionChanged={onSelectionChanged} />
        </div>
    </div>
};


export default DailyAttd;
