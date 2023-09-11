import React from "react";
import css from "./EnterAccount.module.scss";
import Input from "components/common/input/Input";
import Btn from "components/common/btn/Btn";
import enter from "@public/icons/enter.svg";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm, SubmitHandler } from "react-hook-form";
import Submit from "components/common/submit/Submit";
import useHttp from "hooks/http.hook";
import MessageError from "components/common/messageError/MessageError";
import { useAppDispatch, useAppSelector } from "hooks/redux.hook";
import { selectorError } from "redux/selectors";
import { setUser } from "redux/slice/user.slice";
import useModal from "hooks/modal.hook";
type FormEnterAccount = {
  email: string;
  password: string;
};
const schema = yup.object().shape({
  password: yup.string().required("обязательно для заполнения"),
  email: yup
    .string()
    .email("email не корректен")
    .required("обязательно для заполнения"),
});
export default function EnterAccount() {
  const dispatch = useAppDispatch();
  const error = useAppSelector((state) => selectorError(state));
  console.log(error);
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormEnterAccount>({
    resolver: yupResolver(schema),
  });

  const { request, loading } = useHttp();

  async function auth(authData: any) {
    try {
      const body: any = JSON.stringify(authData);
      console.log(body);

      const data = await request("/api/user/auth", "POST", body, {
        "Content-Type": "application/json;charset=utf-8",
      });

      dispatch(setUser(data[0]));
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }

  const handleSubmitForm: SubmitHandler<FormEnterAccount> = (
    data: FormEnterAccount
  ) => {
    auth(data);
  };

  const { modalShow } = useModal();

  return (
    <form onSubmit={handleSubmit(handleSubmitForm)}>
      <div className={css.enterAccount}>
        <Input
          placeholder="Email"
          register={register}
          name="email"
          error={errors.email?.message}
        />
        <Input
          placeholder="Пароль"
          register={register}
          name="password"
          error={errors.password?.message}
        />
        <div className={css.btn}>
          <div onClick={modalShow}>Восстановить пароль</div>
          <Btn icon={enter} idSubmit="enterFormAccount" loading={loading} />
        </div>
        <Submit id="enterFormAccount" />
      </div>
      {error && <MessageError message={error} />}
    </form>
  );
}
