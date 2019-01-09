<template>
    <div class="header-sub-nav" 
        v-if="isShow"
        @mouseenter="hoverIn"
        @mouseleave="hoverOut">
        <div class="wide-wrap">
            <!-- 这个是header-sub-nav模块 -->
            <div class="category">
                <h2>分类</h2>
                <div class="category-lists">
                    <router-link  v-for="item in subNavList.category" :key="item.categoryId" :to="{path: `/list/${config.firstCategory}-${item.categoryId}-0-0-1-1-40-0-0-0-0`}">
                        {{ item.categoryName }}
                    </router-link>
                </div>
            </div>
            <div class="brand">
                <h2>品牌</h2>
                <div class="brand-lists">
                    <router-link v-for="item in subNavList.brand" :key="item.brandId" :to="{path: `/list/${config.firstCategory}-0-0-${item.brandId}-1-1-40-0-0-0-0`}">
                        {{ item.brandName }}
                    </router-link>
                </div>
            </div>
            <div class="keyword">
                <h2>热词</h2>
                <div class="brand-lists">
                    <router-link v-for="(item, index) in subNavList.keyword" :key="index" :to="{path: `/search?keyword=${item}&firstCategory=${config.firstCategory}&secondCategory=0&thirdCategory=0&brandId=0&orderType=1&pageNo=1&pageSize=40&price=0&prop=0&whereHouse=0&source=0`}">
                        {{ item }}
                    </router-link>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name: 'HeaderSubNav',
    props: ["subNavList"],
    data () {
        return {
           isHover: false
        }
    },
    computed: {
        ...mapState({
            config: state => state.list.config
        }),
        isShow() {
            return this.subNavList || this.isHover
        }
    },
    methods: {
        hoverIn() {
            this.isHover = true
        },
        hoverOut() {
            this.isHover = false
            this.$emit('subNavHoverOut')
        },
        // goto() {
        //     this.$router.push(`/list/${this.config.firstCategory}-${this.config.secondCategory}-${this.config.thirdCategory}-${this.config.brandId}-${this.config.orderType}-${this.config.pageNo}-${this.config.pageSize}-${this.config.price}-${this.config.prop}-${this.config.whereHouse}-${this.config.source}`);
        // }
    },
    mounted() {

    }
}
</script>

<style scoped>
    .header-sub-nav {
        background: rgba(255, 255, 255, .95);
        padding-top: 30px;
        padding-bottom: 50px;
        border-bottom: 2px solid var(--mainColor)
    }
    .wide-wrap {
        display: flex;
        justify-content: space-between;
    }
    .wide-wrap h2 {
        font-size: 14px;
        font-weight: bold;
    }
    .wide-wrap a {
        font-size: 13px;
        text-decoration: none;

        display: inline-block;
        width: 49%;
        line-height: 32px;
        color: var(--darkBlack);
    }
    .wide-wrap a:hover {
        color:var(--mainColor);
        text-decoration: underline;

    }
    .category,
    .brand,
    .keyword {
        width: 25%;
        text-align: left;
    }
</style>