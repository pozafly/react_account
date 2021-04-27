import React from 'react';
import logiApi from '../apis/logiApi';

// 컴포넌트 Test 
const Test = () => {

    // get 방식 호출 잘됨  [event 이벤트가 발생한 객체 ]
    const onClick = async event => {

        const response = await logiApi.get('/business/selectEstimateListInContractAvailable', {
            params:{
                fromDate: '20191201',
                toDate: '20200131'
            }
        });
        console.log(response);
    }
    
    // const EstimateTo = {
    //     estimateNo  :  'no',
    //     estimateDate : '20191201',
    //     effectiveDate : '20200131',
    //     customerCode : 'item',
    //     personCodeInCharge : 'estimulo',
    //     contractStatus : 'N'
    // };
    
    // // post 방식 호출
    // const onSubmit = async event => {
    //     event.preventDefault(); // 화면이동을 하지 마세요;

    //     const response = await logiApi.post('/business/registEstimate', EstimateTo);
    //     console.log(response);
    // }

// const rowdata = [{},{},{}];
// rewdata.push(data);

    //     const EstimateTo = [{
    //     estimateNo  :  'no1',
    //     estimateDate : '20191201',
    //     effectiveDate : '20200131',
    //     customerCode : 'item',
    //     personCodeInCharge : 'estimulo',
    //     contractStatus : 'N'
    // }, {
    //     estimateNo  :  'no2',
    //     estimateDate : '20191201',
    //     effectiveDate : '20200131',
    //     customerCode : 'item',
    //     personCodeInCharge : 'estimulo',
    //     contractStatus : 'N'
    // }];

    // // put 방식 호출
    // const onSubmit = async event => {
    //     event.preventDefault();
    //     const response = await logiApi.put('/business/registEstimate', EstimateTo
    //     );
    //     console.log(response);
    // }



    // // delete 방식 호출 잘됨
    // const onClick = async event => {
    //     const response = await logiApi.delete('/business/estimateCancel', {
    //         params:{
    //             estimateNo : 4
    //         }
    //     });
    //     console.log(response);
    // }

    return (
        <React.Fragment>
                {/* <form onSubmit={onSubmit}>
                    <button>요구르트</button>
                </form> */}
              <input onClick={onClick} />
        </React.Fragment>
    );
}


export default Test;