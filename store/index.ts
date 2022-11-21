import Vuex from 'vuex'

import plan1 from "~/data/plan1.json"
import plan2 from "~/data/plan2.json"

const createStore = () => {
  return new Vuex.Store({
    state: () => ({
      plan: plan1.data.planInfo,
    }),

    getters: {
      getPlan(state) {
        return state.plan
      }
    },

    mutations: {
      togglePlan(state, payload) {
        if (payload === 0) {
          state.plan = plan1.data.planInfo
          return
        }

        if (payload === 1) {
          state.plan = plan2.data.planInfo
        }
      }
    }
  })
}

export default createStore
