<template>
    <div class="header-nav">
        <div class="full-wrap">
            <div class="wide-wrap">
                <ul class="clearfix">
                    <li 
                        v-for="item in navList" 
                        :key="item.navId"
                        @mouseenter="hoverIn($event, item )"
                        @mouseleave="hoverOut($event)"
                        @click="menuClick(item)">
                        <router-link to="">{{item.navName}}</router-link>
                    </li>
                </ul>
                <el-form @submit.native.prevent>
                    <el-input
                        placeholder="搜索商品、品牌"
                        suffix-icon="el-icon-search"
                        v-model.trim="searchStr"
                        @keyup.enter.native="onSubmit"
                        @change.native="onSubmit">
                    </el-input>
                </el-form>
                
                <!-- <form>
                    <input type="text" placehodler="placeHolderInfo">
                    <i class="el-icon-search"></i>
                </form> -->
            </div>
        </div>
        
        <header-sub-nav 
            ref='subNav' id="subNav" class='subNav'
            :subNavList="currentDetail" 
            @subNavHoverOut="subNavHoverOut">
        </header-sub-nav>
    </div>
</template>

<script>
import { mapState } from "vuex"
import HeaderSubNav from '@/components/Common/HeaderSubNav'

export default {
    name: 'HeaderNav',
    components: { HeaderSubNav },
    data () {
        return {
            searchStr: '',
            currentDetail: '',
            placeHolderInfo: 'Roger Vivier',
            navList:[]
        }
    },
    computed: {
        ...mapState({
            config: state => state.list.config
        })
    },
    methods: {
        onSubmit() {
            if(this.searchStr) {
                this.$router.push(`/search?keyword=${this.searchStr}`)
            }
        },
        hoverIn(event, payload) {
            this.$store.commit('setConfig', { key: 'firstCategory' , value: payload.navId })
            this.currentDetail = payload.navDetail ? {...payload.navDetail} : '';
        },
        hoverOut(event) {
            if(event.relatedTarget.id !== this.$refs.subNav.$attrs.id)
            this.currentDetail = ''
        },
        menuClick(payload) {
            if(payload.navName === '首页') {
                this.$router.push('/home')
            } else {
                this.$store.commit('setConfig', { key: 'firstCategory' , value: payload.navId })
                this.goto()
            }
        },
        subNavHoverOut() {
            this.currentDetail = ''
        },
        goto() {
            this.$router.push(`/list/${this.config.firstCategory}-${this.config.secondCategory}-${this.config.thirdCategory}-${this.config.brandId}-${this.config.orderType}-${this.config.pageNo}-${this.config.pageSize}-${this.config.price}-${this.config.prop}-${this.config.whereHouse}-${this.config.source}`);
        }
    },
    mounted() {
        let _this = this;
        this.axios.get('/header')
            .then( (res) => {
                _this.navList = res.data.data
                console.log(res.data.data)
            }).catch((err) => {
                console.log(err)
            })
    }
}
</script>

<style scoped>
    .header-nav {
        position: relative;
    }
    .full-wrap {

        background: var(--darkBlack);
    }
    .wide-wrap {
        display: flex;
        justify-content: space-around;
        align-items: center;
        text-align: right;
    }
    .subNav {
        position: absolute;
        top: 50px;
        left: 0;
        right: 0;
        z-index:9;
    }
    ul {
        list-style-type: none;
        padding:0;

        margin: 0 0 0 -21px;
    }
    ul li {
        display: inline-block;
        float: left;
    }
    ul li a {
        position: relative;
        display: inline-block;
        line-height: 50px;
        padding: 0 21px;
        color: #fff;
        font-size: 14px;
        text-decoration: none;
        color:var(--mainColor);
    }
    ul li a:hover {
        color: #fff;
    }
    ul li a:hover:before {
        position: absolute;
        content: '';
        width: 0;height: 0;
        left: 50%;bottom: 0;
        transform: translateX(-50%);
        border: 6px solid transparent;
        border-bottom: 6px solid #fff;
    }
    
</style>