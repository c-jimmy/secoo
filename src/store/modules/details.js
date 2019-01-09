import axios from 'axios'

const state = {
  details: {
    test: {},
    category: [],
    contentsInfo: {
      id: '',
      name: '',
      price: '',
      count: 1,
      address: '香港',
      state: 1,
      mainImg: '',
      imgs: [],
      sku: [],
    },
    detailsInfo: {
      brand: {
        brandId: null,
        brandName: '',
        brandInfo: {
          proImg: '',
          proName: '',
          proDesc: ''
        }
      },
      params: [],
      details: ''
    }
  }
}

const mutations = {

}

const actions = {
  detailsGetData({ state, commit }, goodsId) {
    axios.get(`/details/${goodsId}`).then( res => {
      state.details = res.data.data
    }).catch((err) => {
      console.log(err)
    })
  }
}

export default {
  state,
  mutations,
  actions
}
