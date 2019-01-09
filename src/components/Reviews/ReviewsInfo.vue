<template>
  <div class="reviews-info">
    <div class="top-head">
      <button
        class="goods-reviews"
        :class="{'active': (type1 === 'goods')}"
        @click="changeReviewsType1('goods')"
      >该商品评价（{{reviews.goodsCount}}）</button>
      <button
        class="brand-reviews"
        :class="{'active': (type1 === 'brand')}"
        @click="changeReviewsType1('brand')"
      >同品牌评价（{{reviews.brandCount}}）</button>
    </div>
    <div class="review-wrap">
      <div
        class="top"
        v-if="(type1 === 'goods')"
      >
        <div class="mark-wrap">
          <span>综合评分 | </span>
          <el-rate
            v-model="reviews.mark"
            disabled
            show-score
            text-color="#E93A38"
            score-template="{value} / 5.0"
          >
          </el-rate>
        </div>
        <div class="write-review">
          <button>发表评价</button>
        </div>
      </div>
      <div class="review-menu">
        <button
          :class="{'active':( type2 === 'all')}"
          @click="changeReviewsType2('all')"
        >全部（{{reviews.goodsCount}}）</button>
        <button
          :class="{'active': (type2 === 'onlyImg')}"
          @click="changeReviewsType2('onlyImg')"
        >有图评价（{{reviews.hasImgCount}}）</button>
      </div>
      <ul>
        <li
          class="review-list"
          v-for="(item, index) in reviews.reviewsInfo"
          :key="item.reviewId"
        >
          <!-- {{item}} -->
          <div class="left">
            <img
              :src="item.userInfo.userAvatar"
              alt=""
            >
            <p>{{item.userInfo.userName}}</p>
          </div>
          <div class="right list-info">
            <div class="list-head">
              <el-rate
                v-model="item.mark"
                disabled
                show-score
                text-color="#E93A38"
                score-template="{value}"
              >
              </el-rate>
              <p><span v-if="type1 === 'brand'">同品牌评价 | </span>{{ item.time | dateformat }}</p>
            </div>
            <div class="list-body">
              <p>{{item.desc}}</p>
              <viewer :images="item.imgs">
                <div class="img-wrap">
                  <picture
                    v-for="(src, index) in item.imgs"
                    :key="index"
                  >
                    <img :src="src">
                  </picture>
                </div>
              </viewer>
            </div>
            <div class="list-foot">
              <div class="list-foot-left">
                <template v-if="type1 === 'goods'">
                  <p>
                    <span
                      v-for="(sku, index) in item.skuInfo"
                      :key="index"
                    >{{ sku.name }}: {{ sku.value }}</span>
                  </p>
                </template>
                <template v-else>
                  <router-link :to="{path: `/details/${item.goodsId}`}">{{ item.goodsName }}</router-link>
                </template>
              </div>
              <div
                class="list-foot-right"
                @click.once="addPraise(index)"
              >
                <span class="iconfont icon-dianzan"></span>
                <span>({{ item.praise }})</span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="reviewsCount"
        @current-change="handleCurrentChange"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      type1: 'goods', // goods  or  brand
      type2: 'all',   // all or onlyImg
      page: 1,        // current Page
      pageSize: 10,   // pagesize

      reviews: {
        goodsCount: 0,
        brandCount: 0,
        hasImgCount: 0,
        mark: 0,
        reviewsInfo: []
      }
    }
  },
  computed: {
    reviewsCount() {
      return this.type1 === 'goods' ? this.reviews.goodsCount : this.reviews.brandCount
    }
  },
  methods: {
    // 点赞
    addPraise(index) {
      this.reviews.reviewsInfo[index].praise += 1
      // 通知后台更新此条评论的点赞数量
    },
    // 切换商品评价和同品牌评价
    changeReviewsType1(type) {
      this.type1 = type
      this.getReviews()
    },
    // 切换全部评价和有图评价
    changeReviewsType2(type) {
      this.type2 = type
      this.getReviews()
    },
    // 评论翻页
    handleCurrentChange(index) {
      this.page = index
      this.getReviews()
    },
    // 获取评论数据
    getReviews() {
      this.axios.get(`/reviews/${this.$route.params.id}?type1=${this.type1}&type2=${this.type2}&page=${this.page}&pagesize=${this.pageSize}`)
        .then(res => {
          this.reviews = res.data.data
        })
    }
  },
  created() {
    this.getReviews()
  }
}
</script>

<style lang="scss" scoped>
.reviews-info {
  margin-top: 30px;

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
      background: #333;
      color: #fff;
      font-size: 14px;
      cursor: pointer;

      &.active,
      &:hover {
        background: var(--mainColor2);
      }
    }
  }

  .review-wrap {
    padding: 30px 30px 30px;
    background: #fff;
    box-shadow: 0 0 3px 3px #e5e5e5;

    .top {
      display: flex;
      padding-bottom: 20px;

      justify-content: space-between;
      align-items: center;

      .mark-wrap {
        display: flex;
        color: #999;
        font-size: 16px;

        justify-content: flex-start;
        align-items: center;

        span {
          display: inline-block;
          margin-right: 10px;
        }
      }
      .write-review button {
        display: inline-block;
        width: 76px;
        height: 30px;
        outline: none;
        border: 2px solid #e93b39;
        background: #fff;
        color: #e93b39;
        vertical-align: top;
        text-align: center;
        line-height: 24px;
        cursor: pointer;
      }
    }

    .review-menu {
      margin: 10px 0;
      text-align: left;

      button {
        margin-right: 15px;
        padding: 0;
        outline: none;
        border: none;
        background: none;
        color: #666;
        text-align-last: left;
        font-size: 12px;
        cursor: pointer;

        &.active {
          color: #e93b39;
        }
      }
    }

    ul {
      padding: 0;
      list-style: none;

      li {
        display: flex;
        margin-bottom: 20px;
        align-items: flex-start;

        .left {
          margin-right: 20px;
          width: 60px;

          img {
            max-width: 100%;
          }
          p {
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            font-size: 12px;
          }
        }
        .right {
          flex: 1;
          text-align: left;
          background: #f8f8f8;
          padding: 0 30px 20px;

          .list-head {
            height: 60px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            border-bottom: 1px dotted #ccc;

            p {
              font-size: 12px;
              color: #999;
            }
          }

          .list-body {
            p {
              font-size: 12px;
              color: #333;
            }
            .img-wrap {
              display: flex;
              justify-content: flex-start;
              align-items: center;
            }
            picture {
              background: #eee;
              border: 1px solid #ccc;
              width: 60px;
              height: 80px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              overflow: hidden;
              margin-right: 8px;
              cursor: pointer;

              &:hover {
                border-color: #e93b39;
              }
              img {
                max-height: 80px;
              }
            }
          }
          .list-foot {
            display: flex;
            justify-content: space-between;
            align-items: center;

            .list-foot-left {
              p span,
              a {
                display: inline-block;
                margin-right: 10px;
                font-size: 12px;
                color: #999;
              }
              a {
                margin-top: 10px;
                text-decoration: underline;
              }
            }

            .list-foot-right {
              cursor: pointer;
            }
            .list-foot-right.click {
              color: var(--mainColor2);
            }
          }
        }
      }
    }
  }
}
</style>