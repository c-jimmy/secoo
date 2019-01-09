<template>
    <div class="home-module-one">
        <div class="wide-wrap">
            <div class="left">
                <router-link to="">
                    <img src="@/assets/img/home/home001.jpg" class="img1" alt="">
                    <img src="@/assets/img/home/home002.png" class="img2" alt="">
                </router-link>
            </div>
            <div class="right">
                <router-link to="">
                    <div class="right-top">
                        <img src="@/assets/img/home/home003.jpg" class="img3" alt="">
                        <img src="@/assets/img/home/home004.png" class="img4" alt="">
                    </div>
                </router-link>
                    
                <div class="video-wrap">
                    <div class="video-bg" v-if="!isShow" @click="videoStart">
                        <img src="@/assets/img/home/home005.jpg"  class="img5" alt="">
                        <img src="@/assets/img/home/video-play.png"  class="img6" alt="">
                    </div>
                    
                    <video src="https://pic13.secooimg.com/video/productvideo/secoo1111.mp4" controls preload="none" v-else ref="video1" id="video1"></video>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeModuleOne',
    data () {
        return {
            isShow: false,
        }
    },
    methods: {
        videoStart() {
            this.isShow = !this.isShow
            this.$nextTick(() => {
                document.getElementById('video1').play()
            })
        }
    }

}
</script>

<style scoped>
    .home-module-one {
        padding: 20px 0;
    }
    .wide-wrap {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
    .wide-wrap .left {
        width: 530px;
    }
    .wide-wrap .right {
        width: 650px;
    }
    .wide-wrap  .right-top {
        position: relative;
        display: flex;
        flex-flow: column;
        align-items: flex-end;
    }
    .wide-wrap .img2 {
        position: relative;
        top: -45px;
    }
    .wide-wrap .img4 {
        position: absolute;
        left: 0;
    }
    .video-bg {
        position: relative;
    }
    .wide-wrap .img6 {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .video-wrap {
        margin-top: 20px;
        width: 650px;
        height: 550px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #111;
    }
    .wide-wrap video {
        width: 650px;
    }

</style>