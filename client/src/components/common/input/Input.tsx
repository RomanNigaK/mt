import React from "react";
import css from "./Input.module.scss";
import { error } from "console";

interface IInput {
  type?: string;
  placeholder?: string;
  register: Function;
  name: string;
  error?: string;
}
export default function Input({
  type = "text",
  placeholder = "",
  register,
  name,
  error = "",
}: IInput) {
  return (
    <div>
      <div className={css.input}>
        <input type={type} placeholder={placeholder} {...register(name)} />
      </div>
      {error && <div className={css.error}>-{error}</div>}
    </div>
  );
}
