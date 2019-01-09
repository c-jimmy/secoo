<template>
    <div class="editor-pick wide-wrap">
        <div class="title">
            <img src="@/assets/img/home/editor-pick.png" alt="">
        </div>
        <swiper class="swiper-editor" :options="myOption">
            <!-- slides -->
            <swiper-slide v-for="(item, index) in swiperInfos"  :key="index" class="swiper-item-wrap">
                <router-link :to="{path: '/details/'+item.id}">
                    <div class="swiper-item">
                            <img :src="item.imgURL" alt="">

                            <div class="details">
                                <p class="name">{{item.name}}</p>
                                <p class="desc">{{item.desc}}</p>
                                <div class="line"></div>
                                <p class="price">¥{{item.price}}</p>
                            </div>
                    </div>
                </router-link>
            </swiper-slide>
            <!-- Optional controls -->
            <!-- <div class="swiper-pagination"  slot="pagination"></div> -->
            <div class="swiper-button-prev swiper-prev" slot="button-prev">
                <i class="el-icon-arrow-left"></i>
            </div>
            <div class="swiper-button-next swiper-next" slot="button-next">
                <i class="el-icon-arrow-right"></i>
            </div>
        </swiper>
        
        <div class="adorn">
            <img src="@/assets/img/home/editor-pick-logo.png" alt="">
        </div>
    </div>
</template>

<script>
export default {
    name: 'EditorPick',
    props: {
        swiperInfos: {
            type: Array
        }
    },
    data () {
        return {
            myOption: {
                loop: true,
                slidesPerView : 5,
                slidesPerGroup : 5,
                navigation: {
                  nextEl: '.swiper-next',
                  prevEl: '.swiper-prev'
                }
            }
        }
    },
    computed: {

    },
}
</script>

<style scoped>
    .title,
    .adorn {
        text-align: center;
        position: relative;
    }
    .title::after,
    .title::before,
    .adorn::after,
    .adorn::before {
        position: absolute;
        content: '';
        bottom: 6px;
        width: 450px;
        border-bottom: 2px solid #666;
    }
    .title::after,
    .adorn::after {
        right: 0;
    }
    .title::before,
    .adorn::before {
        left: 0;
    }
    .adorn::after,
    .adorn::before {
        bottom: 30px;
        width: 500px;
    }
    .adorn {
        margin-top: -100px;
    }
    .swiper-editor {
        margin: 20px 0;
        padding-bottom: 100px;
    }


    .swiper-item {
        margin: 5px;
        padding-top: 10px;
        color: #333;
        box-sizing: border-box;
        position: relative;
        transition: all 0.3s;
    }

    .swiper-item:hover {
        border-bottom: 10px solid var(--mainColor);
        padding-top: 0;
        color: var(--mainColor);
    }
    .swiper-item .details {
        text-align: left;
        padding: 20px;
    }
    .swiper-item img {
        position: relative;
        max-width: 100%;
    }
    .swiper-item::after {
        position: absolute;
        content: "";
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.1);
        opacity: 0.3;
    }
    .swiper-item  p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        margin: 0;
    }
    .swiper-item .name {
        margin-bottom: 6px;
        font-size: 18px;
    }
    .swiper-item .desc {
        font-size: 12px;
        margin-bottom: 12px;
    }
    .swiper-item  .line {
        display: inline-block;
        width: 80px;
        height: 2px;
        background: #555;
    }
    .swiper-item .price {
        margin-top: 15px;
    }

    .swiper-button-next,
    .swiper-button-prev {
        background: none;
        font-size: 30px;
        color: var(--darkBlack);
        top: auto;
        bottom: 24px;
    }
    .swiper-button-prev {
        left: 550px;
    }
    .swiper-button-next {
        right: 550px;
    }
</style>