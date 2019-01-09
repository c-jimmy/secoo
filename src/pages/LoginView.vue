<template>
  <div class="login-view">
    <login-register abc="login">
      <slot>
        <el-form>
          <el-form-item label="用户名" prop="user">
            <el-input type="text" v-model="userName" placeholder="用户名"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input type="password" v-model="password" autocomplete="off" placeholder="密码"></el-input>
          </el-form-item>
          <el-form-item label="记住账号" class="switch-wrap">
            <el-switch v-model="remember"></el-switch>
          </el-form-item>
          <el-form-item>
            <el-button class="submit" :span="24" type="warning" @click="onSubmit">立即登录</el-button>
          </el-form-item>
        </el-form>
        <p>还不是寺库会员？ <router-link :to="'/register'">立即注册</router-link>
        </p>
      </slot>
    </login-register>
  </div>
</template>

<script>
  import LoginRegister from '@/components/LoginRegister'

  export default {
    name: 'LoginView',
    components: {
      LoginRegister
    },
    data() {
      return {
        userName: '',
        password: '',
        remember: true
      }
    },
    methods: {
      onSubmit() {
        console.log('登录')
      }
    }
  }

</script>

<style scoped>
  >>>.switch-wrap {
    text-align: left;
  }

  >>>.submit {
    width: 100%;
  }

</style>
