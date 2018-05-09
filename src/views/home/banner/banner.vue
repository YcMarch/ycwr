<template>
  <!--    banner   begin  -->
  <div>
    <div
      class="banner"
      v-for="item in list"
      :key="item.id"
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
            //list:[],
            list:JSON.parse(localStorage.getItem('bannerdata'))
          }
        },
        created(){
          getIndex().then(({data})=>{
            this.list = data.data.indexbanner
          })
        },
        watch:{
            list:{
              deep:true,
              handler(){
                localStorage.setItem('bannerdata',JSON.stringify(this.list))
              }
            }
        }
    }
</script>

<style scoped>

</style>
