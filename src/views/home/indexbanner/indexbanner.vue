<template>
  <!--indexBanner   begin  -->
  <div class="indexBanner"><a href="#" v-for="item in list"><img :src="item.img" alt="" width="750" height="200"></a> </div>
  <!--indexBanner   END   -->
</template>

<script>
  import {getIndex} from "@/server";

  export default {
        name: "indexbanner",
        data(){
          return {
            //list:[]
            list:JSON.parse(localStorage.getItem('indexbannerdata'))
          }
        },
      created(){
          getIndex().then(({data})=>{
            this.list = data.data.adbanner;
            console.log(this.list)
          })
      },
    watch:{
      list:{
        deep:true,
        handler(){
          localStorage.setItem('indexbannerdata',JSON.stringify(this.list))
        }
      }
    }
    }
</script>

<style scoped>

</style>
