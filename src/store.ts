import {combineReducers, legacy_createStore as createStore} from 'redux';
import {startValueReducer} from './reducers/startValueReducer';
import {maxValueReducer} from './reducers/maxValueReducer';
import {countReducer} from './reducers/countReducer';
import {settingsReducer} from './reducers/settingsReducer';
import {commonReducer} from './reducers/commonReducer';


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

export type AppRootStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer)

// @ts-ignore
window.store = store