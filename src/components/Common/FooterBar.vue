<template>
    <div class="footer-com">
        <div class="wide-wrap">
            <div class="footer-nav">
                <div class="left">
                    <h4>服务指南</h4>
                    <div class="info-wrap">
                        <router-link to="#">Investors</router-link>
                        <router-link to="#">物流配送</router-link>
                        <router-link to="#">售后服务</router-link>
                        <router-link to="#">联系我们</router-link>
                        <router-link to="#">加入我们</router-link>
                        <router-link to="#">帮助</router-link>
                        <router-link to="#">寺库招商</router-link>
                    </div>
                </div>
                <div class="center">
                    <h4>公共媒体</h4>
                    <div class="logo-bottom">
                        <img src="@/assets/img/home/footer-logo.png" alt="">
                        <div class="info-wrap">
                            <pop-eq class="eq">
                                <img src="@/assets/img/home/eq1.png" slot="img" alt="">
                                <span slot="info"><i class="iconfont icon-weibo"></i>微博</span>
                            </pop-eq>
                            <pop-eq class="eq">
                                <img src="@/assets/img/home/eq2.png" slot="img" alt="">
                                <span slot="info"><i class="iconfont icon-weixin"></i>微信</span>
                            </pop-eq>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <h4>我们的APP</h4>
                    <div class="info-wrap">
                        <pop-eq>
                            <img src="@/assets/img/home/eq3.png" slot="img" alt="">
                            <span slot="info">寺库商城</span>
                        </pop-eq>
                        <pop-eq>
                            <img src="@/assets/img/home/eq4.png" slot="img" alt="">
                            <span slot="info">Try Try</span>
                        </pop-eq>
                        <pop-eq>
                            <img src="@/assets/img/home/eq5.png" slot="img" alt="">
                            <span slot="info">寺库艺术</span>
                        </pop-eq>
                    </div>
                </div>
            </div>
            <footer-bottom/>
        </div>
    </div>
</template>

<script>
import PopEq from "@/components/Common/PopEq"
import FooterBottom from "@/components/Common/FooterBottom"
export default {
    name: 'FooterCom',
    components: { PopEq, FooterBottom },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .footer-com {
        background: var(--mainColor);
        padding: 35px 0 50px;
    }
    .footer-nav {
        display: flex;
        justify-content: space-between;
    }
    .footer-nav .left,
    .footer-nav .right {
        width: 300px;
    }
    .footer-nav .center {
        flex: 1;
    }
    .logo-bottom {
        position: relative;
        width: 100%;
    }


    .logo-bottom .info-wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        width: 100%;
        transform: translate(-50%, -50%);
        display: flex;
        justify-content: space-around;
    }
    .footer-nav .left .info-wrap {
        display: flex;
        flex-wrap: wrap;
    }
    .footer-nav h4 {
        color: #222;
        font-family: "微软雅黑";
        font-weight: inherit;
    }
    .footer-nav .left a {
        display: inline-block;
        font-family: "微软雅黑";
        width: 135px;
        line-height: 36px;
        font-size: 13px;
        color: #222;
        text-align: left;
    }
    .footer-nav .left a:hover {
        text-decoration: underline;
    }
    .footer-nav .left {
        text-align: left;
    }
    .footer-nav .right {
        text-align: right;
    }

</style>