/* eslint-disable no-irregular-whitespace */
import cns from 'classnames'
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth'

import { ITelegramAuthDto } from '@/core/interface/Initialization'

export const LayoutModals: React.FC = () => {
  {
    /* <div className="tooltip-def" id="chartjs-tooltip">
    <div className="tooltip-def__title"></div>
    <div className="tooltip-def__date"></div>
    <div className="tooltip-def__val"></div>
  </div> */
  }

  return (
    <>
      <div className="modal-def" id="modal-stat-mob">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-mob">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-mob__top">
              <div className="title-def modal-mob__title">
                Настройка
                <br />
                отображения
                <br />
                статистики
              </div>
            </div>
            <div className="modal-mob__block">
              <div className="modal-mob__block-title">Период</div>
              <div className="select-def select-def_full">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">22 июня ... 15 июня</div>
                  <svg
                    className="select-def__arr"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                    <path
                      d="M6 8L9.98617 12L13.9723 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="select-def__dropdown">
                  <li className="select-def__dropdown-el">22 июня ... 15 июня</li>
                  <li className="select-def__dropdown-el">10 мин</li>
                  <li className="select-def__dropdown-el">15 мин</li>
                </ul>
              </div>
            </div>
            <div className="modal-mob__block">
              <div className="modal-mob__block-title">Отображаемые данные</div>
              <div className="block-checkboxes-2">
                <div className="block-checkboxes-2__el">
                  <label className="checkbox-el-3" data-style="--color: #F5D48B;">
                    <span className="checkbox-el-3__btn checkbox-def">
                      <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                      <span className="checkbox-def__content">
                        <svg
                          className="checkbox-def__dec"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="checkbox-el-3__text">Сделано заказов</span>
                    <span className="checkbox-el-3__text">249</span>
                  </label>
                  <div className="stat-descrp">
                    <div className="stat-descrp__el">
                      <div className="stat-descrp__text">
                        <span>43</span> в АФК
                      </div>
                    </div>
                    <div className="stat-descrp__el">
                      <div className="stat-descrp__text">
                        <span>43</span> отказался
                      </div>
                    </div>
                    <div className="stat-descrp__el">
                      <div className="stat-descrp__text">
                        <span>43</span> отменил
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block-checkboxes-2__el">
                  <label className="checkbox-el-3" data-style="--color: #683CC3;">
                    <span className="checkbox-el-3__btn checkbox-def">
                      <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                      <span className="checkbox-def__content">
                        <svg
                          className="checkbox-def__dec"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="checkbox-el-3__text">Отправил в AFK</span>
                    <span className="checkbox-el-3__text">34</span>
                  </label>
                </div>
                <div className="block-checkboxes-2__el">
                  <label className="checkbox-el-3" data-style="--color: #40EAE5;">
                    <span className="checkbox-el-3__btn checkbox-def">
                      <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                      <span className="checkbox-def__content">
                        <svg
                          className="checkbox-def__dec"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="checkbox-el-3__text">Отправил в Проблемные</span>
                    <span className="checkbox-el-3__text">166</span>
                  </label>
                </div>
                <div className="block-checkboxes-2__el">
                  <label className="checkbox-el-3" data-style="--color: #11C471;">
                    <span className="checkbox-el-3__btn checkbox-def">
                      <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                      <span className="checkbox-def__content">
                        <svg
                          className="checkbox-def__dec"
                          width="12"
                          height="10"
                          viewBox="0 0 12 10"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                            stroke="white"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                    </span>
                    <span className="checkbox-el-3__text">Отправил в Обратно</span>
                    <span className="checkbox-el-3__text">4</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-stat">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-mob">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-mob__top">
              <div className="title-def modal-mob__title">Настройка отображения статистики</div>
            </div>
            <div className="modal-mob__block">
              <div className="modal-mob__block-title">Сортировать</div>
              <div className="select-def select-def_full">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">За сегодня по убыванию</div>
                  <svg
                    className="select-def__arr"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                    <path
                      d="M6 8L9.98617 12L13.9723 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="select-def__dropdown">
                  <li className="select-def__dropdown-el">За сегодня по убыванию</li>
                  <li className="select-def__dropdown-el">10 мин</li>
                  <li className="select-def__dropdown-el">15 мин</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-settings">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-mob">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-mob__top">
              <div className="title-def modal-mob__title">
                Настройка
                <br />
                отображения заказов
              </div>
            </div>
            <div className="modal-mob__block">
              <div className="modal-mob__block-title">Отображать</div>
              <label className="checkbox-el-2">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <div className="checkbox-el-2__dec"></div>
                <span className="checkbox-el-2__btn checkbox-def">
                  <span className="checkbox-def__content">
                    <svg
                      className="checkbox-def__dec"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
                <span className="checkbox-el-2__text">AFK</span>
              </label>
              <label className="checkbox-el-2">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <div className="checkbox-el-2__dec"></div>
                <span className="checkbox-el-2__btn checkbox-def">
                  <span className="checkbox-def__content">
                    <svg
                      className="checkbox-def__dec"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
                <span className="checkbox-el-2__text">В работе</span>
              </label>
              <label className="checkbox-el-2">
                <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                <div className="checkbox-el-2__dec"></div>
                <span className="checkbox-el-2__btn checkbox-def">
                  <span className="checkbox-def__content">
                    <svg
                      className="checkbox-def__dec"
                      width="12"
                      height="10"
                      viewBox="0 0 12 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </span>
                <span className="checkbox-el-2__text">Проблемные</span>
              </label>
            </div>
            <div className="modal-mob__block">
              <div className="modal-mob__block-title">Напоминать за</div>
              <div className="select-def select-def_full">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">15 минут</div>
                  <svg
                    className="select-def__arr"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                    <path
                      d="M6 8L9.98617 12L13.9723 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="select-def__dropdown">
                  <li className="select-def__dropdown-el">5 мин</li>
                  <li className="select-def__dropdown-el">10 мин</li>
                  <li className="select-def__dropdown-el">15 мин</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-menu">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-mob">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-mob__top">
              <div className="title-def modal-mob__title">Меню</div>
            </div>
            <ul className="links-def-mob">
              <li className="links-def-mob__el active">
                <a className="links-def-mob__link" href="#">
                  <div className="links-def-mob__icon">
                    <svg
                      width="20"
                      height="22"
                      viewBox="0 0 20 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M6.45833 4.125H3.125C2.79348 4.125 2.47554 4.2567 2.24112 4.49112C2.0067 4.72554 1.875 5.04348 1.875 5.375V19.125C1.875 19.4565 2.0067 19.7745 2.24112 20.0089C2.47554 20.2433 2.79348 20.375 3.125 20.375H16.875C17.2065 20.375 17.5245 20.2433 17.7589 20.0089C17.9933 19.7745 18.125 19.4565 18.125 19.125V5.375C18.125 5.04348 17.9933 4.72554 17.7589 4.49112C17.5245 4.2567 17.2065 4.125 16.875 4.125H13.5417"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M13.2666 4.95C13.2248 5.0738 13.1452 5.18138 13.0391 5.25762C12.933 5.33385 12.8056 5.3749 12.6749 5.375H7.32493C7.19426 5.3749 7.0669 5.33385 6.96077 5.25762C6.85464 5.18138 6.77508 5.0738 6.73326 4.95L5.89993 2.45C5.86765 2.35574 5.85837 2.25513 5.87286 2.15656C5.88736 2.05799 5.92521 1.96431 5.98326 1.88333C6.04235 1.80401 6.11897 1.73941 6.20716 1.6946C6.29534 1.64979 6.39268 1.62597 6.49159 1.625H13.5083C13.6072 1.62597 13.7045 1.64979 13.7927 1.6946C13.8809 1.73941 13.9575 1.80401 14.0166 1.88333C14.0746 1.96431 14.1125 2.05799 14.127 2.15656C14.1415 2.25513 14.1322 2.35574 14.0999 2.45L13.2666 4.95Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.625 6.625V14.8583C15.6247 15.1897 15.4928 15.5075 15.2583 15.7417L13.4917 17.5083C13.2575 17.7428 12.9397 17.8747 12.6083 17.875H5C4.83491 17.8728 4.67719 17.8063 4.56044 17.6896C4.4437 17.5728 4.37716 17.4151 4.375 17.25V6.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.4583 17.8747V14.958C11.4583 14.6265 11.5899 14.3085 11.8244 14.0741C12.0588 13.8397 12.3767 13.708 12.7083 13.708H15.6249"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Заказы
                </a>
              </li>
              <li className="links-def-mob__el">
                <a className="links-def-mob__link" href="#">
                  <div className="links-def-mob__icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.4036 5.11426C14.4036 4.80523 14.4952 4.50313 14.6669 4.24618C14.8386 3.98923 15.0826 3.78896 15.3681 3.67069C15.6536 3.55243 15.9678 3.52149 16.2709 3.58178C16.574 3.64207 16.8524 3.79088 17.071 4.0094C17.2895 4.22793 17.4383 4.50633 17.4986 4.80943C17.5588 5.11253 17.5279 5.42669 17.4096 5.7122C17.2914 5.99771 17.0911 6.24174 16.8341 6.41343C16.5772 6.58512 16.2751 6.67676 15.9661 6.67676"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9661 9.17676C15.7935 9.17676 15.6536 9.03684 15.6536 8.86426C15.6536 8.69167 15.7935 8.55176 15.9661 8.55176"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M15.9661 9.17676C16.1386 9.17676 16.2786 9.03684 16.2786 8.86426C16.2786 8.69167 16.1386 8.55176 15.9661 8.55176"
                        stroke="white"
                        strokeWidth="1.5"
                      />
                      <path
                        d="M18.616 9.53358C19.3233 9.00408 19.8544 8.27359 20.1399 7.43754C20.4256 6.6015 20.4524 5.69875 20.2171 4.8472C19.9817 3.99565 19.4949 3.23487 18.8205 2.66422C18.146 2.09356 17.3152 1.73956 16.4364 1.64843C15.5576 1.55731 14.6718 1.7333 13.8946 2.15342C13.1174 2.57354 12.4849 3.21827 12.0799 4.00341C11.6747 4.78854 11.5158 5.67759 11.6238 6.55446C11.7318 7.43132 12.1017 8.25523 12.6852 8.9186L12.1385 12.0678L14.2485 10.7669"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M7.85913 16.625C9.4124 16.625 10.6716 15.3658 10.6716 13.8125C10.6716 12.2592 9.4124 11 7.85913 11C6.30583 11 5.04663 12.2592 5.04663 13.8125C5.04663 15.3658 6.30583 16.625 7.85913 16.625Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.2159 20.3695C11.7699 19.6096 11.1328 18.9795 10.3679 18.5419C9.60308 18.1043 8.73711 17.8744 7.85593 17.875C6.97476 17.8756 6.10906 18.1067 5.3448 18.5453C4.58054 18.9839 3.94431 19.6148 3.49927 20.3753"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.9993 12.875V20.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.62427 20.375V4.125C1.62427 3.46196 1.88766 2.82607 2.3565 2.35723C2.82534 1.88839 3.46122 1.625 4.12427 1.625H10.3742"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.62427 5.43457H9.12426"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Тикеты
                </a>
              </li>
              <li className="links-def-mob__el">
                <a className="links-def-mob__link" href="#">
                  <div className="links-def-mob__icon">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.67845 3.55469C4.81329 4.03511 4.10019 4.7485 3.62012 5.61385"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.97917 1.25C4.09125 1.50245 3.28258 1.97763 2.62992 2.63044C1.97725 3.28325 1.50225 4.09203 1.25 4.98"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75 15H16.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.25 15.0004C16.25 15.0004 15 13.912 15 10.0004C15 6.87535 12.865 4.11035 10 4.11035C7.135 4.11035 5 6.87535 5 10.0004C5 13.9329 3.75 15.0004 3.75 15.0004"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 17.5C11.25 17.8315 11.1183 18.1495 10.8839 18.3839C10.6495 18.6183 10.3315 18.75 10 18.75C9.66848 18.75 9.35054 18.6183 9.11612 18.3839C8.8817 18.1495 8.75 17.8315 8.75 17.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.11V2.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.3218 3.55469C14.7515 3.79463 15.1463 4.0924 15.4951 4.43969C15.843 4.78828 16.1408 5.18343 16.3801 5.61385"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0208 1.25C15.9087 1.50245 16.7173 1.97763 17.37 2.63044C18.0227 3.28325 18.4977 4.09203 18.7499 4.98"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Уведомления
                </a>
              </li>
              <li className="links-def-mob__el">
                <a className="links-def-mob__link" href="#">
                  <div className="links-def-mob__icon">
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13.5 20.375H8.5L9.125 16.625H12.875L13.5 20.375Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6.625 20.375H15.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.875 1.625H4.125C2.74429 1.625 1.625 2.74429 1.625 4.125V14.125C1.625 15.5057 2.74429 16.625 4.125 16.625H17.875C19.2557 16.625 20.375 15.5057 20.375 14.125V4.125C20.375 2.74429 19.2557 1.625 17.875 1.625Z"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.625 9.95859L4.95833 6.62526C5.07552 6.50822 5.23437 6.44248 5.4 6.44248C5.56563 6.44248 5.72448 6.50822 5.84167 6.62526L7.43333 8.26693C7.55052 8.38397 7.70937 8.44971 7.875 8.44971C8.04063 8.44971 8.19948 8.38397 8.31667 8.26693L11.65 4.93359"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M1.625 13.292H20.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.875 8.29199V10.5837"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M17.875 8.29199V10.5837"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.375 6.41699V10.5837"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.67845 3.55469C4.81329 4.03511 4.10019 4.7485 3.62012 5.61385"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M4.97917 1.25C4.09125 1.50245 3.28258 1.97763 2.62992 2.63044C1.97725 3.28325 1.50225 4.09203 1.25 4.98"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3.75 15H16.25"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.25 15.0004C16.25 15.0004 15 13.912 15 10.0004C15 6.87535 12.865 4.11035 10 4.11035C7.135 4.11035 5 6.87535 5 10.0004C5 13.9329 3.75 15.0004 3.75 15.0004"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11.25 17.5C11.25 17.8315 11.1183 18.1495 10.8839 18.3839C10.6495 18.6183 10.3315 18.75 10 18.75C9.66848 18.75 9.35054 18.6183 9.11612 18.3839C8.8817 18.1495 8.75 17.8315 8.75 17.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M10 4.11V2.5"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M14.3218 3.55469C14.7515 3.79463 15.1463 4.0924 15.4951 4.43969C15.843 4.78828 16.1408 5.18343 16.3801 5.61385"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M15.0208 1.25C15.9087 1.50245 16.7173 1.97763 17.37 2.63044C18.0227 3.28325 18.4977 4.09203 18.7499 4.98"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Статистика
                </a>
              </li>
              <li className="links-def-mob__el">
                <a className="links-def-mob__link theme--js" href="#">
                  <div className="links-def-mob__icon">
                    <svg
                      width="22"
                      height="20"
                      viewBox="0 0 22 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.625 16.8389H20.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M11 4.33887V3.08887"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.7451 6.71829L17.6293 5.83496"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M19.125 12.4639H20.375"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M2.875 12.4639H1.625"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M5.25502 6.71829L4.37085 5.83496"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16.2808 14.3387C16.5927 13.4887 16.6947 12.5758 16.5783 11.6779C16.4618 10.7799 16.1303 9.9233 15.6119 9.18089C15.0934 8.43849 14.4034 7.83222 13.6005 7.41359C12.7976 6.99497 11.9055 6.77637 11 6.77637C10.0945 6.77637 9.20239 6.99497 8.39948 7.41359C7.59656 7.83222 6.90657 8.43849 6.38815 9.18089C5.86973 9.9233 5.53819 10.7799 5.42173 11.6779C5.30526 12.5758 5.40729 13.4887 5.71917 14.3387"
                        stroke="white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  Дневная тема
                </a>
              </li>
            </ul>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-access">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-access">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-content__top">
              <div className="title-def modal-content__title">Доступ</div>
              <div className="text-def">Игры доступные оператору</div>
            </div>
            <div className="modal-content__block">
              <div className="block-checkboxes">
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Fortnite</span>
                </label>
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Fortnite</span>
                </label>
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Overwatch 2</span>
                </label>
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Overwatch 2</span>
                </label>
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Drawl stars, Crash Royale</span>
                </label>
                <label className="block-checkboxes__el checkbox-el">
                  <span className="checkbox-el__btn checkbox-def">
                    <input className="checkbox-def__inp" type="checkbox" name="inp-status" />
                    <span className="checkbox-def__content">
                      <svg
                        className="checkbox-def__dec"
                        width="12"
                        height="10"
                        viewBox="0 0 12 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M1.625 5.83738L3.44792 8.38592C3.59375 8.60437 3.8125 8.75 4.03125 8.75C4.25 8.75 4.54167 8.67718 4.6875 8.45874L10.375 1.25"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </span>
                  <span className="checkbox-el__text">Drawl stars, Crash Royale</span>
                </label>
              </div>
              <button className="btn-def-2 modal-content__btn">
                <span>Сохранить</span>
              </button>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-confirm">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-confirm">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-content__top">
              <div className="title-def modal-content__title">Подтвердить отмену заказа</div>
              <div className="content-info-2">
                <span className="content-info-2__title">kajzlcbout</span>
                <span className="content-info-2__text">30 февраля 2023 в 15:43</span>
              </div>
            </div>
            <div className="modal-content__block">
              <div className="estimation-btns">
                <label className="estimation-btns__btn estimation-btn">
                  <input className="estimation-btn__inp" type="radio" name="order" />
                  <div className="estimation-btn__dec">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M19.7916 8.63353C19.7916 8.13625 19.5941 7.65934 19.2425 7.30771C18.8908 6.95608 18.4139 6.75853 17.9166 6.75853H12.3083C12.2781 6.75828 12.2482 6.75144 12.2209 6.73849C12.1935 6.72553 12.1693 6.70678 12.15 6.68353C12.1279 6.65913 12.1124 6.62944 12.1051 6.59733C12.0978 6.56521 12.0989 6.53176 12.1083 6.5002C12.4325 5.20824 12.6334 3.88844 12.7083 2.55853C12.7366 1.87161 12.5112 1.19828 12.075 0.666866C11.8925 0.462099 11.6693 0.297749 11.4196 0.184374C11.1699 0.0709978 10.8992 0.011102 10.625 0.00853292C10.412 -0.00389439 10.1986 0.0270922 9.99796 0.0996122C9.79729 0.172132 9.61344 0.284673 9.45758 0.430404C9.30171 0.576136 9.17709 0.752018 9.09127 0.947376C9.00544 1.14274 8.96021 1.3535 8.95831 1.56687C8.96972 3.10017 8.39284 4.57949 7.34645 5.70029C6.30005 6.82109 4.86378 7.49807 3.33331 7.59187H0.833313C0.668224 7.59403 0.510504 7.66057 0.393758 7.77731C0.277012 7.89406 0.210471 8.05178 0.208313 8.21687V15.7169C0.208313 15.8826 0.274161 16.0416 0.391371 16.1588C0.508581 16.276 0.667553 16.3419 0.833313 16.3419C4.60831 16.3419 5.83331 16.8752 6.92498 17.3419C7.88366 17.8017 8.93693 18.0301 9.99998 18.0085H15.4166C15.9139 18.0085 16.3908 17.811 16.7425 17.4594C17.0941 17.1077 17.2916 16.6308 17.2916 16.1335C17.2937 15.8446 17.2281 15.5592 17.1 15.3002C17.4077 15.1437 17.6663 14.9053 17.8471 14.6112C18.028 14.3171 18.1241 13.9788 18.125 13.6335C18.127 13.3446 18.0614 13.0592 17.9333 12.8002C18.241 12.6437 18.4996 12.4053 18.6805 12.1112C18.8613 11.8171 18.9575 11.4788 18.9583 11.1335C18.9604 10.8446 18.8947 10.5592 18.7666 10.3002C19.0744 10.1437 19.3329 9.90525 19.5138 9.61117C19.6946 9.31709 19.7908 8.97878 19.7916 8.63353Z"
                        fill="#1F9C56"
                      />
                    </svg>
                  </div>
                </label>
                <label className="estimation-btns__btn estimation-btn estimation-btn_red">
                  <input className="estimation-btn__inp" type="radio" name="order" />
                  <div className="estimation-btn__dec">
                    <svg
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.208322 10.3665C0.208322 10.8637 0.405866 11.3407 0.757497 11.6923C1.10913 12.0439 1.58604 12.2415 2.08332 12.2415H7.69166C7.72191 12.2417 7.75175 12.2486 7.77909 12.2615C7.80643 12.2745 7.83063 12.2932 7.84999 12.3165C7.8721 12.3409 7.88755 12.3706 7.89485 12.4027C7.90214 12.4348 7.90105 12.4682 7.89166 12.4998C7.56744 13.7918 7.36654 15.1116 7.29166 16.4415C7.26337 17.1284 7.4888 17.8017 7.92499 18.3331C8.10742 18.5379 8.33066 18.7023 8.58038 18.8156C8.83009 18.929 9.10076 18.9889 9.37499 18.9915C9.58801 19.0039 9.80133 18.9729 10.002 18.9004C10.2027 18.8279 10.3865 18.7153 10.5424 18.5696C10.6983 18.4239 10.8229 18.248 10.9087 18.0526C10.9945 17.8573 11.0398 17.6465 11.0417 17.4331C11.0303 15.8998 11.6071 14.4205 12.6535 13.2997C13.6999 12.1789 15.1362 11.5019 16.6667 11.4081H19.1667C19.3317 11.406 19.4895 11.3394 19.6062 11.2227C19.723 11.1059 19.7895 10.9482 19.7917 10.7831V3.28313C19.7917 3.11737 19.7258 2.9584 19.6086 2.84119C19.4914 2.72398 19.3324 2.65813 19.1667 2.65813C15.3917 2.65813 14.1667 2.1248 13.075 1.65813C12.1163 1.19827 11.063 0.969921 9.99999 0.991466H4.58332C4.08604 0.991466 3.60913 1.18901 3.2575 1.54064C2.90587 1.89227 2.70832 2.36919 2.70832 2.86647C2.70626 3.1554 2.7719 3.4408 2.89999 3.6998C2.59226 3.85631 2.33371 4.09475 2.15285 4.38883C1.97199 4.68291 1.87584 5.02122 1.87499 5.36647C1.87292 5.6554 1.93857 5.9408 2.06666 6.1998C1.75892 6.35631 1.50038 6.59475 1.31952 6.88883C1.13866 7.18291 1.0425 7.52122 1.04166 7.86647C1.03959 8.1554 1.10523 8.4408 1.23332 8.6998C0.925589 8.85631 0.667044 9.09475 0.486183 9.38883C0.305322 9.68291 0.209169 10.0212 0.208322 10.3665Z"
                        fill="#C1352C"
                      />
                    </svg>
                  </div>
                </label>
              </div>
            </div>
            <div className="modal-content__block block-info">
              <div className="block-info__title2">Ваша причина отмены (не обязательно)</div>
              <div className="block-info__text">
                Укажите свою причину отмены, если оператор указал неверную.
              </div>
              <textarea className="textarea-def">Не привязывается карта</textarea>
              <button className="btn-def-2 modal-content__btn">
                <span>Подтвердить</span>
              </button>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-history">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-history">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-content__top">
              <div className="title-def modal-content__title">История заказа</div>
              <div className="content-info-2">
                <span className="content-info-2__title">kajzlcbout</span>
                <span className="content-info-2__text">30 февраля 2023 в 15:43</span>
              </div>
            </div>
            <div className="modal-content__block">
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Ben отправил в AFK</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Дед отправил в AFK</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Александра взяла в работу</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Ben отправил в AFK</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Дед отправил в AFK</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Александра отложила заказ</div>
                    <div className="content-table-info__info">Не привязалась карта</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
              <div className="content-table-info">
                <div className="content-table-info__left">
                  <div className="content-table-info__text">21 апреля 2023 в 15:43</div>
                  <div className="content-table-info__body">
                    <div className="content-table-info__val">Дед отправил в AFK</div>
                  </div>
                </div>
                <div className="content-table-info__right">
                  <div className="content-table-info__text">15 мин</div>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
      <div className="modal-def" id="modal-postpone">
        <div className="modal-def__wrap">
          <div className="modal-def__content modal-content modal-postpone">
            <div className="close-def modal-def__close modal-content__close">
              <svg
                className="close-def__icon"
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1L16.9447 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16.9447 1L1 17"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div className="modal-content__top">
              <div className="title-def modal-content__title">Отложить заказ</div>
              <div className="content-info-2">
                <span className="content-info-2__title">kajzlcbout</span>
                <span className="content-info-2__text">30 февраля 2023 в 15:43</span>
              </div>
            </div>
            <div className="block-info modal-content__block">
              <div className="block-info__title">На сколько откладываем</div>
              <div className="select-def select-def_width">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">2 часа</div>
                  <svg
                    className="select-def__arr"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="20" height="20" rx="10" fill="white" fillOpacity="0.1" />
                    <path
                      d="M6 8L9.98617 12L13.9723 8"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <ul className="select-def__dropdown">
                  <li className="select-def__dropdown-el">2 часа</li>
                  <li className="select-def__dropdown-el">10 мин</li>
                  <li className="select-def__dropdown-el">15 мин</li>
                </ul>
              </div>
            </div>
            <div className="block-info modal-content__block">
              <div className="block-info__title">Причина</div>
              <textarea className="textarea-def">Не привязывается карта</textarea>
              <button className="btn-def-2 modal-content__btn">
                <span>Отложить</span>
              </button>
            </div>
          </div>
          <div className="modal-def__overlay overlay"></div>
        </div>
      </div>
    </>
  )
}
