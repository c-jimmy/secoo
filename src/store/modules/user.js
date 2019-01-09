const state = {
    "userId": 132151,
    "userInfo": {
      "userName": "CB54545464", // 用户名
      "nickName": "不吃海鲜", //  昵称
      "email": "xxxxx.@qq.com",
      "tel": "185****0505",
      "avatar": "url.......xxx.jpg",
      "sex": "women/men",
      "birthday": "",
      "address": {
        "default": "xxxxxxxxxxxxxx",
        "list": [
          "收货地址111111",
          "收货地址222222",
          "收货地址333333"
        ]
      },
      "tags": [
        "自由职业", "处女座", "企业高管"
      ]
    },
    // 消息中心
    "messages": {
      "customer": {
        // 客服中心
      },
      "logistic": {
        // 物流助手
      },
      "systems": {
        // 系统消息
      }
    },
    // 订单中心
    "orders": {
      // 我的订单（待支付订单，待收货订单，待评价的订单，退货单，全部订单）
      "unpaidOrders": [
        // 未支付订单
      ],
      "undeliveredOrders": [
        // 未发货订单
      ],
      "unevaluatedOrders": [
        // 未评价订单
      ],
      "returnOrders": [
        // 退货订单
      ],
      "allOrders": [
        // 全部订单
      ]

    },
    // 我的收藏(商品)
    "collects": [{
      "goodsId": 53152151510302,
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "time": 65413151321561,
      "sku": ["黑色", "36"]
    }, {
      "goodsId": 53152151510302,
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "time": 65413151321561,
      "sku": ["黑色", "36"]
    }],
    // 我的关注（品牌）
    "follow": [

    ],
    // 浏览记录
    "history": [{
      "goodsId": 53152151510302,
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "time": 65413151321561,
    }, {
      "goodsId": 53152151510302,
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "time": 65413151321561,
    }],
    "carts": [{
      "goodsId": 53152151510302, // 商品 ID 为前面10位数，10位后面的则为SKU ID
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "sku": ["黑色", "36"],
      "count": 2,
      "stock": 5, // 库存
      "addTime": 123151215413141521,
      "state": 1 // 1: 正常出售中，0： 产品已失效
    }, {
      "goodsId": 53152151510302,
      "goodsName": "【2018秋冬款】【唐艺昕同款】Everugg澳洲雪地靴品牌中筒靴经典马丁靴11797",
      "goodsImg": "urlxxxxxxxxxx.jpg",
      "price": "798",
      "sku": ["黑色", "36"],
      "count": 2,
      "stock": 5, // 库存
      "addTime": 1231512154131,
      "state": 1 // 1: 正常出售中，0： 产品已失效
    }]

}

const mutations = {

}

const actions = {

}

export default {
  state,
  mutations,
  actions
}