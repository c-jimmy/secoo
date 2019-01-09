<template>
  <div class="bread-crumb">
    <ul class="pageTitle">
      <li class="all">
        <router-link :to="{path: `/search?keyword=${keyword}`}">全部</router-link>
      </li>
      <li>
        <span class="iconfont icon-you"></span>
        <router-link to="">{{ keyword }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "BreadCrumb",
  data() {
    return {
    }
  },
  computed: {
    ...mapState({
      keyword: state => state.list.config.keyword
    })
    
  },
  methods: {
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.pageTitle {
  position: relative;
  display: flex;
  margin: 0;
  padding: 25px 0 16px;
  list-style: none;
  line-height: 21px;

  align-items: center;

  a {
    padding-right: 10px;
    color: #666;
    font-size: 12px;
  }
  span {
    display: inline-block;
    color: #333;
      font-size: 14px;
    padding: 0 14px;
  }
}

</style>