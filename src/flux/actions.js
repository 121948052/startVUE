import * as types from './types'

const type = types

const changeLeftNavState = function({commit},status) {
  commit(type.CHANGE_LEFTNAV_STATUS,status)
}

const actions = {
  changeLeftNavState,
  actionA: ({ commit }) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('someMutation')
        resolve()
      }, 1000)
    })
  },  
  async actionB ({ commit }, getData) {
    alert('进actionB')
    commit(type.CHANGE_LEFTNAV_STATUS,status, await getData())
    alert('执行了actionB的commit')
  },
  async actionC ({ dispatch, commit }, getOtherData) {
    await dispatch('actionA') // 等待 actionA 完成
    commit('gotOtherData', await getOtherData())
  }
}

export default actions