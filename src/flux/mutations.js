import * as types from './types'

const mutations = {
  [types.CHANGE_LEFTNAV_STATUS](state,status){
      state.leftNavState = status
  },
  someMutation (state) {
    state.count++
  }
}

export default mutations