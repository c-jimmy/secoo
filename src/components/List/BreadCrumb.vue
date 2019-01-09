<template>
  <div class="bread-crumb">
    <ul class="pageTitle">
      <template v-if="mode === 'search'">
        <li class="all">
        <router-link :to="{path: `/search?keyword=${config.keyword}`}">全部</router-link>
      </li>
      <li class="keyword" v-if="config.keyword">
        <span class="iconfont icon-you"></span>
        <router-link to="">{{ config.keyword }}</router-link>
      </li>
      </template>

      <template v-else>
        <li class="all">
          <router-link :to="{path: `/list/0-0-0-0-1-1-40-0-0-0-0`}">全部</router-link>
        </li>
      
        <li
          class="bread-crumb-item"
          v-for="(value, key, index) in selectedCategory"
          :key="index"
          @mouseover="hoverOver(index)"
          @mouseout="hoverOut()"
          :class="timeIndex === index ? 'bread-crumb-item active' : 'bread-crumb-item' "
        >
          <span class="iconfont icon-you"></span>
          <router-link
            :to="{path: `/list/${config.firstCategory}-${key === 'first' ? 0: config.secondCategory}-${key === 'third'? config.thirdCategory: 0}-0-1-1-40-0-0-0-0`}"
          >{{ value.name }}
            <i class="iconfont icon-icon--"></i>
          </router-link>

          <bread-crumb-wrap class="bread-crumb-wrap" :category="key" :info="categoryInfo[`${key}Category`]"></bread-crumb-wrap>
        </li>
      </template>
      

    </ul>
  </div>
</template>

<script>
import BreadCrumbWrap from "@/components/List/BreadCrumbWrap"
import { mapState } from 'vuex'
export default {
  name: "BreadCrumb",
  props: {
    mode: {
      type: String
    },
  },
  data() {
    return {
      firstCategoryWrap: false,
      secondCategoryWrap: false,
      thirdCategoryWrap: false,
      num: '',
      timeIndex: ''
    }
  },
  components: { BreadCrumbWrap },
  computed: {
    ...mapState({
      config: state => state.list.config,
      // 选择的分类
      selectedCategory: state => state.list.goodsInfo.templates.selectedOptions.category,
      // 分类数据
      categoryInfo: state => state.list.goodsInfo.templates.category
    })
  },
  methods: {

    hoverOver(index) {
      this.timeIndex = index
    },
    hoverOut() {
      this.timeIndex = ''
    },
    showWrap(flag) {
      if(flag === 'first') {
        this.firstCategoryWrap = true
      } else if(flag === 'second'){
        this.secondCategoryWrap = true
      } else {
        this.thirdCategoryWrap = true
      }
    },
    hideWrap(flag) {
      if(flag === 'first') {
        this.firstCategoryWrap = false
      } else if(flag === 'second'){
        this.secondCategoryWrap = false
      } else {
        this.thirdCategoryWrap = false
      }
      // console.log("hideWrap")
    }
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

  .keyword span{
    display: inline-block;
    color: #333;
    font-size: 14px;
    padding: 0 14px;
  }
  a {
    padding-right: 10px;
    color: #666;
    font-size: 12px;
  }
  .bread-crumb-item {
    display: flex;

    align-items: center;

    &.active {
       > a {
        position: relative;
        z-index: 99;
        border-color: rgba(168, 168, 168, .5);
        border-bottom-color: transparent;
        border-radius: 3px;
        background: #FFF;
      }
      .bread-crumb-wrap {
        display: block;
      }
    }
     > a {
      padding: 0 10px;
      border: 1px solid transparent;
    }
    span.iconfont {
      padding: 0 10px;
      color: #333;
      font-size: 14px;
    }
    i.iconfont {
      color: #666;
      font-size: 12px;
    }

    .bread-crumb-wrap {
      position: absolute;
      top: 48px;
      right: 0;
      left: 0;
      z-index: 9;
      display: none;
      border-radius: 3px;
      background: #FFF;
      box-shadow: 0 0 1px 1px rgba(168, 168, 168, .5);
    }
  }
}

</style>