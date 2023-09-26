// reducers.js
import { SORT_ARRAY } from './actionTypes';

const initialState = {
    sortedArray: [],
};

const rootReducer = (state = initialState, action) => {
    console.log('SORT_ARRAYSORT_ARRAY', action);
    switch (action.type) {
        case SORT_ARRAY:
            console.log('checkinggggggggg1')
            const array = action.payload.row;
            const sortKey = action.payload.sortby;
            console.log(array, 'actionnnnnnnnn')
            const sortedArray = array.sort();
            console.log(sortedArray, 'sortedArray')
            return {
                ...state,
                sortedArray,
            };
        default:
            console.log('checkinggggggggg2')
            return state;
    }
};

export default rootReducer;

