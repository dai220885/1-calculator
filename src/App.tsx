import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
import {Monitor} from './components/Monitor';
import {SettingsMonitor} from './components/SettingsMonitor';
import {MainView} from './components/MainView';
import {Settings} from './components/Settings';

function App() {
    let firstStartValue = 0;
    let firstMaxValue = 5;

    const [isSettingVisible, setIsSettingsVisible] = useState<boolean>(false) //стейт для хранения значения "показывать/не показывать" меню настроек
    const [startValue, setStartValue] = useState(firstStartValue) //стейт для хранения начального значения счетчика
    const [maxValue, setMaxValue] = useState<number>(firstMaxValue)//стейт для хранения максимального значения счетчика
    const [count, setCount] = useState<number>(startValue)//стейт для хранения текущего значения счетчика
    //переменные, которые дизейблят/раздизейбливают кнопки
    const isDisableInc: boolean = count >= maxValue //!!!!! исправить на ===
    const isDisableReset: boolean = count === startValue
    //функции, которые изменяют значения стейта, показывающего, скрывающего меню настроек
    const showSettings = () => setIsSettingsVisible(true)
    const hideSettings = () => setIsSettingsVisible(false)

    //используем useEffect и localStorage, чтобы после перезагрузки странички сохранялось значение счетчика
    useEffect(() => {getFromLocalStorageHandler()}, []) //единожды, только при первой отрисовке странички, забираем из localStorage хранящиеся там значения и помещаем их в соответствующие useState-ы в качестве инициализационных значений

    useEffect(() => setToLocalStorageHandler(), [count, startValue, maxValue])//при каждом изменении count, startValue или maxValue (в соответствующих useState-ах), помещаем в localStorage эти значения (count, startValue, maxValue)

    //колбэк для юзэффекта
    const setToLocalStorageHandler = () => {
        localStorage.setItem('count', JSON.stringify(count))
        localStorage.setItem('startValue', JSON.stringify(startValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
    }
    //колбэк для юзэффекта
    const getFromLocalStorageHandler = () => {
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
    }
    const setMaxValueCallBack = (newMaxValue: number) => {
        setMaxValue(newMaxValue)
    }

    const setStartValueCallBack = (newStartValue: number) => {
        setStartValue(newStartValue)
    }


    const incrementCount = () => {
        if (count < maxValue) {
            //const newCount = count + 1 //можно в setCount передать newCount, а можно сразу передать count+1
            setCount(count + 1)
            //setCount(count => count+1) //можно также передать функцию, которая принимает старое значение и возвращает новое значение count
        }
    }

    const resetCount = () => {
        setCount(startValue)
    }



    return (
        <>
            {!isSettingVisible &&
                <MainView
                    count={count}
                    maxValue={maxValue}
                    incrementCount={incrementCount}
                    resetCount={resetCount}
                    isDisableInc={isDisableInc}
                    isDisableReset={isDisableReset}
                    showSettings={showSettings}
                />
            }

            {isSettingVisible &&
                <Settings
                    startValue={startValue}
                    maxValue={maxValue}
                    setMaxValueCallBack={setMaxValueCallBack}
                    setStartValueCallBack={setStartValueCallBack}
                    hideSettings={hideSettings}
                />
            }
        </>

    );
}

export default App;
