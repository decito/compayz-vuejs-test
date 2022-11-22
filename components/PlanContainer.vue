<script lang="ts">
import { defineComponent } from 'vue'

import { mapGetters } from 'vuex';

export default defineComponent({
  name: 'PlanContainer',

  computed: {
    ...mapGetters({ plan: 'getPlan' })
  },

  methods: {
    sliderHelper($event: any) {
      // this.$store.commit('togglePlan', $event.target.value - 1)
      console.log($event.target.value)
    }
  },

  mounted() {
    this.$store.commit('setCartTotal', 0)
  },

  updated() {
    this.$store.commit('setCartTotal', 0)
  }
})
</script>

<template>
  <div class="px-2">
    <section v-for="(planContent, index) in plan.contents" :key="index"
      class="d-flex justify-content-between gap-4 border-t border-secondary pt-2">
      <template v-if="planContent?.addOnId">
        <div class="d-flex flex-column">
          <p class="text-capitalize">{{ planContent.service.toLowerCase() }}</p>

          <p>Adicionar pacotes avulsos</p>
        </div>

        <div class="d-flex flex-column align-items-center">
          <p>{{ planContent.baseQuantity }}</p>

          <input type="range" :min="planContent.baseQuantity" :value="planContent.packageQuantity" step="1"
            :max="planContent.maxAddOnQuantity" @change="sliderHelper">
        </div>
      </template>

      <template v-else>
        <p class="text-capitalize">{{ planContent?.service.toLowerCase() }}</p>

        <p class="pr-4">{{ planContent?.baseQuantity }}</p>
      </template>
    </section>
  </div>
</template>