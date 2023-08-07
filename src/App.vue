<template>
  <div class="imageWrapper">
    <div class="container">
      <NavComponent />
      <router-view />
      <FooterComponent />
    </div>
  </div>
</template>

<script>
import NavComponent from '@/components/nav/Nav.vue'
import FooterComponent from '@/components/footer/Footer.vue'

export default {
  name: 'DumpusLanding',
  components: {
    NavComponent,
    FooterComponent,
  }
}
</script>

<style>
@import url('@/assets/css/style.css');
</style>