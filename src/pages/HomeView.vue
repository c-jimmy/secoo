<template>
  <div class="home-view">
    <home-module-one class="home-module-one" />
    <editor-pick :swiperInfos="pickInfo" class="editor-pick"></editor-pick>
    <home-module-two class="home-module-two" />
    <div class="wide-wrap download">
      <img src="@/assets/img/home/download-app.jpg" alt="">
    </div>
    <home-module-three class="home-module-three" />
    <home-module-four class="home-module-four" />

  </div>
</template>

<script>
  import HomeModuleOne from '@/components/Home/HomeModuleOne'
  import EditorPick from '@/components/Home/EditorPick'
  import HomeModuleTwo from '@/components/Home/HomeModuleTwo'
  import HomeModuleThree from '@/components/Home/HomeModuleThree'
  import HomeModuleFour from '@/components/Home/HomeModuleFour'

  export default {
    name: 'home-view',
    components: {
      HomeModuleOne,
      EditorPick,
      HomeModuleTwo,
      HomeModuleThree,
      HomeModuleFour
    },
    data() {
      return {
        pickInfo: [{
            id: 56151321410102,
            name: "Louis Vuitton/路易威登",
            desc: "Louis Vuitton/路易威登 MyLockme 系列 女士 粉色 小牛皮 单肩包/手提包",
            price: "21,500",
            imgURL: "static/img/home/pick-0001.jpg"
          },
          {
            id: 56151321410102,
            name: "OMEGA/欧米茄",
            desc: "OMEGA/欧米茄 海马系列机械男表 232.30.44.22.01.002",
            price: "51,113",
            imgURL: "static/img/home/pick-0002.jpg"
          },
          {
            id: 56151321410102,
            name: "THOM BROWNE/THOM BROWNE",
            desc: "THOM BROWNE/THOM BROWNE 18年秋冬 男士 条纹 圆领 深灰色 男士针织衫/毛衣 MKA177A 00278 025",
            price: "6,498",
            imgURL: "static/img/home/pick-0003.jpg"
          },
          {
            id: 56151321410102,
            name: "BVLGARI/宝格丽",
            desc: "【包税】BVLGARI/宝格丽 DIVA系列女士K金/红玉髓钻石双面佩戴项链 CL857199",
            price: "15,231",
            imgURL: "static/img/home/pick-0004.jpg"
          },
          {
            id: 56151321410102,
            name: "Malone Souliers/Malone Souliers",
            desc: "Malone Souliers/Malone Souliers 18年秋冬 女 细跟 尖头鞋 黑色 及踝靴 MADISON70-1#000#SM000",
            price: "3,783",
            imgURL: "static/img/home/pick-0005.jpg"
          },
          {
            id: 56151321410102,
            name: "Anya Hindmarch/安雅·希德玛芝",
            desc: "Anya Hindmarch/安雅·希德玛芝 18年春夏 女士 logo 撞色 混色 手提包 981064",
            price: "4,480",
            imgURL: "static/img/home/pick-0006.jpg"
          },
          {
            id: 56151321410102,
            name: "Audemars Piguet/爱彼",
            desc: "AudemarsPiguet/爱彼皇家橡树离岸系列男士自动机械腕表15710ST.OO.A010CA.01",
            price: "187,205",
            imgURL: "static/img/home/pick-0007.jpg"
          },
          {
            id: 56151321410102,
            name: "GUCCI/古驰",
            desc: "GUCCI 古驰 18秋冬服装 男士黑色纯棉经典logo印花时尚休闲连帽长袖卫衣",
            price: "8,586",
            imgURL: "static/img/home/pick-0008.jpg"
          },
          {
            id: 56151321410102,
            name: "Van Cleef & Arpels/梵克雅宝",
            desc: "Van Cleef & Arpels/梵克雅宝 Vintage Alhambra系列女士手链 五朵绿色四叶草图案 18K金 孔雀石 女士手链VCARL80900",
            price: "35,000",
            imgURL: "static/img/home/pick-0009.jpg"
          },
          {
            id: 56151321410102,
            name: "BURBERRY/博柏利",
            desc: "BURBERRY/博柏利  18秋冬新款Vintage男士格纹棉质运动鞋",
            price: "5,643",
            imgURL: "static/img/home/pick-0010.jpg"
          }

        ]

      }
    }
  }

</script>

<style scoped>
  h1 {
    color: var(--mainColor);
  }

  .editor-pick {
    margin-top: 35px;
    margin-bottom: 20px;
  }

  .home-module-two {
    margin-bottom: 30px;
  }

  .download {
    margin-bottom: 30px;
  }

  .home-module-three {
    margin-bottom: 30px;
  }

</style>
