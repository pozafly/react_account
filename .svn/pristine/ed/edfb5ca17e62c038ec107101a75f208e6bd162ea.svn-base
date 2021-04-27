import React from 'react';
import { TextField } from "@material-ui/core";

const CashJournal_Menu = ({date, setDate}) => {
    
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
        <legend>  [ 현금출납장 ] </legend>
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

export default CashJournal_Menu;