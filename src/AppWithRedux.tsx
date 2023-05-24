import React, {useEffect} from 'react';
//import logo from './logo.svg';
import './App.css';
import {MainView} from './components/MainView';
import {Settings} from 'components/Settings';
import {useSelector} from 'react-redux';

import {isSettingVisibleAC} from 'reducers/settingsReducer';
import {setMaxValueAC} from 'reducers/maxValueReducer';
import {setStartValueAC} from 'reducers/startValueReducer';
import {incrementCountAC, resetCountAC} from 'reducers/countReducer';
import {AppRootStateType, useAppDispatch} from 'store';

function AppWithRedux() {
    const dispatch = useAppDispatch()
    const isSettingVisible = useSelector<AppRootStateType, boolean>(state => state.isSettingsVisible)
    const startValue = useSelector<AppRootStateType, number>(state => state.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.maxValue)
    const count = useSelector<AppRootStateType, number>(state => state.count.currentValue)
    //переменные, которые дизейблят/раздизейбливают кнопки и проверяют корректность введенных значений startValue и maxValue
    const isDisableInc: boolean = count >= maxValue //!!!!! исправить на ===
    const isDisableReset: boolean = count === startValue
    const isStartValueCorrect: boolean = (maxValue > startValue) && (startValue >= 0)
    const isMaxValueCorrect: boolean = (maxValue > startValue)
    const isDisableSet: boolean = !isStartValueCorrect || !isMaxValueCorrect

    //функции, которые изменяют значения стейта, показывающего/скрывающего меню настроек
    const showSettings = () => dispatch(isSettingVisibleAC(true))
    const hideSettings = () => dispatch(isSettingVisibleAC(false))

    //используем useEffect и localStorage, чтобы после перезагрузки странички сохранялось значение счетчика
    //useEffect(() => {
        //dispatch(setCountFromLSTC())
   // }, []) //единожды, только при первой отрисовке странички, забираем из localStorage хранящиеся там значения и помещаем их в соответствующие useState-ы в качестве инициализационных значений
    //useEffect(() => setToLocalStorageHandler(), [count, startValue, maxValue])//при каждом изменении count, startValue или maxValue (в соответствующих useState-ах), помещаем в localStorage эти значения (count, startValue, maxValue)
    //колбэк для юзэффекта
    const setToLocalStorageHandler = () => {
        localStorage.setItem('count', JSON.stringify(count))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    //колбэк для юзэффекта

    /*const getFromLocalStorageHandler = () => {
        let valueCountAsString = localStorage.getItem('count')
        let valueStartValueAsString = localStorage.getItem('startValue')
        let valueMaxValueAsString = localStorage.getItem('maxValue')
        valueCountAsString && setCount(JSON.parse(valueCountAsString))
        valueStartValueAsString && setStartValue(JSON.parse(valueStartValueAsString))
        valueMaxValueAsString && setMaxValue(JSON.parse(valueMaxValueAsString))

        // if (valueCountAsString) {
        //     let newCount = JSON.parse(valueCountAsString)
        //     setCount(newCount)
        //     //return newCount //если убрать setCount(newCount), а просто возвращать newCount, то эту функцию можно сразу поместить в useState в качестве инициализационного значения
        // }
    } //*/


    const setMaxValueCallBack = (newMaxValue: number) => dispatch(setMaxValueAC(newMaxValue))
    const setStartValueCallBack = (newStartValue: number) => dispatch(setStartValueAC(newStartValue))
    const incrementCount = () => {
        if (count < maxValue) {
            //const newCount = count + 1 //можно в setCount передать newCount, а можно сразу передать count+1
            //dispatch(incrementCountAC(count + 1))
            dispatch(incrementCountAC(count + 1))
            //setCount(count => count+1) //можно также передать функцию, которая принимает старое значение и возвращает новое значение count
        }
    }
    const resetCount = () => dispatch(resetCountAC(startValue))

    return (

        isSettingVisible
            ?
            <Settings
                startValue={startValue}
                maxValue={maxValue}
                setMaxValueCallBack={setMaxValueCallBack}
                setStartValueCallBack={setStartValueCallBack}
                hideSettings={hideSettings}
                isDisableSet={isDisableSet}
                isStartValueCorrect={isStartValueCorrect}
                isMaxValueCorrect={isMaxValueCorrect}
            />
            :
            <MainView
                count={count}
                maxValue={maxValue}
                incrementCount={incrementCount}
                resetCount={resetCount}
                isDisableInc={isDisableInc}
                isDisableReset={isDisableReset}
                showSettings={showSettings}
            />
    );
}


export default AppWithRedux;