<template>
    <div class="home-module-four">
        <div class="wide-wrap">
            <div class="logo-wrap">
                <img src="@/assets/img/home/secoo.png" alt="">
            </div>
            <div class="list-info">
                <router-link to="#">
                    <img src="@/assets/img/home/home011.jpg" alt="">
                </router-link>
                <router-link to="#">
                    <img src="@/assets/img/home/home012.jpg" alt="">
                </router-link>
                <router-link to="#">
                    <img src="@/assets/img/home/home013.jpg" alt="">
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeModuleFour',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .home-module-four {
        background: var(--mainColor);
        padding-top: 60px;
    }
    .logo-wrap {
        text-align: center;
    }
    .list-info {
        display: flex;
        justify-content: space-between;
        margin-top: 50px;
    }
</style>