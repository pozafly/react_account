import React, { useState } from "react";

import SlipGrid from "./SlipGrid";
import SlipHead from './SlipHead';
import JournalGrid from './JournalGrid';

import useInputs from "../../../../../api/util/useInputs";

// 전표입력창의 parent 컴포넌트다. 이 창에서 모든 state를 관리함.
const AddSlip = () => {

    // leadingZeros는 자릿수를 맞추기 위한 펑션임.
    function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();
    
        if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    }
    
    // 오늘 날짜를 불러오는 javascript 객체임. 결국 만들어진 today는 
    // SlipGrid, JournalGrid 의 props로 넘겨져서 사용된다.
    let now = new Date();
    let year = now.getFullYear();
    let month = leadingZeros(now.getMonth() + 1, 2);
    let date = leadingZeros(now.getDate(), 2);
    let today = year + '-' + month + '-' + date;

    // headInfo는 전표입력창의 날짜와 상태를 가진 state임.
    const [headInfo, headChange] = useInputs(
        {
            startDate: '2019-04-01',
            endDate: today,  // 위에서 만들어진 오늘 날짜를 그냥 붙이기 위해서 여기 지정값을 넣어줬음.
            slipStatus: ''
        }
    );

    const [slipNo, setSlipNo] = useState(''); 
    // slipNo 는 SlipGrid 컴포넌트에서 그리드 한 줄을 클릭하면
    // JournalGrid 컴포넌트에서 전표번호(slipNo)를 받아서 다시 조회 후 그리드에 표현.
    const [flag, setFlag] = useState(true);
    // flag 는 SlipGrid 컴포넌트에서 '전표저장' 버튼을 클릭했을 때 
    // 분개추가, 분개삭제, 분개저장 버튼이 동시에 활성화 됨. 그때 사용되는 state임.

    return (
        <div>
            {/* 각 컴포넌트에 걸린 이벤트 혹은 props는 각 컴포넌트 js에 주석으로 달아놓았음. */}
            <SlipHead headInfo={headInfo} headChange={headChange} />
            <SlipGrid headInfo={headInfo} today={today} setSlipNo={setSlipNo} setFlag={setFlag}/>
            <br/>
            <JournalGrid slipNo={slipNo} flag={flag} />
        </div>
    );
}
export default AddSlip;