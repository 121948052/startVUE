import Vue from 'vue';
import vueX from 'vuex';
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(vueX)

export default new vueX.Store({
  state,
  actions,
  getters,
  mutations
})