<template>
  <!--indexBanner   begin  -->
  <div class="indexBanner"><a href="#"><img src="list[0].img" alt="" width="750" height="200"></a> </div>
  <!--indexBanner   END   -->
</template>

<script>
  import {getIndex} from "@/server";

  export default {
        name: "indexbanner",
        data(){
          return {
            list:[]
          }
        },
      created(){
          getIndex().then(({data})=>{
            console.log(data)
            this.list = data.data.indexBanner
            console.log(this.list[0].img)
          })
      }
    }
</script>

<style scoped>

</style>
