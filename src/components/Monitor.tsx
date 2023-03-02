import React from 'react';
import {findAllByDisplayValue} from '@testing-library/react';

type MonitorPropsType = {
    count: number
}

export const Monitor = (props: MonitorPropsType) => {

    return (
        <div className={'value'}>
            <span>{props.count}</span>
        </div>
    )

}


