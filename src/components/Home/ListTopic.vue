<template>
    <div class="list-topic">
        <div class="wide-wrap topic-wrap">
            <div class="topic" v-for="item in topics" :key="item.id">
                <router-link to="">
                    <img :src="item.imgURL" alt="">
                    <h2>{{ item.name }}</h2>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListTopic',
    props: {
        topics: {
            type: Array
        }
    },
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .topic-wrap {
        display: flex;
        flex-flow: row wrap;
        justify-content: space-between;
    }
    .topic {
        width: 49%;
        margin: 30px 0;

    }
    .topic h2 {
        transition: all .5s;
        margin-top: 15px;
    }
    .topic:hover h2{
        color: var(--mainColor);
    }
    .topic:hover img {
        border-color: var(--mainColor);
    }
    .topic img {
        transition: all .5s;
        width: 100%;
        box-sizing: border-box;
        border-bottom: 2px solid transparent;
    }
    .topic h2 {
        font-size: 25px;
        text-align: left;

    }
</style>