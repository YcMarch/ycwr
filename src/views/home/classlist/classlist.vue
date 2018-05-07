<template>
  <!--classListBox  begin -->
  <div class="classListBox">
    <ul class="classList">
      <li v-for="item in list" :key="item.id">
        <h2 class="classListTit"><a href="#"><em>{{item.title}}</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img :src="item.img" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">{{item.classListRight.title}}</h3>
              <p class="classL-C-R-Time">{{item.classListRight.time}}</p>
              <p class="classL-C-R-Bri">{{item.classListRight.bri}}</p>
            </div>
          </a>
        </div>
      </li>
      <!--<li>
        <h2 class="classListTit"><a href="#"><em>设计类</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img src="images/sjimg.jpg" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">掌握这15种算法，就能玩转图数据库Neo4j</h3>
              <p class="classL-C-R-Time">2018.05.03</p>
              <p class="classL-C-R-Bri">本文将为大家介绍Neo4j中提供的诸多图算法以及它们的功能。使用Neo4j图形算法，用户可以建模并预测复杂的动态特性，......</p>
            </div>
          </a>
        </div>
      </li>
      <li>
        <h2 class="classListTit"><a href="#"><em>营销类</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img src="images/yximg.jpg" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">掌握这15种算法，就能玩转图数据库Neo4j</h3>
              <p class="classL-C-R-Time">2018.05.03</p>
              <p class="classL-C-R-Bri">本文将为大家介绍Neo4j中提供的诸多图算法以及它们的功能。使用Neo4j图形算法，用户可以建模并预测复杂的动态特性，......</p>
            </div>
          </a>
        </div>
      </li>
      <li>
        <h2 class="classListTit"><a href="#"><em>保险类</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img src="images/bximg.jpg" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">掌握这15种算法，就能玩转图数据库Neo4j</h3>
              <p class="classL-C-R-Time">2018.05.03</p>
              <p class="classL-C-R-Bri">本文将为大家介绍Neo4j中提供的诸多图算法以及它们的功能。使用Neo4j图形算法，用户可以建模并预测复杂的动态特性，......</p>
            </div>
          </a>
        </div>
      </li>
      <li>
        <h2 class="classListTit"><a href="#"><em>保健类</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img src="images/bjimg.jpg" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">掌握这15种算法，就能玩转图数据库Neo4j</h3>
              <p class="classL-C-R-Time">2018.05.03</p>
              <p class="classL-C-R-Bri">本文将为大家介绍Neo4j中提供的诸多图算法以及它们的功能。使用Neo4j图形算法，用户可以建模并预测复杂的动态特性，......</p>
            </div>
          </a>
        </div>
      </li>
      <li>
        <h2 class="classListTit"><a href="#"><em>服务类</em><span>MORE</span></a> </h2>
        <div class="classListCon">
          <a href="#">
            <div class="classListConLeft"><img src="images/jzfwimg.jpg" alt="" width="217" height="217"></div>
            <div class="classListConRigth">
              <h3 class="classL-C-R-Tit">掌握这15种算法，就能玩转图数据库Neo4j</h3>
              <p class="classL-C-R-Time">2018.05.03</p>
              <p class="classL-C-R-Bri">本文将为大家介绍Neo4j中提供的诸多图算法以及它们的功能。使用Neo4j图形算法，用户可以建模并预测复杂的动态特性，......</p>
            </div>
          </a>
        </div>
      </li>-->
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
            list:[]
          }
        },
      created(){
          getIndex().then(({data})=>{

            console.log(data);
            this.list = data.data.classList

          })
      }
    }
</script>

<style scoped>

</style>
