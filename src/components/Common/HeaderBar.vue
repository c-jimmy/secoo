<template>
  <div class="header-bar">
    <div
      v-if="mode === 'default'"
      class="basic"
    >
      <div class=" wide-wrap">
        <div class="left">
          <el-dropdown trigger="click">
            <span class="el-dropdown-link">
              中文 <i class="el-icon-caret-bottom"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>中文</el-dropdown-item>
              <el-dropdown-item>En</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span class="rmb">RMB ¥</span>
        </div>
        <div class="center">
          <img
            src="@/assets/img/logo.jpg"
            alt=""
          >
        </div>
        <ul class="right">
          <li>
            <router-link :to="'/login'">登录</router-link>
          </li>
          <li>
            <router-link :to="'/register'">注册</router-link>
          </li>
          <li>
            <router-link to="/cart"><i class="el-icon-goods"></i></router-link>
          </li>
          <li>
            <router-link to=""><i class="el-icon-star-off"></i></router-link>
          </li>
        </ul>
      </div>
      <header-nav></header-nav>
    </div>
    <div
      v-else-if="mode === 'loginRegister'"
      class="special"
    >
      <div class="wide-wrap">
        <div class="left">
          <img
            src="@/assets/img/logo2.png"
            alt=""
          >
        </div>
        <div class="right">
          <ul class="clearfix">
            <li>
              <router-link :to="'/home'">寺库首页</router-link>
            </li>
            <li>
              <router-link to="">收藏寺库</router-link>
            </li>
            <li>
              <router-link to="">寺库 APP</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div
      v-else-if="mode === 'cart'"
      class="cart"
    >
      <div class="cart-wrap">
        <div class="left">
          <router-link :to="{path: '/home'}">
            <img
              src="@/assets/img/logo2.png"
              alt=""
            >
          </router-link>
        </div>
        <div class="right">
          <slot>不同的图片</slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderNav from '@/components/Common/HeaderNav'
export default {
  name: 'HeaderBar',
  components: { HeaderNav },
  props: {
    mode: {
      type: String,
      default: 'default'
    }
  },
  data() {
    return {

    }
  }
}
</script>

<style scoped>
.wide-wrap {
  display: flex;
  justify-content: space-between;
  align-items: center;

  position: relative;
  padding: 0;
}
.basic .wide-wrap {
  box-sizing: border-box;
  height: 130px;
  padding-top: 10px;
}
.basic .left,
.basic .right {
  width: 250px;
}
.basic .left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.basic .left .rmb {
  position: relative;
  top: 2px;
  display: inline-block;
  margin-left: 8px;
  padding-left: 13px;
  font-size: 12px;
  color: #999;
  border-left: 1px solid #999;
}
.basic .right {
  list-style-type: none;
  padding: 0;

  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.basic .right li {
  padding: 0 15px;
  font-size: 14px;
}
.basic .right li a {
  text-decoration: none;
  color: #333;
}
.basic .right li a:hover {
  color: var(--mainColor);
}
.basic .right li i {
  font-size: 24px;
}

.special {
  background: var(--lightBlack);
}
.special .wide-wrap {
  padding: 0;
  height: 70px;
}

.special ul {
  list-style-type: none;
}
.special li {
  float: left;
  line-height: 70px;
}
.special li a {
  padding: 0 15px;
  font-size: 14px;
  color: #888;
}
.special li a:hover {
  color: var(--mainColor);
}

.cart {
    background: var(--lightBlack);
}
.cart-wrap {
    width: 990px;
    height: 70px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
}
</style>