<template>
  <!--indexproListBox  begin -->
  <div class="indexproListBox">
    <ul class="indexproList">
      <li v-for="item in list" :key="item.id"><a href="#">
        <div class="i-pro-ico"><img :src="item.ico" alt="" width="200" height="140"></div>
        <p class="i-pro-tit">{{item.title}}</p>
      </a> </li>
    </ul>
  </div>
  <!--indexproListBox  END   -->
</template>

<script>
  import {getIndex} from "@/server";  //  要用这个数据所以先把他引进来

  export default {
        name: "prolist",
        data(){
          return{
            //list:[]
            list:JSON.parse(localStorage.getItem('prolistdata'))
          }
        },
    created(){
          getIndex().then(({data})=>{
            console.log(data);
            this.list = data.data.classified
            console.log(this.list)
          })
    },
    watch:{
      list:{
        deep:true,
        handler(){
          localStorage.setItem('prolistdata',JSON.stringify(this.list))
        }
      }
    }
    }
</script>

<style scoped>

</style>
