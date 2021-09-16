<template>
  <div class="app-wrapper">
    <div class="app">
      <navigaton />
      <router-view />
      <Footer />
    </div>
  </div>
</template>
<script>
import Footer from '../components/Footer.vue'
import Navigaton from '../components/Navigaton.vue'
export default {
  components: {
    Footer,
    Navigaton
  }
}
</script>
