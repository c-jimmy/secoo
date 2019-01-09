<template>
  <div class="pages-view">
    <header-bar></header-bar>
    <router-view></router-view>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
import HeaderBar from '@/components/Common/HeaderBar'
import FooterBar from '@/components/Common/FooterBar'
export default {
  name: 'PagesView',
  components: { HeaderBar, FooterBar },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
</style>