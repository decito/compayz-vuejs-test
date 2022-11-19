<script lang="ts">
import { defineComponent } from 'vue'
import { ActivePlans } from '~/types';

export default defineComponent({
  name: 'PlanContainer',

  props: {
    planData: {
      type: Object as () => ActivePlans,
      default: () => ({
        id: 0,
        seqno: 0,
        name: "error"
      }),
      required: true
    }
  }
})
</script>

<template>
  <div>
    <section class="d-flex justify-content-between gap-4">
      <p>{{ planData.name }}</p>

      <p class="p-value">1</p>
    </section>

    <section class="d-flex justify-content-between gap-4">
      <div>
        <p>Domínios</p>

        <p>Adicionar pacotes avulsos</p>
      </div>

      <div class="text-center">
        <p>3</p>

        <div>slider</div>
      </div>
    </section>
  </div>
</template>