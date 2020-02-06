import React from "react";
import { makeStyles } from "@material-ui/core";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  rightPaper: {
    padding: theme.spacing(1),
    height: 300,
    width: 1000
  },
  leftPaper: {
    padding: theme.spacing(2),
    height: 300
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
  buttons: {
    margin: theme.spacing(1)
  }
}));

const EstimateHead = ({ state, onChange }) => {

  const { day1, day2, item } = state;

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);



  function handleClose() {
    setOpen(false);
  }
  function handleOpen() {
    setOpen(true);
  }


  return (
    <React.Fragment>
      <Typography variant={"h6"}>견적추가</Typography>
      <div align="left">
        <TextField
          name="day1" // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          // label = {"견적일자"}  label	node		The label content.
          type={"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue={day1} // defaultValue	any		The default value of the input element.
          //date = useInupt();
          onChange={onChange} // onChange = 값이 변경되면 콜백이 발생.
        />
        <TextField
          name="day2" // id	string		The id of the input element. Use this prop to make label and helperText accessible for screen readers.
          //  label = {"유효일자"} // label	node		The label content.
          type={"date"} // type	string		Type of the input element. It should be a valid HTML5 input type.
          defaultValue={day2} // defaultValue	any		The default value of the input element.
          //date = useInupt();
          onChange={onChange} // onChange = 값이 변경되면 콜백이 발생.
        />
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="demo-controlled-open-select">
            거래처
        </InputLabel>
          <Select
            name="item"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={item}
            onChange={onChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="(주)대한전자">(주)대한전자</MenuItem>
            <MenuItem value="(주)영서전자">(주)영서전자</MenuItem>
            <MenuItem value="(주)원광">(주)원광</MenuItem>
            <MenuItem value="(주)동호전자">(주)동호전자</MenuItem>
            <MenuItem value="(주)진영판매">(주)진영판매</MenuItem>
            <MenuItem value="SARA CO., LTD">SARA CO., LTD</MenuItem>
            <MenuItem value="JAMES CO., LTD">JAMES CO., LTD</MenuItem>
            <MenuItem value="(주)미성전자">(주)미성전자</MenuItem>
            <MenuItem value="강화(주)">강화(주)</MenuItem>
            <MenuItem value="(주)신성전자">(주)신성전자</MenuItem>
            <MenuItem value="(주)세계해운">(주)세계해운</MenuItem>
            <MenuItem value="도영(주)">도영(주)</MenuItem>
          </Select>
        </FormControl>
      </div>
    </React.Fragment>
  )
}
export default EstimateHead;