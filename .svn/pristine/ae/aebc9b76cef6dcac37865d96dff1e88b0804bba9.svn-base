import React from 'react';
import { TextField } from "@material-ui/core";

const Common_Menu = ({ gridData, setGridData }) => {

    const { titleMenu, fromDate, toDate} = gridData;
    // 이벤트 처리 
    const onChange =(event) => {
      setGridData( 
        {
        ...gridData,
        [event.target.name] : event.target.value
        }
        );     
    };

    return (
    <React.Fragment>

      <fieldset>
        <legend>  <h4>[ {titleMenu} ]</h4> </legend>
        <TextField
          name="fromDate" 
          type={"date"}
          onChange={onChange}
        /> 
        &nbsp;&nbsp;&nbsp;&nbsp;
        {toDate&&<TextField
          name="toDate"
          type={"date"}
          onChange={onChange}
        />}
        </fieldset>
      </React.Fragment>
    );
}

export default Common_Menu;