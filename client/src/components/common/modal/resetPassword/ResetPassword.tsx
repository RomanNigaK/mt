import Input from "components/common/input/Input";
import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Btn from "components/common/btn/Btn";
type IReset = {
  email: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .email("email не корректен")
    .required("обязательно для заполнения"),
});

export default function ResetPassword() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<IReset>({
    resolver: yupResolver(schema),
  });

  return (
    <div>
      <h3>Восстановление пароля</h3>
      <Input
        placeholder="Email"
        name="email"
        register={register}
        error={errors.email?.message}
      />
      <div style={{ textAlign: "center" }}>Восстановить</div>
    </div>
  );
}
