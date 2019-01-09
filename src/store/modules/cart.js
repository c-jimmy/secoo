import axios from 'axios'
const state = {
  carts: []
}

const mutations = {
  cartResetCart(state, payload) {
    state.carts = payload.data.carts
  },
  cartChangeSelect(state, index) {
    state.carts[index].isSelected = !state.carts[index].isSelected
  },
  cartAddCount(state, index) {
    console.log("add")
      ++state.carts[index].buyCount
  },
  cartSubtractCount(state, index) {
    console.log("subtract")
      --state.carts[index].buyCount
  },
  cartDel(state, index) {
    console.log("del")
    state.carts.splice(index, 1)
  },
  cartAllUnSelected(state) {
    state.carts.map(val => {
      val.isSelected = false
    })
  },
  cartAllSelected(state) {
    state.carts.map(val => {
      val.isSelected = true
    })
  },
  cartDelSelected(state) {
    const aTmp = state.carts.filter(val => {
      return val.isSelected == false
    })
    state.carts = aTmp
  },
  cartAddList(state, payload) {
    console.log("-------------------")
    console.log(payload.data)
    console.log(state.carts)
    console.log("-------------------")
    // state.carts.push()
    // console.log(state.carts)
    console.log("-------------------")
    
  }


}

const actions = {
  cartGetData({
    commit
  }) {
    axios.get(`/cart`)
      .then(res => {
        commit({
          type: "cartResetCart",
          data: res.data.data
        })
      })
  },
  // 详情页中加入购物车逻辑
  cartAddList({
    commit
  }, payload) {
    console.log("dispatch.........")
    console.log(payload)
    // axios.post('/cart', payload)
    // .then(res => {
    //   console.log(res)
    //   // 实际上应该在此处修改 state
    // }).catch(err => {
    //   console.log(err)
    // })
    commit({
      type: "cartAddList",
      data: payload
    })
  }
}

export default {
  state,
  mutations,
  actions
}
