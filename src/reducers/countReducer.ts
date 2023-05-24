import {Dispatch} from 'redux';
import {AppRootStateType} from 'store';

const INCREMENT_COUNT = 'INCREMENT-COUNT';
const RESET_COUNT = 'RESET-COUNT';
const SET_COUNT_FROM_LS = 'SET-COUNT-FROM-LS';

const initialState = {
    currentValue: 0
};


export const countReducer = (state: InitialStateType = initialState, action: countReducerActionsType): InitialStateType => {
    switch (action.type) {
        case INCREMENT_COUNT:{
            return {...state, currentValue: action.payload.incrementedCount}
        }
        case RESET_COUNT: {
            return {...state, currentValue: action.payload.resetedCount}
        }
        case SET_COUNT_FROM_LS: {
            return {...state, currentValue: action.payload.valueFromLS}
        }
        default:
            return state
    }
}

//actionCreators:
export const incrementCountAC = (incrementedCount: number) =>{
    return {
        type: INCREMENT_COUNT,
        payload: {
            incrementedCount
        }
    }as const
}
export const resetCountAC = (resetedCount: number) =>{
    return {
        type: RESET_COUNT,
        payload: {
            resetedCount
        }
    }as const
}
export const setCountFromLocalStorageAC = (valueFromLS: number) =>{
    return {
        type: SET_COUNT_FROM_LS,
        payload: {
            valueFromLS
        }
    }as const
}

//thunk:

export const incCountTC = (count: number) => (dispatch: Dispatch, getState: ()=>AppRootStateType) => {
    //можно из стейта взять текущее значение из стейта и передать его (увеличенное на 1) в localStorage и incrementCountAC
    let currentValue = getState().count.currentValue
    //а можно просто при диспатче incCountTC передать в качестве параметра (count + 1), где count - получен из useSelector-а
    localStorage.setItem('count', JSON.stringify(count))
    dispatch(incrementCountAC(count))

}

export const setCountFromLSTC = () => (dispatch: Dispatch,) => {
    let valueCountAsString = localStorage.getItem('count')
    valueCountAsString && dispatch(setCountFromLocalStorageAC(JSON.parse(valueCountAsString)))
}


//types:
type InitialStateType = typeof initialState
type IncrementCountActionType = ReturnType<typeof incrementCountAC>
type ResetCountActionType = ReturnType<typeof resetCountAC>
type SetCountFromLSActionType = ReturnType<typeof setCountFromLocalStorageAC>
export type countReducerActionsType =
  IncrementCountActionType
  | ResetCountActionType
  | SetCountFromLSActionType