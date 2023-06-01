import { Middleware } from 'redux'
import { logAction } from '../metrics/logAction'

export const logActionMiddleware: Middleware = (storeAPI) => {
  return function wrapDispatch(next) {
    return function handleAction(action) {
      logAction(action)
      next(action)
    }
  }
}
