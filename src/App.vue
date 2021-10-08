<template>
  <div id="app" class="dev">
    <!-- XNavbar -->
    <div class="dev navbar">
      <XNavbar />
    </div>

    <!-- Main view -->
    <main class="dev main">
      <XNotification />
      <router-view />
    </main>

    <!-- Main footer -->
    <div class="dev footer">
      <XFooter />
    </div>
  </div>
</template>

<script>
import XNotification from '@/components/notification/XNotification'
import XNavbar from '@/components/shared/XNavbar'
import XFooter from '@/components/shared/XFooter'

export default {
  components: {
    XNavbar,
    XFooter,
    XNotification
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_main.scss";
</style>
