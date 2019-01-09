<template>
  <div class="login-register">
    <header-bar mode='loginRegister' />
    <main class="clearfix wide-wrap">
      <div class="left-wrap">
        <slot>默认内容</slot>
      </div>
    </main>
    <footer-bar />
  </div>
</template>

<script>
  import HeaderBar from '@/components/Common/HeaderBar'
  import FooterBar from '@/components/Common/FooterBar'
  export default {
    name: 'LoginRegister',
    components: {
      HeaderBar,
      FooterBar
    },
    data() {
      return {

      }
    }
  }

</script>

<style scoped>
  .login-register {
    background: #FDF8F4 url('~@/assets/img/login-bg.jpg') no-repeat center top;
  }

  main {
    height: 720px;
    display: flex;
    justify-content: flex-end;

    align-items: center;
  }

  .left-wrap {
    margin: 0;
    padding: 45px 35px;
    width: 380px;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0 0 4px 0 var(--mainColor);
    box-sizing: border-box;
  }

  .left-wrap p {
    font-size: 13px;
    color: #999;
  }

  .left-wrap p a {
    color: var(--mainColor);
  }

</style>
