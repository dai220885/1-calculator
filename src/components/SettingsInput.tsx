import React, {ChangeEvent} from 'react';

type SettingsInputPropsType = {
  value: number;
  type: string
  onChange: (event: ChangeEvent<HTMLInputElement>)=>void;
  className?: string
}

export const SettingsInput = (props:SettingsInputPropsType) => {
  const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    props.onChange(event)
  }
  const inputClassName = props.className? 'input '+ props.className: 'input'
  return(
  <input
      className={inputClassName}
      value={props.value}
      type={props.type}
      onChange={onChangeInputHandler}
  />
  )

}
