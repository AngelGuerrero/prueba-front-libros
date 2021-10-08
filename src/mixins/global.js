export default {
  methods: {
    $notify (error, title, message, hideOnTimeOut = true) {
      this.$store.dispatch('showNotificationAction', {
        error,
        title,
        message,
        hideOnTimeOut
      })
    },

    $clearNotify () {
      this.$store.dispatch('hideNotificationAction')
    }
  }
}
