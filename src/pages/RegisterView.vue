<template>
    <div class="register-view">
        <login-register>
            <slot>
                <el-form>
                    <el-form-item label="用户名" prop="user">
                        <el-input type="text" v-model="userName" placeholder="用户名"></el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="pass">
                        <el-input type="password" v-model="password" autocomplete="off" placeholder="密码"></el-input>
                    </el-form-item>
                    <el-form-item label="确认密码" prop="checkPass">
                        <el-input type="password" v-model="checkPass" autocomplete="off" placeholder="确认密码"></el-input>
                    </el-form-item>

                    <el-form-item>
                        <el-button class="submit" :span="24" type="warning" @click="onSubmit">立即注册</el-button>
                    </el-form-item>
                </el-form>
                <div class="isRead">
                    <el-checkbox v-model="checked" class="isReadBox" />
                    我已阅读并同意<router-link to="">《寺库网用户注册协议》</router-link>
                </div>
                <p>已经是寺库会员？ <router-link :to="'/login'">立即登录</router-link></p>
            </slot>
        </login-register>
    </div>
</template>

<script>
import LoginRegister from '@/components/LoginRegister'

export default {
    name: 'RegisterView',
    components: {
        LoginRegister
    },
    data () {
        return {
            userName: '',
            password: '',
            checkPass: '',
            checked: true
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
    >>> .submit {
        width: 100%;
    }
    .isRead {
        text-align: left;
        font-size: 13px;
        color: #999;
    }
    .isRead a {
        color: var(--mainColor);
    }
    .isReadBox {
        position: relative;
        top:-1px;
    }
</style>