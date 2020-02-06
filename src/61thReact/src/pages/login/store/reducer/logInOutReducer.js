import * as types from '../action/ActionType';

const initialState={
    status:'INIT',
    empInfo:[],
    isLogin:false,
    errorCode:'',
    errorMsg:'',
    isAuthenticated: !!sessionStorage.getItem("id_token")
};

const reEmpinfo={ 
    empId: sessionStorage.getItem('id_token'),
    password: sessionStorage.getItem('pw_token'),
    empName: sessionStorage.getItem('empNameInfo_token'),
    empCode: sessionStorage.getItem('empCodeInfo_token'),
    deptCode: sessionStorage.getItem('deptCodeInfo_token'),
    positionCode: sessionStorage.getItem('positionCodeInfo_token'),
    businessPlaceCode: sessionStorage.getItem('businessPlaceCodeInfo_token'),
    authorityCode: sessionStorage.getItem('authorityCodeInfo_token')
}


const logInOutReducer = ( state = initialState, action ) => {

    switch(action.type){
        case types.LOGIN:
            return {
                  ...state,
                  status: 'WAITING'
            }

        case types.LOGIN_SUCCESS:
            return {
                ...state,
                status: 'SUCCESS',
                empInfo: action.empInfo,
                isLogin: true,
                isAuthenticated: true
              }

        case types.RELOGIN_SUCCESS:
            return {
                 ...state,
                status: 'SUCCESS',
                empInfo: reEmpinfo,
                isLogin: true,
                isAuthenticated: true
            }

        case types.LOGIN_FAILURE:
            return {
              ...state,
              status: 'FAILURE',
              errorCode: action.error.errorCode,
              errorMsg: action.error.errorMsg
            }

        case types.LOGOUT:
            return {
                  ...state,
                  status: 'INIT',
                  isLogin: false,
                  empInfo: '',
                  errorCode: '',
                  errorMsg: '',
                  isAuthenticated: false
            }

        default :
        return state;
    }
}

export default logInOutReducer;