<template>
  <div class="select-condition">
    <ul ref="">
      <li class="selected">
        <div class="left">已选择：</div>
        <div class="right">
          <div class="plist-wrap">
            <div class="show-some">
              <div class="plist">
                <!-- 判断品牌是否选中 -->
                <span v-if="tempaltes.selectedOptions.brand.length !== 0">品牌：
                  <span
                    class="valueItem"
                    v-for="(brandList, index) in tempaltes.selectedOptions.brand"
                    :key="brandList.id"
                  >
                    {{ index !== tempaltes.selectedOptions.brand.length-1? brandList.name+'、': brandList.name}}
                  </span>
                  <i
                    class="iconfont icon-cuo"
                    @click="delSelect('brand')"
                  ></i>
                </span>
                <!-- 当为search页面时，判断分类选项的选择状况 -->
                <template v-if="mode === 'search'">
                  <span v-if="tempaltes.selectedOptions.category.first">
                    类目：{{tempaltes.selectedOptions.category.first.name}}
                    <i
                      class="iconfont icon-cuo"
                      @click="delSelect('firstCategory')"
                    ></i>
                  </span>
                  <span v-if="tempaltes.selectedOptions.category.second">
                    {{tempaltes.selectedOptions.category.second.name}}
                    <i
                      class="iconfont icon-cuo"
                      @click="delSelect('secondCategory')"
                    ></i>
                  </span>
                  <span v-if="tempaltes.selectedOptions.category.third">
                    {{tempaltes.selectedOptions.category.third.name}}
                    <i
                      class="iconfont icon-cuo"
                      @click="delSelect('thirdCategory')"
                    ></i>
                  </span>

                </template>
                <!-- 判断常规选项的选择状况 -->
                <span
                  v-for="(propertyList, index) in tempaltes.selectedOptions.property"
                  :key="index"
                >
                  {{ propertyList.key.propertyName }}：
                  <span
                    v-for="(propertyValueList, index2) in propertyList.value"
                    :key="propertyValueList.id"
                  >
                    {{ index2 !== propertyList.value.length-1? propertyValueList.name+'、': propertyValueList.name }}
                  </span>
                  <i
                    class="iconfont icon-cuo"
                    @click="delSelect('property', propertyList.key.propertyId)"
                  ></i>
                </span>

                <!-- 判断发货地是否选中 -->
                <span v-if="tempaltes.selectedOptions.whereHouse.length !== 0">发货地：
                  <span
                    class="valueItem"
                    v-for="(whereHouseList, index) in tempaltes.selectedOptions.whereHouse"
                    :key="whereHouseList.id"
                  >
                    {{ index !== tempaltes.selectedOptions.whereHouse.length-1?whereHouseList.name+'、': whereHouseList.name}}
                  </span>
                  <i
                    class="iconfont icon-cuo"
                    @click="delSelect('whereHouse')"
                  ></i>
                </span>
              </div>
              <div class="option">
                <span
                  class="clearAll"
                  @click="clearSelect"
                >
                  <i class="iconfont icon-shuaxin"></i> 清除条件
                </span>
              </div>

            </div>

          </div>

        </div>

      </li>
      <li
        class="brand"
        v-if="tempaltes.selectedOptions.brand.length === 0"
      >
        <div class="left">品牌：</div>
        <div class="right">
          <div class="plist-wrap">
            <div
              class="show-some"
              v-if="activeIndex !== 'brand'"
            >
              <div class="plist">
                <span
                  v-for="brandList in tempaltes.brand"
                  :key="brandList.id"
                  @click="addSelect('brand', { id: brandList.id, name: brandList.name })"
                >
                  {{ brandList.name }}
                </span>
              </div>
              <div class="option clearfix">
                <span
                  class="multiple"
                  @click="mulShow($event, 'brand')"
                ><i class="iconfont icon-jia"></i> 多选</span>
                <!-- <span class="more">更多 <i class="iconfont icon-xiala-"></i></span> -->
              </div>
            </div>
            <div
              class="show-all"
              v-else
            >
              <div class="plist">
                <span
                  v-for="brandList in tempaltes.brand"
                  :key="brandList.id"
                  @click="addSelect2($event, 'brand', { id: brandList.id, name: brandList.name })"
                >
                  {{ brandList.name }}
                </span>
              </div>
              <div class="op-btn">
                <button>确定</button>
                <button @click="mulCancel($event, index)">取消</button>
              </div>
            </div>

            <!-- <div >
              <p @click="mulClose('brand')">品牌多选列表</p>
            </div> -->
          </div>
        </div>

      </li>
      <li
        class="category"
        v-if="!tempaltes.selectedOptions.category.third"
      >
        <div class="left">分类：</div>
        <div class="right">
          <div class="plist-wrap">
            <div class="show-some">
              <div class="plist">
                <template v-if="!tempaltes.selectedOptions.category.first">
                  <span
                    v-for="categoryList in tempaltes.category.firstCategory"
                    :key="categoryList.id"
                    @click="selectCategory('firstCategory', categoryList.id)"
                  >
                    {{ categoryList.name }}
                  </span>
                </template>
                <template v-else-if="!tempaltes.selectedOptions.category.second">
                  <span
                    v-for="categoryList in tempaltes.category.secondCategory"
                    :key="categoryList.id"
                    @click="selectCategory('secondCategory', categoryList.id)"
                  >
                    {{ categoryList.name }}
                  </span>
                </template>
                <template v-else>
                  <span
                    v-for="categoryList in tempaltes.category.thirdCategory"
                    :key="categoryList.id"
                    @click="selectCategory('thirdCategory', categoryList.id)"
                  >
                    {{ categoryList.name }}
                  </span>
                </template>
              </div>
              <div class="option clearfix">
              </div>
            </div>
          </div>
        </div>

      </li>
      <!-- 常规选项 -->
      <!-- 文中所示： !~val === if(val === -1) === 对象中不存在此值 -->
      <li
        v-for="(propertyList, index) in tempaltes.property"
        :key="propertyList.propertyId"
        v-if="!~tempaltes.selectedOptions.property.findIndex( val => {return val.key.propertyId === propertyList.propertyId})"
      >
        <div class="left">{{ propertyList.propertyName }}：</div>
        <div class="right">
          <div class="plist-wrap">
            <div
              class="show-some"
              v-if="activeIndex !== index"
            >
              <div class="plist">
                <span
                  v-for="propertyItem in propertyList.propertyValue"
                  :key="propertyItem.id"
                  @click="addSelect('property', { 
                  key: { propertyId: propertyList.propertyId, propertyName: propertyList.propertyName },
                  value: { id: propertyItem.id, name: propertyItem.name }
                  } )"
                >
                  {{propertyItem.name}}
                </span>
              </div>
              <div class="option clearfix">
                <span
                  v-if="propertyList.multipleAble"
                  @click="mulShow($event, index)"
                  class="multiple"
                >
                  <i class="iconfont icon-jia"></i> 多选
                </span>
                <!-- <span
                  class="more"
                  @click="more"
                >
                  更多 <i class="iconfont icon-xiala-"></i>
                </span> -->
              </div>
            </div>

            <div
              class="show-all"
              v-else
            >
              <div class="plist">
                <span
                  v-for="propertyItem in propertyList.propertyValue"
                  :key="propertyItem.id"
                  @click="addSelect2( $event, 'property',  { 
                  key: { propertyId: propertyList.propertyId, propertyName: propertyList.propertyName },
                  value: { id: propertyItem.id, name: propertyItem.name }
                  } )"
                >
                  {{propertyItem.name}}
                </span>
              </div>
              <div class="op-btn">
                <button @click="mulConfirm('property')">确定</button>
                <button @click="mulCancel($event)">取消</button>
              </div>
            </div>
          </div>

        </div>
      </li>

      <li
        class="where-hourse"
        v-if="tempaltes.selectedOptions.whereHouse.length === 0"
      >
        <div class="left">发货地：</div>
        <div class="right">
          <div class="plist-wrap">
            <div class="show-some">
              <div class="plist">
                <span
                  v-for="whereHourseList in tempaltes.whereHouse"
                  :key="whereHourseList.id"
                  @click="addSelect('whereHouse', { id: whereHourseList.id, name: whereHourseList.name })"
                >
                  {{ whereHourseList.name }}
                </span>
              </div>
              <div class="option clearfix">
                <!-- <span class="multiple"><i class="iconfont icon-jia"></i> 多选</span> -->
              </div>
            </div>
          </div>

        </div>

      </li>
    </ul>
  </div>
</template>

<script>
import { deepClone } from "@/assets/js/untils"
import { mapState } from 'vuex'
import { mapGetter } from 'vuex'
export default {
  name: "SelectCondition",
  data() {
    return {
      activeIndex: -1,
      // isPlistSelect: false,
      tmpSelect: []
    }
  },
  props: {
    mode: {
      type: String
    }
  },
  computed: {
    ...mapState({
      config: state => state.list.config,
      tempaltes: state => state.list.goodsInfo.templates
    })
  },
  methods: {
    mulShow(event, index) {
      const node = event.currentTarget;
      this.activeIndex = index
      this.tmpSelect = []
      // console.log(node.parentNode.nodeName)
      console.log(node.parentNode.previousSibling.previousSibling)
    },
    mulCancel(index) {

      this.activeIndex = -1
      this.tmpSelect = []
    },
    mulConfirm(flag) {
      // 循环遍历选中选项
      for (let index = 0; index < this.tmpSelect.length; index++) {
        const element = this.tmpSelect[index];
        // 为每个选项执行 addSelect 操作
        this.$store.dispatch('addSelect', { key: flag, value: element })
      }
      this.tmpSelect = []
      // 跳转
      this.goTo()
    },
    propertyItemSelect(keyId, valueId) {
      console.log(`当前属性的 ID 为： ${keyId}_${valueId}`)
    },
    // more(event) {
    //   event.currentTarget.parentElement.previousElementSibling.
    //     console.log(event.currentTarget.parentElement.previousElementSibling)
    // },
    clearSelect() {
      if(this.mode === 'search') {
        this.$store.commit('clearSelectBySearch')
      } else {
        this.$store.commit('clearSelect')
      }
      this.goTo()
    },
    delSelect(flag, propertyId) {
      this.$store.dispatch('delSelect', { key: flag, value: propertyId })
      this.goTo()
    },
    addSelect(flag, payload) {
      this.$store.dispatch('addSelect', { key: flag, value: payload })
      this.goTo()
    },
    addSelect2(event, flag, payload) {
      let index = -1
      index = this.tmpSelect.findIndex(val => {
        return val.value.id === payload.value.id
      })
      if (index != -1) {
        event.currentTarget.classList.remove("active")
        this.tmpSelect.splice(index, 1);
        console.log("本来选中，现在删除")
      } else {
        event.currentTarget.classList.add("active")
        this.tmpSelect.push(payload)
        console.log("本来未选中，现在添加")
      }
    },
    selectCategory(flag, payload) {
      console.log(payload)
      this.$store.dispatch('selectCategory', { key: flag, value: payload })
      this.goTo()
    },
    goTo() {
      console.log(this.config)
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
.select-condition {
  background: #fff;

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    font-size: 12px;

    li {
      display: flex;
      border-bottom: 1px solid #eee;

      justify-content: space-between;

      &.selected {
        overflow: visible;
        height: auto;
        .right {
          // padding: 5px 0 5px 10px;

          .plist {
            > span {
              position: relative;
              padding: 0 10px;
              border: 1px solid red !important;
              color: red;
              line-height: 20px;

              span {
                margin: 0;
                padding: 0;
              }

              i {
                position: absolute;
                top: 0;
                right: 3px;
                font-size: 12px;
                line-height: 23px;
              }
            }
          }
        }
      }

      .left {
        padding-left: 35px;
        width: 100px;
        background: #ccc;
        line-height: 45px;
      }
      .right {
        display: flex;
        flex: 1;

        justify-content: space-between;
        align-items: flex-start;
        .plist-wrap {
          flex: 1;

          .show-some {
            display: flex;

            justify-content: space-between;
            .plist {
              overflow: hidden;
              height: 45px;
            }
            .option {
              width: 80px;
              color: #666;
              line-height: 45px;

              .clearAll {
                width: 80%;
              }

              span {
                display: inline-block;
                // width: 48%;
                cursor: pointer;

                &:hover {
                  color: red;
                }

                i {
                  position: relative;
                  font-size: 12px;
                }
              }
              // span.more {
              //   float: right;
              // }
              // span.multiple {
              //   float: left;
              // }
            }
          }

          .show-all {
            .plist span {
              &.active {
                border: 1px solid red;
                color: red;
              }
              &.active:before {
                position: absolute;
                top: 2px;
                right: 2px;
                content: "×";
                font-size: 14px;
                line-height: 8px;
              }
            }
            .op-btn {
              margin-bottom: 10px;
              button {
                margin: 0 5px;
                padding: 2px 8px;
                border: 1px solid #ccc;
                background: none;
                color: #666;
                font-size: 12px;
                cursor: pointer;
              }
            }
          }

          .plist {
            display: flex;
            flex: 1;
            line-height: 45px;

            flex-wrap: wrap;

            span {
              position: relative;
              display: inline-block;
              margin: 10px;
              padding: 0 20px;
              height: 23px;
              border: 1px solid transparent;
              border-radius: 3px;
              line-height: 23px;
              cursor: pointer;

              &:hover {
                color: red;
              }
            }
          }
        }
      }
    }
  }
}
</style>