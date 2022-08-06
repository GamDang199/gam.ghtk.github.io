import { AdminType } from './adminAction';
import produce from 'immer';

export const defaultState = {
    categories: [],
    vendors: [],
    users: []
  };

export const ManageAdminReducer = (state = defaultState, action: any) => {
    return produce(state, draft => {
        switch(action.type) {
            case AdminType.GET_LIST_CATEGORY_SUCCESS:
                draft.categories = action.payload;        
                break
            case AdminType.GET_LIST_VENDOR_SUCCESS:
                draft.vendors = action.payload;
                break
            default: break
        }
    })
}
export default ManageAdminReducer;