import React, { useState } from "react";

import ApprovalHead from './ApprovalHead';
import ApprovalSlipGrid from "./ApprovalSlipGrid";
import ApprovalJournalGrid from './ApprovalJournalGrid';

import useInputs from "../../../../../api/util/useInputs";


const Approval = () => {

    function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();
    
        if (n.length < digits) {
            for (var i = 0; i < digits - n.length; i++)
                zero += '0';
        }
        return zero + n;
    }
    
    let now = new Date();
    let year = now.getFullYear();
    let month = leadingZeros(now.getMonth() + 1, 2);
    let date = leadingZeros(now.getDate(), 2);
    let today = year + '-' + month + '-' + date;

    const [headInfo, headChange] = useInputs(
        {
            startDate: '2019-04-01',
            endDate: today
        }
    );

    const [slipNo, setSlipNo] = useState('');

    return (
        <div>
            <ApprovalHead headInfo={headInfo} headChange={headChange} />
            <ApprovalSlipGrid headInfo={headInfo} today={today} setSlipNo={setSlipNo} />
            <br/>
            <ApprovalJournalGrid slipNo={slipNo} today={today} />
        </div>
    );
}
export default Approval;