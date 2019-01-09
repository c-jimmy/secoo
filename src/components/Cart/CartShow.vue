<template>
  <div class="cart-show">
    <div class='user-info'><span>Bs8332531097</span><a href="#">退出</a></div>
    <div class="cart-box">
      <div class="cart-table-wrap">
        <table>
          <thead>
            <tr>
              <th>
                <label><input
                    type="checkbox"
                    :checked="isAllSelected"
                    @click="changeAllSelected"
                  >全选</label>
              </th>
              <th
                colspan="2"
                class="good-name"
              >商品名称</th>
              <th>发货站</th>
              <th>会员价</th>
              <th>数量</th>
              <th>金额小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(item, index) in cartsData"
              :key="index"
              :class="{active: item.isSelected}"
            >
              <td class="change-select">
                <input
                  type="checkbox"
                  v-model="item.isSelected"
                  @click="changeSelect(index)"
                >
              </td>
              <td class="img-wrap">
                <img
                  :src="item.img"
                  alt=""
                >
              </td>
              <td class="good-name">
                <p>
                  <router-link :to="{path: `/details/${item.id}`}">{{item.name}}</router-link>
                </p>
                <p><span
                    v-for="(skuList, skuIndex) in item.sku"
                    :key="skuIndex"
                  >{{ skuList.skuName }}： {{ skuList.skuValue }}</span></p>
              </td>
              <td class="address">
                {{ item.address }}
              </td>
              <td class="price">
                ¥{{ item.price | numberFormate}}
              </td>
              <td class="num">
                <div class="input-number-wrap">
                  <span @click="subtract(index)">-</span>
                  <input
                    type="text"
                    v-model="item.buyCount"
                  >
                  <span @click="add(index)">+</span>
                </div>
              </td>
              <td class="total">
                ¥ {{ item.buyCount*item.price | numberFormate}}元
              </td>
              <td class="options">
                <button @click="del(index)">删除</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="balance">
      <div class="left">
        <div>
          <label><input
              type="checkbox"
              :checked="isAllSelected"
              @click="changeAllSelected"
            >全选</label>
          <span @click="delSelected"><i class="iconfont icon-shanchu"></i>删除选中商品</span>
        </div>

        <router-link :to="{path: '/home'}">继续购物</router-link>
      </div>
      <div class="right">
        <p>商品数量总计： {{goodsNum}} 件</p>
        <p>包装数量总计： {{bagNum}} 件</p>
        <p>商品金额总计（不含税金和运费）：<span>{{ totla | numberFormate(2)}}</span></p>
        <router-link :to="{path: '/cart-confirm'}">立即结算</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      num7: 2
    }
  },
  computed: {
    ...mapState({
      cartsData: state => state.cart.carts
    }),
    totla() {
      let total = 0
      this.cartsData.map(val => {
        if (val.isSelected) {
          total += val.buyCount * val.price
        }
      })
      return total
    },
    isAllSelected() {
      let isAllSelected = true
      this.cartsData.map(val => {
        if (!val.isSelected) {
          isAllSelected = false
        }
      })
      return isAllSelected
    },
    goodsNum() {
      let goodsNum = 0
      this.cartsData.map(val => {
        if (val.isSelected) {
          goodsNum += val.buyCount
        }
      })
      return goodsNum
    },
    bagNum() {
      let bagNum = 0
      this.cartsData.map(val => {
        if (val.isSelected) {
          bagNum++
        }
      })
      return bagNum
    }
  },
  methods: {
    changeSelect(index) {
      this.$store.commit('cartChangeSelect', index)
    },
    add(index) {
      console.log("---add")
      if (+this.cartsData[index].buyCount < +this.cartsData[index].count) {
        console.log("1111")
        this.$store.commit('cartAddCount', index)
      }
    },
    subtract(index) {
      console.log("---subtract")
      if (+this.cartsData[index].buyCount !== 1) {
        this.$store.commit('cartSubtractCount', index)
      }
    },
    del(index) {
      this.$store.commit('cartDel', index)
    },
    changeAllSelected() {
      let selectedNum = 0
      this.cartsData.map(val => {
        if (val.isSelected) {
          selectedNum++
        }
      })
      if (selectedNum === this.cartsData.length) {
        this.$store.commit('cartAllUnSelected')
      } else {
        this.$store.commit('cartAllSelected')
      }
    },
    delSelected() {
      this.$store.commit('cartDelSelected')
    }
  },
  created() {

    this.$store.dispatch("cartGetData")
  }
}
</script>

<style lang="scss" scoped>
.user-info {
  margin: 30px 0 10px;
  text-align: left;
  line-height: 24px;
  font-size: 14px;
  span {
    padding: 0 10px;
  }
  a {
    color: #e93b39;
  }
}
.cart-box table {
  width: 100%;
  font-size: 12px;
  border-collapse: collapse;
  thead {
    background: #ececec;
    color: #333;
    border: 1px solid #fff;
    th {
      position: relative;
      white-space: nowrap;
      line-height: 48px;
      padding: 0;
      color: #999;
      font-weight: normal;
      input {
        position: relative;
        top: 2px;
      }
    }
  }
  tbody {
    background: #fff;
    border: 1px solid #fff;
    
    tr {
      border-top: 1px solid #fff;
      height: 118px;
      &.active {
        background: #fdf0ef;
      }
    }
    td {
      white-space: nowrap;
      &.img-wrap {
        img {
          max-width: 80px;
        }
      }
      &.good-name {
        p {
          white-space: normal;
          padding: 0 10px;
          line-height: 22px;
          text-align: left;
          span {
            display: inline-block;
            margin-right: 15px;
            color: #999;
          }
          a {
            color: #333;
            &:hover {
              text-decoration: underline;
            }
          }
        }
        width: 360px;
        white-space: normal;
      }
      &.total {
        color: #e93b39;
        font-size: 14px;
        font-weight: bold;
        min-width: 80px;
      }
      &.num {
        .input-number-wrap {
          height: 22px;
          border: 1px solid #ddd;
          width: 66px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          span {
            width: 12px;
            line-height: 20px;
            display: inline-block;
            border: none;
            cursor: pointer;
          }
          input {
            border: none;
            border-left: 1px solid #ddd;
            border-right: 1px solid #ddd;
            width: 40px;
            height: 20px;
            outline: none;
            padding: 0 3px;
            box-sizing: border-box;
            text-align: center;
          }
        }
      }
      &.options {
        button {
          background: none;
          border: none;
          outline: none;
          cursor: pointer;
          color: #666;
        }
      }
    }
  }
}

.balance {
  margin: 8px 0;
  padding: 20px 30px;
  border: 1px solid #ececec;
  background: #fff;
  color: #333;
  display: flex;
  justify-content: space-between;
  font-size: 12px;

  .left {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: flex-start;

    label {
      margin-right: 15px;
    }
    span {
      cursor: pointer;
      color: #e93b39;
    }
    input,
    i {
      position: relative;
      top: 2px;
    }
    a {
      display: inline;
      border: 1px solid #e93b39;

      width: 80px;
      line-height: 30px;
      color: #e93b39;
    }
  }
  .right {
    text-align: right;
    p {
      margin-top: 0;
      margin-bottom: 10px;
    }
    span {
      padding-left: 8px;
      font-size: 30px;
      font-weight: bolder;
      color: #e93b39;
    }
    a {
      display: inline-block;
      width: 136px;
      line-height: 40px;
      background: #e93b39;
      text-align: center;
      color: #fff;
      font-size: 16px;
    }
  }
}
</style>