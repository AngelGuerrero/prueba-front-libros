<template>
  <div id="app" class="dev">
    <!-- XNavbar -->
    <div class="dev navbar">
      <XNavbar />
    </div>

    <!-- Main view -->
    <main class="dev main">
      <router-view />
    </main>

    <!-- Main footer -->
    <div class="dev footer">
      <XFooter />
    </div>
  </div>
</template>

<script>
import XNavbar from '@/components/shared/XNavbar'
import XFooter from '@/components/shared/XFooter'

export default {
  components: {
    XNavbar,
    XFooter
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_main.scss';
</style>
