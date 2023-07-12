import cns from 'classnames'

export const DashboardStatChart: React.FC = () => {
  return (
    <div className="lk-content__content">
      <div className="stat-top-info">
        <div className="stat-top-info__acts">
          <a className="stat-top-info__prev prev-btn" href="#">
            <svg
              width="10"
              height="18"
              viewBox="0 0 10 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.95898 17L0.986646 9L8.95899 1"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <div className="stat-top-info__title">Статистика оператора</div>
          <button
            className="stat-top-info__btn btn-def-icon btn-modal"
            data-modal="#modal-stat-mob"
          >
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
          </button>
        </div>
        <div className="stat-top-info__user content-user-2">
          <img className="content-user-2__img" src="../img/pr.png" alt="" />
          <div className="content-user-2__name">Жора</div>
          <div className="content-user-2__info">3302468557</div>
        </div>
        <div className="stat-top-info__info">
          <div className="stat-top-info__info-mob info-descrp">
            <div className="info-descrp__title">Номер</div>
            <div className="info-descrp__text">3302468557</div>
          </div>
          <div className="stat-top-info__info-block content-user-3">
            <div className="content-user-3__text">
              Закреплен <span>за менеджером</span>
            </div>
            <div className="content-user-3__user">
              <img className="content-user-3__img" src="../img/pr.png" alt="" />
              <div className="content-user-3__name">Светлана</div>
            </div>
          </div>
        </div>
      </div>
      <div className="lk-top-acts">
        <div className="lk-top-acts__content">
          <div className="lk-top-acts__left">
            <ul className="tabs-def lk-top-acts__tabs">
              <li className="tabs-def__el active">Эффективность</li>
              <li className="tabs-def__el">Игры</li>
              <li className="tabs-def__el">Дополнительно</li>
            </ul>
            <div className="lk-top-acts__select select-def select-def_3">
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
          <div className="lk-top-acts__right"></div>
        </div>
      </div>
      <div className="sec-chart">
        <div className="sec-chart__wrap">
          <div className="sec-chart__content">
            <div className="sec-chart__left">
              <div className="block-chart">
                <canvas className="block-chart__chart" id="myChart"></canvas>
              </div>
            </div>
            <div className="sec-chart__right">
              <div className="block-checkboxes-2">
                <div className="block-checkboxes-2__el">
                  <label className="checkbox-el-3" data-style="--color: #f5d48b">
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
                  <label className="checkbox-el-3" data-style="--color: #683cc3">
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
                  <label className="checkbox-el-3" data-style="--color: #40eae5">
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
                  <label className="checkbox-el-3" data-style="--color: #11c471">
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
        </div>
      </div>
    </div>
  )
}
