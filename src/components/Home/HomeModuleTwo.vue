<template>
    <div class="home-module-two">
        <div class="wide-wrap">
            <router-link to="#">
                <img src="@/assets/img/home/home006.jpg" class="img1" alt="">
                <img src="@/assets/img/home/home007.png" class="img2" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeModuleTwo',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .wide-wrap {
        position: relative;
        text-align: left
    }
    .wide-wrap .img2 {
        position: absolute;
        content: '';
        top: 0;
        right: 0
    }
</style>