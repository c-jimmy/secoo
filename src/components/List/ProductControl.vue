<template>
  <div class="product-box">
    <div class="product_head">
      <h4>商城</h4>
    </div>
    <div class="product_control">
      <div class="product_control_btn" v-if="mode === 'search'">
        <router-link
          :class="{active: config.orderType == 1}"
          :to="{path: `/search?keyword=${config.keyword}&firstCategory=${config.firstCategory}&secondCategory=${config.secondCategory}&thirdCategory=${config.thirdCategory}&brandId=${config.brandId}&orderType=1&pageNo=${config.pageNo}&pageSize=${config.pageSize}&price=${config.price}&prop=${config.prop}&whereHouse=${config.whereHouse}&source=${config.source}`}"
        >综合 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 2}"
          :to="{path: `/search?keyword=${config.keyword}&firstCategory=${config.firstCategory}&secondCategory=${config.secondCategory}&thirdCategory=${config.thirdCategory}&brandId=${config.brandId}&orderType=2&pageNo=${config.pageNo}&pageSize=${config.pageSize}&price=${config.price}&prop=${config.prop}&whereHouse=${config.whereHouse}&source=${config.source}`}"
        >人气 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 3}"
          :to="{path: `/search?keyword=${config.keyword}&firstCategory=${config.firstCategory}&secondCategory=${config.secondCategory}&thirdCategory=${config.thirdCategory}&brandId=${config.brandId}&orderType=3&pageNo=${config.pageNo}&pageSize=${config.pageSize}&price=${config.price}&prop=${config.prop}&whereHouse=${config.whereHouse}&source=${config.source}`}"
        >新品 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 4}"
          :to="{path: `/search?keyword=${config.keyword}&firstCategory=${config.firstCategory}&secondCategory=${config.secondCategory}&thirdCategory=${config.thirdCategory}&brandId=${config.brandId}&orderType=4&pageNo=${config.pageNo}&pageSize=${config.pageSize}&price=${config.price}&prop=${config.prop}&whereHouse=${config.whereHouse}&source=${config.source}`}"
        >销量 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 5}"
          :to="{path: `/search?keyword=${config.keyword}&firstCategory=${config.firstCategory}&secondCategory=${config.secondCategory}&thirdCategory=${config.thirdCategory}&brandId=${config.brandId}&orderType=5&pageNo=${config.pageNo}&pageSize=${config.pageSize}&price=${config.price}&prop=${config.prop}&whereHouse=${config.whereHouse}&source=${config.source}`}"
        >折扣 <i class="iconfont icon-bottom1"></i></router-link>
        <a @click="changeOrderByPrice()"
          :class="{active: config.orderType == 6 || config.orderType == 7, active6: config.orderType == 6, active7: config.orderType == 7}"
        >
          价格
          <i class="up iconfont icon-updir"></i>
          <i class="down iconfont icon-arrowbottom"></i>
        </a>
      </div>
      <div class="product_control_btn" v-else>
        <router-link
          :class="{active: config.orderType == 1}"
          :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${config.thirdCategory}-${config.brandId}-1-${config.pageNo}-${config.pageSize}-${config.price}-${config.prop}-${config.whereHouse}-${config.source}`}"
        >综合 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 2}"
          :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${config.thirdCategory}-${config.brandId}-2-${config.pageNo}-${config.pageSize}-${config.price}-${config.prop}-${config.whereHouse}-${config.source}`}"
        >人气 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 3}"
          :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${config.thirdCategory}-${config.brandId}-3-${config.pageNo}-${config.pageSize}-${config.price}-${config.prop}-${config.whereHouse}-${config.source}`}"
        >新品 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 4}"
          :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${config.thirdCategory}-${config.brandId}-4-${config.pageNo}-${config.pageSize}-${config.price}-${config.prop}-${config.whereHouse}-${config.source}`}"
        >销量 <i class="iconfont icon-bottom1"></i></router-link>
        <router-link
          :class="{active: config.orderType == 5}"
          :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${config.thirdCategory}-${config.brandId}-5-${config.pageNo}-${config.pageSize}-${config.price}-${config.prop}-${config.whereHouse}-${config.source}`}"
        >折扣 <i class="iconfont icon-bottom1"></i></router-link>
        <a @click="changeOrderByPrice()"
          :class="{active: config.orderType == 6 || config.orderType == 7, active6: config.orderType == 6, active7: config.orderType == 7}"
        >
          价格
          <i class="up iconfont icon-updir"></i>
          <i class="down iconfont icon-arrowbottom"></i>
        </a>
      </div>
      <div class="product_control_price">
        <div class="price_wrap">
          <div class="line line1">
            <input
              id="minPrice"
              type="text"
              placeholder="¥"
              v-model="minPrice"
            >
            <i>-</i>
            <input
              id="maxPrice"
              type="text"
              placeholder="¥"
              v-model="maxPrice"
            >
          </div>
          <div class="line line2">
            <button
              class="empty"
              @click="priceEmpty()"
            >清空</button>
            <button
              class="confirm"
              @click="priceConfirm()"
            >确定</button>
          </div>
        </div>
      </div>

      <div class="product_control_check">
        <label><input
            type="checkbox"
            v-model="isNew"
            @click="productCheck()"
          >新到商品 </label>
        <label><input
            type="checkbox"
            v-model="isSale"
            @click="productCheck()"
          >促销商品 </label>
        <label><input
            type="checkbox"
            v-model="isFast"
            @click="productCheck()"
          >闪购 </label>
        <label><input
            type="checkbox"
            v-model="isAbroad"
            @click="productCheck()"
          >海外直邮 </label>
      </div>

      <div class="product_control_search">
        <input
          type="text"
          v-model.trim="searchStr"
          placeholder="在结果中搜索"
        >
        <button@click="search()">确定</button>
      </div>

      <div class="product_control_page">
        <button :class="{disable: config.pageNo == 1}" @click="pre()"><i><</i></button>
        <span><b>{{config.pageNo == 0? 1:config.pageNo}}</b> / {{pageCount}}</span>
        <button :class="{disable: config.pageNo == pageCount}" @click="next()"><i>></i></button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "ProductBox",
  props: {
    mode: {
      type: String
    },
  },
  data() {
    return {
      minPrice: '',
      maxPrice: '',
      isNew: false,
      isSale: false,
      isFast: false,
      isAbroad: false,
      searchStr: '',
    }
  },
  computed: {
    ...mapState({
      config: state => state.list.config,
      total: state => state.list.goodsInfo.goods.total
    }),
    pageCount() {
      return Math.ceil(this.total / this.config.pageSize)
    }
  },
  methods: {
    // 价格排列方式
    changeOrderByPrice() {
      let afterOrderType = this.config.orderType
      afterOrderType = this.config.orderType == 6? 7 : 6
      this.$store.commit("setConfig", { key: "orderType", value: afterOrderType })
      this.goTo()
    },
    // 价格区间
    priceEmpty() {
      this.minPrice = ''
      this.maxPrice = ''
    },
    priceConfirm() {
      let priceStr = 0
      if (this.minPrice || this.maxPrice) {
        priceStr = `${this.minPrice}_${this.maxPrice}`
        console.log(priceStr)
        this.$store.commit("setConfig", { key: "price", value: priceStr })
        this.goTo()
      }
    },

    // Search
    search() {
      if(this.searchStr) {
        this.$store.commit("setConfig", { key: "keyword", value: this.searchStr })
        this.goTo()
      }else {
        console.log('请输入搜索字段')
      }
    },
    
    // pageNo
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
    // 新到商品、促销商品、闪购、海外直邮
    productCheck() {
      this.$nextTick(function () {
        let aSource = []
        this.isNew ? aSource.push(1) : ''
        this.isSale ? aSource.push(2) : ''
        this.isFast ? aSource.push(3) : ''
        this.isAbroad ? aSource.push(4) : ''
        aSource = aSource.length == 0? '0': aSource.join("_")
        this.$store.commit("setConfig", { key: "source", value: aSource})
        this.goTo()
      })
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
  }

}
</script>

<style lang="scss" scoped>
.product-box {
  background: #FFF;
  .product_head {
    display: flex;

    justify-content: flex-start;

    h4 {
      margin: 0;
      width: 96px;
      border-top: 2px solid #E93B39;
      color: #E93B39;
      text-align: center;
      font: normal 18px/18px 'microsoft yahei';
      line-height: 40px;
    }
  }
  .product_control {
    position: relative;
    display: flex;
    padding: 10px 30px;
    background: #F5F5F5;
    color: #666;
    font-size: 12px;

    align-items: flex-start;

    .product_control_btn {
      display: flex;
      margin-right: 146px;

      align-items: center;
      a {
        position: relative;
        display: inline-block;
        margin-left: -1px;
        width: 48px;
        height: 22px;
        border: 1px solid #EDEDED;
        background: #FFF;
        color: #666;
        text-align: center;
        font-size: 12px;
        line-height: 22px;
        cursor: pointer;

        &:hover {
          z-index: 1;
          border-color: #E93B39;
          color: #E93B39;
        }
        &.active {
          z-index: 1;
          border-color: #E93B39;
          background: #E93B39;
          color: #FFF;
        }
        &.active6 i {
          &.down {
            color: rgba(66, 66, 66, .4);
          }
        }
        &.active7 i {
          &.up {
            color: rgba(66, 66, 66, .4);
          }
        }

        i {
          position: absolute;
          right: -2px;
          font-weight: bold;
          transform: scale(.8);
          &.up {
            top: -4px;
          }
          &.down {
            bottom: -4px;
          }
        }
      }
    }
    .product_control_price {
      position: absolute;
      left: 334px;
      margin-top: -10px;
      padding: 10px 10px;
      width: 106px;
      &:hover {
        background: #E8E8E8;

        .line2 {
          display: flex;
        }
      }
      .line {
        display: flex;

        justify-content: space-between;

        input, button {
          box-sizing: border-box;
          padding: 0 3px;
          width: 47px;
          height: 24px;
          outline: none;
          border: 1px solid #EDEDED;
          background-color: #FFF;
          color: #666;
        }
        i {
          width: 10px;
          color: #999;
          text-align: center;
        }
        button {
          cursor: pointer;
        }
      }
      .line2 {
        display: none;
        margin-top: 8px;

        button {
          height: 22px;
          border: none;
          border-radius: 3px;
          line-height: 24px;

          &.confirm {
            background: #E93B39;
            color: #FFF;
          }
        }
      }
    }
    .product_control_check {
      label {
        margin-right: 10px;
        input {
          position: relative;
          top: 2px;
        }
      }
    }
    .product_control_search {
      input {
        box-sizing: border-box;
        padding: 0 3px;
        width: 150px;
        height: 24px;
        outline: none;
        border: 1px solid #EDEDED;
        background: #FFF;

        &::-webkit-input-placeholder {
          color: #999;
          font-size: 12px;
        }
      }
      button {
        padding: 0 6px;
        outline: none;
        border: 1px solid #EDEDED;
        background: #FFF;
        color: #666;
        line-height: 22px;
        cursor: pointer;

        &:hover {
          border-color: #333;
          color: #333;
        }
      }
    }
    .product_control_page {
      position: absolute;
      top: 13px;
      right: 30px;

      button {
        padding: 0;
        width: 18px;
        outline: none;
        border: 1px solid #CCC;
        background: #FFF;
        color: #666;
        text-align: center;
        line-height: 16px;
        cursor: pointer;

        &.disable {
          color: #999;
          cursor: not-allowed;
        }
      }
      span {
        display: inline-block;
        padding: 0 10px;

        b {
          color: #E93B39;
        }
      }
    }
  }
}



</style>