<template>
  <div class="details-info">
    <img
      src="@/assets/img/details/details-001.jpg"
      alt=""
    >
    <section class="params">
      <div class="title" />
      <ul class="clearfix">
        <li v-for="(item, index) in detailsInfo.params"
          :key="index">{{item.name}}:{{item.value}}
        </li>
      </ul>
    </section>
    <section class="size">
      <div class="title" />
      <p>TIPS:</p>
      <p>1、相同品牌不同款的尺码会具有一些特殊性，仅作为选购参考，请您按照自身实际情况及穿衣习惯选择合适的尺码.</p>
      <p>2、尺码表中的各项参数，可能存在1-3cm的范围误差，此种情况并非质量问题;</p>
      <h4>尺码详情</h4>
      <clothing-size/>
    </section>
    <section class="brand">
      <div class="title"/>
      <div class="wrap"><img :src="detailsInfo.brand.brandInfo.proImg" alt="">
        <div class="info-wrap">
          <h4>{{detailsInfo.brand.brandInfo.proName}}</h4>
          <p>{{detailsInfo.brand.brandInfo.proDesc}}</p>
        </div>
      </div>
    </section>
    <section class="goods-details">
      <div class="title"/>
      <mavon-editor
        class="md"
        :value="detailsInfo.details"
        :subfield = false
        :defaultOpen = "'preview'"
        :toolbarsFlag = false
        :editable = false
        :scrollStyle = true
        :boxShadow = false
      ></mavon-editor>
    </section>

  </div>
</template>

<script>
import { mapState } from 'vuex'
import ClothingSize from "@/components/Details/ClothingSize";
export default {
  // props: {
  //   info: {
  //     type: Object
  //   },
  // },
  components: {
    ClothingSize
  },
  data() {
    return {

    }
  },
  computed: {
    ...mapState({
      detailsInfo: state => state.details.details.detailsInfo
    })
  }
}

</script>

<style lang="scss" scoped>
.md {
  text-align: center;
}
.details-info {
  padding: 45px 30px 30px;
  background: #FFF;
  box-shadow: 0 0 3px 3px #E5E5E5;

  .title {
    position: relative;
    overflow: hidden;
    margin: 50px 0 20px 0;
    width: 100%;
    height: 17px;
    background: url('~@/assets/img/details/details_002.png') no-repeat;
  }
  .params {
    .title {
    }
    ul {
      margin: 0;
      padding: 0;
      color: #333;
      list-style: none;
      text-align: left;
      font-size: 12px;

      li {
        float: left;
        overflow: hidden;
        box-sizing: border-box;
        margin-right: 1%;
        margin-bottom: 3px;
        padding: 0 10px;
        width: 24%;
        height: 30px;
        border-radius: 3px;
        background: #F5F5F5;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        line-height: 30px;
      }
    }
  }

  .size {
    .title {
      background-position: center -34px;
    }
    p {
      text-align: left;
      font-size: 12px;
    }
    h4 {
      margin: 25px 0 0;
      background: #999;
      color: #FFF;
      font-weight: 400;
      font-size: 12px;
      line-height: 30px;
    }
  }

  .brand {
    .title {
      background-position: center -17px;
    }

    .wrap {
      display: flex;

      justify-content: space-between;
      align-items: stretch;


      img {
        max-width: 320px;
      }

      .info-wrap {
        display: flex;
        box-sizing: border-box;
        box-sizing: border-box;
        padding: 10px 40px;
        border: 1px solid #CCC;
        background: #F5F5F5;

        flex-flow: column wrap;
        justify-content: center;

        h4 {
          margin: 0;
          color: #666;
          letter-spacing: 3px;
          font-size: 18px;
        }
        p {
          color: #666;
          text-align: left;
          font-size: 12px;
          line-height: 22px;
        }
      }
    }
  }

  .goods-details {
    .title {
      background-position: center -51px;
    }
  }
}

</style>
