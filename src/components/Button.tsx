import React from "react";

type ButtonPropsType = {
  name: string;
  onClick: ()=>void;
  disabled?: boolean
  className?: string
}

// export const Button = ({name, buttonCallBack, isDisabled, classes}:ButtonPropsType) => {}

export const Button = (props:ButtonPropsType) => {
  const onClickButtonHandler = () => props.onClick()

  return(
      <button
          className={props.className? props.className :'button'}
          disabled={props.disabled}
          onClick={onClickButtonHandler}
      >
        {props.name}
      </button>
  )
}
