import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';
import { MENU_LIST_REQUEST } from '../action/ActionTypes';
import { menuAll, menuAccount, menuHr, menuLogi } from '../action/menuListAction';
import history from '../../../../api/util/history';

function* menuListSaga(action) {

    try{
        const { data } = yield axios.get('http://localhost:8282/sys/findMenuList');
        
        if(action.payload.authorityCode==='SYSTEM'){
            yield put(menuAll(data));

        }else if(action.payload.authorityCode==='ACCOUNT'){
            yield put(menuAccount(data));

        }else if(action.payload.authorityCode==='HR'){
            yield put(menuHr(data));

        }else if(action.payload.authorityCode==='LOGI'){
            yield put(menuLogi(data));
        }

    }catch(error){
      history.put('/error')
    }
}

export function* watchMenuListSaga(){
    yield takeEvery(MENU_LIST_REQUEST, menuListSaga);
}







