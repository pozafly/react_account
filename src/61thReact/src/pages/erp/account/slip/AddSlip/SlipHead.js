import React from 'react';

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";

import { makeStyles } from "@material-ui/core";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";


// SlipHead 컴포넌트는 시작날짜, 끝날짜, 유형만 표시하고 있다.
// 여기서 이벤트가 일어날 때마다 headInfo state로 관리되고 있고, 
// 보낼 때는 headChange 이벤트로 AddSlip 컴포넌트로 보낸다.
const SlipHead = ({ headInfo, headChange }) => {

    const { startDate, endDate, slipStatus } = headInfo;
    // 시작날짜, 끝날짜, 유형 값을 headInfo가 가지고 있음. 비구조 할당으로 사용가능.

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }
    function handleOpen() {
        setOpen(true);
    }
    // handleClose, handleOpen : Select 태그다 열고 닫힐 때 발생하는 이벤트.

    return (
        <React.Fragment>
            <div align="left" className={classes.root}>
                <TextField
                    name="startDate"
                    type={"date"}
                    defaultValue={startDate}  //defaultValue : 초기값.
                    onChange={headChange}   // onChange : 값이 변경되면 콜백이 발생.
                />
                <TextField
                    name="endDate"
                    type={"date"}
                    defaultValue={endDate}
                    onChange={headChange}
                />
                <FormControl className={classes.formControl}>
                    <InputLabel htmlFor="demo-controlled-open-select">
                        유형
                    </InputLabel>
                    <Select
                        name="slipStatus"
                        open={open}
                        onClose={handleClose}
                        onOpen={handleOpen}
                        value={slipStatus}
                        onChange={headChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value="미결">미결</MenuItem>
                        <MenuItem value="승인">승인</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </React.Fragment>
    );
};

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120
    },
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    }
}));   // 꾸미기.

export default SlipHead;