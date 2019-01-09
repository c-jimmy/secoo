<template>
  <div>
    <!-- <h1>Thisi is Cart Pay</h1> -->
    <div class="info-wrap">
      <img
        src="@/assets/img/cart/cart01.jpg"
        alt=""
      >
      <p class="line1">订单提交成功，请您尽快付款！</p>
      <p class="line2">订单号：<span>1087969012077</span>应付金额：<span class="price">82,064.65元</span></p>
      <div class="notice">
        <p>由于外汇波动较大，为保证商品价格变动不影响您的订单，请您尽快完成订单支付。</p>
        <p>请您在60分钟之内完成支付，否则订单会被自动取消。</p>
      </div>
    </div>

    <div class="pay-mode">
      <el-tabs type="border-card">
        <el-tab-pane label="储蓄卡">
          <div class="pane-body pane-body1">
            <p>快捷支付无需开通网银也能支付</p>
            <div class="bank-list">
              <div class="jt"><input
                  type="radio"
                  name="bankCxk"
                  value="jt"
                ><i class="bank"></i></div>
              <div class="gs"><input
                  type="radio"
                  name="bankCxk"
                  value="gs"
                ><i class="bank"></i></div>
              <div class="pf"><input
                  type="radio"
                  name="bankCxk"
                  value="pf"
                ><i class="bank"></i></div>
              <div class="ny"><input
                  type="radio"
                  name="bankCxk"
                  value="ny"
                ><i class="bank"></i></div>
              <div class="js"><input
                  type="radio"
                  name="bankCxk"
                  value="js"
                ><i class="bank"></i></div>
              <div class="zg"><input
                  type="radio"
                  name="bankCxk"
                  value="zg"
                ><i class="bank"></i></div>
              <div class="zs"><input
                  type="radio"
                  name="bankCxk"
                  value="zs"
                ><i class="bank"></i></div>
              <div class="hx"><input
                  type="radio"
                  name="bankCxk"
                  value="hx"
                ><i class="bank"></i></div>
            </div>
            <button class="payNow">立即支付</button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="信用卡">
          <div class="pane-body pane-body2">
            <p>快捷支付无需开通网银也能支付</p>
            <div class="bank-list">
              <div class="jt"><input
                  type="radio"
                  name="bankCxk"
                  value="jt"
                ><i class="bank"></i></div>
              <div class="gs"><input
                  type="radio"
                  name="bankCxk"
                  value="gs"
                ><i class="bank"></i></div>
            </div>
            <button class="payNow">立即支付</button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="信用卡分期">
          <div class="pane-body pane-body3">
            <p>银行卡分期</p>
            <div class="bank-list">
              <div class="jt"><input
                  type="radio"
                  name="bankCxk"
                  value="jt"
                ><i class="bank"></i></div>
            </div>
            <button class="payNow">立即支付</button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="支付宝">
          <div class="pane-body pane-body4">
            支付宝
          </div>
        </el-tab-pane>
        <el-tab-pane label="微信支付">
          <div class="pane-body pane-body5">
            微信支付
          </div>
        </el-tab-pane>
        <el-tab-pane label="网银支付">
          <div class="pane-body pane-body6">
            网银支付
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },

}
</script>

<style lang="scss" scoped>
.info-wrap {
  margin-top: 30px;
  border: 1px solid #ebebeb;
  background: #fff;
  text-align: left;
  padding: 30px 55px;

  img {
    float: left;
    margin-right: 15px;
  }
  p {
    margin-top: 0;
  }
  .line1 {
    font-size: 18px;
    font-family: microsoft yahei;
    font-weight: bold;
    color: #333;
    padding: 0 5px;
  }
  .line2 {
    font-size: 14px;
    font-weight: bold;
    font-family: microsoft yahei;

    span {
      display: inline-block;
      margin-right: 15px;
      color: #c69c6d;

      &.price {
        color: #e93b39;
      }
    }
  }
  .notice p {
    font-size: 12px;
    color: #999;
    margin: 0;
    line-height: 20px;
  }
}
.pay-mode {
  margin-top: 10px;
  text-align: left;
  p {
    text-indent: 5px;
    font-size: 12px;
    color: #666;
  }
  .pane-body {
    padding: 15px 55px 30px;
  }

  .bank-list {
    display: flex;
    flex-wrap: wrap;

    > div {
      width: 25%;
      display: flex;
      align-items: center;
      input {
        margin-right: 8px;
      }
      i {
        margin: 10px 0;
        display: inline-block;
        width: 150px;
        height: 28px;
        padding: 5px;
        border: 1px solid #ebebeb;
        background: url("~@/assets/img/cart/bank001.png") 10px center no-repeat;
        background-size: auto 100%;
      }
    }
    .jt i {
      background: url("~@/assets/img/cart/bank001.png") 10px center no-repeat;
      background-size: auto 100%;
    }
  }
}
</style>