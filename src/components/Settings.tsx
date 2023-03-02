import React from 'react';
import {Monitor} from './Monitor';
import {Button} from './Button';
import {SettingsMonitor} from './SettingsMonitor';

type SettingsPropsType = {
    startValue: number
    maxValue: number
    setMaxValueCallBack:(newMaxValue: number)=>void
    setStartValueCallBack:(newStartValue: number)=>void
    hideSettings: ()=>void
}

export const Settings = (props: SettingsPropsType) => {
    return (
        <div className={'App'}>
            <div className={'settingMonitor'}>
                <SettingsMonitor
                    startValue={props.startValue}
                    maxValue={props.maxValue}
                    setMaxValue={props.setMaxValueCallBack}
                    setStartValue={props.setStartValueCallBack}/>
            </div>
            <div className={'buttons buttonsSet'}>
                <div className={'set'}>
                    <Button name={'SET'} buttonCallBack={props.hideSettings} classes={'button set'}/>
                </div>

            </div>
        </div>
    )

}
