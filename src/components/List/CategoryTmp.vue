<template>
  <div class="category-tmp">
    <bread-crumb></bread-crumb>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BreadCrumb from "@/components/List/BreadCrumb"
  export default {
    name: "CategoryTmp",
    components: { BreadCrumb },
    computed: {
      ...mapState({
        tmpInfo: state => state.list.goodsInfo.templates
      })
    },
    created() {
    }
  }
</script>

<style lang="scss" scoped>

</style>