import React from 'react';
import { TextField } from "@material-ui/core";

const DetailTrialBalance_Menu = ({date, setDate}) => {

    const onChange =(event) => {
      setDate( 
        {
        ...date,
        [event.target.name] : event.target.value
        }
        );     
    };

    return (
    <React.Fragment>
      
    <h1>일월계표</h1>
      <fieldset>
        <legend>  [ 검색조건 ] </legend>
        <TextField
          name="fromDate" 
          type={"date"}
          onChange={onChange}
        />
        <TextField
          name="toDate"
          type={"date"}
          onChange={onChange}
        />
        </fieldset>
      </React.Fragment>
    );
}

export default DetailTrialBalance_Menu;