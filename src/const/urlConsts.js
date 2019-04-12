import { completePrefix } from './../utils/endConf.js'
/* eslint-disable */
// console.log('@@endConf'+JSON.stringify(endConf))
// const completePrefix = endConf.completePrefix
// const WeaponConfig = endConf.weapon
// const fileURI = endConf.weapon.httpURI.fileURI
// const baseDataURI = endConf.weapon.httpURI.baseDataURI

export const fileSystemUrl = (url, defaultUrl) => {
  // return url ? completePrefix(fileURI, url) : defaultUrl
}

export const BasicUrl = {
  /* 基础数据接口url */
  multiUpload: completePrefix('/file', 'basic/batchupload/'),
  queryAllEquipUrl: completePrefix('/', 'sup/query-full-equipments/{type}'),
  registerUrl: completePrefix('/', 'login/register'), /* 注册 */
  loginUrl: completePrefix('/', 'login/login'), /* 登录 */
}
