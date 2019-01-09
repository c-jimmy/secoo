<template>
    <div class="pop-eq">
        <div class="pop-wrap">
            <div class="img" v-show="isShow">
                <slot name="img"></slot>
            </div>
            <span class="info" @mouseenter="enter" @mouseleave="leave">
                <slot name="info"></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'PopEq',
    props: {
        img: {
            type: String
        }
    },
    data () {
        return {
            isShow: false
        }
    },
    methods: {
        enter() {
            this.isShow = true
        },
        leave() {
            this.isShow = false
        }
    }
}
</script>

<style scoped>
    .pop-eq {
        line-height: 36px;
    }
    .pop-wrap {
        display: inline-block;
        position: relative;
    }
    .pop-wrap:after {
        position: absolute;
        content: "";
        height: 0;
        display: block;
        clear: both;
    }
    .pop-eq .img {
        width: 120px;
        height: 120px;
        position: absolute;
        left: -130px;
        top: -38px;
    }
    .pop-eq .img img {
        width: 100%;
    }
    .pop-eq .info {
        display: inline-block;
        font-size: 13px;
        width: 60px;
        /*text-align: left;*/
        height: 30px;
        color: #222;
        cursor: pointer;
    }
    .pop-eq .info:hover {
        /*text-decoration: underline;*/
    }
    .pop-eq .info:hover i {
        text-decoration: none;
    }
    i {
        font-size: 25px;
        position: relative;
        top: 3px;
        left: -3px;
        text-decoration: none;
    }
</style>