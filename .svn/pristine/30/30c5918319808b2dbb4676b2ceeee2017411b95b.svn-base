// --- redux-saga
import { all } from 'redux-saga/effects';
import { watchLogInOutSaga } from '../../pages/login/store/saga/logInOutSaga';
import { watchMenuListSaga } from '../../components/RouteMenunComponents/MenuStructures/saga/MenuListSaga';

// --- redux 함수
import {combineReducers} from 'redux';

import menuListReducer from '../../components/RouteMenunComponents/MenuStructures/reducers/menuReducer';
import logInOutReducer from '../../pages/login/store/reducer/logInOutReducer';


export const rootReducers = combineReducers(
  {
    menuListReducer, // RouteMenuComponents
    logInOutReducer
  }
);


export function* rootSaga() {
  // all 함수는 여러 사가를 합쳐주는 역할을 합니다.
  yield all([watchLogInOutSaga(), watchMenuListSaga() ] );
}


