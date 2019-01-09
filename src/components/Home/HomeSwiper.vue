<template>
    <div class="home-swiper">
        <template v-if="mode == 'like'" >
            <div class="title-wrap">
                <h2>猜您喜欢</h2>
            </div>
            <swiper :options="myLikeOption" ref="myLikeSwiper" class="like">
            <!-- slides -->
                <swiper-slide v-for="(item, index) in swiperInfos" :key="index" class="like-item">
                    <img :src="item.imgURL" alt="">
                    <p class="name">{{item.name}}</p>
                    <p class="price">¥{{item.price}}</p>
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                <div class="swiper-button-prev like-swiper-prev" slot="button-prev">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="swiper-button-next like-swiper-next" slot="button-next">
                    <i class="el-icon-arrow-right"></i>
                </div>
            </swiper>
        </template>
        <template v-else>
            <swiper :options="myBannerOption" ref="myBannerSwiper" class="banner">
            <!-- slides -->
                <swiper-slide v-for="(item, index) in swiperInfos" :key="index">
                    <img :src="item.imgURL" alt="">
                </swiper-slide>
                <!-- Optional controls -->
                <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
                <div class="swiper-button-prev banner-swiper-prev" slot="button-prev">
                    <i class="el-icon-arrow-left"></i>
                </div>
                <div class="swiper-button-next banner-swiper-next" slot="button-next">
                    <i class="el-icon-arrow-right"></i>
                </div>
            </swiper>
        </template>
        
        
    </div>
</template>

<script>

export default {
    name: 'HomeSwiper',
    props: {
        swiperInfos: {
            type: Array
        },
        mode: {
            type: String,
            default: 'banner'
        }
    },
    data () {
        return {
            myBannerOption: {
                loop: true,
                effect : 'fade',
                navigation: {
                  nextEl: '.banner-swiper-next',
                  prevEl: '.banner-swiper-prev',
                }
              // some swiper options/callbacks
              // 所有的参数同 swiper 官方 api 参数
              // ...
            },
            myLikeOption: {
                loop: true,
                slidesPerView : 4,
                slidesPerGroup : 4,
                navigation: {
                  nextEl: '.like-swiper-next',
                  prevEl: '.like-swiper-prev'
                }
            }
        }
    },
    computed: {
        swiper() {
            // return this.$refs.myBannerSwiper.swiper
        }
    },
    mounted() {
        // console.log(this.swiperInfos)
        // console.log('this is current swiper instance object', this.swiper)
        // this.swiper.slideTo(1, 1000, false)
    }
}
</script>

<style scoped>
    .swiper-button-next{
        right: 50%;
        transform: translateX(580px);
        
    }
    .swiper-button-prev{
        left: 50%;
        transform: translateX(-580px);
        

    }
    .swiper-button-next,
    .swiper-button-prev {
        background: none;
        font-size: 30px;
        color: var(--mainColor);
    }

    .title-wrap {
        margin-top: 50px;
        height: 60px;
        border-top: 2px solid var(--mainColor);
        
    }
    .title-wrap h2 {
        position: relative;
        display: inline-block;
        line-height: 40px;
        top: -20px;
        margin:0;
        font-size: 25px;
        color: var(--darkBlack);

        width: 150px;
        background: #fff;
    }
    .like-item {
        text-align: left;
        padding: 0 10px;
        color: var(--darkBlack);
    }
    .like .name {
        transition: all .5s;
        margin-top: 30px;
        margin-bottom: 6px;
        font-size: 18px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    .like .price {
        transition: all .5s;
        font-size: 16px;
    }
    .like-item:hover .name,
    .like-item:hover .price {
        color: var(--mainColor);
    }

</style>