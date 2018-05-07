<template>
  <div>
    <headerpub></headerpub>
    <banner></banner>
    <prolist></prolist>
    <indexbanner></indexbanner>
    <classlist></classlist>
    <footerpub></footerpub>
  </div>
</template>

<script>
  import headerpub from '@/components/headerpub';
  import footerpub from '@/components/footerpub';
  import banner from './banner/banner'
  import classlist from './classlist/classlist.vue'
  import indexbanner from './indexbanner/indexbanner.vue'
  import prolist from './prolist/prolist.vue'

    export default {
        name: "home",
      components:{
        headerpub,
        footerpub,
        banner,
        classlist,
        indexbanner,
        prolist
      }
    }
</script>

<style scoped>

</style>
