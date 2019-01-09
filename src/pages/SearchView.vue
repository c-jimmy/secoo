<template>
  <div class="search-view">
    <div class="wide-wrap">
      <bread-crumb mode="search"></bread-crumb>
      <select-condition mode="search"></select-condition>
      <product-control mode="search" class="product-control"></product-control>
      <product-list mode="search"></product-list>
      
    </div>

  </div>
</template>

<script>
import { mapState } from 'vuex'

import BreadCrumb from "@/components/List/BreadCrumb"
// import CategoryTmp from "@/components/List/CategoryTmp"
import SelectCondition from "@/components/List/SelectCondition"
import ProductControl from "@/components/List/ProductControl"
import ProductList from "@/components/List/ProductList"
export default {
  name: 'ListView',
  components: {  BreadCrumb, SelectCondition, ProductControl, ProductList },
  data() {
    return {}
  },
  computed: {
    ...mapState({
      config: state => state.list.config,
      goodsInfo: state => state.list.goodsInfo
    })
  },
  methods: {
    setConfig() {
      console.log(this.$route.query)
      const urlQuery = this.$route.query
      // let filterArr = this.$route.params.filterStr.split('-'); 
      // console.log(filterArr);
      this.$store.commit('setConfig', { key: "keyword", value: urlQuery.keyword || '' });
      this.$store.commit('setConfig', { key: "firstCategory", value: urlQuery.firstCategory || 0 });
      this.$store.commit('setConfig', { key: "secondCategory", value: urlQuery.secondCategory || 0 });
      this.$store.commit('setConfig', { key: "thirdCategory", value: urlQuery.thirdCategory || 0 });
      this.$store.commit('setConfig', { key: "brandId", value: urlQuery.brandId || 0 });
      this.$store.commit('setConfig', { key: "orderType", value: urlQuery.orderType || 1 });
      this.$store.commit('setConfig', { key: "pageNo", value: urlQuery.pageNo || 1 });
      this.$store.commit('setConfig', { key: "pageSize", value: urlQuery.pageSize || 40 });
      this.$store.commit('setConfig', { key: "price", value: urlQuery.price || 0 });
      this.$store.commit('setConfig', { key: "prop", value: urlQuery.prop || 0 });
      this.$store.commit('setConfig', { key: "whereHouse", value: urlQuery.whereHouse || 0 });
      this.$store.commit('setConfig', { key: "source", value: urlQuery.source || 0 });
    },
    getGoodsData() {
      this.$store.dispatch('getGoodsBySearch')
    }
  },
  created() {
    this.setConfig()
    this.getGoodsData()
  }
}
</script>

<style lang="scss" scoped>
.search-view {
  background: #EDEDED;

  .product-control {
    margin-top: 30px;
  }
}

</style>