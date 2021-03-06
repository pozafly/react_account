import React from "react";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import useAxios from "../../../../../api/util/useAxios";
import useInput from "../../../../../api/util/useInput";
import { makeStyles } from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(2),
    height: 650,
    width: 1000
  },
  leftPaper: {
    padding: theme.spacing(2),
    height: 650
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 250
  },
  subCategory: {
    background: "#232f3e",
    color: "white"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  button: {
    margin: 200
  }
}));

const DailyAttdApplySub = props => {
  const { empCode, empName }=props;  

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  function handleClose() {
    setOpen(false);
  }

  function handleOpen() {
    setOpen(true);
  }


  const basicDay = useInput();
  const time = useInput();
  const attdTypeCode = useInput();
  
  

  //----------------------------------
  const fetchBatchDailyAttd_axiosOptions = {
    url: `http://localhost:8282/hr/attendance/batchDailyAttd`,
    fetchOnStart: false,
    method: "POST",
    headers: { "content-type": "application/json" },
    data: {
      empCode: empCode, 
      empName: empName, 
      dayAttdSeq: "",
      basicDay: basicDay.value,
      attdTypeCode: attdTypeCode.value,
      time: time.value,
      approvalStatus: "N",
      cost: "", //????????? ????????????
      cause: "", //????????? ????????????
      status: "inserted"
    }
  };

  const { fetch } = useAxios(fetchBatchDailyAttd_axiosOptions);

  const fetchBatchDailyAttd = () => {
   
    fetch();
  };

  //----------------------------------

  return (
    <Paper className={classes.leftPaper}>
      <AppBar position="relative" className={classes.subCategory}>
        <Toolbar>
          <Typography variant="h5">??????</Typography>
        </Toolbar>
      </AppBar>
      <form>
        <TextField
          disabled
          id="outlined-disabled"
          label="????????????"
          defaultValue={empCode}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="?????????"
          defaultValue={empName}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        <TextField
          id="date"
          label="?????????"
          type="date"
          defaultValue={basicDay.value}
          onChange={basicDay.onChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
        />
        <br />
        <br />
        <TextField
          id="time"
          label="??????"
          type="time"
          defaultValue={time.value}
          onChange={time.onChange}
          className={classes.textField}
          InputLabelProps={{
            shrink: true
          }}
          inputProps={{
            step: 60
          }}
        />
        <br />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            ????????????
          </InputLabel>
          <Select
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={attdTypeCode.value}
            onChange={attdTypeCode.onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="ADC001">??????</MenuItem>
            <MenuItem value="ADC003">??????</MenuItem>
            <MenuItem value="ADC004">??????</MenuItem>
            <MenuItem value="ADC002">??????</MenuItem>
          </Select>
        </FormControl>
      </form>
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      <Box>
        <Button
          variant={"outlined"}
          color={"primary"}
          onClick={fetchBatchDailyAttd}
          className={classes.button}
        >
          ??????
        </Button>
      </Box>
    </Paper>
  );
};

export default DailyAttdApplySub;


//export default DailyAttdApplySub;
