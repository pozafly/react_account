import React, {useState} from 'react';
import { AppBar, Tabs, Tab } from "@material-ui/core"
import useInputs from "../../../../../api/util/useInputs";

// 커스텀 컴포넌트
import EstimateHead from './EstimateHead';
import EstimateBody from './EstimateBody';
import EstimateSearchHead from './EstimateSerchHead';
import EstimateSearchBody from './EstimateSerchBody';



const Estimate = () => {

    // // 상태 관리 
    const [estimateNo, setEstimateNo] = useState('');
    // const [contractNo, setContractNo] = useState('');  

    // console.log("부모태그 :"+estimateNo, contractNo);

    // tap value에 관한 컴포넌트
    const [value, setValue] = React.useState(0);
    const tabChange = (event, newValue) => {
      setValue(newValue);
    };

    const [state, onChange] = useInputs(
        {
            day1:'', 
            day2:'' , 
            item:''
        }
        
    );


    return (
        <React.Fragment>
            <AppBar position="static">
                <Tabs value={value} onChange={tabChange}>
                    <Tab label="견적관리" /> {/* 0 */}
                    <Tab label="견적조회" /> {/* 1 */}
                </Tabs>
            </AppBar>
            <div>
                {value===0? // true 일 때
                    <>
                        <br/>
                        <EstimateHead state={state} onChange={onChange}/>
                        <br/><hr/><br/>
                        <EstimateBody state={state} />
                    </>
                : // false 일 때 
                    <>
                        <br/>
                        <EstimateSearchHead setEstimateNo={setEstimateNo} />
                        <br/><hr/><br/>
                        <EstimateSearchBody estimateNo={estimateNo} />
                    </>
                }
            </div>
        </React.Fragment>
    );
};

export default Estimate;