
import { actionGetListCategorySuccess, AdminType } from './adminAction';
import { deleteCategoryApi, getListCategoryApi, postCategoryApi, updateCategoryApi } from './../../../shared/services/api/manageCategoryApi';
import { call, put, takeLatest } from "redux-saga/effects";


function* getListCategory(): Generator<any, void, string> {
    try {
      const res: any = yield call(getListCategoryApi);
      yield put(actionGetListCategorySuccess(res.data));
    } catch (error) {
      console.log(error);
      
    }
  }

  function* createCategory({ payload }: any): Generator<any, void, string> {
    
    try {
      yield call(postCategoryApi, payload);
      payload.onsuccess();
      yield call(getListCategory);
    } catch (error: any) {
      console.log(error);
      
    }
  }
  
  function* deleteCategory({ payload }: any): Generator<any, void, string> {
    
    try {
      yield call(deleteCategoryApi, payload);
      payload.onsuccess();
      yield call(getListCategory);
    } catch (error: any) {
      console.log(error);
      
    }
  }
  
  function* updateCategory({ payload }: any): Generator<any, void, string> {
    console.log(payload);
    
    try {
      yield call(updateCategoryApi, payload);
      // payload.onsuccess();
      yield call(getListCategory);
    } catch (error: any) {
      console.log(error);
      
    }
  }
  

  export default function* AdminSaga() {
    // saga Category
    yield takeLatest(AdminType.GET_LIST_CATEGORY, getListCategory);
    yield takeLatest(AdminType.CREATE_CATEGORY, createCategory);
    yield takeLatest(AdminType.DELETE_CATEGORY, deleteCategory);
    yield takeLatest(AdminType.UPDATE_CATEGORY, updateCategory);
  }