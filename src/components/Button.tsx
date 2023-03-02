import React from "react";

type ButtonPropsType = {
  name: string;
  buttonCallBack: ()=>void;
  isDisabled?: boolean
  classes?: string
}

// export const Button = ({name, buttonCallBack, isDisabled, classes}:ButtonPropsType) => {}


export const Button = (props:ButtonPropsType) => {
  const onClickButtonHandler = () => {
    props.buttonCallBack()
  }
  return(
      <button
          className={props.classes? props.classes :'button'}
          disabled={props.isDisabled}
          onClick={onClickButtonHandler}>
        {props.name}
      </button>
  )

}
