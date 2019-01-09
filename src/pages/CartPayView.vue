<template>
  <div class="cart-pay-view">
    <header-bar mode='cart'>
      <img
        src="@/assets/img/cart/cartbg3.jpg"
        alt=""
      >
    </header-bar>
    <main class="cart-wrap">
      <cart-pay></cart-pay>
    </main>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/Common/HeaderBar'
import FooterBar from '@/components/Common/FooterBar'
import CartPay from '@/components/Cart/CartPay'
export default {
  components: { HeaderBar, FooterBar, CartPay }
}
</script>

<style lang="scss" scoped>
.cart-pay-view {
  background: #f6f6f6;

  .cart-wrap {
    width: 990px;
    margin: 0 auto;
  }
}
</style>