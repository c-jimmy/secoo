<template>
  <div class="product-list">
    <ul class="product-wrap">
      <li class="product-item-wrap" v-for="(goodItem, goodIndex) in goodsList" :key="goodIndex">
        <div class="product-item">

        
          <div class="item-wrap">
            <router-link :to="{path: `/details/${goodItem.goodsId}`}">
              <div class="big-box">
                <img :src="goodItem.sku[0].skuList[0].img" alt="">
              </div>
            </router-link>
            <div class="tags">
              <span class="address">{{ goodItem.address }}</span>
              <span class="isNew" v-if="goodItem.isNew">NEW</span>
            </div>
            <router-link class="title" :to="{path: `/details/${goodItem.goodsId}${goodItem.sku[0].sku1Selected}${goodItem.sku[1].sku2Selected}`}">
            {{goodItem.goodsName}}
            </router-link>
            <div class="price">
              ¥{{goodItem.sku[0].skuList[0].price | numberFormate}}
            </div>
            <div class="options-wrap">
              <div class="options">
                <button class="addCart">加入购物车</button>
                <p v-if="goodItem.count < 10 ">仅剩 {{goodItem.count}} 件</p>
                <router-link to=""><i class="iconfont icon-shoucang"></i> 收藏</router-link>
              </div>
            </div>
            
          </div>
        </div>
        
        
      </li>
    </ul>

    <el-pagination class="pagination"
      background
      layout="prev, pager, next"
      :page-count="+pageCount"
      :current-page="+config.pageNo"
      @prev-click="prev()"
      @next-click="next()"
      @current-change="handleCurrentChange"
>
      <!-- @current-change="handleCurrentChange($event)" -->
    </el-pagination>
  </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    props: {
      mode: {
        type: String
      },
    },
    data() {
      return {
      }
    },
    computed: {
      ...mapState({
        total: state => state.list.goodsInfo.goods.total,
        config: state => state.list.config,
        goodsList: state => state.list.goodsInfo.goods.goodsList
      }),
      pageCount() {
        return Math.ceil(this.total / this.config.pageSize)
      },

    },
    methods: {
      pre() {
        if(this.config.pageNo != 1) {
          this.$store.commit("setConfig", { key: "pageNo", value: --this.config.pageNo })
        }
        this.goTo()
      },
      next() {
        if(this.config.pageNo != this.pageCount) {
          this.$store.commit("setConfig", { key: "pageNo", value: ++this.config.pageNo })
        }
        this.goTo()
      },
      handleCurrentChange(index) {
        console.log(index)
        this.$store.commit("setConfig", { key: "pageNo", value: index })
        this.goTo()
      },
       // 页面跳转
      goTo() {
        // this.$router.push(`/list/${this.config.firstCategory}-${this.config.secondCategory}-${this.config.thirdCategory}-${this.config.brandId}-${this.config.orderType}-${this.config.pageNo}-${this.config.pageSize}-${this.config.price}-${this.config.prop}-${this.config.whereHouse}-${this.config.source}`);
        if (this.mode === 'search') {
          this.$router.push(`/search?${this.config.keyword !== '' ? 'keyword=' + this.config.keyword : ''}${this.config.firstCategory !== '' ? '&firstCategory=' + this.config.firstCategory : 0}${this.config.secondCategory !== '' ? '&secondCategory=' + this.config.secondCategory : 0}${this.config.thirdCategory !== '' ? '&thirdCategory=' + this.config.thirdCategory : 0}${this.config.brandId !== '' ? '&brandId=' + this.config.brandId : 0}${this.config.orderType !== '' ? '&orderType=' + this.config.orderType : 1}${this.config.pageNo !== '' ? '&pageNo=' + this.config.pageNo : 1}${this.config.pageSize !== '' ? '&pageSize=' + this.config.pageSize : 40}${this.config.price !== '' ? '&price=' + this.config.price : 0}${this.config.prop !== '' ? '&prop=' + this.config.prop : 0}${this.config.whereHouse !== '' ? '&whereHouse=' + this.config.whereHouse : 0}${this.config.source !== '' ? '&source=' + this.config.source : 0}`)
        } else {
          this.$router.push(`/list/${this.config.firstCategory}-${this.config.secondCategory}-${this.config.thirdCategory}-${this.config.brandId}-${this.config.orderType}-${this.config.pageNo}-${this.config.pageSize}-${this.config.price}-${this.config.prop}-${this.config.whereHouse}-${this.config.source}`);
        }
      }
    },
    mounted() {
      console.log(this.config.pageNo)
    }
  }
</script>

<style lang="scss" scoped>
.product-list {
  background: #FFF;
  .product-wrap {
    display: flex;
    margin: 0;
    padding: 30px;
    list-style: none;

    flex-wrap: wrap;

    .product-item-wrap {
      position: relative;
      margin: 10px 0;
      padding: 30px 0;
      width: 25%;
      height: 360px;

      .product-item {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
        margin: 0 auto;
        padding: 10px;
        width: 262px;

        &:hover {
          z-index: 1;
          box-shadow: 0 0 1px 1px rgba(66, 66, 66, .4);

          .options-wrap {
            display: block!important;
          }
        }
      }

      .item-wrap {
        margin: 0 auto;
        width: 240px;
        text-align: left;

        .big-box {
          overflow: hidden;
          margin: 0 auto;
          width: 240px;
          height: 240px;
          background: #EEE;

          img {
            max-width: 100%;
          }
        }

        .tags {
          display: flex;
          margin: 10px 0;

          span {
            margin-right: 8px;
            padding: 0 6px;
            color: #FFF;
            letter-spacing: 1px;
            font-size: 12px;
            line-height: 20px;
          }
          .address {
            background: #000;
          }
          .isNew {
            background: #E93B39;
          }
        }

        .title {
          display: block;
          margin: 10px 0;
          color: #333;
          font-size: 14px;
          line-height: 1.5;
          &:hover {
            text-decoration: underline;
          }
        }

        .price {
          color: #000;
          font-weight: bold;
          font-size: 14px;
        }
        .options-wrap {
          display: none;
          .options {
            display: flex;
            margin-top: 10px;
            font-size: 12px;

            justify-content: space-between;
            align-items: center;

            button {
              padding: 5px 10px;
              border: none;
              background: #E93B39;
              color: #FFF;
              font-size: 12px;
              cursor: pointer;
            }
            a {
              color: #666;
            }
          }
        }
      }


      // .sku-wrap {
      //   .size-wrap {
      //     display: flex;
      //     background: #F2F2F2;

      //     justify-content: center;
      //     flex-wrap: wrap;

      //     span {
      //       position: relative;
      //       display: inline-block;
      //       padding: 0 6px;
      //       color: #666;
      //       font-size: 12px;
      //       line-height: 2.5;

      //       &::after {
      //         position: absolute;
      //         top: 50%;
      //         right: 0;
      //         z-index: 1;
      //         width: 1px;
      //         height: 10px;
      //         background: #CCC;
      //         content: '';
      //         transform: translateY(-50%);
      //       }
      //       &:hover {
      //         color: #E93B39;
      //       }
      //     }
      //   }
      //   .img-wrap {
      //     .small-box {
      //       display: flex;
      //       margin: 10px auto 0;
      //       padding: 0;
      //       width: 156px;
      //       list-style: none;

      //       .small-list {
      //         overflow: hidden;
      //         margin: 0 3px;
      //         width: 50px;
      //         height: 50px;
      //         border: 1px solid rgba(33, 33, 33, .1);

      //         &:hover {
      //           border-color: #E93B39;
      //         }
      //       }
      //       img {
      //         max-width: 100%;
      //       }
      //     }
      //   }
      // }
    }
  }

  .pagination {
    margin-top: -15px;
    padding-bottom: 30px;
  }
}










</style>