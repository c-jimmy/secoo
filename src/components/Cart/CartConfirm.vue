<template>
  <div>
    <div class="receive-wrap">
      <h4>收货相关信息</h4>
      <div class="user-info">
        <p class="title">收货人信息</p>
        <div class="default-address">
          <input
            type="radio"
            name="address"
          >
          <span class="name">jimmy</span>
          <span>广东省深圳市南山区海岸城西座</span>
          <span>158****4717</span>
          <span>默认地址<button class="edit">编辑</button><button class="del">删除</button></span>
        </div>
        <div>
          <input
            type="radio"
            name="address"
          > 使用新地址
          <div class="edit-address">
            <div class="user">
              <div class="left"><i class="iconfont icon-xinghao"></i>收&ensp;货&ensp;人：</div>
              <div class="right">
                <input type="text">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
              </div>
            </div>
            <div class="city">
              <div class="left"><i class="iconfont icon-xinghao"></i>所在地区：</div>
              <div class="right">
                <select
                  name="sheng"
                  id=""
                  placeholder="北京市"
                >
                  <option value=""></option>
                </select>
                <select
                  name="shi"
                  id=""
                >
                  <option value=""></option>
                </select>
                <select
                  name="qu"
                  id=""
                >
                  <option value=""></option>
                </select>
                <!-- <el-select
                  v-model="value"
                  placeholder="北京市"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="value"
                  placeholder="北京市"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
                <el-select
                  v-model="value"
                  placeholder="东城区"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select> -->
              </div>

            </div>
            <div class="address">
              <div class="left"><i class="iconfont icon-xinghao"></i>详细地址：</div>
              <div class="right">
                <input type="text">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
              </div>
            </div>
            <div class="telphone">
              <div class="left"><i class="iconfont icon-xinghao"></i>手机号码：</div>
              <div class="right">
                <input type="text">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
              </div>
            </div>
          </div>
        </div>
        <button class="confirm">确认收货地址</button>
      </div>
      <div class="send-pay">
        <p class="title">配送方式</p>
        <div>
          <span><input
              type="radio"
              name="sendmode"
              value="byPost"
              v-model="sendmode"
            >快递送货 </span>
          <span><input
              type="radio"
              name="sendmode"
              value="byStore"
              v-model="sendmode"
            >线下自取</span>
          <span class="notice">寺库将根据情况选用顺丰、圆通、韵达等快递公司为您送货</span>
        </div>
        <p>支付方式</p>
        <div>
          <span><input
              type="radio"
              name="paymode"
              value="online"
              v-model="paymode"
            >在线支付</span>
          <span class="notice">支持绝大数银行借记卡及部分银行信用卡</span>
        </div>
        <button class="confirm">确认配送支付方式</button>
      </div>

      <div class="other-info">
        <p class="title">清关身份信息<span class="notice">应中国海关要求，所有个人国际邮递包裹需实名制申报，需您提供以下身份信息</span></p>
        <div>
          <span>身份证姓名：jimmy</span>
          <span>身份证号 <input type="text" v-model="IDCard"></span>
        </div>
        <p>您也可以选择直接将身份证的正反面电子版的照片上传至<router-link
            to=""
            class="notice"
          >“我的寺库-账户信息”</router-link>，我们将督促物流合作伙伴优先为您办理清关确认 </p>
        <button class="confirm">确认</button>
      </div>
    </div>
    <div class="goods-wrap">
      <h4>商品清单</h4>
      <table>
        <thead>
          <tr>
            <th></th>
            <th class="good-name">商品名称</th>
            <th>发货站</th>
            <th>会员价</th>
            <th>数量</th>
            <th>运费</th>
            <th>小计</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in cartsConfirmData"
            :key="index"
          >
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
              {{item.buyCount}}
            </td>
            <td>
              0
            </td>
            <td class="total">
              ¥ {{ item.buyCount*item.price | numberFormate}}元
            </td>
          </tr>
        </tbody>
      </table>
      <div class="cartPrice">
        <div class="left">
          <router-link :to="{path: '/cart'}">返回修改购物车</router-link>
        </div>
        <div class="right">
          <p>{{goodsNum}}件商品，商品金额总计：{{priceTotal | numberFormate(2)}}元</p>
          <p>{{bagNum}}件包装，包装金额总计： 0元</p>
          <p>免运费： 0元</p>
          <p>税金： +{{taxes | numberFormate(2)}}元</p>
          <p>应付总额： <span>{{ priceTotal + taxes | numberFormate(2) }}</span>元</p>
          <router-link :to="{path: '/cart-pay'}">提交订单</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      options: {},
      sendmode:"byPost",
      paymode: 'online',
      value: '',
      input: '',
      IDCard: null
    }
  },
  computed: {
    ...mapState({
      cartsConfirmData: state => state.cart.carts.filter(val => val.isSelected)
    }),
    goodsNum() {
      let goodsNum = 0
      this.cartsConfirmData.map(val => { goodsNum += val.buyCount })
      return goodsNum
    },
    bagNum() {
      return this.cartsConfirmData.length
    },
    priceTotal() {
      let priceTotal = 0
      this.cartsConfirmData.map(val => { priceTotal += val.buyCount * val.price })
      return priceTotal
    },
    taxes() {
      return this.priceTotal * 0.17
    }



  },

}
</script>

<style lang="scss" scoped>
.receive-wrap,
.goods-wrap {
  margin-top: 30px;
  text-align: left;
  border: 1px solid #f1f1f1;
  background: #f9f9f9;
  padding: 1px;
  font-size: 12px;
  h4 {
    margin: 0;
    line-height: 40px;
    background: #ececec;
    font-size: 12px;
    text-indent: 24px;
    font-weight: bold;
    color: #666;
  }
  .title {
    color: #666;
    font-weight: bold;
    text-align: left;
  }
  .notice {
    display: inline-block;
    font-weight: normal;
    margin-left: 15px;
    color: #c69c6d;
  }
  .confirm {
    display: inline-block;
    margin-top: 15px;
    padding: 7px 18px;
    background-color: #e93b39;
    color: #fff;
    font-family: microsoft yahei;
    display: inline-block;
    border: none;
    cursor: pointer;
  }
  input,
  select {
    border: 1px solid #ccc;
    padding: 2px 5px;
  }
  .user-info,
  .send-pay,
  .other-info {
    > div {
      line-height: 36px;
    }
    padding: 15px 35px 30px;
    color: #333;
    input[type="radio" i] {
      position: relative;
      top: 2px;
      margin-left: 0;
    }
  }
}
.user-info {
  .default-address {
    line-height: 36px;
    button {
      display: inline-block;
      margin-left: 15px;
      border: none;
      background: none;
      color: #c69c6d;
      font-weight: normal;
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  span {
    display: inline-block;
    margin-right: 10px;
  }
  .confirm {
    margin-top: 0;
  }
  .edit-address {
    margin: 10px 15px;

    & > div {
      display: flex;
      line-height: 36px;
    }
    .left {
      width: 100px;
      i {
        color: #e93b39;
        font-size: 12px;
        margin-right: 5px;
      }
    }
    .right {
      input,
      select {
        width: 180px;
        margin-right: 15px;
      }
    }
    .address input {
      width: 378px;
    }
  }
}
.send-pay {
  > div {
    margin-left: 15px;

    span {
      display: inline-block;
      margin-right: 20px;
    }
  }
}
.other-info {
  span {
    display: inline-block;
    margin: 0 15px;
  }
  p {
    color: #999;
    text-align: center;
  }
}

.goods-wrap {
  margin-bottom: 30px;
  table {
    width: 100%;
    font-size: 12px;
    border-collapse: collapse;
    background: #fff;
    thead {
      border: 1px solid #fff;
      th {
        position: relative;
        white-space: nowrap;
        line-height: 48px;
        padding: 0;
        color: #999;
        font-weight: normal;
        text-align: center;
        &.good-name {
          text-align: left;
          padding-left: 10px;
        }
      }
    }
    tbody {
      border: 1px solid #fff;
      tr {
        border-top: 1px solid #fff;
        // height: 118px;
        &.active {
          background: #fdf0ef;
        }
      }
      td {
        white-space: nowrap;
        text-align: center;
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
      }
    }
  }

  .cartPrice {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    background: #fff;
    margin-top: 8px;
    padding: 15px 35px 30px;

    .left {
      a {
        display: inline-block;
        border: 1px solid #e93b39;
        padding: 0 15px;
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
}
</style>