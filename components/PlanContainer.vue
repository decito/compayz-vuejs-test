<script lang="ts">
import { defineComponent } from 'vue'
import { mapGetters } from 'vuex';
import { PlanContent } from '~/types';

export default defineComponent({
  name: 'PlanContainer',

  data() {
    return { showSliderNum: false, sliderNum: 0 }
  },

  computed: {
    ...mapGetters({ plan: 'getPlan' }),
  },

  methods: {
    updateRange($event: any, pContent: PlanContent) {
      const eventValue = Number($event.target.value)

      if (pContent.baseQuantity === eventValue) {
        this.showSliderNum = false
        return
      }

      this.showSliderNum = true
      this.sliderNum = eventValue

      const commitValue = this.plan.planBaseAmt * eventValue

      this.$store.commit('addToCart', commitValue)
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
      <template v-if="planContent?.addOnId && (planContent.maxAddOnQuantity > planContent.baseQuantity)">
        <div class="d-flex flex-column">
          <p class="text-capitalize">{{ planContent.service.toLowerCase() }}</p>

          <p>Adicionar pacotes avulsos</p>
        </div>

        <div class="d-flex flex-column align-items-center">
          <p>{{ planContent.baseQuantity }}</p>

          <input type="range" :min="planContent.baseQuantity" :max="planContent.maxAddOnQuantity"
            :value="planContent.packageQuantity" step="1" @change="updateRange($event, planContent)" />

          <p v-if="showSliderNum">+ {{ sliderNum }} inclusões</p>
        </div>
      </template>

      <template v-else>
        <p class="text-capitalize">{{ planContent?.service.toLowerCase() }}</p>

        <p class="p-value">{{ planContent?.baseQuantity }}</p>
      </template>
    </section>
  </div>
</template>