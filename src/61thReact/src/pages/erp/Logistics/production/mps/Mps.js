import React, {useState} from 'react';
import MpsSearchContract from './MpsSearchContract';
import MpsGrid from './MpsGrid';
// 나나나ㅣㄹ이
const Mps = () => {
   const [date, setDate] = useState({
      title: "기간조회",
      fromDate: '0',
      toDate: '0',
      ㅁㄴㅇ:'0'
   });

   const [gridData] = useState({
      columDefs: [
        // { headerName: '삭제', checkboxSelection: true, width: 100, headerCheckboxSelection: true },
         { headerName: "수주상세일련번호", field: "contractDetailNo", width: 150, hide: true },
         { headerName: "수주일련번호", field: "contractNo", width: 150 },
         { headerName: "품목코드", field: "itemCode", editable: true, width: 150 },
         { headerName: "품목명", field: "itemName", width: 150 },
         { headerName: "단위", field: "unitOfContract", width: 150 },
         { headerName: "납기일", field: "dueDateOfContract", width: 150 },
         { headerName: "수량", field: "estimateAmount", width: 150 },
         { headerName: "보유수량", field: "unitPriceOfContract", width: 150 },//hide
         { headerName: "생산예정수량", field: "productionRequirement", width: 150 },//hide
         { headerName: "단가", field: "unitPriceOfContract", width: 150 },
         { headerName: "합계액", field: "sumPriceOfContract", width: 150 },
         { headerName: "MPS적용여부", field: "operationCompletedStatus", width: 150, hide: true },
         { headerName: "납품여부", field: "deliveryCompletionStatus", width: 150, hide: true }
      ],

      getUrl: '/logi/business/selectEstimateListInContractAvailable',
      putUrl: '/logi/business/registEstimate'

      // newData: [{
      //    contractDetailNo: 1,
      //    estimateNo: 2,
      //    customerCode: 3,
      //    estimateDate: 4,
      //    contractStatus: 5,
      //    estimateRequester: 6,
      //    effectiveDate: 7,
      //    personCodeInCharge: 8,
      //    description: 9,
      //    status: 'insert'
      // }]
   })
   return (
      <React.Fragment>
         <MpsSearchContract date={date} setDate={setDate} />

         <MpsGrid date={date} gridData={gridData}/>
      </React.Fragment>
   );
}

export default Mps;