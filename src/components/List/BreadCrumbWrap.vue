<template>
  <div class="bread-crumb-wrap">
    <ul>
      <li  v-for="(item, index) in info" :key="index">
        <template v-if="category === 'first'">
          <router-link :to="{path: `/list/${item.id}-0-0-0-1-1-40-0-0-0-0`}">{{item.name}}</router-link>
        </template>
        <template v-if="category === 'second'">
          <router-link :to="{path: `/list/${config.firstCategory}-${item.id}-0-0-1-1-40-0-0-0-0`}">{{item.name}}</router-link>
        </template>
        <template v-if="category === 'third'">
          <router-link :to="{path: `/list/${config.firstCategory}-${config.secondCategory}-${item.id}-0-1-1-40-0-0-0-0`}">{{item.name}}</router-link>
        </template>
        
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    name: "BreadCrumbWrap",
    props: {
      info: {
        type: Array
      },
      category: {
        type: String
      }
    },
    computed: {
      ...mapState({ 
        config: state => state.list.config
       })
      
    },
    created() {
      // console.log(this.info)
    }
  }
</script>

<style lang="scss" scoped>
.bread-crumb-wrap {
  min-height: 120px;

  ul {
    display: flex;
    margin: 30px 50px;
    padding: 0;
    list-style: none;

    flex-wrap: wrap;

    li {
      width: 10%;

      a {
        display: block;
        color: #666;
        text-align: left;
        font-size: 12px;
        line-height: 36px;

        &:hover {
          color: #333;
        }
      }
    }
  }
}

</style>