/**
 * 封装weapon
 * @param url
 * @param data
 * @returns endConf
 */

// const weapon = typeof window !== 'undefined' ? window.Weapon.config || {} : {}
// let baseURI = weapon.httpURI.baseURI
// let fileURI = weapon.httpURI.fileURI
// let UUrl = () => {
//   return weapon.httpURI.UUrl
// }

const completePrefix = (u, i) => {
  return u + i
}

const formatPageable = (pageable = { page: 1, pageSize: 20 }) => {
  return {
    page: pageable.page - 1,
    pageSize: pageable.pageSize
  }
}

export {
  // weapon,
  // baseURI,
  // fileURI,
  // UUrl,
  completePrefix,
  formatPageable
}
