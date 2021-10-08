<template>
  <XContainer
    v-show="ui.show"
    class="m-3 border-solid border-4 p-3 rounded font-bold shadow-lg"
    :class="[ui.error ? 'bg-red-200 border-red-600' : 'bg-green-200 border-green-600']"
  >
    <h3
      class="text-2xl font-bold m-0 p-0 text-white"
      :class="[ui.error ? 'text-red-800' : 'text-green-800']"
    >
      {{ ui.title }}
    </h3>
    <p :class="[ui.error ? 'text-red-900' : 'text-green-900']">
      {{ ui.message }}
    </p>
  </XContainer>
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
        if (val.show && val.hideOnTimeOut) {
          setTimeout(() => this.hideNotification(), 6000)
        }
      }
    }
  },

  methods: {
    hideNotification () {
      this.$store.dispatch('hideNotificationAction')
    }
  }
}
</script>
