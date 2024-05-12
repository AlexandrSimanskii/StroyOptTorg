import SideBar from "../Components/SideBar/SideBar";

const PaymentPage = () => {
  return (
    <div className="paiment">
      <div className="container">
        <h2 className="delivery-title">Способы оплаты</h2>
        <div className="delivery-inner">
          <div className="delivery-content">
            <ol>
              <h4>При заказе доставки</h4>
              <li>
                <p className="paiment-text">
                  Банковской картой с помощью платежной системы на сайте. При
                  оформлении заказа в разделе Оплата мы переадресуем Вас на
                  платежную страницу системы, где необходимо будет указать
                  реквизиты вашей банковской карты (номер, дата окончания
                  действия карты, имя владельца). После ввода всех необходимых
                  данных нажмите кнопку «Оплатить».
                </p>
                <p>
                  Для выбора оплаты товара с помощью банковской карты на
                  соответствующей странице необходимо нажать кнопку Оплата
                  заказа банковской картой. Оплата происходит через ПАО СБЕРБАНК
                  с использованием банковских карт следующих платёжных систем:
                </p>
                <ul className="ul-type-disc">
                  <li>МИР</li>
                  <li>VISA International</li>
                  <li>Mastercard Worldwide</li>
                  <li>JCB</li>
                </ul>
                <p>
                  <b>Наличными</b> водителю при получении заказа. <br />
                  Наш менеджер позвонит вам и договорится об удобном для вас
                  времени получении заказа. Скомплектованный заказ будет ждать
                  вас на складе.
                  <br /> Стоимость доставки определяется в зависимости от
                  габаритов и удаленности до места назначения и дополнительно
                  включается в заказ.
                </p>
              </li>
              <h4>При самовывозе</h4>
              <li>
                <ul className="ul-type-disc">
                  <li>
                    Банковской картой с помощью платежной системы на сайте или
                    на кассе при получении заказа.
                  </li>
                  <li>Наличными на кассе при получении заказа</li>
                  <li>
                    При получении заказа просим Вас внимательно осмотреть товар,
                    проверить его на предмет наличия внешних дефектов и
                    комплектацию.
                  </li>
                </ul>
              </li>
              <h4>Сервис “Покупай со Сбером”</h4>
              <li>
                <h5>Основные требования:</h5>
                <ul className="ul-type-disc">
                  <li>Гражданство: Российская Федерация</li>
                  <li>
                    Возраст на момент предоставления кредита: не менее 21 года.
                  </li>
                  <li>
                    Возраст на момент возврата кредита по договору: не более 70
                    лет.
                  </li>
                  <li>
                    Использование сервисов Банка: держатель дебетовой банковской
                    карты, выпущенной Банком, заключивший с Банком Договор
                    банковского обслуживания, а также подключившийся к услуге
                    "Мобильный банк" и системе СберБанк Онлайн.
                  </li>
                  <li>
                    Регистрация: наличие постоянной(временной) регистрации по
                    месту жительства/пребывания на территории Российской
                    Федерации.
                  </li>
                </ul>
                <h5>Преимущества Сервиса:</h5>
                <ul className="ul-type-disc">
                  <li>Без первоначального взноса.</li>
                  <li>Срок действия кредита: от 3 до 36 месяцев.</li>
                  <li>Сумма кредита от 3000 до 300 000 руб.</li>
                </ul>
                <h5>Необходимые действия:</h5>

                <ul className="ul-type-disc">
                  <li>
                    Выберите на сайте товар, нажмите "Добавить в корзину", далее
                    перейдите на страницу "Корзина", щелкнув по ее значку в
                    полосе верхнего меню.s
                  </li>
                  <li>
                    На странице "Корзина" нажмите кнопку "Оформить заказ".
                  </li>
                  <li>
                    В блоке "Оплата" выберете способ оплаты "Покупай со Сбером"
                    (оформление покупки в кредит).
                  </li>
                  <li>
                    Заполните все обязательные поля, отмеченные знаком "*".
                  </li>
                  <li>
                    Когда откроется СберБанк Онлайн, авторизуйтесь и заполните
                    заявку. Рассмотрение заявки займет не более 2-х минут.
                  </li>
                  <li>
                    Если кредит одобрен, деньги за покупку автоматически будут
                    перечислены на счет ООО "Стройоптторг".
                  </li>
                  <li>
                    Далее Вы выбираете комфортный способ и время доставки или
                    самовывоза.
                  </li>
                </ul>
                <p>
                  Ознакомиться подробнее с условиями кредитования можно по
                  ссылке -{" "}
                  <a href="https://pokupay.ru/credit_terms">
                    https://pokupay.ru/credit_terms
                  </a>{" "}
                </p>
              </li>
              <h4>Возврат товара</h4>
              <p>
                Срок возврата товара надлежащего качества составляет 30 дней с
                момента получения товара. Возврат переведённых средств,
                производится на ваш банковский счёт в течение 5-30 рабочих дней
                (срок зависит от банка, который выдал вашу банковскую карту).
              </p>
              <li>
                <h4>Описание процесса передачи данных</h4>
                <p className="paiment-text">
                  Для оплаты (ввода реквизитов Вашей карты) Вы будете
                  перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с
                  платёжным шлюзом и передача информации осуществляется в
                  защищённом режиме с использованием протокола шифрования SSL. В
                  случае если Ваш банк поддерживает технологию безопасного
                  проведения интернет-платежей Verified By Visa, MasterCard
                  SecureCode, MIR Accept, J-Secure для проведения платежа также
                  может потребоваться ввод специального пароля.
                </p>
                {""}
                <p>
                  Настоящий сайт поддерживает 256-битное шифрование.
                  Конфиденциальность сообщаемой персональной информации
                  обеспечивается ПАО СБЕРБАНК. Введённая информация не будет
                  предоставлена третьим лицам за исключением случаев,
                  предусмотренных законодательством РФ. Проведение платежей по
                  банковским картам осуществляется в строгом соответствии с
                  требованиями платёжных систем МИР, Visa Int., MasterCard
                  Europe Sprl, JCB.
                </p>
              </li>
            </ol>
          </div>
          <SideBar />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
