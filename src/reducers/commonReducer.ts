const INCREMENT_COUNT = 'INCREMENT-COUNT';
const RESET_COUNT = 'RESET-COUNT';
const TOGGLE_SETTINGS = 'TOGGLE-SETTINGS';
const SET_START_VALUE = 'SET-START-VALUE';
const SET_MAX_VALUE = 'SET-MAX-VALUE';

type StateType = {
    startValue: number,
    maxValue: number,
    count: number,
    isSettingsVisible: boolean,

}

const initialState = {
    startValue: 0,
    maxValue: 5,
    count: 0,
    isSettingsVisible: false,

}
export const commonReducer = (state: StateType = initialState, action: RootReducerActionsType): StateType => {
    switch (action.type) {
        case INCREMENT_COUNT: {
            return {...state, count: action.payload.incrementedCount}
        }
        case RESET_COUNT: {
            return {...state, count: action.payload.resetedCount}
        }
        case TOGGLE_SETTINGS: {
            return {...state, isSettingsVisible: action.payload.isSettingsVisible}
        }
        case SET_START_VALUE: {
            return {...state, startValue: action.payload.newStartValue}
        }
        case SET_MAX_VALUE: {
            return {...state, maxValue: action.payload.newMaxValue}
        }
            
        default:
            return state
    }
}

type RootReducerActionsType =
    IncrementCountActionType
    | ResetCountActionType 
    | IsSettingsVisibleActionType 
    | SetMaxValueActionType 
    | SetStartValueActionType

type IncrementCountActionType = ReturnType<typeof incrementCountAC>
type ResetCountActionType = ReturnType<typeof resetCountAC>
type IsSettingsVisibleActionType = ReturnType<typeof isSettingVisibleAC>
type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>
type SetStartValueActionType = ReturnType<typeof setStartValueAC>

export const isSettingVisibleAC = (isSettingsVisible: boolean) => {
    return {
        type: TOGGLE_SETTINGS,
        payload: {
            isSettingsVisible
        }
    } as const
}
export const incrementCountAC = (incrementedCount: number) => {
    return {
        type: INCREMENT_COUNT,
        payload: {
            incrementedCount
        }
    } as const
}
export const resetCountAC = (resetedCount: number) => {
    return {
        type: RESET_COUNT,
        payload: {
            resetedCount
        }
    } as const
}
export const setStartValueAC = (newStartValue: number) =>{
    return {
        type: SET_START_VALUE,
        payload: {
            newStartValue
        }
    }as const
}
export const setMaxValueAC = (newMaxValue: number) =>{
    return {
        type: SET_MAX_VALUE,
        payload: {
            newMaxValue
        }
    }as const
}