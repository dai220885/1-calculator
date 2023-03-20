import React, {ChangeEvent} from 'react';
import {findAllByDisplayValue} from '@testing-library/react';
import {SettingsInput} from './SettingsInput';

type SettingsMonitorPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (newMaxValue: number) => void
    setStartValue: (newStartValue: number) => void
    isStartValueCorrect: boolean
    isMaxValueCorrect: boolean
}

export const SettingsMonitor = (props: SettingsMonitorPropsType) => {
    const setMaxValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(event.currentTarget.value))
    }
    const setStartValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(parseInt(event.currentTarget.value))
    }
    //добавим классНейм 'errorInput', если некорректрые значения
    const startValueInputClassName = props.isStartValueCorrect? '': 'errorInput'
    const maxValueInputClassName = props.isMaxValueCorrect? '': 'errorInput'
    return (
        <div className={'settingsValue'}>
            <span className={'settings'}>
                <span>start value: </span>
                <SettingsInput
                    value={props.startValue}
                    type="number"
                    onChange={setStartValueOnChangeHandler}
                    className={startValueInputClassName}
                />
            </span>
            <span className={'settings'}>
                <span>max value: </span>
                <SettingsInput
                    value={props.maxValue}
                    type="number"
                    onChange={setMaxValueOnChangeHandler}
                    className={maxValueInputClassName}
                />
            </span>
        </div>
    )

}


