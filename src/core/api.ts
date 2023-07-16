/* eslint-disable no-console */
import Cookies from 'js-cookie'
import { FetchError, FetchOptions, ofetch } from 'ofetch'

import type { IError } from '@/core/interface'

interface IRequestOptions {
  method?: string
  body?: { [key: string]: any }
  headers?: { [key: string]: string }
  params?: { [key: string]: string }
}

interface IApiResult {
  data: any | null
  error: any | null
}

export const api = async (
  url: string,
  { method = 'GET', body, params, headers }: IRequestOptions,
): Promise<IApiResult> => {
  const authToken = Cookies.get('auth-ticketv2')

  try {
    const requestOptions = {
      method,
      headers: {
        'Content-Type': 'application/json' as string,
        Authorization: authToken && `Bearer ${authToken}`,
      },
      body,
      params,
    } as FetchOptions

    if (headers) {
      requestOptions.headers = {
        ...requestOptions.headers,
        ...headers,
      }
    }

    let requestUrl = `${import.meta.env.VITE_BACKEND_URL}${url}`
    if (url.startsWith('http')) {
      requestUrl = url
    }

    const DEV_perf_start = performance.now()
    const data = await ofetch(requestUrl, requestOptions)
    const DEV_perf_end = performance.now()

    console.log(`👌 fetch ${url} in ${(DEV_perf_end - DEV_perf_start).toFixed(2)} ms`, data)

    return { data, error: null }
  } catch (err: any) {
    let errMessage = err?.data?.message || err?.message || ''

    if (!errMessage) {
      switch (err?.status) {
        case 4:
          errMessage = 'Ошибка сервера'
          break
        case 5:
          errMessage = 'Ошибка авторизации'
          break
        case 500:
          errMessage = 'Ошибка сервера'
          break

        case 403:
          errMessage = 'Ошибка авторизации'
          break
      }
    }

    if (err?.status === 401) {
      Cookies.remove('auth-ticketv2')

      window && window.location.reload()
    }

    const error: IError = {
      code: err?.status || 500,
      message: errMessage,
      raw: err,
    }

    console.log(`❌ Request Error ${url}`, error)

    return { data: null, error }
  }
}
