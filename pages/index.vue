<script lang="ts">
import { defineComponent } from 'vue'
import PlanContainer from '~/components/PlanContainer.vue'
import plans from "~/data/plans.json";

export default defineComponent({
  name: 'IndexPage',

  components: {
    PlanContainer
  },

  data() {
    return {
      currentPlan: 1,
      plans: plans.data.activePlans
    }
  },

  methods: {
    togglePlan($event: any) {
      this.currentPlan = $event.target.value
    }
  }
})
</script>

<template>
  <main style="max-width: 1440px" class="mx-auto">
    <div class="p-2 d-flex flex-column gap-8">

      <head class="d-flex justify-content-between gap-2">
        <button v-for="plan in plans" :key="plan.id" class="outline-primary flex-grow-1" :value="plan.id"
          @click="togglePlan($event)">
          {{ plan.name }}
        </button>
      </head>

      <main class="d-flex justify-content-between gap-8">
        <div class="flex-grow-1">
          <p>O plano vai incluir</p>

          <PlanContainer :plan-data="plans[currentPlan - 1]" />
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
