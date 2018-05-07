<template>
  <!--    banner   begin  -->
  <div>
    <div
      class="banner"
      v-for="item in list"
    >
      <img :src="item.img" alt="" width="750" height="400">
      <!--<img src="images/banner_10.jpg" alt="" width="750" height="400">-->
    </div>
  </div>
  <!--    banner   END   -->
</template>

<script>

   import {getIndex} from '@/server'
  // console.log(getIndex)
  export default {
        data(){
          return{
            list:[]
          }
        },
        created(){
          getIndex().then(({data})=>{
            this.list = data.data.indexBanner
          })
        }
    }
</script>

<style scoped>

</style>
