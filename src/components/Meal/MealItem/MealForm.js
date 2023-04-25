import React from "react";
import Input from "../../UI/Input/Input";
import style from "./MealForm.module.css";

const MealForm = () => {
  return (
    <form className={style.form}>
      <Input
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};
export default MealForm;
