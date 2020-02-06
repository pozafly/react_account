import React from 'react';
import  Login from './Login';
import { connect } from 'react-redux';
import { logInOutRequest } from './store/action/logInOutAction';

import { withRouter } from "react-router-dom";

const LoginContainer = (props)=>{
    const { status, errorCode, errorMsg, logInOutRequest, isLogin }=props;
    console.log(props.history)
    
    const handleLogin=(empCode, password) =>{
        logInOutRequest({empCode:empCode, password:password, history: props.history});
    }

    return(
        <div>
            <Login handleLogin={handleLogin}
                        status={status}
                        errorCode={errorCode}
                        errorMsg={errorMsg}
                        isLogin={isLogin}/>
        </div>
    )
};


const mapStateToProps=(state) =>{
    console.log(state)
    return{
        status: state.logInOutReducer.status,
        errorCode: state.logInOutReducer.errorCode,
        errorMsg: state.logInOutReducer.errorMsg,
        isLogin:  state.logInOutReducer.isLogin
    };
} 

export default connect(mapStateToProps,{ logInOutRequest })(withRouter(LoginContainer)); 