import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN} from '@store/constants/actionTypes'


const favoriteReducer = (state, action) => {
    switch (action.type) {
        case ADD_PRODUCT_TO_BIN:
            return {
                ...state,
                ...action.payload
            }

        case REMOVE_PRODUCT_TO_BIN:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export default favoriteReducer