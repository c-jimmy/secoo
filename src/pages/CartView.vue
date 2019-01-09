<template>
  <div class="cart-view">
    <header-bar mode='cart'>
      <img
        src="@/assets/img/cart/cartbg1.jpg"
        alt=""
      >
    </header-bar>
    <main class="cart-wrap">
      <cart-show></cart-show>
    </main>
    <footer-bar />
  </div>
</template>

<script>
import HeaderBar from '@/components/Common/HeaderBar'
import FooterBar from '@/components/Common/FooterBar'
import CartShow from '@/components/Cart/CartShow'
export default {
  components: { HeaderBar, FooterBar, CartShow }
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