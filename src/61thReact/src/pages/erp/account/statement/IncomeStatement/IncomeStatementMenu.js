import React from 'react';
import { TextField } from "@material-ui/core";


const IncomeStatement_Menu = ({ date, setDate }) => {

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

      <fieldset>
        <legend>  [ 검색조건 ] </legend>
        <TextField
          name="approvalDate" 
          type={"date"}
          onChange={onChange}
        />
        </fieldset>

      </React.Fragment>
    );
}

export default IncomeStatement_Menu;