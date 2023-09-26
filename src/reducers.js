// reducers.js
import { SORT_ARRAY } from './actionTypes';

const initialState = {
    sortedArray: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case SORT_ARRAY:
            const array = action.payload.row;
            const sortedArray = array.sort();
            return {
                ...state,
                sortedArray,
            };
        default:
            return state;
    }
};

export default rootReducer;

