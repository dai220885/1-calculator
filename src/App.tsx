import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {Button} from './components/Button';
import {Monitor} from './components/Monitor';

function App() {
    const startValue = 0;
    const maxValue = 5;

    const [count, setCount] = useState<number>(startValue)

    function incCount() {
        if (count < maxValue){
            //const newCount = count + 1 //можно в setCount передать newCount, а можно сразу передать count+1

            setCount(count + 1)
            //setCount(count => count+1) //можно также передать функцию, которая принимает старое значение и возвращает новое значение count
        }
    }

    function resetCount() {
        setCount(startValue)
    }

    const isDisableInc:boolean = count === maxValue
    const isDisableReset:boolean = count === startValue

    return (
        <div className={'App'}>
            <div className={'monitor' + (count>=5?' red':'')}>
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
