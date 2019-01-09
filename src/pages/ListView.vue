<template>
  <div class="list-view">
    <div class="wide-wrap">
      <!-- <category-tmp></category-tmp> -->
      <bread-crumb></bread-crumb>
      <select-condition></select-condition>
      <product-control class="product-control"></product-control>
      <product-list></product-list>
      
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
  components: {  BreadCrumb,  SelectCondition, ProductControl, ProductList },
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
      let filterArr = this.$route.params.filterStr.split('-');    // 拆分 params 为数组
      filterArr.length !== 11 ? this.$router.push("/404") : '';   // 如果传入的数据不是 11 组，则跳转到 404 页面
      console.log(filterArr);
      this.$store.commit('setConfig', { key: "firstCategory", value: filterArr[0] });
      this.$store.commit('setConfig', { key: "secondCategory", value: filterArr[1] });
      this.$store.commit('setConfig', { key: "thirdCategory", value: filterArr[2] });
      this.$store.commit('setConfig', { key: "brandId", value: filterArr[3] });
      this.$store.commit('setConfig', { key: "orderType", value: filterArr[4] });
      this.$store.commit('setConfig', { key: "pageNo", value: filterArr[5] });
      this.$store.commit('setConfig', { key: "pageSize", value: filterArr[6] });
      this.$store.commit('setConfig', { key: "price", value: filterArr[7] });
      this.$store.commit('setConfig', { key: "prop", value: filterArr[8] });
      this.$store.commit('setConfig', { key: "whereHouse", value: filterArr[9] });
      this.$store.commit('setConfig', { key: "source", value: filterArr[10] });
    },
    getGoodsData() {
      this.$store.dispatch('getGoodsData')
    }
  },
  created() {
    this.setConfig()
    this.getGoodsData()
  }
}
</script>

<style lang="scss" scoped>
.list-view {
  background: #EDEDED;
  // padding-top: 25px;

  .product-control {
    margin-top: 30px;
  }
}

</style>