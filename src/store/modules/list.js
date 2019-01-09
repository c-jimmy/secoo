import axios from 'axios'

const state = {
  config: {
    keyword: '',
    firstCategory: 0,   // 一级分类
    secondCategory: 0,  // 二级分类 
    thirdCategory: 0,   // 三级分类
    brandId: 0,         // 品牌 ID
    orderType: 1,       // 排序方式：1综合 2人气 3新品 4销量 5折扣 6价格低到高 7价格高到低
    pageNo: 1,          // 页码
    pageSize: 40,       // 每页显示商品数量
    price: 0,           // 价格区间 eg: 100_10000
    prop: 0,            // 属性   eg: 1356_1_1250_3_4512_15
    whereHouse: 0,      // 发货地  eg: 1：大陆  2：香港  3：美国 （可多选 eg: 1_2_4）
    source: 0           // 标签  eg: 1：新到商品  2：促销商品  3：海外直邮（可多选 eg: 1_2_3）
  },
  goodsInfo: {
    goods: {
      total: '',
      goodsList: []
    },
    templates: {
      brand: [],
      category: {
        firstCategory: [],
        secondCategory: [],
        thirdCategory: []
      },
      property: [],
      whereHouse: [],
      selectedOptions: {
        brand: [],
        category: {},
        property: [],
        whereHouse: []
      }
    }
  }
}

const mutations = {
  setConfig(state, payload) {
    
    state.config[payload.key] = payload.value
  },
  setGoodsList(state, payload) {
    state.goodsInfo = payload.data
  },
  // 清除条件
  clearSelect() {
    this.commit('setConfig', { key: "brandId", value: 0 })
    this.commit('setConfig', { key: "prop", value: '0' })
    this.commit('setConfig', { key: "whereHouse", value: 0 })
  },
  // 清除条件
  clearSelectBySearch() {
    this.commit('setConfig', { key: "brandId", value: 0 })
    this.commit('setConfig', { key: "prop", value: '0' })
    this.commit('setConfig', { key: "whereHouse", value: 0 })
    this.commit('setConfig', { key: "firstCategory", value: 0 })
    this.commit('setConfig', { key: "secondCategory", value: 0 })
    this.commit('setConfig', { key: "thirdCategory", value: 0 })
  },
  demo() {
    console.log("this is list mutation function")
  }
}

const actions = {

  // 根据 config 值发送请求获取数据
  getGoodsData({ state, commit }) {
    console.log(state.config)
    axios.get(`/list/${state.config.firstCategory}-${state.config.secondCategory}-${state.config.thirdCategory}-${state.config.brandId}-${state.config.orderType}-${state.config.pageNo}-${state.config.pageSize}-${state.config.price}-${state.config.prop}-${state.config.whereHouse}-${state.config.source}`)
    .then(res => {
      commit({
        type: "setGoodsList",
        data: res.data.data
      })
    })
  },
  getGoodsBySearch({ state, commit }) {
    axios.get(`/search?${state.config.keyword !== ''?'keyword='+state.config.keyword:''}${state.config.firstCategory !== ''?'&firstCategory='+state.config.firstCategory:0}${state.config.secondCategory !== ''?'&secondCategory='+state.config.secondCategory:0}${state.config.thirdCategory !== ''?'&thirdCategory='+state.config.thirdCategory:0}${state.config.brandId !== ''?'&brandId='+state.config.brandId:0}${state.config.orderType !== ''?'&orderType='+state.config.orderType:1}${state.config.pageNo !== ''?'&pageNo='+state.config.pageNo:1}${state.config.pageSize !== ''?'&pageSize='+state.config.pageSize:40}${state.config.price !== ''?'&price='+state.config.price:0}${state.config.prop !== ''?'&prop='+state.config.prop:0}${state.config.whereHouse !== ''?'&whereHouse='+state.config.whereHouse:0}${state.config.source !== ''?'&source='+state.config.source:0}
`)
    .then(res => {
      commit({
        type: "setGoodsList",
        data: res.data.data
      })
    })
  },
  // 清除条件
  clearSelect({ commit, dispatch }) {
    commit('setConfig', { key: "brandId", value: 0 })
    commit('setConfig', { key: "prop", value: '0' })
    commit('setConfig', { key: "whereHouse", value: 0 })
  },
  // 添加选择
  addSelect({ state, commit, dispatch }, payload) {
    let aProp
    if (payload.key === 'brand') {
      commit('setConfig', { key: "brandId", value: payload.value.id })
    } else if(payload.key === 'whereHouse') {
      commit('setConfig', { key: "whereHouse", value: payload.value.id })
    } else {
      if (state.config.prop === '0') {
        commit('setConfig', {
          key: "prop",
          value: `${payload.value.key.propertyId}_${payload.value.value.id}`
        })
      } else {
        aProp = state.config.prop.replace(/(\d+)_(\d+)_/g, "$1_$2\,").split(',')
        aProp.push(`${payload.value.key.propertyId}_${payload.value.value.id}`)
        commit('setConfig', {
          key: "prop",
          value: aProp.join('_')
        })
      }
    }
  },
  // 删除选择
  delSelect({ state, commit, dispatch }, payload) {
    let aProp
    let newAProp

    if ( payload.key === "property") {
      aProp = state.config.prop.replace(/(\d+)_(\d+)_/g, "$1_$2\,").split(',')
      newAProp = aProp.filter( val => {
        let aTmp = val.split('_')
        if (aTmp[0] != payload.value) {
          return val
        }
      })
      commit('setConfig', {  key: "prop", value: newAProp.join('_') })
    } else {
      commit('setConfig', {
        key: payload.key,
        value: 0
      })
    }
  },
  // delSelect({ state, commit, dispatch }, payload) {
  //   let aProp
  //   let newAProp
  //   if(payload.key === 'brand') {
  //     commit('setConfig', { key: "brandId", value: 0 })
  //   } else if(payload.key === 'whereHouse') {
  //      commit('setConfig', { key: "whereHouse", value: 0 })
  //   } else {
  //     aProp = state.config.prop.replace(/(\d+)_(\d+)_/g, "$1_$2\,").split(',')
  //     newAProp = aProp.filter( val => {
  //       let aTmp = val.split('_')
  //       if (aTmp[0] != payload.value) {
  //         return val
  //       }
  //     })
  //     commit('setConfig', {  key: "prop", value: newAProp.join('_') })
  //   }
  // },
  // 选择分类
  selectCategory({ state, commit, dispatch }, payload) {
    console.log("payload 的值是："+ payload)
    commit('setConfig', {
      key: payload.key,
      value: payload.value
    })
  }
}

export default {
  state,
  mutations,
  actions
}
