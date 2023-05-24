import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {SetStartValueActionType, startValueReducer} from 'reducers/startValueReducer';
import {maxValueReducer, SetMaxValueActionType} from 'reducers/maxValueReducer';
import {countReducer, countReducerActionsType} from 'reducers/countReducer';
import {settingsReducer, settingsReducerActionsType} from 'reducers/settingsReducer';
import {commonReducer} from 'reducers/commonReducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';


//используем четыре редьюсера (по одному для каждого из первоначально используемых setState-ов)
const rootReducer = combineReducers(
    {
        startValue: startValueReducer,
        maxValue: maxValueReducer,
        count: countReducer,
        isSettingsVisible: settingsReducer,

    }
)
//здесь используем один редьюсер, обрабатывающий стейт типа StateType (объект со свойствами startValue, maxValue, count, isSettingsVisible
const rootReducer2 = combineReducers(
    {
        calculator: commonReducer
    }
)


export const store = createStore(rootReducer, applyMiddleware(thunk))
export const useAppDispatch = () => useDispatch<AppDispatchType>()

//types:
export type AppRootStateType = ReturnType<typeof rootReducer>
type AppStoreType = typeof store
export type AppDispatchType = ThunkDispatch <AppRootStateType, unknown, AppActionsType>
type AppActionsType =
  | countReducerActionsType
  | settingsReducerActionsType
  | SetMaxValueActionType
  | SetStartValueActionType



// @ts-ignore
window.store = store