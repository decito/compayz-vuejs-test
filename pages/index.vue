<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex'
import PlanContainer from '~/components/PlanContainer.vue'
import plansData from "~/data/plans.json"
import { maskMoney } from '~/helpers'

export default defineComponent({
  name: 'IndexPage',

  components: {
    PlanContainer
  },

  data() {
    return {
      plans: plansData.data.activePlans
    }
  },

  methods: {
    togglePlan($event: any) {
      this.$store.commit('togglePlan', $event.target.value - 1)
    },

    maskMoney: maskMoney
  },

  computed: {
    ...mapGetters({ plan: 'getPlan', cartTotal: 'getCartTotal' })
  },
})
</script>

<template>
  <main style="max-width: 1440px" class="mx-auto">
    <div class="p-2 d-flex flex-column gap-8">

      <head class="d-flex justify-content-between gap-2">
        <button v-for="plan in plans" :key="plan.id" class="outline-primary flex-grow-1" :value="plan.id"
          @click.prevent.stop="togglePlan($event)">
          {{ plan.name }}
        </button>
      </head>

      <main class="d-flex justify-content-between gap-4">
        <div class="flex-grow-1 border border-secondary rounded p-2 max-w-75">
          <p>O plano irá incluir</p>

          <PlanContainer />
        </div>

        <aside class="flex-grow-1 border border-secondary rounded p-2 max-w-25">
          <section>
            Sua Escolha
          </section>

          <section class="d-flex justify-content-between gap-4">
            <p>{{ plan.name }}</p>
            <p>{{ maskMoney(plan.planBaseAmt) }}</p>
          </section>

          <section class="d-flex justify-content-between gap-4">
            <p>TOTAL</p>
            <p>{{ maskMoney(cartTotal) }}</p>
          </section>

          <section>
            <button class="bg-primary w-100">Assinar Plano</button>
          </section>
        </aside>
      </main>
    </div>
  </main>
</template>
