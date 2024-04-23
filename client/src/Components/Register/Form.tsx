import { useState, useRef } from "react";
import InputMask from "react-input-mask";
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
  email: string;
  phone: string;
  name: string;
  region: string;
  password: string;
  confirmPassword: string;
};

const RegisterForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [agreement, setAgreement] = useState(false);
  const [secondAgreement, setSecondAgreement] = useState(false);
  const requiredMessage = "Обязательно к заполнению";

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>({ mode: "onSubmit" });
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const password = useRef({});
  password.current = watch("password", "");
  console.log(password);

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-box">
        {" "}
        <label className="label">
          Email <span className="contact-label__required">*</span>:
          <input
            className="input"
            placeholder="Введите ваш email адрес"
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
        </label>
        <label className="label">
          Номер телефона<span className="contact-label__required">*</span>:
          <InputMask
            mask={`+\\7\\(999)-999-99-99`}
            className="input"
            placeholder="+7 (___) ___ - ___ - ___"
            {...register("phone", {
              required: { value: true, message: requiredMessage },

              pattern: {
                message: "Введите все цифры",
                value: /^\+7\(\d{1}\d{2}\)-\d{3}-\d{2}-\d{2}$/,
              },
            })}
          />
          {errors.phone && <span>{errors.phone.message}</span>}
        </label>
      </div>
      <label className="label">
        Имя<span className="contact-label__required">*</span>:
        <input
          className="input"
          placeholder="Ваше полное имя"
          {...register("name", {
            required: { value: true, message: requiredMessage },
          })}
        />
        {errors.name && <span>{errors.name.message}</span>}
      </label>
      <label className="label">
        Регион<span className="contact-label__required">*</span>:
        <input
          className="input"
          placeholder="Ваш регион"
          {...register("region", {
            required: { value: true, message: requiredMessage },
          })}
        />
        {errors.region && <span>{errors.region.message}</span>}
      </label>
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
      <label className="label">
        Подтвердите пароль<span className="contact-label__required">*</span>:
        <input
          className="input"
          type={confirmVisible ? "text" : "password"}
          placeholder="Повторите пароль"
          {...register("confirmPassword", {
            validate: (value) =>
              value === password.current || "Пароли не совпадают",
            required: { value: true, message: requiredMessage },
          })}
        />
        <p
          onClick={() => setConfirmVisible((prev) => !prev)}
          className="form__eye"
        >
          {confirmVisible ? "Скрыть" : "Показать"}
        </p>
        {errors.confirmPassword && (
          <span>{errors.confirmPassword.message}</span>
        )}
      </label>
      <label className="checkbox-group">
        <input
          checked={agreement}
          type="checkbox"
          onChange={() => setAgreement(!agreement)}
        />{" "}
        Согласен с условиями обслуживания
      </label>{" "}
      <label className="checkbox-group">
        <input
          checked={secondAgreement}
          type="checkbox"
          onChange={() => setSecondAgreement(!secondAgreement)}
        />{" "}
        Согласен с обработкой персональных данных в соответствии с политикой
        конфиденциальности
      </label>
      <button
        className={
          agreement && secondAgreement ? "form-btn" : "form-btn--disabled"
        }
        type="submit"
      >
        {" "}
        Зарегистрироваться
      </button>
    </form>
  );
};

export default RegisterForm;
