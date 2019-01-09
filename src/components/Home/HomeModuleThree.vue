<template>
    <div class="home-module-three">
        <div class="wide-wrap">
            <router-link to="#">
                <img src="@/assets/img/home/home008.jpg" alt="">
            </router-link>
            <router-link to="#">
                <img src="@/assets/img/home/home009.jpg" alt="">
            </router-link>
            <router-link to="#">
                <img src="@/assets/img/home/home010.jpg" alt="">
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeModuleThree',
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .wide-wrap {
        display: flex;
        justify-content: space-between;
    }
</style>