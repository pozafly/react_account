import React, { useState } from "react";
import Common_Grid from "../../../../../api/common/Common_Grid";

const Dept = () => {
  const [gridData, setGridData] = useState({
    columDefs: [
      {
        headerName: "부서코드",
        field: "deptCode",
        width: 150,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "부서명",
        field: "deptName",
        width: 150,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "부서전화번호",
        field: "deptTel",
        editable: true,
        width: 150,
        cellStyle: { textAlign: "center" },
      },
      {
        headerName: "상태",
        pinned: "left",
        field: "businessPlaceCode",
        width: 150,
        cellStyle: { textAlign: "center" },
      },
    ],

    getUrl: "/hr/pm/findDeptList",
  });

  return (
    <React.Fragment>
      <h1>부서관리</h1>
      <Common_Grid gridData={gridData} />
    </React.Fragment>
  );
};

export default Dept;