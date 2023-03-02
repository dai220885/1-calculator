import React from 'react';
import {Monitor} from './Monitor';
import {Button} from './Button';

type MainViewPropsType = {
    count: number
    maxValue: number
    incrementCount: ()=> void
    resetCount: ()=> void
    isDisableInc: boolean
    isDisableReset: boolean
    showSettings: ()=> void
}

// export const Button = ({name, buttonCallBack, isDisabled, classes}:ButtonPropsType) => {}


export const MainView = (props: MainViewPropsType) => {
    return (
        <div className={'App'}>
            <div className={'monitor' + (props.count >= props.maxValue ? ' red' : '')}>
                <Monitor count={props.count}/>
            </div>
            <div className={'buttons buttonsMain'}>
                <Button name={'INC'} buttonCallBack={props.incrementCount} isDisabled={props.isDisableInc}/>
                <Button name={'RESET'} buttonCallBack={props.resetCount} isDisabled={props.isDisableReset}/>
                <Button name={'SET'} buttonCallBack={props.showSettings}/>
            </div>
        </div>
    )

}
