import React from "react";
import style from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className={style.input}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input ref={ref} {...props.input} />
    </div>
  );
});

export default Input;
