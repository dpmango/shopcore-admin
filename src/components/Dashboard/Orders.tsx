import cns from 'classnames'

import { DashboardSidebar } from './Sidebar'

export const DashboardOrders: React.FC = () => {
  return (
    <div className="lk-content">
      <DashboardSidebar />

      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Заказы<span className="count-text title-def__count">27</span>
            <div className="lk-top-info__btn btn-modal" data-modal="#modal-settings">
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.78827 3.03194C9.94119 3.20169 10.1281 3.33741 10.3368 3.43032C10.5455 3.52322 10.7715 3.57122 10.9999 3.57122C11.2284 3.57122 11.4543 3.52322 11.6631 3.43032C11.8718 3.33741 12.0587 3.20169 12.2116 3.03194L12.9999 2.16694C13.2259 1.91689 13.5237 1.74289 13.8524 1.66882C14.1812 1.59476 14.5248 1.62425 14.8361 1.75326C15.1475 1.88226 15.4113 2.10446 15.5913 2.38935C15.7713 2.67425 15.8587 3.00787 15.8416 3.34444L15.7824 4.51111C15.771 4.7387 15.8073 4.96616 15.8892 5.17884C15.971 5.39153 16.0964 5.58472 16.2574 5.74597C16.4184 5.90722 16.6115 6.03295 16.824 6.11508C17.0366 6.1972 17.264 6.23389 17.4916 6.22277L18.6583 6.16361C18.9946 6.14702 19.3279 6.23487 19.6123 6.4151C19.8968 6.59533 20.1186 6.85912 20.2473 7.17033C20.3759 7.48153 20.4052 7.82492 20.3311 8.15342C20.257 8.48193 20.0831 8.77947 19.8333 9.00527L18.9649 9.78861C18.7954 9.94174 18.6599 10.1287 18.5671 10.3375C18.4743 10.5463 18.4264 10.7722 18.4264 11.0007C18.4264 11.2292 18.4743 11.4551 18.5671 11.6639C18.6599 11.8726 18.7954 12.0596 18.9649 12.2128L19.8333 12.9961C20.0833 13.222 20.2573 13.5198 20.3314 13.8486C20.4054 14.1774 20.376 14.521 20.2469 14.8323C20.1179 15.1437 19.8957 15.4074 19.6109 15.5875C19.326 15.7675 18.9923 15.8549 18.6558 15.8378L17.4891 15.7786C17.261 15.7669 17.033 15.8032 16.8198 15.8851C16.6066 15.9671 16.413 16.0929 16.2515 16.2544C16.09 16.4159 15.9642 16.6095 15.8823 16.8226C15.8003 17.0358 15.764 17.2638 15.7758 17.4919L15.8349 18.6586C15.8499 18.9935 15.7613 19.3248 15.5814 19.6076C15.4014 19.8905 15.1388 20.111 14.8291 20.2394C14.5194 20.3677 14.1778 20.3976 13.8505 20.325C13.5233 20.2524 13.2263 20.0809 12.9999 19.8336L12.2158 18.9661C12.0627 18.7966 11.8758 18.6611 11.6671 18.5683C11.4583 18.4756 11.2325 18.4276 11.0041 18.4276C10.7757 18.4276 10.5499 18.4756 10.3411 18.5683C10.1324 18.6611 9.94549 18.7966 9.79243 18.9661L9.00493 19.8336C8.77894 20.082 8.48184 20.2547 8.15414 20.3281C7.82643 20.4015 7.48407 20.372 7.17372 20.2437C6.86337 20.1154 6.60014 19.8945 6.41991 19.6112C6.23968 19.3278 6.15122 18.9957 6.1666 18.6603L6.2266 17.4936C6.23833 17.2655 6.20205 17.0375 6.1201 16.8243C6.03814 16.6111 5.91235 16.4175 5.75085 16.256C5.58935 16.0945 5.39574 15.9687 5.18256 15.8868C4.96937 15.8048 4.74136 15.7685 4.51327 15.7803L3.3466 15.8394C3.01017 15.857 2.67655 15.77 2.39155 15.5904C2.10654 15.4107 1.88413 15.1473 1.75483 14.8362C1.62554 14.5251 1.59571 14.1816 1.66944 13.8529C1.74316 13.5242 1.91683 13.2263 2.1666 13.0003L3.0341 12.2169C3.20364 12.0638 3.33917 11.8768 3.43192 11.668C3.52468 11.4592 3.57261 11.2333 3.57261 11.0049C3.57261 10.7764 3.52468 10.5505 3.43192 10.3417C3.33917 10.1329 3.20364 9.94591 3.0341 9.79277L2.1666 9.00527C1.91764 8.77944 1.7445 8.48223 1.67085 8.15428C1.5972 7.82632 1.62663 7.48362 1.75512 7.17302C1.88361 6.86242 2.10488 6.59908 2.3887 6.419C2.67252 6.23893 3.00502 6.15089 3.34077 6.16694L4.50743 6.22611C4.73596 6.23812 4.96445 6.20193 5.17808 6.11989C5.39171 6.03785 5.58569 5.91179 5.74742 5.74989C5.90916 5.588 6.03503 5.3939 6.11687 5.18019C6.1987 4.96648 6.23467 4.73795 6.22243 4.50944L6.1666 3.34194C6.15085 3.00633 6.23904 2.67403 6.41914 2.39039C6.59923 2.10675 6.86245 1.88559 7.17288 1.75708C7.48331 1.62856 7.82584 1.59896 8.15372 1.67232C8.48159 1.74567 8.77885 1.9184 9.00493 2.16694L9.78827 3.03194Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M11 14.751C13.0711 14.751 14.75 13.072 14.75 11.001C14.75 8.92991 13.0711 7.25098 11 7.25098C8.92893 7.25098 7.25 8.92991 7.25 11.001C7.25 13.072 8.92893 14.751 11 14.751Z"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
          <label className="lk-top-info__el checkbox-el">
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
            <span className="checkbox-el__text">AFK</span>
          </label>
          <label className="lk-top-info__el checkbox-el">
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
            <span className="checkbox-el__text">В работе</span>
          </label>
          <label className="lk-top-info__el checkbox-el">
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
            <span className="checkbox-el__text">Проблемные</span>
          </label>
        </div>
        <div className="lk-top-acts">
          <div className="lk-top-acts__content">
            <div className="lk-top-acts__left">
              <ul className="tabs-def lk-top-acts__tabs">
                <li className="tabs-def__el active">
                  Все
                  <div className="tabs-def__point"></div>
                </li>
                <li className="tabs-def__el">
                  С истекающим временем
                  <div className="tabs-def__point"></div>
                </li>
              </ul>
              <div className="lk-top-acts__select select-def">
                <div className="select-def__top">
                  <div className="select-def__val select-def__text">Все темы</div>
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
            <div className="lk-top-acts__right">
              <div className="block-select">
                <div className="block-select__title">Напоминать за</div>
                <div className="select-def select-def_2">
                  <div className="select-def__top">
                    <div className="select-def__val select-def__text">15 мин</div>
                    <svg
                      className="select-def__arr"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="20" height="20" rx="10" fill="#191B22" />
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
          </div>
        </div>
        <div className="block-content">
          <div className="block-content__el">
            <div className="order-el content-el">
              <div className="order-el__content">
                <div className="order-el__block order-el__block_1">
                  <div className="content-info">
                    <div className="content-info__title">
                      kajzlcbout kajzlcboutk ajzlcbout
                      <svg
                        width="17"
                        height="14"
                        viewBox="0 0 17 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M1.16397 6.03809C5.72643 4.06858 8.76373 2.7599 10.2889 2.12499C14.6298 0.323932 15.5422 0.0129573 16.1289 0C16.2592 0 16.546 0.0259147 16.7415 0.181402C16.898 0.310975 16.9371 0.479419 16.9631 0.608992C16.9892 0.738565 17.0153 1.01067 16.9892 1.21798C16.7546 3.67986 15.7378 9.65316 15.2164 12.4001C14.9948 13.5663 14.5646 13.955 14.1474 13.9938C13.2349 14.0716 12.5441 13.3978 11.6707 12.8277C10.2889 11.9336 9.5198 11.3765 8.17713 10.4954C6.62589 9.48472 7.62963 8.92756 8.51605 8.02055C8.75069 7.78732 12.7526 4.15928 12.8308 3.83535C12.8439 3.79648 12.8439 3.64099 12.7526 3.56325C12.6614 3.4855 12.531 3.51142 12.4267 3.53733C12.2833 3.56325 10.0934 5.01446 5.83072 7.87802C5.20501 8.30561 4.64448 8.51292 4.13609 8.49997C3.57556 8.48701 2.50664 8.18899 1.69843 7.92984C0.720757 7.61887 -0.0613799 7.45043 0.0037982 6.90622C0.042905 6.62116 0.433973 6.3361 1.16397 6.03809Z"
                          fill="#1F75EA"
                        />
                      </svg>
                    </div>
                    <div className="content-info__date">30 февраля 2023 в 15:43</div>
                  </div>
                </div>
                <div className="order-el__block order-el__block_2">
                  <div className="content-name">
                    <span className="content-name__title">
                      Человек-паук из Эпицентра Человек-паук из Эпицентра
                    </span>
                    <span className="content-name__mob">,</span>
                    <span className="content-name__text">PlayStation</span>
                  </div>
                </div>
                <div className="order-el__block order-el__block_3">
                  <div className="content-user">
                    <img className="content-user__img" src="../img/pr.png" alt="" />
                    <div className="content-user__body">
                      <div className="content-user__title">
                        В проблемных у Harold В проблемных у Harold
                      </div>
                      <div className="content-user__text">1 день 12:13:44</div>
                    </div>
                  </div>
                </div>
                <div className="order-el__block order-el__block_4">
                  <div className="content-btns">
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.49994 20.375L5.19994 17.7833C5.08667 17.6564 4.99952 17.5084 4.94346 17.3478C4.88739 17.1871 4.86352 17.017 4.87319 16.8472C4.88286 16.6773 4.9259 16.511 4.99983 16.3578C5.07377 16.2046 5.17716 16.0674 5.30411 15.9542C5.43105 15.8409 5.57906 15.7537 5.73969 15.6977C5.90031 15.6416 6.07041 15.6177 6.24026 15.6274C6.41012 15.6371 6.5764 15.6801 6.72962 15.7541C6.88285 15.828 7.02001 15.9314 7.13327 16.0583L8.74994 17.875V10.375C8.74994 10.0435 8.88163 9.72554 9.11606 9.49112C9.35048 9.2567 9.66842 9.125 9.99994 9.125C10.3315 9.125 10.6494 9.2567 10.8838 9.49112C11.1182 9.72554 11.2499 10.0435 11.2499 10.375V16H12.4999C12.9927 15.9989 13.4808 16.0951 13.9363 16.2832C14.3918 16.4713 14.8056 16.7475 15.154 17.0959C15.5025 17.4443 15.7787 17.8582 15.9667 18.3136C16.1548 18.7691 16.251 19.2572 16.2499 19.75V20.375"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M14.375 12.3081C15.2616 11.4391 15.8693 10.3257 16.1206 9.10998C16.3719 7.89423 16.2555 6.63118 15.7861 5.48186C15.3168 4.33254 14.5158 3.34903 13.4853 2.65674C12.4548 1.96444 11.2415 1.59473 10 1.59473C8.75855 1.59473 7.54521 1.96444 6.51471 2.65674C5.4842 3.34903 4.68321 4.33254 4.21387 5.48186C3.74452 6.63118 3.62809 7.89423 3.87941 9.10998C4.13073 10.3257 4.73843 11.4391 5.625 12.3081"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="btn-def__text">45</span>
                    </div>
                    <div className="content-btns__btn btn-def btn-def_red">
                      <svg
                        className="btn-def__icon"
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 15.375C10.8274 15.375 10.6875 15.2351 10.6875 15.0625C10.6875 14.8899 10.8274 14.75 11 14.75"
                          stroke="#C1352C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M11 15.375C11.1726 15.375 11.3125 15.2351 11.3125 15.0625C11.3125 14.8899 11.1726 14.75 11 14.75"
                          stroke="#C1352C"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M11 12.25V6"
                          stroke="#C1352C"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M2.06663 12.0676C1.78384 11.7844 1.625 11.4007 1.625 11.0005C1.625 10.6004 1.78384 10.2165 2.06663 9.93344L9.93325 2.06759C10.0733 1.92729 10.2395 1.81598 10.4225 1.74004C10.6056 1.66409 10.8018 1.625 10.9999 1.625C11.1981 1.625 11.3943 1.66409 11.5774 1.74004C11.7604 1.81598 11.9267 1.92729 12.0666 2.06759L19.9333 9.93344C20.2161 10.2165 20.3749 10.6004 20.3749 11.0005C20.3749 11.4007 20.2161 11.7844 19.9333 12.0676L12.0666 19.9334C11.7837 20.2162 11.4 20.3749 10.9999 20.3749C10.5999 20.3749 10.2163 20.2162 9.93325 19.9334L2.06663 12.0676Z"
                          stroke="#C1352C"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="btn-def__text">9</span>
                    </div>
                    <div
                      className="content-btns__btn btn-count btn-modal"
                      data-modal="#modal-history"
                    >
                      <div className="btn-count__left">История</div>
                      <div className="btn-count__right">27</div>
                    </div>
                  </div>
                </div>
                <div className="order-el__block order-el__block_5">
                  <div className="content-descrp">
                    <div className="content-descrp__top">
                      <span className="content-descrp__title">
                        Cooldown Cooldown Cooldown Cooldown{' '}
                      </span>
                      <span className="content-descrp__val">1 день 14 минут</span>
                    </div>
                    <div className="content-descrp__text">
                      <span className="content-descrp__title">Ожидает </span>
                      <span className="content-descrp__val">3 дня 14:55:13</span>
                    </div>
                  </div>
                </div>
                <div className="order-el__block order-el__block_6">
                  <div className="btn-count btn-modal" data-modal="#modal-postpone">
                    <div className="btn-count__left">Отложить</div>
                    <div className="btn-count__right">12</div>
                  </div>
                  <div className="order-el__btnmob btn-count btn-modal" data-modal="#modal-history">
                    <div className="btn-count__left">История</div>
                    <div className="btn-count__right">27</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
