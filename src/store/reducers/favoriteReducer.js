import { omit } from 'lodash'
import { ADD_PRODUCT_TO_BIN, REMOVE_PRODUCT_TO_BIN, CHANGE_COUNT } from '@store/constants/actionTypes'
import { getLocalStorage } from '@utils/localStorage'
import { createSlice } from '@reduxjs/toolkit'

const initialState = getLocalStorage('store')
// const initialState = {}


// const favoriteReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case ADD_PRODUCT_TO_BIN:
//             return {
//                 ...state,
//                 ...action.payload
//             }
            
//         case REMOVE_PRODUCT_TO_BIN:
//             return omit(state, [action.payload])

//             case CHANGE_COUNT:
//                 Object.entries(state).map((item) => {
//                     if (item[1].id === action.payload.id) {
//                         item[1].count++
//                     }
//                 })
//                 console.log(action.payload)


//         default:
//             return state;
//     }
// }


const favoriteReducer = createSlice({
    name: "favoriteReducer",
    initialState,
    reducers: {
        addProductToBin: (state, action) => {
            return{
                ...state,
                ...action.payload
            }
        },
        removePrioductFromBin: (state, action) => {
            return omit(state, [action.payload])
        },
        increment: (state, action) => {
            Object.entries(state).map((item) => {
                if (Number(item[0]) === action.payload.id) {
                    item[1].count += 1
                }
            })

        }
    }
})

export const { addProductToBin,removePrioductFromBin, increment } = favoriteReducer.actions

export default favoriteReducer.reducer