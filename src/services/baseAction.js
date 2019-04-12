import { post, fetch, patch, put } from '../utils/http'
import { BasicUrl } from '../const/urlConsts'

export const registerAction = (params) => {
  return fetch(BasicUrl.registerUrl, params)
}