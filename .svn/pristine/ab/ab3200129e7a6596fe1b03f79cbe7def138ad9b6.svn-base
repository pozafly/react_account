import React from "react";
import { TextField } from "@material-ui/core";

const FinancialStatementsMenu = ({ date, setDate, setGrid }) => {
  const onChange = event => {
    setDate({
      ...date,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <React.Fragment>
      <h1>재무상태표</h1>
      <fieldset>
        <legend> [ 검색조건 ] </legend>
        <TextField name="approvalDate" type={"date"} onChange={onChange} />
      </fieldset>
    </React.Fragment>
  );
};

export default FinancialStatementsMenu;
