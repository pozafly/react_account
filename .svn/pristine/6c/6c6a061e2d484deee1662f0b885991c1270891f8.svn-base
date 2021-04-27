import React, { useState } from "react";
import JournalFormMenu from "./JournalFormMenu";
import JournalFormGrid from "./JournalFormGrid";

const JournalForm = () => {
  // 날짜 관련 상태값 정의
  const [date, setDate] = useState({
    startDate: "",
    endDate: ""
  });

  return (
    <React.Fragment>
      <JournalFormMenu date={date} setDate={setDate} />
      <JournalFormGrid date={date} />
    </React.Fragment>
  );
};

export default JournalForm;
