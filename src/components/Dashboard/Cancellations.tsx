import cns from 'classnames'

import { DashboardSidebar } from './Sidebar'

export const DashboardCancellations: React.FC = () => {
  return (
    <div className="lk-content">
      <DashboardSidebar />
      <div className="lk-content__content">
        <div className="lk-top-info">
          <div className="lk-content__title title-def lk-top-info__el">
            Отмены<span className="count-text title-def__count title-def__count_mob">27</span>
          </div>
        </div>
        <div className="block-content">
          <div className="block-content__el">
            <div className="content-el cancel-el">
              <div className="cancel-el__content">
                <div className="cancel-el__block cancel-el__block_1">
                  <div className="content-info cancel-el__info">
                    <div className="content-info__title">kajzlcbout</div>
                    <div className="content-info__date">30 февраля 2023 в 15:43</div>
                  </div>
                  <div className="content-name">
                    <span className="content-name__title">Человек-паук из Эпицентра</span>
                    <span className="content-name__mob">,</span>
                    <span className="content-name__text">PlayStation</span>
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_2">
                  <div className="cancel-el__userinfo">
                    <div className="content-user">
                      <img className="content-user__img" src="../img/pr.png" alt="" />
                      <div className="content-user__body">
                        <div className="content-user__title">Светлана</div>
                        <div className="content-user__text">Команда Harold</div>
                      </div>
                    </div>
                    <div className="content-descrp-2">
                      <div className="content-descrp-2__title">Был в работе</div>
                      <div className="content-descrp-2__text">1 день 14 минут</div>
                    </div>
                  </div>
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
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.73 13.15C10.026 13.15 11.16 12.016 11.16 10.72C11.16 9.42404 10.026 8.29004 8.73 8.29004C7.434 8.29004 6.3 9.42404 6.3 10.72C6.3 12.016 7.272 13.15 8.73 13.15Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.72995 8.29V1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4955 12.4395L14.4 15.5797"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="btn-def__text">45</span>
                    </div>
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 15.375C10.3274 15.375 10.1875 15.2351 10.1875 15.0625C10.1875 14.8899 10.3274 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 15.375C10.6726 15.375 10.8125 15.2351 10.8125 15.0625C10.8125 14.8899 10.6726 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 12.25V6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.56663 12.0676C1.28384 11.7844 1.125 11.4007 1.125 11.0005C1.125 10.6004 1.28384 10.2165 1.56663 9.93344L9.43325 2.06759C9.57325 1.92729 9.7395 1.81598 9.9225 1.74004C10.1056 1.66409 10.3018 1.625 10.4999 1.625C10.6981 1.625 10.8943 1.66409 11.0774 1.74004C11.2604 1.81598 11.4267 1.92729 11.5666 2.06759L19.4333 9.93344C19.7161 10.2165 19.8749 10.6004 19.8749 11.0005C19.8749 11.4007 19.7161 11.7844 19.4333 12.0676L11.5666 19.9334C11.2837 20.2162 10.9 20.3749 10.4999 20.3749C10.0999 20.3749 9.71625 20.2162 9.43325 19.9334L1.56663 12.0676Z"
                          stroke="white"
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
                <div className="cancel-el__block cancel-el__block_3">
                  <div className="cancel-el__text text-def">
                    Забанил бота, родительский контроль (который мы снять не можем), заблокирован
                    Epic/PS, клиент уже перепривязывал Xbox и не имеет доступа к новым, случайно
                    заказал, заказал второй набор, невозможность выполнить заказ сегодня (у клиента
                    там привязаны левые почты, телефоны к которым нету доступа)
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_4">
                  <button
                    className="cancel-el__btnmob btn-count btn-modal"
                    data-modal="#modal-history"
                  >
                    <div className="btn-count__left">История</div>
                    <div className="btn-count__right">27</div>
                  </button>
                  <button className="btn-def cancel-el__btn btn-modal" data-modal="#modal-confirm">
                    <span className="btn-def__text">Подтвердить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-content__el">
            <div className="content-el cancel-el">
              <div className="cancel-el__content">
                <div className="cancel-el__block cancel-el__block_1">
                  <div className="content-info cancel-el__info">
                    <div className="content-info__title">kajzlcbout</div>
                    <div className="content-info__date">30 февраля 2023 в 15:43</div>
                  </div>
                  <div className="content-name">
                    <span className="content-name__title">Человек-паук из Эпицентра</span>
                    <span className="content-name__mob">,</span>
                    <span className="content-name__text">PlayStation</span>
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_2">
                  <div className="cancel-el__userinfo">
                    <div className="content-user">
                      <img className="content-user__img" src="../img/pr.png" alt="" />
                      <div className="content-user__body">
                        <div className="content-user__title">Светлана</div>
                        <div className="content-user__text">Команда Harold</div>
                      </div>
                    </div>
                    <div className="content-descrp-2">
                      <div className="content-descrp-2__title">Был в работе</div>
                      <div className="content-descrp-2__text">1 день 14 минут</div>
                    </div>
                  </div>
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
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.73 13.15C10.026 13.15 11.16 12.016 11.16 10.72C11.16 9.42404 10.026 8.29004 8.73 8.29004C7.434 8.29004 6.3 9.42404 6.3 10.72C6.3 12.016 7.272 13.15 8.73 13.15Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.72995 8.29V1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4955 12.4395L14.4 15.5797"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="btn-def__text">45</span>
                    </div>
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 15.375C10.3274 15.375 10.1875 15.2351 10.1875 15.0625C10.1875 14.8899 10.3274 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 15.375C10.6726 15.375 10.8125 15.2351 10.8125 15.0625C10.8125 14.8899 10.6726 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 12.25V6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.56663 12.0676C1.28384 11.7844 1.125 11.4007 1.125 11.0005C1.125 10.6004 1.28384 10.2165 1.56663 9.93344L9.43325 2.06759C9.57325 1.92729 9.7395 1.81598 9.9225 1.74004C10.1056 1.66409 10.3018 1.625 10.4999 1.625C10.6981 1.625 10.8943 1.66409 11.0774 1.74004C11.2604 1.81598 11.4267 1.92729 11.5666 2.06759L19.4333 9.93344C19.7161 10.2165 19.8749 10.6004 19.8749 11.0005C19.8749 11.4007 19.7161 11.7844 19.4333 12.0676L11.5666 19.9334C11.2837 20.2162 10.9 20.3749 10.4999 20.3749C10.0999 20.3749 9.71625 20.2162 9.43325 19.9334L1.56663 12.0676Z"
                          stroke="white"
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
                <div className="cancel-el__block cancel-el__block_3">
                  <div className="cancel-el__text text-def">
                    Утерян доступ к почте, обновляются сведения для защиты, снова оформит заказ как
                    только они обновятся. Играет на xbox, привязка другого аккаунта к Эпику
                    невозможна, возврат
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_4">
                  <button
                    className="cancel-el__btnmob btn-count btn-modal"
                    data-modal="#modal-history"
                  >
                    <div className="btn-count__left">История</div>
                    <div className="btn-count__right">27</div>
                  </button>
                  <button className="btn-def cancel-el__btn btn-modal" data-modal="#modal-confirm">
                    <span className="btn-def__text">Подтвердить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="block-content__el">
            <div className="content-el cancel-el">
              <div className="cancel-el__content">
                <div className="cancel-el__block cancel-el__block_1">
                  <div className="content-info cancel-el__info">
                    <div className="content-info__title">kajzlcbout</div>
                    <div className="content-info__date">30 февраля 2023 в 15:43</div>
                  </div>
                  <div className="content-name">
                    <span className="content-name__title">Человек-паук из Эпицентра</span>
                    <span className="content-name__mob">,</span>
                    <span className="content-name__text">PlayStation</span>
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_2">
                  <div className="cancel-el__userinfo">
                    <div className="content-user">
                      <img className="content-user__img" src="../img/pr.png" alt="" />
                      <div className="content-user__body">
                        <div className="content-user__title">Светлана</div>
                        <div className="content-user__text">Команда Harold</div>
                      </div>
                    </div>
                    <div className="content-descrp-2">
                      <div className="content-descrp-2__title">Был в работе</div>
                      <div className="content-descrp-2__text">1 день 14 минут</div>
                    </div>
                  </div>
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
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="18"
                        height="19"
                        viewBox="0 0 18 19"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.73 13.15C10.026 13.15 11.16 12.016 11.16 10.72C11.16 9.42404 10.026 8.29004 8.73 8.29004C7.434 8.29004 6.3 9.42404 6.3 10.72C6.3 12.016 7.272 13.15 8.73 13.15Z"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8.72995 8.29V1"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10.4955 12.4395L14.4 15.5797"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="btn-def__text">45</span>
                    </div>
                    <div className="content-btns__btn btn-def">
                      <svg
                        className="btn-def__icon"
                        width="21"
                        height="22"
                        viewBox="0 0 21 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.5 15.375C10.3274 15.375 10.1875 15.2351 10.1875 15.0625C10.1875 14.8899 10.3274 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 15.375C10.6726 15.375 10.8125 15.2351 10.8125 15.0625C10.8125 14.8899 10.6726 14.75 10.5 14.75"
                          stroke="white"
                          strokeWidth="1.5"
                        />
                        <path
                          d="M10.5 12.25V6"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                        />
                        <path
                          d="M1.56663 12.0676C1.28384 11.7844 1.125 11.4007 1.125 11.0005C1.125 10.6004 1.28384 10.2165 1.56663 9.93344L9.43325 2.06759C9.57325 1.92729 9.7395 1.81598 9.9225 1.74004C10.1056 1.66409 10.3018 1.625 10.4999 1.625C10.6981 1.625 10.8943 1.66409 11.0774 1.74004C11.2604 1.81598 11.4267 1.92729 11.5666 2.06759L19.4333 9.93344C19.7161 10.2165 19.8749 10.6004 19.8749 11.0005C19.8749 11.4007 19.7161 11.7844 19.4333 12.0676L11.5666 19.9334C11.2837 20.2162 10.9 20.3749 10.4999 20.3749C10.0999 20.3749 9.71625 20.2162 9.43325 19.9334L1.56663 12.0676Z"
                          stroke="white"
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
                <div className="cancel-el__block cancel-el__block_3">
                  <div className="cancel-el__text text-def">
                    Забанил бота, родительский контроль (который мы снять не можем), заблокирован
                    Epic/PS, клиент уже перепривязывал Xbox и не имеет доступа к новым, случайно
                    заказал, заказал второй набор, невозможность выполнить заказ сегодня (у клиента
                    там привязаны левые почты, телефоны к которым нету доступа)
                  </div>
                </div>
                <div className="cancel-el__block cancel-el__block_4">
                  <button
                    className="cancel-el__btnmob btn-count btn-modal"
                    data-modal="#modal-history"
                  >
                    <div className="btn-count__left">История</div>
                    <div className="btn-count__right">27</div>
                  </button>
                  <button className="btn-def cancel-el__btn btn-modal" data-modal="#modal-confirm">
                    <span className="btn-def__text">Подтвердить</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
