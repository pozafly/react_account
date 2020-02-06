import React, { useState } from 'react';
import { AppBar, Tabs, Tab } from "@material-ui/core"
// 커스텀 컴포넌트
import ContractHead from './ContractHead';
import ContractBody from './ContractBody';
import ContractSerchHead from './ContractSerchHead';
import ContractSerchBody from './ContractSerchBody';


const Contract = () => {

    // 상태 관리 
    const [estimateNo, setEstimateNo] = useState('');
    const [contractNo, setContractNo] = useState('');  

    console.log("부모태그 :"+estimateNo, contractNo);

    // tap value에 관한 컴포넌트
    const [value, setValue] = React.useState(0);
    const tabChange = (event, newValue) => {
      setValue(newValue);
    };


return (
    <>
    <AppBar position="static">
        <Tabs value={value} onChange={tabChange}>
            <Tab label="수주가능 견적조회" /> {/* 0 */}
            <Tab label="수주조회" /> {/* 1 */}
        </Tabs>
    </AppBar>
    <div>
        {value===0? // true 일 때
            <>
                <br/>
                <ContractHead estimateNo={estimateNo} setEstimateNo={setEstimateNo}/>
                <br/><hr/><br/>
                <ContractBody estimateNo={estimateNo}/>
            </>
        : // false 일 때 
            <>
                <br/>
                <ContractSerchHead setContractNo={setContractNo}/>
                <br/><hr/><br/>
                <ContractSerchBody contractNo={contractNo}/>
            </>
        }
    </div>
    </>
);

}

export default Contract;