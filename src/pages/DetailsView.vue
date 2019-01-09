<template>
  <div class="details-view">
    <div class="wide-wrap">
      <div class="smallNav">
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item v-for="item in details.category" :to="{ path: `/list/${item.id}`}" :key="item.id">{{
            item.name }}</el-breadcrumb-item>
          <el-breadcrumb-item :to="{path: `/serach/${details.detailsInfo.brand.brandName}`}">{{details.detailsInfo.brand.brandName}}</el-breadcrumb-item>
          <el-breadcrumb-item>{{details.contentsInfo.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <p>商品编码：{{proId }}</p>
      </div>
      <!-- <contents-info :info="details.contentsInfo"></contents-info> -->
      <contents-info></contents-info>
      <div class="goods-bottom">
        <div class="left">

        </div>
        <div class="right">
          <div class="top-head">
            <button class="goods-details-title">商品详情</button>
            <button class="add-cart">加入购物车</button>
          </div>

          <!-- <details-info :info="details.detailsInfo"></details-info> -->
          <details-info />

          <reviews-info />
          <!-- {{reviews}} -->

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  import ContentsInfo from "@/components/Details/ContentsInfo"
  import DetailsInfo from "@/components/Details/DetailsInfo"
  import ReviewsInfo from "@/components/Reviews/ReviewsInfo"
  export default {
    name: 'DetailsView',
    components: {
      ContentsInfo,
      DetailsInfo,
      ReviewsInfo
    },
    data() {
      return {
      }
    },
    computed: {
      proId: function () {
        return this.details.contentsInfo.id.slice(0, 10)
      },
      ...mapState({
        details: state => state.details.details
      })
    },
    created() {
      this.$store.dispatch('detailsGetData', this.$route.params.id)
    }
  }

</script>

<style lang="scss" scoped>
.details-view {
  margin: 0;
  padding: 0 0 50px;
  background: #EDEDED;
}

.smallNav {
  position: relative;
  padding: 30px 0 20px;

  p {
    position: absolute;
    top: 30px;
    right: 0;
    margin: 0;
    font-size: 14px;
    line-height: 1;
  }
}

.goods-bottom {
  display: flex;
  margin-top: 30px;

  justify-content: space-between;
  align-items: flex-start;

  .left {
    width: 200px;
    height: 500px;
    background: #678;
  }

  .right {
    flex: 1;
    margin-left: 30px;
    // height: 265px;

    .top-head {
      display: flex;

      justify-content: flex-start;
      align-items: flex-start;

      button {
        display: inline-block;
        margin-right: 1px;
        width: 150px;
        height: 38px;
        outline: none;
        border: none;
        border-radius: 2px;
        color: #FFF;
        font-size: 14px;
        cursor: pointer;

        &.goods-details-title {
          background: var(--mainColor2);
        }

        &.add-cart {
          background: #E93A38;
        }
      }
    }
  }
}

</style>
