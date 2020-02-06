import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { LOGIN_REQUEST } from '../action/ActionType';
import { loginSuccess, loginFailure, login, logout } from '../action/logInOutAction';

function* logInOutSaga(action) {
    console.log(action)
    try{
        if(!!sessionStorage.getItem("id_token")){
            yield put(logout())
                sessionStorage.clear()

        }else{
            yield put(login())

            const{ data } = yield axios.post(`http://localhost:8282/api/auth/login`,{
                empCode: action.payload.empCode,
                password: action.payload.password
            }
            );

            const empInfo=data.empInfo;

                if(!empInfo){
                    yield put(loginFailure(data));

                }else{
                    yield put(loginSuccess(empInfo));
                        sessionStorage.setItem('id_token', action.payload.empCode);
                        sessionStorage.setItem('pw_token', action.payload.password);
                        sessionStorage.setItem('empNameInfo_token', empInfo.empName);
                        sessionStorage.setItem('empCodeInfo_token', empInfo.empCode);
                        sessionStorage.setItem('deptCodeInfo_token', empInfo.deptCode);
                        sessionStorage.setItem('positionCodeInfo_token', empInfo.positionCode);
                        sessionStorage.setItem('businessPlaceCodeInfo_token', empInfo.businessPlaceCode);
                        sessionStorage.setItem('authorityCodeInfo_token', empInfo.authorityCode);
                        console.log(sessionStorage.getItem("info_token"))
                }
        }
    }catch(error){
        action.payload.history.put('/error');
    }
}

export function* watchLogInOutSaga(){
    yield takeEvery(LOGIN_REQUEST, logInOutSaga);
}







