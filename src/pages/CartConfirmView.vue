<template>
  <div class="cart-view">
    <header-bar mode='cart'>
      <img
        src="@/assets/img/cart/cartbg2.jpg"
        alt=""
      >
    </header-bar>
    <main class="cart-wrap">
      <cart-confirm></cart-confirm>
    </main>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/Common/HeaderBar'
import FooterBar from '@/components/Common/FooterBar'
import CartConfirm from '@/components/Cart/CartConfirm'
export default {
  components: { HeaderBar, FooterBar, CartConfirm }
}
</script>

<style lang="scss" scoped>
.cart-view {
  background: #f6f6f6;

  .cart-wrap {
    width: 990px;
    margin: 0 auto;
  }
}
</style>