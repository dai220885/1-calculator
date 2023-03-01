import React, {useEffect, useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
import {Monitor} from './components/Monitor';

function App() {
    const startValue = 0;
    const maxValue = 5;

    const [count, setCount] = useState<number>(startValue)

    //используем useEffect и localStorage, чтобы после перезагрузки странички сохранялось значение счетчика
    useEffect(()=>{getFromLocalStorageHandler()}, []) //единожды, только при первой отрисовке странички, забираем из localStorage хранящееся там значение и помещаем его в useState в качестве инициализационного значения

    useEffect(()=>setToLocalStorageHandler(), [count])//при каждом изменении count (в useState), помещаем в localStorage это значение (count)

    //колбэк для юзэффекта
    const setToLocalStorageHandler = () => {
        localStorage.setItem('count', JSON.stringify(count))
    }
    //колбэк для юзэффекта
    const getFromLocalStorageHandler = () => {
        let valueAsString = localStorage.getItem('count')
        if(valueAsString){
            let newCount = JSON.parse(valueAsString)
            setCount(newCount)
            //return newCount //если убрать setCount(newCount), а просто возвращать newCount, то эту функцию можно сразу поместить в useState в качестве инициализационного значения
        }
    }



    const incCount = () => {
        if (count < maxValue) {
            //const newCount = count + 1 //можно в setCount передать newCount, а можно сразу передать count+1
            setCount(count + 1)
            //setCount(count => count+1) //можно также передать функцию, которая принимает старое значение и возвращает новое значение count

        }
    }

    const resetCount = () => {
        setCount(startValue)
    }

    const isDisableInc: boolean = count === maxValue
    const isDisableReset: boolean = count === startValue

    return (
        <div className={'App'}>
            <div className={'monitor' + (count >= 5 ? ' red' : '')}>
                <Monitor count={count}/>
            </div>
            <div className={'buttons'}>
                <Button name={'INC'} buttonCallBack={incCount} isDisabled={isDisableInc}/>
                <Button name={'RESET'} buttonCallBack={resetCount} isDisabled={isDisableReset}/>
            </div>
        </div>
    );
}

export default App;
