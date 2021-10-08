<template>
  <div
    v-if="this.$store.state.ui.show"
    class="border-gray-600 border-solid p-3 rounded font-bold"
    :class="[this.$store.state.ui.error ? 'bg-red-600' : 'bg-green-600']"
  >
    <h3 class="font-bold m-0 p-0 text-white">
      {{ this.$store.state.ui.title }}
    </h3>
    <p class="text-white">
      {{ this.$store.state.ui.message }}
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: mapState(['ui']),

  watch: {
    ui: {
      deep: true,
      immediate: true,
      handler (val) {
        if (val.show) {
          this.hideNotification()
        }
      }
    }
  },

  created () {
    const hideNotification = () => this.hideNotification()

    setTimeout(() => hideNotification(), 2000)
  },

  methods: {
    hideNotification () {
      this.$store.commit('SET_MESSAGE', {
        show: false,
        title: '',
        message: '',
        error: false
      })
    }
  }
}
</script>
