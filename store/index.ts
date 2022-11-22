import { Store } from 'vuex'

import plan1 from "~/data/plan1.json"
import plan2 from "~/data/plan2.json"

const createStore = () => {
  return new Store({
    state: () => ({
      plan: plan1.data.planInfo,
      cartTotal: 0,
    }),

    getters: {
      getPlan(state) {
        return state.plan
      },

      getCartTotal(state) {
        return state.cartTotal
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
      },

      setCartTotal(state, payload?) {
        state.cartTotal = state.plan.planBaseAmt + payload
      },

      addToCart(state, payload) {
        state.cartTotal += payload
      }
    }
  })
}

export default createStore
