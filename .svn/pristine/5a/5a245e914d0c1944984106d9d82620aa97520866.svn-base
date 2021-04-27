import React from "react";
import Paper from "@material-ui/core/Paper";
import TextField from '@material-ui/core/TextField';
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import useAxios from "../../../../../api/util/useAxios";
import useInput from "../../../../../api/util/useInput";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import hrApi from "../../../../../api/axios/hrApi";
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(2),
    height: 650
  },
  leftPaper: {
    padding: theme.spacing(2),
    height: 900
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  subCategory: {
    background: "#232f3e",
    color: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 200
  },
  disable: {
    color: "white",
    borderRadius: 8,
    backgroundColor: "#D5D5D5",
    textAlign:"center"
  }
}));

const BasicWorkTime = () => {
  const classes = useStyles();


  const axiosOptions = {
    url: `http://localhost:8282/hr/circumstance/findBaseWorkTimeList`,
    fetchOnStart: true,
    method: "post"
  };


  const { data } = useAxios(axiosOptions);

  const fetchWorkTimeInfo = () => {

    let workTimeData = {};

    data.forEach((obj) => {
      if (applyYear.value){
        if (obj.applyYear === applyYear.value.toString().substring(0, 4)){
          workTimeData = obj;
        }
      }
    });
 
    attendTime.setValue(workTimeData.attendTime);
    quitTime.setValue(workTimeData.quitTime);
    lunchStartTime.setValue(workTimeData.lunchStartTime); 
    lunchEndTime.setValue(workTimeData.lunchEndTime);
    dinnerStartTime.setValue(workTimeData.dinnerStartTime);
    dinnerEndTime.setValue(workTimeData.dinnerEndTime);
    overTime.setValue(workTimeData.overTime);
    nightTime.setValue(workTimeData.nightTime);
  };

  const applyYear = useInput();
  const attendTime = useInput();
  const quitTime = useInput();
  const lunchStartTime= useInput();
  const lunchEndTime=useInput();
  const dinnerStartTime= useInput();
  const dinnerEndTime=useInput();
  const overTime=useInput();
  const nightTime = useInput();

    const BaseWorkTimeTo = {
      applyYear : applyYear.value,
      attendTime : attendTime.value,
      quitTime : quitTime.value,
      lunchStartTime : lunchStartTime.value,
      lunchEndTime : lunchEndTime.value,
      dinnerStartTime : dinnerStartTime.value,
      dinnerEndTime : dinnerEndTime.value,
      overTime : overTime.value,
      nightTime : nightTime.value
    }

    const saveWorkTimeInfo = async event => {
      event.preventDefault(); // 화면이동을 하지 마세요;
      await hrApi.post('/circumstance/registBaseWorkTime', BaseWorkTimeTo);
      alert("저장되었습니다");
    };
  

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Paper className={classes.leftPaper}>
          <AppBar position="relative" className={classes.subCategory}>
            <Toolbar>
              <Typography variant="h5">근무시간 정보</Typography>
            </Toolbar>
          </AppBar>
          <form>
            <Table>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="적용날짜선택"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                  <Select
          nativ
          value={applyYear.value}
          onChange={applyYear.onChange}
          className={classes.textField}
        >
          <option value="select">년도를 선택해주세요</option>
          <option value={2018}>2018</option>
          <option value={2019}>2019</option>
          <option value={2020}>2020</option>
          <option value={2021}>2021</option>
        </Select>
  </TableCell>
                  <TableCell>
                    <Button
                      variant={"outlined"}
                      color={"primary"}
                      onClick={fetchWorkTimeInfo}
                    >
                      조회
                    </Button>
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="출근시간"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="attendTime"
                      variant="outlined"
                      value={attendTime.value}
                      onChange={attendTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="퇴근시간"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="quitTime"
                      variant="outlined"
                      value={quitTime.value}
                      onChange={quitTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="점심시간시작"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="lunchStartTime"
                      variant="outlined"
                      value={lunchStartTime.value}
                      onChange={lunchStartTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="점심시간종료"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="lunchEndTime"
                      variant="outlined"
                      value={lunchEndTime.value}
                      onChange={lunchEndTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="저녁시간시작"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="dinnerStartTime"
                      variant="outlined"
                      value={dinnerStartTime.value}
                      onChange={dinnerStartTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="저녁시간종료"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="dinnerEndTime"
                      variant="outlined"
                      value={dinnerEndTime.value}
                      onChange={dinnerEndTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="연장근무시작시간"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="overTime"
                      variant="outlined"
                      value={overTime.value}
                      onChange={overTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                  <TableCell>
                  </TableCell>
                </td>
              </TableRow>
              <TableRow>
                <td>
                  <TableCell>
                    <TextField
                      id="outlined-read-only-input"
                      defaultValue="심야근무시작시간"
                      className={classes.disable}
                      InputProps={{
                        readOnly: true
                      }}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      id="nightTime"
                      variant="outlined"
                      value={nightTime.value}
                      onChange={nightTime.onChange}
                      className={classes.textField}
                      InputLabelProps={{
                        shrink: true
                      }}
                    />
                  </TableCell>
                  <TableCell>
                    <Button
                      variant={"outlined"}
                      color={"primary"}
                      onClick={saveWorkTimeInfo}
                    >
                      저장
                    </Button>

                  </TableCell>
                </td>
              </TableRow>
            </Table>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default BasicWorkTime;