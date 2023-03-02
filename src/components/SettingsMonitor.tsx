import React, {ChangeEvent} from 'react';
import {findAllByDisplayValue} from '@testing-library/react';

type SettingsMonitorPropsType = {
    startValue: number
    maxValue: number
    setMaxValue: (newMaxValue: number) => void
    setStartValue: (newStartValue: number) => void
}

export const SettingsMonitor = (props: SettingsMonitorPropsType) => {
    const setMaxValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setMaxValue(parseInt(event.currentTarget.value))
    }
    const setStartValueOnChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.setStartValue(parseInt(event.currentTarget.value))
    }

    return (
        <div className={'settingsValue'}>
            <span className={'settings'}>
                <span>start value: </span>
                <input
                    value={props.startValue}
                    type="number"
                    onChange={setStartValueOnChangeHandler}
                />
            </span>
            <span className={'settings'}>
                <span>max value: </span>
                <input
                    value={props.maxValue}
                    type="number"
                    onChange={setMaxValueOnChangeHandler}
                />
            </span>
        </div>
    )

}


