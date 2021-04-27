import React, { useState } from "react";

import Common_Grid from "../../../../api/common/Common_Grid";
//import Common_Menu from "../../../../api/common/Common_Menu";

const Parents = () => {
  const [gridData, setGridData] = useState({
    titleGrid: "생산실적",
    columDefs: [
      {
        headerName: "삭제",
        checkboxSelection: true,
        width: 100,
        headerCheckboxSelection: true,
      },

      { headerName: "작업지시번호", field: "workInstructionNo", width: 150 },
      { headerName: "소요량취합번호", field: "productionResultNo", width: 150 },
      { headerName: "품목코드", field: "itemCode", width: 150 },
      { headerName: "품목명", field: "itemName", width: 150 },
      { headerName: "단위", field: "unitOfProductionResult", width: 150 },
      { headerName: "작업지시수량", field: "productionAmount", width: 150 },
      { headerName: "작업지시일", field: "productionDate", width: 150 },
      { headerName: "작업지시상태", field: "description", width: 150 },
      { headerName: "일괄처리", field: "batch", width: 150, hide: true },
    ],

    //조회
    getUrl: "/logi/production/findPrmList",

    //일괄처리
    // putUrl: "/logi/production/registPrm",

    //추가 버튼
    // newData: [
    //   {
    //     contractDetailNo: 1,
    //     estimateNo: 2,
    //     customerCode: 3,
    //     estimateDate: 4,
    //     contractStatus: 5,
    //     estimateRequester: 6,
    //     effectiveDate: 7,
    //     personCodeInCharge: 8,
    //     description: 9,
    //     status: "insert",
    //   },
    // ],
  });

  /////////////////////////////////////////////////////////////////////////////////////////////////////

  const [gridData2] = useState({
    columDefs: [
      {
        headerName: "삭제",
        checkboxSelection: true,
        width: 100,
        headerCheckboxSelection: true,
      },
      {
        headerName: "생산질적번호",
        field: "contractDetailNo",
        width: 150,
        hide: true,
      },
      { headerName: "작업지시번호", field: "estimateNo", width: 150 },
      {
        headerName: "품목코드",
        field: "customerCode",
        editable: true,
        width: 150,
      },
      { headerName: "품목명", field: "estimateDate", width: 150 },
      { headerName: "단위", field: "contractStatus", width: 150 },
      { headerName: "생산일자", field: "estimateRequester", width: 150 },
      { headerName: "생산수량", field: "effectiveDate", width: 150 },
    ],
    //getUrl: "/logi/production/findPrmList",

    //일괄처리
    // putUrl: "/logi/production/registPrm",

    //추가 버튼
    // newData: [
    //   {
    //     contractDetailNo: 1,
    //     estimateNo: 2,
    //     customerCode: 3,
    //     estimateDate: 4,
    //     contractStatus: 5,
    //     estimateRequester: 6,
    //     effectiveDate: 7,
    //     personCodeInCharge: 8,
    //     description: 9,
    //     status: "insert",
    //   },
    // ],
  });

  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////

  return (
    <React.Fragment>
      {/* <Common_Menu gridData={gridData} setGridData={setGridData} /> */}
      <Common_Grid gridData={gridData} />
      <br />
      <br />
      <br />
      <Common_Grid gridData={gridData2} />
    </React.Fragment>
  );
};

export default Parents;
