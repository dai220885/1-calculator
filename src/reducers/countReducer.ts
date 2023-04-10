const INCREMENT_COUNT = 'INCREMENT-COUNT';
const RESET_COUNT = 'RESET-COUNT';

const initialState = 0;
export const countReducer = (state: number = initialState, action: countReducerActionsType): number => {
    switch (action.type) {
        case INCREMENT_COUNT:{
            return action.payload.incrementedCount
        }
        case RESET_COUNT: {
            return action.payload.resetedCount
        }
        default:
            return state
    }
}

type countReducerActionsType =
    IncrementCountActionType
    | ResetCountActionType

type IncrementCountActionType = ReturnType<typeof incrementCountAC>
type ResetCountActionType = ReturnType<typeof resetCountAC>

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