<template>
  <div class="contents-info">
    <div class="info_l">
      <div class="img_box">
        <ul>
          <li
            v-for="(item, index) in contentsInfo.imgs"
            :class="{'active':indexActive === index}"
            :key="index"
            @mouseover="smallImgHoverIn(index,item.big)"
          >
            <img
              :src="item.small"
              alt=""
            >
          </li>
        </ul>
        <div class="big_box">
          <vue-zoom
            :previewImg="mainImg"
            :zoomImg="mainImg"
          />
        </div>
      </div>
      <div class="share_box">
        <router-link to="#"><img
            src="@/assets/img/details/detail_icon1.png"
            alt=""
          >正品保障</router-link>
        <router-link to="#"><img
            src="@/assets/img/details/detail_icon2.png"
            alt=""
          >七天退换</router-link>
        <router-link to="#"><img
            src="@/assets/img/details/detail_icon3.png"
            alt=""
          >权威质检</router-link>
        <router-link to="#"><img
            src="@/assets/img/details/detail_icon4.png"
            alt=""
          >分享</router-link>
        <router-link to="#"><img
            src="@/assets/img/details/detail_icon5.png"
            alt=""
          >收藏</router-link>
      </div>
    </div>
    <div class="info_r">
      <div class="proName">{{contentsInfo.name}}</div>
      <div class="proInfo">
        <div class="price-wrap info-line">
          <div class="key">寺库价</div>
          <div class="value">¥<span class="price">{{ contentsInfo.price | numberFormate}}</span></div>
        </div>
        <div class="address-wrap info-line">
          <div class="key">发货地</div>
          <div class="value"><span class="address">{{ contentsInfo.address }}</span>有货 预计<span class="dtime">5-10</span>个工作日内送达</div>
        </div>
        <div class="tip-wrap info-line">
          <div class="key">温馨提示</div>
          <div class="value">本商品无质量问题不支持退换货</div>
        </div>
        <div class="tip2-wrap info-line">
          <div class="key">商品信息</div>
          <div class="value">自营</div>
        </div>
      </div>
      <div class="proList">
        <div
          v-for="(sku, index) in contentsInfo.sku"
          :key="index"
          :ref="'skuWrap'+index"
          class="list-line"
        >
          <div class="key">{{ sku.skuName }}</div>
          <ul>
            <li
              v-for="item in sku.skuList"
              :key="item.id"
              :class="{'empty': item.stock == 0, 'selected': item.isNow}"
              @click="choose(index, item.id, item.stock)"
            >
              <template v-if="item.img">
                <img
                  :src="item.img"
                  :title="item.name"
                >
              </template>
              <template v-else>
                <p>{{item.name}}</p>
              </template>
            </li>
          </ul>
        </div>
        <div class="list-line">
          <div class="key">购买数量</div>
          <div class="value">
            <el-input-number
              size="mini"
              v-model="buyCount"
              @change="handleChange"
              :min="1"
              :max="contentsInfo.count"
              label="描述文字"
            ></el-input-number>
          </div>
        </div>
      </div>
      <div class="buy-wrap">
        <div class="qrcode-wrap">
          <div
            id="qrcode"
            ref="qrcode"
          ></div>
          <p>微信扫码下单更优惠</p>
        </div>
        <router-link to="#">立即抢购</router-link>
        <el-button
          type="text"
          @click="addCart"
        >加入购物车</el-button>

      </div>
    </div>
    <el-dialog
      title="加入购物车成功"
      :visible.sync="centerDialogVisible"
      width="25%"
      center
    >
      <span>添加成功</span>
      <span
        slot="footer"
        class="dialog-footer"
      >
        <el-button
          type="primary"
          @click="centerDialogVisible = false"
        >继续购物</el-button>
        <el-button @click="centerDialogVisible = false">
          <router-link :to="{path: '/cart'}">去购物车结算</router-link>
        </el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import VueZoom from '@/components/Details/VueZoom'
import QRCode from 'qrcodejs2'
import {
  fix
} from '@/assets/js/untils'
export default {
  name: 'CotentsInfo',
  components: {
    VueZoom
  },
  // props: {
  //   info: {
  //     type: Object,
  //     required: true
  //   }
  // },
  data() {
    return {
      indexActive: 0,
      buyCount: 1,
      centerDialogVisible: false
    }
  },
  computed: {
    ...mapState({
      contentsInfo: state => state.details.details.contentsInfo
    }),
    mainImg() {
      return this.contentsInfo.mainImg
    }
  },
  methods: {
    smallImgHoverIn(index, imgUrl) {
      this.indexActive = index
      this.contentsInfo.mainImg = imgUrl
    },
    handleChange(value) {
      console.log(value);
    },
    choose(index, id = '01', stock) {
      if (stock === 0) return false // 当库存为0，禁止跳转
      let proId = this.contentsInfo.id.substr(0, 10)
      let defaultSku1 = this.contentsInfo.id.substr(10, 2) || '01' // 默认sku1ID
      let defaultSku2 = this.contentsInfo.id.substr(12, 2) || '01' // 默认sku2ID
      let item = fix(id, 2) // 点击的是当前sku中的第几项

      console.log("------------------")
      console.log("点击的是 SKU" + (index + 1) + "中的第" + fix(id, 2) + "项")
      console.log("------------------")

      if (index === 0) { // 点击的是 sku1, 获取 点击sku1 + 默认sku2 拼接进行跳转
        this.$router.push({
          path: `/details/${proId}${item}${defaultSku2}`
        })
      } else if (index === 1) { // 点击的是 sku2, 获取 默认sku1 + 点击sku2 拼接进行跳转
        this.$router.push({
          path: `/details/${proId}${defaultSku1}${item}`
        })
      }
    },
    qrcode() {
      let qrcode = new QRCode('qrcode', {
        width: 160,
        height: 160, // 高度  
        text: window.location.href // 二维码内容
      })
    },
    addCart() {
      // 加入购物车
      this.centerDialogVisible = true
      // console.log(this.contentsInfo)
      const cartItemInfo = {
        isSelected: true,
        id: this.contentsInfo.id,
        name: this.contentsInfo.name,
        img: this.contentsInfo.imgs[0].small,
        address: this.contentsInfo.address,
        price: this.contentsInfo.price,
        count: this.contentsInfo.count,
        buyCount: this.buyCount,
        state: this.contentsInfo.state,
        sku: (() => {
          const aSku = []
          for (let i = 0; i < this.contentsInfo.sku.length; i++) {
            const element = this.contentsInfo.sku[i];
            aSku[i] = {
              skuName: element.skuName,
              skuValue: (() => {
                return element.skuList.filter(val => {
                  return val.isNow
                })[0].name
              })()
            }
          }
          return aSku
        })()
        // sku: 
      }
      // console.log(cartItemInfo)
      this.$store.dispatch('cartAddList', cartItemInfo)
    }

  },
  created() {
    this.$nextTick(() => this.qrcode())
  },
  mounted() { }
}

</script>



<style lang="scss" scoped>
>>> .magnifier-box .mouse-cover {
  background-color: red !important;
}

.contents-info {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 40px 40px 15px;
  background: #fff;
  border-radius: 3px;
  box-shadow: 0 0 3px 3px #e5e5e5;

  .info_l {
    width: 481px;

    .img_box {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      border: 1px solid #eee;

      ul {
        margin: 0;
        font-size: 0;
        width: 80px;
        padding: 0;
        list-style-type: none;
        border-right: 1px solid #eee;

        li {
          position: relative;
        }

        li.active:after {
          width: 80px;
          height: 80px;
          position: absolute;
          left: 0;
          top: 0;
          content: "";
          background: url("~@/assets/img/details/select1.png");
        }
      }

      .big_box {
        width: 400px;
        height: 400px;

        img {
          width: 100%;
          overflow: hidden;
          border: 1;
        }
      }
    }

    .share_box {
      height: 60px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      font-size: 12px;

      a {
        cursor: pointer;
        color: #666;

        &:hover {
          color: red;
        }

        img {
          width: 15px;
          position: relative;
          top: 4px;
          margin-right: 4px;
        }
      }
    }
  }

  .info_r {
    flex: 1;
    margin-left: 30px;
    text-align: left;
    color: #666;

    .proName {
      font-size: 16px;
      color: #333;
      padding: 0 0 20px 20px;
      white-space: nowrap;
      overflow: hidden;
      font: normal 16px/24px "microsoft yahei";
      border-bottom: 1px dotted #bbb;
    }

    .proInfo {
      padding: 15px 0 10px 20px;
      border-bottom: 1px dotted #bbb;
      font-size: 12px;

      .info-line {
        line-height: 35px;

        display: flex;
        justify-content: flex-start;
        align-items: flex-end;

        .key {
          width: 80px;
        }

        .value {
          flex: 1;

          .price {
            font-size: 30px;
            font-weight: 500;
            font-family: Tahoma;
          }

          .address {
            color: #7e68b3;
            padding: 0 3px;
          }

          .dtime {
            color: #d42220;
            padding: 0 3px;
          }
        }
      }

      .price-wrap .value {
        color: #d42220;
      }

      .address-wrap .value {
        color: #999;
      }
    }

    .proList {
      padding: 15px 0 10px 20px;
      font-size: 12px;

      .list-line {
        display: flex;
        justify-content: flex-start;
        align-items: flex-end;
        margin-top: 10px;
        line-height: 35px;

        .key {
          width: 80px;
        }

        ul {
          list-style-type: none;
          margin: 0;
          padding: 0;

          display: flex;
          justify-content: flex-start;

          li {
            display: flex;
            margin-right: 10px;
            border: 1px solid #eee;
            border-radius: 2px;
            cursor: pointer;

            img {
              width: 30px;
              height: 30px;
            }

            p {
              margin: 0;
              line-height: 26px;
              padding: 0 10px;
            }

            &.empty {
              opacity: 0.5;
              filter: alpha(opacity=.5);
              cursor: not-allowed;
            }

            &.selected {
              position: relative;
              border: 2px solid #7e68b3;

              &:before {
                position: absolute;
                content: "";
                width: 11px;
                height: 11px;
                right: 0;
                bottom: 0;
                background: url("~@/assets/img/details/selected.png");
              }
            }

            &:hover {
              border: 2px solid #7e68b3;
            }
          }
        }
      }
    }

    .buy-wrap {
      padding: 15px 0 0 20px;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      font-size: 14px;

      a {
        display: inline-block;
        width: 160px;
        height: 46px;
        margin-left: 15px;
        line-height: 46px;
        text-align: center;
        color: #fff;
        border-radius: 3px;
        background: #e93a38;
      }
      button {
        display: inline-block;
        padding: 0;
        width: 160px;
        height: 46px;
        margin-left: 15px;
        line-height: 42px;
        text-align: center;
        border: 2px solid #e93a38;
        box-sizing: border-box;
        color: #e93a38;
      }

      p {
        font-size: 12px;
        text-align: center;
        color: #999;
      }
    }
  }
}
</style>
