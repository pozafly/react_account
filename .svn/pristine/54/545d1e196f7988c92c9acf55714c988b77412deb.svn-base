import React, { useState } from "react";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-material.css";
import { Grid } from "@material-ui/core";

import AccountParent from './AccountParent';
import AccountDetail from './AccountDetail';

const AccountTitle = () => {
  
  const [accountCode, setAccountCode] = useState(null);
  // accountCode는 AccountParent 컴포넌트에 넘겨주는 계정과목 코드 state임.
  // 이 코드로 계정과목 상세를 조회해옴.

  return (
    <Grid container spacing={2}>
      <Grid item xs={7}>
        <AccountParent setAccountCode={setAccountCode} />
      </Grid>
      <Grid item xs={5}>
          <AccountDetail accountCode={accountCode} />
      </Grid>
    </Grid>
  );
};

export default AccountTitle;
