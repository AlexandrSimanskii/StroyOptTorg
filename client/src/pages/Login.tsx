import Account from "../Components/Register/Account";
import { useState } from "react";

import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const requiredMessage = "Обязательно к заполнению";
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<Inputs>({ mode: "onSubmit" });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div className="register">
      <div className="container">
        <h2>Авторизация</h2>
        <div className="register-content">
          <form
            action="submit"
            className="form"
            onSubmit={handleSubmit(onSubmit)}
          >
            <label className="label">
              Email <span className="contact-label__required">*</span>:
              <input
                className="input"
                placeholder="Email или логин *:"
                {...register("email", {
                  required: { value: true, message: requiredMessage },
                  pattern: {
                    value:
                      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                    message: "Неверный формат email адреса",
                  },
                })}
              />
              {errors.email && <span>{errors.email.message}</span>}
            </label>{" "}
            <label className="label">
              Пароль<span className="contact-label__required">*</span>:
              <input
                type={passwordVisible ? "text" : "password"}
                className="input"
                id="password"
                placeholder="Введите пароль"
                {...register("password", {
                  required: { value: true, message: requiredMessage },
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/,
                    message:
                      "Пароль должен содержать латинские буквы в разных регистрах и содержать минимум одну цифру ",
                  },
                  minLength: {
                    value: 6,
                    message: "Длинна должна быть не менее 6 символов",
                  },
                })}
              />
              <p
                onClick={() => setPasswordVisible((prev) => !prev)}
                className="form__eye"
              >
                {passwordVisible ? "Скрыть" : "Показать"}
              </p>
              <p />
              {errors.password && <span>{errors.password.message}</span>}
            </label>
            <button>Восстановить пароль</button>
            <button>Авторизоваться</button>
          </form>
          <Account />
        </div>
      </div>
    </div>
  );
};

export default Login;
