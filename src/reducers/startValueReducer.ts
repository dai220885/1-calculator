const SET_START_VALUE = 'SET-START-VALUE'

const initialState = 0;
export const startValueReducer = (state: number = initialState, action: SetStartValueActionType): number => {
    switch (action.type) {
        case SET_START_VALUE: {
            return action.payload.newStartValue
        }
        default:
            return state
    }
}

type SetStartValueActionType = ReturnType<typeof setStartValueAC>

export const setStartValueAC = (newStartValue: number) =>{
    return {
        type: SET_START_VALUE,
        payload: {
            newStartValue
        }
    }as const
}
