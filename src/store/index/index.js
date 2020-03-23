import Vue from 'vue'
import Vuex from 'vuex'

import index from '../store/index'
Vue.use(Vuex)

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      index
    },
    strict: process.env.DEV
  })
  return Store
}
