import { SORT_ARRAY } from './actionTypes';


export const sortArray = (array, sortKey) => {
    return {
        type: SORT_ARRAY,
        payload: { array, sortKey },
    };
};