const TOGGLE_SETTINGS = 'TOGGLE-SETTINGS';

const initialState = false;
export const settingsReducer = (state: boolean = initialState, action: settingsReducerActionsType): boolean => {
    switch (action.type) {
        case TOGGLE_SETTINGS:{
            return action.payload.isSettingsVisible
        }
        default:
            return state
    }
}

export type settingsReducerActionsType = IsSettingsVisibleActionType


type IsSettingsVisibleActionType = ReturnType<typeof isSettingVisibleAC>

export const isSettingVisibleAC = (isSettingsVisible: boolean) => {
    return {
        type: TOGGLE_SETTINGS,
        payload: {
            isSettingsVisible
        }
    } as const
}