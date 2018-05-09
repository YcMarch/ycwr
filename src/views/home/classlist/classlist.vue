<template>
  <!--classListBox  begin -->
  <div class="classListBox">
    <ul class="classList">
      <li v-for="item in list" :key="item.id">
        <h2 class="classListTit"><em>{{item.title}}</em><span>MORE</span> </h2>
        <div class="classListCon">
            <div class="classListConLeft"><img :src="item.img" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">{{item.classListRight.title}}</h3>
              <p class="classL-C-R-Time">{{item.classListRight.time}}</p>
              <p class="classL-C-R-Bri">{{item.classListRight.bri}}</p>
            </div>
        </div>
      </li>
    </ul>
  </div>
  <!--classListBox  END  -->
</template>

<script>
  import {getIndex} from "@/server";

  export default {
        name: "classlist",
        data(){
          return{
           //list:[]
            list:JSON.parse(localStorage.getItem('classlistdata'))
          }
        },
      created(){
          getIndex().then(({data})=>{
            this.list = data.data.classlist
          })
      },
    watch:{
          list:{
            deep:true,
            handler(){
              localStorage.setItem('classlistdata',JSON.stringify(this.list))
            }
          }
    }
  }
</script>

<style scoped>

</style>
