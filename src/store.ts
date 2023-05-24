import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import {SetStartValueActionType, startValueReducer} from 'reducers/startValueReducer';
import {maxValueReducer, SetMaxValueActionType} from 'reducers/maxValueReducer';
import {countReducer, countReducerActionsType} from 'reducers/countReducer';
import {settingsReducer, settingsReducerActionsType} from 'reducers/settingsReducer';
import {commonReducer} from 'reducers/commonReducer';
import thunk, {ThunkDispatch} from 'redux-thunk';
import {useDispatch} from 'react-redux';
import {loadState, saveState} from 'utils/localStorageUtils';


//используем четыре редьюсера (по одному для каждого из первоначально используемых setState-ов)
const rootReducer = combineReducers(
    {
        startValue: startValueReducer,
        maxValue: maxValueReducer,
        count: countReducer,
        isSettingsVisible: settingsReducer,

    }
)

const rootReducer2 = combineReducers(
    {
        calculator: commonReducer
    }
)

//вторым параметром передаем функцию, которая вернет стейт, полученный из localStorage
export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))
export const useAppDispatch = () => useDispatch<AppDispatchType>()

//в store.subscribe передали колбэк, который запустит saveState(), в aveState() в качестве параметра придет объект типа AppRootStateType, каждое свойство которого получено с помощью store.getState()
store.subscribe(() => {
  //localStorage.setItem('appState', JSON.stringify(store.getState()))
  saveState({
    startValue: store.getState().startValue,
    maxValue: store.getState().maxValue,
    count: store.getState().count,
    isSettingsVisible: store.getState().isSettingsVisible,
  });
  //localStorage.setItem('currentCount', JSON.stringify(store.getState().count.currentValue))
})

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