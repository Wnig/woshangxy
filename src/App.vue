<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import './font/style.css'
export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  /* CSS reset */
  html{color:#000;background:#fff;-webkit-tap-highlight-color:rgba(0,0,0,0);font-family: 'PingFangSC-Light',"Microsoft YaHei","微软雅黑","sans-serif";font-size: 12px;}
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,form,input,button,textarea,p,th,td,strong{padding:0;margin:0;font-family: 'PingFangSC-Light',"Microsoft YaHei","微软雅黑","sans-serif";}
  table{border-collapse:collapse;border-spacing:0;}
  img{border:0;}
  a{text-decoration:none; color:#999; outline:none;}/*此处待添加默认链接颜色*/
  var,em,strong{font-style:normal;}
  em,strong,th,var{font-style:inherit;font-weight:inherit;}
  li{list-style:none;}
  caption,th{text-align:left;}
  h1,h2,h3,h4{font-size:100%;font-weight:normal;}
  input,button,textarea,select,option{font-family:inherit; font-size:inherit;font-style:inherit;font-weight:inherit;}
  input,button,textarea,select{*font-size:100%;}
  .clearfix:after {content:"\200B"; display:block; height:0; clear:both; }
  .clearfix { *zoom:1; }

  html {
    position: relative;
    width: 100%;
    overflow: hidden;
    overflow-y: scroll;
  }

  .pc {
    width: 100%;
    overflow: hidden;
  }

  .mob {
    display: none;
  }

  /*返回顶部*/
  .top {
    display: none;
    position: fixed;
    right: 2.86vw;
    bottom: 16.63vw;
    width: 4.11vw;
    z-index: 99999;
    cursor: pointer;
  }
  .top img {
    float: left;
    width: 100%;
    margin-bottom: 0.74vh;
  }

  .selection {
    position: relative;
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  .down {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 5.93vh;
    margin: auto;
    width: 1.77vw;
    height: 3.39vw;
    /*background: url('../src/assets/PCxiahua.svg') center center no-repeat;
    background-size: 100% 100%;*/
    cursor: pointer;
  }
  .down svg {
    width: 100%;
    -webkit-animation: fall_01 4s infinite;
    animation: fall_01 4s infinite;
  }

  .tit {
    
  }

  .tit h2 {
    position: relative;
    color: #FFFFFF;
    text-align: center;
    font-size: 2.86vw;
    font-family: 'PingFangSC-Medium';
  }

  .tit p {
    margin-top: 1.67vh;
    color: #FFFFFF;
    text-align: center;
    font-size: 1.25vw;
    font-family: 'PingFangSC-Regular';
  }

  .tit h2:after {
    position: absolute;
    content: '';
    bottom: -7.78vh;
    right: 0;
    left: 0;
    margin: auto;
    width: 2.6vw;
    height: 0.31vw;
    background: #71B9F4;
  }


  /*向下效果*/
  @-webkit-keyframes fall_01 {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }
  @keyframes fall_01 {
    0% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
    60% {
      -webkit-transform: translateY(15px);
      -moz-transform: translateY(15px);
      -ms-transform: translateY(15px);
      -o-transform: translateY(15px);
    }
    100% {
      -webkit-transform: translateY(-10px);
      -moz-transform: translateY(-10px);
      -ms-transform: translateY(-10px);
      -o-transform: translateY(-10px);
    }
  }

  @media screen and (max-width: 750px) {
    .pc {
      display: none;
    }
    .mob {
      display: block;
    }

    .top {
      right: 2.86vw;
      bottom: 40.63vw;
      width: 10.13vw;
    }

    .down {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 9.15vh;
      margin: auto;
      width: 6.67vw;
      height: 12.27vw;
    }

    .tit h2 {
      font-size: 4.8vw;
    }

    .tit p {
      margin-top: 1.67vh;
      font-size: 2.93vw;
    }

    .tit h2:after {
      position: absolute;
      content: '';
      bottom: -6.9vh;
      right: 0;
      left: 0;
      margin: auto;
      width: 5.33vw;
      height: 0.53vw;
      background: #71B9F4;
    }

    .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
        bottom: 0;
    }
    .swiper-pagination-bullet {
      background: rgba(255,255,255);
    }
    .swiper-pagination-bullet-active {
      background: #fff;
    }

    #swiper02 .swiper-pagination-bullet {
      background: #989898;
    }
    #swiper02 .swiper-pagination-bullet-active {
      background: #c6c6c6;
    }

    #swiper04 .swiper-pagination-bullet {
      background: #666;
      opacity: 0.1;
    }
    #swiper04 .swiper-pagination-bullet-active {
      opacity: 0.3;
      background: #666;
    }
    #swiper05 .swiper-pagination-bullet {
      background: #666;
      opacity: 0.1;
    }
    #swiper05 .swiper-pagination-bullet-active {
      opacity: 0.3;
      background: #666;
    }
  }

</style>
