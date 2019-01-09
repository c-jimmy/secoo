<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
:root{
  --mainColor: #FFB600;
  --mainColor2: #7e68b3;
  --lightBlack: #323232;
  --darkBlack: #1a191e;
  --lightGray: #5d5d5d;
  --darkGray: #666;
  --lightWhite: #1a191e;

}
.wide-wrap {
  width: 1200px;
  margin: 0 auto;
}
.narrow-wrap {
  width: 990px;
  margin: 0 auto;
}
body {
  margin: 0;
  padding: 0;
  font-family: Microsoft YaHei,tahoma,arial,Hiragino Sans GB;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
a {
  text-decoration: none;
}
.clearfix:after{
  content: "020"; 
  display: block; 
  height: 0; 
  clear: both; 
  visibility: hidden;  
}

.clearfix {
/* 触发 hasLayout */ 
zoom: 1; 
}

/*下拉框子列表背景也文字颜色*/
.el-dropdown-menu__item:focus, .el-dropdown-menu__item:not(.is-disabled):hover {
  color: var(--mainColor);
  background: #f5f5f5;
}
.el-input.is-active .el-input__inner, .el-input__inner:focus {
  border-color: var(--mainColor);
}
.el-checkbox__input.is-checked .el-checkbox__inner, .el-checkbox__input.is-indeterminate .el-checkbox__inner {
  background: var(--mainColor);
  border-color: var(--mainColor);
}
.el-input-number__decrease:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled), .el-input-number__increase:hover:not(.is-disabled)~.el-input .el-input__inner:not(.is-disabled) {
  border-color: var(--mainColor2);
}

.switch-wrap .el-switch.is-checked .el-switch__core {
  background: var(--mainColor);
  border-color: var(--mainColor);
}
.el-button--warning {
  background: var(--mainColor);
  border-color: var(--mainColor);
}

.el-checkbox__input.is-focus .el-checkbox__inner,
.el-checkbox__inner:hover {
  border-color: var(--mainColor);
}
.el-breadcrumb__inner a:hover, .el-breadcrumb__inner.is-link:hover {
color: var(--mainColor2);
}


.product-list .el-pagination.is-background .el-pager li:not(.disabled).active {
  background: #E93B39!important;
}
.product-list .el-pagination.is-background .el-pager li:not(.disabled):hover {
  color: #E93B39!important;
}
</style>
