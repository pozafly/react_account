import React, { useState } from "react";
import FinancialStatementsMenu from "./FinancialStatementsMenu";
import FinancialStatementsGrid from "./FinancialStatementsGrid";

const FinancialStatements = () => {
  // 날짜 관련 상태값 정의
  const [date, setDate] = useState({
    approvalDate: ""
  });

  return (
    <React.Fragment>
      <FinancialStatementsMenu date={date} setDate={setDate} />
      <FinancialStatementsGrid date={date} />
    </React.Fragment>
  );
};

export default FinancialStatements;
