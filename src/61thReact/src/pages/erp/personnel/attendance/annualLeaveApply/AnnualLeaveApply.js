import React, {useState} from "react";
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import useAxios from "../../../../../api/util/useAxios";
import useInput from "../../../../../api/util/useInput";
import Button from "@material-ui/core/Button";

import axios from "axios";
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
    Paper: {
        maxWidth: 936,
        margin: 'auto',
        overflow: 'hidden',
    }
})

const columnDefs = [
    {
        headerName: "취소선택",
        cellRendererParams: {
            checkbox: true
        }
    },
    {
        headerName: "사원코드", field: "empCode"
    },
    {
        headerName: "사원명", field: "empName"
    },
    {
        headerName: "기준년도", field: "standardYear"
    },
    {
        headerName: "시작일", field: "startDate"
    },
    {
        headerName: "종료일", field: "endDate"
    },
    {
        headerName: "사유", field: "causeCode"
    },
    {
        headerName: "상세사유", field: "detailCause"
    },
    {
        headerName: "구분", field: "causeCode"
    },
    {
        headerName: "일수", field: "days"
    },
    {
        headerName: "승인여부", field: "approvalStatus"
    }
];

const axiosOptions = {
    url: `http://localhost:8282/hr/attendance/findAnnualMgt`,
    method: 'POST',
    fetchOnStart: false,
    data: {
        'empCode': '1111',
        'standardYear': '2019'
    }
};

const AnnualLeaveApply = () => {
    const [empData, setEmpData] = useState([]);

    if (empData.length === 0) {
        axios.get("http://localhost:8282/hr/circumstance/findEmpAnnualData/1111")
            .then(response => {
                setEmpData(response.data);
            }).catch(reason => {
            console.log(reason);
        });
    }
    return <Paper style={{backgroundColor: 'primary'}}>
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={3}>
                    <Grid Key={1} item xs={5}>

                        <AnnualData empData={empData}/>

                    </Grid>
                    <Grid Key={2} item xs={7}>

                        <AnnualApl/>

                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <AnnualCheck/>
    </Paper>;

};

//연차정보
const AnnualData = ({empData}) => {
    return <Paper>
        <Table>
            <ShowEmpAD data={empData}/>
        </Table>
    </Paper>

}

const ShowEmpAD = (({data}) => {
        return <TableBody>
            <TableRow>
                <Typography variant={"h6"}>연차정보</Typography>
            </TableRow>
            <TableRow>
                <TableCell align="left">기준년도</TableCell>
                <TableCell align="left">{data.standardYear}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">사원명</TableCell>
                <TableCell align="left">{data.empName}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">부서</TableCell>
                <TableCell align="left">{data.deptName}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">근속년수</TableCell>
                <TableCell align="left">{data.lengthOfService}년</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">사용가능일수</TableCell>
                <TableCell align="left">{data.restDays}일</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">잔여일수</TableCell>
                <TableCell align="left">{data.usableDays}일</TableCell>
            </TableRow>
            <TableRow>
                <TableCell align="left">사용한일수</TableCell>
                <TableCell align="left">{data.usedDays}일</TableCell>
            </TableRow>
        </TableBody>
    }
)
//연차신청
const AnnualApl = () => {

    const aaa = useInput('휴가');
    const ranges = [
        {
            value: '휴가',
            label: '휴가'
        },
        {
            value: '연차',
            label: '연차'
        }
    ]
    return  <TableBody>
            <TableRow>
                <Typography variant={"h6"}>연차일수</Typography>
            </TableRow>
            <TableRow>
                <TableCell align="left"><Typography variant={"h6"}>신청기한  </Typography></TableCell>
                <TableCell>
                    <TextField
                        id="fromDate"
                        label="fromDate"
                        type="date"
                        defaultValue="2017-05-24"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    /><TextField
                    id="toDate"
                    label="toDate"
                    type="date"
                    defaultValue="2017-05-24"
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                </TableCell>
            </TableRow>
            <TableRow>
                <TableCell>
                    <Typography variant={"h6"} align={"left"}>일수  </Typography>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography variant={"h6"} align={"left"}>구분  </Typography>
                </TableCell>
                <TableCell>
                <TextField
                    select
                    label="With Select"
                    style={{width: "300px"}}
                    id = "aaa"
                    defaultValue={aaa.value}
                    onChange={aaa.onChange}
                 >
                    {ranges.map(option => (
                        <MenuItem key={option.value} value={option.value}  defaultValue={aaa.value}
                                  onChange={aaa.onChange}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography variant={"h6"} align={"left"}>사유  </Typography>
                </TableCell>
                <TableCell>
                    <TextField />
                </TableCell>
            </TableRow>

            <TableRow>
                <TableCell>
                    <Typography variant={"h6"} align={"left"}>상세사유  </Typography>
                </TableCell>
                <TableCell>
                    <TextField />
                </TableCell>
            </TableRow>


        </TableBody>;
}

//연차현황조회
const AnnualCheck = () => {

    const {data, fetch} = useAxios(axiosOptions);
    const fromDate = useInput();
    const toDate = useInput();

    return <Paper>
        <h1>연차현황조회</h1>
        <div>
            <TextField id={"fromDate"} label={"시작일"} type={"date"}
                       defaultValue={fromDate.value}
                       onChange={fromDate.onChange}/>
            <TextField id={"toDate"} label={"종료일"} type={"date"}
                       defaultValue={toDate.value}
                       onChange={toDate.onChange}/>
            <Button
                variant={"outlined"}
                color={"primary"}
                onClick={fetch}
            >
                조회
            </Button>
        </div>
        <div className={"ag-theme-material"} style={{
            height: "400px",
            width: "100%"
        }}>
            <AgGridReact columnDefs={columnDefs} rowData={data}/>
        </div>
    </Paper>;

}


export default withStyles(styles)(AnnualLeaveApply);
