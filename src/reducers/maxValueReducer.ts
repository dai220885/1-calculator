const SET_MAX_VALUE = 'SET-MAX-VALUE'

const initialState = 5;
export const maxValueReducer = (state: number = initialState, action: SetMaxValueActionType): number => {
    switch (action.type) {
        case SET_MAX_VALUE: {
            return action.payload.newMaxValue
        }
        default:
            return state
    }
}

type SetMaxValueActionType = ReturnType<typeof setMaxValueAC>

export const setMaxValueAC = (newMaxValue: number) =>{
    return {
        type: SET_MAX_VALUE,
        payload: {
            newMaxValue
        }
    }as const
}
