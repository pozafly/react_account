import React from 'react';
import { TextField } from "@material-ui/core";
const MpsSearchContract = ({date, setDate}) => {
// 나나나ㅣㄹ이
    const {title, fromDate, toDate} = date;
  const qa='';

    // 이벤트 처리 
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
        <legend>  [ {title} ] </legend>
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

export default MpsSearchContract;