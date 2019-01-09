<template>
    <div class="footer-bottom">
        <ul class="link-wrap clearfix">
            <li v-for="(item, index) in links" :key="index">
                <template v-if="item.href">
                    <a :href="item.href">{{ item.name }}</a>
                </template>
                <template v-else>
                    <p>{{ item.name }}</p>
                </template>
            </li>
        </ul>
        <div class="img-wrap">
            <img src="@/assets/img/f_01.jpg" alt="">
            <img src="@/assets/img/f_02.png" alt="">
            <img src="@/assets/img/f_03.jpg" alt="">
            <img src="@/assets/img/f_04.jpg" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'FooterBottom',
    data () {
        return {
            links: [
                {
                    name: "京公安备11010102001392",
                    href: 'http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010102001392'
                },
                {
                    name: " 京ICP证110119号 京ICP备09084709号-3"
                },
                {
                    name: " ISO9001中国质量管理体系认证",
                    href: "http://www.secoo.com/listTop/180712_zlgl.shtml"
                },
                {
                    name: " 出版物经营许可证",
                    href: 'http://www.secoo.com/listTop/180712_publication.shtml'
                },
                {
                    name: " 食品经营许可证",
                    href: "http://www.secoo.com/listTop/180712_foodBlicense.shtml"
                },
                {
                    name: "  京B2-20181305"
                },
                {
                    name: "京食药网食备201810026"
                },
                {
                    name: " 客服电话：400-875-6789"
                },
                {
                    name: " COPYRIGHT © 2010-2018 北京寺库商贸有限公司 版权所有"
                }
            ]
        }
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        float: left;
    }
    li a,
    li p {
        display: inline-block;
        margin: 0 15px;
        font-size: 13px;
        line-height: 35px;
        color: #222;
    }
    li a:hover {
        text-decoration: underline;
    }
    .img-wrap {
        display: flex;
        justify-content: flex-start;
    }
    .img-wrap img {
        margin: 0 10px;
    }
</style>