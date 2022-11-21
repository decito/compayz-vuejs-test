<script lang="ts">
import { defineComponent } from 'vue'
import PlanContainer from '~/components/PlanContainer.vue'
import plansData from "~/data/plans.json"

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
    }
  }
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

      <main class="d-flex justify-content-between gap-8">
        <div class="flex-grow-1">
          <p>O plano irá incluir</p>

          <PlanContainer />
        </div>

        <aside>
          <section>
            Sua Escolha
          </section>

          <section class="d-flex justify-content-between gap-4">
            <p>Plano 4D</p>
            <p>R$ 100,00</p>
          </section>

          <section class="d-flex justify-content-between gap-4">
            <p>TOTAL</p>
            <p>R$ 100,00</p>
          </section>

          <section>
            <button class="bg-primary">Assinar Plano</button>
          </section>
        </aside>
      </main>
    </div>
  </main>
</template>
