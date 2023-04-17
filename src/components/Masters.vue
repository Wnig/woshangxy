<template>
  <div class="home">
    <div class="pc">
      <div class="top clearfix">
        <img src="../assets/fanghuidingbu.svg" alt="">
        <img src="../assets/pcqq.svg" alt="">
      </div>
      <div class="selection selection-1">
        <div class="con">
          <app-header></app-header>
            <div class="cont">
              <div class="cont_">
                <h1>互联网大咖、创业牛人、著名投资人，实战型<br/>
                    专业学者组成强大导师阵营</h1>
                <div class="down" @click="slideDown">
                  <svg width="34px" height="65px" viewBox="0 0 34 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="首页-PC" transform="translate(-943.000000, -950.000000)" fill="#71B9F4">
                              <g id="pcxiahua" transform="translate(942.000000, 935.000000)">
                                  <g id="PCxiahua">
                                      <path d="M22.4668863,74.0896035 L28.2007195,58.3360261 C28.569773,57.3220598 29.6909322,56.7992547 30.7048985,57.1683083 C31.7188648,57.5373618 32.2416699,58.658521 31.8726163,59.6724873 L25.8969728,76.090433 C25.7348175,76.5359509 25.4274638,76.8866472 25.0478017,77.1085326 C24.6992491,77.643497 24.0957448,77.9971545 23.4096394,77.9971545 L5.93802649,77.9971545 C4.85898607,77.9971545 3.98425099,77.1224194 3.98425099,76.043379 C3.98425099,74.9643386 4.85898607,74.0896035 5.93802649,74.0896035 L22.4668863,74.0896035 Z" id="Combined-Shape" transform="translate(17.987613, 67.523552) rotate(-325.000000) translate(-17.987613, -67.523552) "></path>
                                      <path d="M22.4668863,49.0896035 L28.2007195,33.3360261 C28.569773,32.3220598 29.6909322,31.7992547 30.7048985,32.1683083 C31.7188648,32.5373618 32.2416699,33.658521 31.8726163,34.6724873 L25.8969728,51.090433 C25.7348175,51.5359509 25.4274638,51.8866472 25.0478017,52.1085326 C24.6992491,52.643497 24.0957448,52.9971545 23.4096394,52.9971545 L5.93802649,52.9971545 C4.85898607,52.9971545 3.98425099,52.1224194 3.98425099,51.043379 C3.98425099,49.9643386 4.85898607,49.0896035 5.93802649,49.0896035 L22.4668863,49.0896035 Z" id="Combined-Shape-Copy" opacity="0.5" transform="translate(17.987613, 42.523552) rotate(-325.000000) translate(-17.987613, -42.523552) "></path>
                                      <path d="M22.4668863,24.0896035 L28.2007195,8.33602613 C28.569773,7.32205981 29.6909322,6.79925473 30.7048985,7.16830829 C31.7188648,7.53736184 32.2416699,8.65852097 31.8726163,9.67248728 L25.8969728,26.090433 C25.7348175,26.5359509 25.4274638,26.8866472 25.0478017,27.1085326 C24.6992491,27.643497 24.0957448,27.9971545 23.4096394,27.9971545 L5.93802649,27.9971545 C4.85898607,27.9971545 3.98425099,27.1224194 3.98425099,26.043379 C3.98425099,24.9643386 4.85898607,24.0896035 5.93802649,24.0896035 L22.4668863,24.0896035 Z" id="Combined-Shape-Copy-2" opacity="0.1" transform="translate(17.987613, 17.523552) rotate(-325.000000) translate(-17.987613, -17.523552) ">
                                       
                                      </path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="selection selection-2">
        <div class="con">
          <div class="cont">
            <div class="tit">
              <h2>师资团队(部分）</h2>
              <p>互联网大咖、创业牛人、著名投资人，实战型专业学者组成强大导师阵营</p>
            </div>
            <div id="swiper" class="swiper-container clearfix">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren@2x.png" alt="">
                        <h4>熊新翔</h4>
                        <p>博恩集团董事长</p>
                        <p>猪八戒网天使投资人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren1@2x.png" alt="">
                        <h4>房西苑</h4>
                        <p>资本运营专家</p>
                        <p>著名投资人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren2@2x.png" alt="">
                        <h4>郭   鹏</h4>
                        <p>著名品牌设计师</p>
                        <p>申众茂林董事长</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren3@2x.png" alt="">
                        <h4>袁   岳</h4>
                        <p>飛马旅创始人</p>
                        <p>零点咨询董事长</p>
                      </div>
                    </div>
                  </div>
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren4@2x.png" alt="">
                        <h4>曹日辉</h4>
                        <p>易一天使总经理</p>
                        <p>央视创业英雄汇评委</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren5@2x.png" alt="">
                        <h4>杨   东</h4>
                        <p>股权众筹专家</p>
                        <p>人大法学院副院长</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren6@2x.png" alt="">
                        <h4>金   晖</h4>
                        <p>赛伯乐投资合伙人</p>
                        <p>宁波無咖创始人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren7@2x.png" alt="">
                        <h4>张   涛</h4>
                        <p>综金投资总经理</p>
                        <p>Keywise基金合伙人</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren8@2x.png" alt="">
                        <h4>李   攀</h4>
                        <p>天使投资人</p>
                        <p>百业好项目创始人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren9@2x.png" alt="">
                        <h4>郑毓煌</h4>
                        <p>清华经营学院教授</p>
                        <p>中国科学营销倡导者</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren10@2x.png" alt="">
                        <h4>刘亚运</h4>
                        <p>数字营销专家</p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren11@2x.png" alt="">
                        <h4>秦   君</h4>
                        <p>君紫资本创始人</p>
                        <p>清控科创前董事长</p>
                      </div>
                    </div>
                  </div>
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren12@2x.png" alt="">
                        <h4>谢利明</h4>
                        <p>明治资本创始合伙人</p>
                        <p>网红网CEO</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren13@2x.png" alt="">
                        <h4>徐浩然</h4>
                        <p>品牌管理教授</p>
                        <p>江苏省品牌学会会长</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren15@2x.png" alt="">
                        <h4>张迅诚</h4>
                        <p>高鹏资本董事长</p>
                        <p>中国天使投资人学院</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren19@2x.png" alt="">
                        <h4>李先文</h4>
                        <p>浙商创投合伙人</p>
                        <p>天使投资人</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-button-prev"></div>
              <div class="swiper-button-next"></div>
            </div>
            <img class="master" src="../assets/pcrenmen@2x.jpg" alt="">
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
    <div class="mob">
      <div class="top clearfix">
        <img src="../assets/fanghuidingbu.svg" alt="">
      </div>
      <div class="selection selection-1">
        <div class="con">
          <app-header></app-header>
            <div class="cont">
              <div class="cont_">
                <h1>互联网大咖、创业牛人、著名<br/>投资人，实战型专业学者<br/>组成强大导师阵营</h1>
                <div class="down" @click="slideDown">
                  <svg width="34px" height="65px" viewBox="0 0 34 65" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="首页-PC" transform="translate(-943.000000, -950.000000)" fill="#71B9F4">
                              <g id="pcxiahua" transform="translate(942.000000, 935.000000)">
                                  <g id="PCxiahua">
                                      <path d="M22.4668863,74.0896035 L28.2007195,58.3360261 C28.569773,57.3220598 29.6909322,56.7992547 30.7048985,57.1683083 C31.7188648,57.5373618 32.2416699,58.658521 31.8726163,59.6724873 L25.8969728,76.090433 C25.7348175,76.5359509 25.4274638,76.8866472 25.0478017,77.1085326 C24.6992491,77.643497 24.0957448,77.9971545 23.4096394,77.9971545 L5.93802649,77.9971545 C4.85898607,77.9971545 3.98425099,77.1224194 3.98425099,76.043379 C3.98425099,74.9643386 4.85898607,74.0896035 5.93802649,74.0896035 L22.4668863,74.0896035 Z" id="Combined-Shape" transform="translate(17.987613, 67.523552) rotate(-325.000000) translate(-17.987613, -67.523552) "></path>
                                      <path d="M22.4668863,49.0896035 L28.2007195,33.3360261 C28.569773,32.3220598 29.6909322,31.7992547 30.7048985,32.1683083 C31.7188648,32.5373618 32.2416699,33.658521 31.8726163,34.6724873 L25.8969728,51.090433 C25.7348175,51.5359509 25.4274638,51.8866472 25.0478017,52.1085326 C24.6992491,52.643497 24.0957448,52.9971545 23.4096394,52.9971545 L5.93802649,52.9971545 C4.85898607,52.9971545 3.98425099,52.1224194 3.98425099,51.043379 C3.98425099,49.9643386 4.85898607,49.0896035 5.93802649,49.0896035 L22.4668863,49.0896035 Z" id="Combined-Shape-Copy" opacity="0.5" transform="translate(17.987613, 42.523552) rotate(-325.000000) translate(-17.987613, -42.523552) "></path>
                                      <path d="M22.4668863,24.0896035 L28.2007195,8.33602613 C28.569773,7.32205981 29.6909322,6.79925473 30.7048985,7.16830829 C31.7188648,7.53736184 32.2416699,8.65852097 31.8726163,9.67248728 L25.8969728,26.090433 C25.7348175,26.5359509 25.4274638,26.8866472 25.0478017,27.1085326 C24.6992491,27.643497 24.0957448,27.9971545 23.4096394,27.9971545 L5.93802649,27.9971545 C4.85898607,27.9971545 3.98425099,27.1224194 3.98425099,26.043379 C3.98425099,24.9643386 4.85898607,24.0896035 5.93802649,24.0896035 L22.4668863,24.0896035 Z" id="Combined-Shape-Copy-2" opacity="0.1" transform="translate(17.987613, 17.523552) rotate(-325.000000) translate(-17.987613, -17.523552) ">
                                       
                                      </path>
                                  </g>
                              </g>
                          </g>
                      </g>
                  </svg>
                </div>
              </div>
            </div>
        </div>
      </div>
      <div class="selection selection-2">
        <div class="con">
          <div class="cont">
            <div class="tit">
              <h2>师资团队(部分）</h2>
              <p>互联网大咖、创业牛人、著名投资人，实战型专业学者组成强大导师阵营</p>
            </div>
            <div id="swiper04" class="swiper-container clearfix">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren@2x.png" alt="">
                        <h4>熊新翔</h4>
                        <p>博恩集团董事长</p>
                        <p>猪八戒网天使投资人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren1@2x.png" alt="">
                        <h4>房西苑</h4>
                        <p>资本运营专家</p>
                        <p>著名投资人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren2@2x.png" alt="">
                        <h4>郭   鹏</h4>
                        <p>著名品牌设计师</p>
                        <p>申众茂林董事长</p>
                      </div>
                    </div>
                  </div>
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren3@2x.png" alt="">
                        <h4>袁   岳</h4>
                        <p>飛马旅创始人</p>
                        <p>零点咨询董事长</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren4@2x.png" alt="">
                        <h4>曹日辉</h4>
                        <p>易一天使总经理</p>
                        <p>央视创业英雄汇评委</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren5@2x.png" alt="">
                        <h4>杨   东</h4>
                        <p>股权众筹专家</p>
                        <p>人大法学院副院长</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren6@2x.png" alt="">
                        <h4>金   晖</h4>
                        <p>赛伯乐投资合伙人</p>
                        <p>宁波無咖创始人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren7@2x.png" alt="">
                        <h4>张   涛</h4>
                        <p>综金投资总经理</p>
                        <p>Keywise基金合伙人</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren8@2x.png" alt="">
                        <h4>李   攀</h4>
                        <p>天使投资人</p>
                        <p>百业好项目创始人</p>
                      </div>
                    </div>
                  </div>
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren9@2x.png" alt="">
                        <h4>郑毓煌</h4>
                        <p>清华经营学院教授</p>
                        <p>中国科学营销倡导者</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren10@2x.png" alt="">
                        <h4>刘亚运</h4>
                        <p>数字营销专家</p>
                        <p>&nbsp;</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren11@2x.png" alt="">
                        <h4>秦   君</h4>
                        <p>君紫资本创始人</p>
                        <p>清控科创前董事长</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren12@2x.png" alt="">
                        <h4>谢利明</h4>
                        <p>明治资本创始合伙人</p>
                        <p>网红网CEO</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren13@2x.png" alt="">
                        <h4>徐浩然</h4>
                        <p>品牌管理教授</p>
                        <p>江苏省品牌学会会长</p>
                      </div>
                    </div>
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren15@2x.png" alt="">
                        <h4>张迅诚</h4>
                        <p>高鹏资本董事长</p>
                        <p>中国天使投资人学院</p>
                      </div>
                    </div>
                  </div>
                  <div class="list_con">
                    <div class="list_div">
                      <div class="list_div_">
                        <img src="../assets/pcren19@2x.png" alt="">
                        <h4>李先文</h4>
                        <p>浙商创投合伙人</p>
                        <p>天使投资人</p>
                      </div>
                    </div>
                    <div class="list_div">
                    </div>
                    <div class="list_div">
                    </div>
                  </div>
                </div>
              </div>
              <div class="swiper-pagination"></div>
            </div>
            <img class="master" src="../assets/renwu@2x.jpg" alt="">
          </div>
        </div>
        <app-footer></app-footer>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './Header'
import Footer from './Footer'

export default {
  name: 'Home',
  data () {
    return {

    }
  },
  created() {

  },
  methods: {
    slideDown() {
      let downHeight = document.documentElement.clientHeight || document.body.clientHeight;
      window.scrollTo(0, downHeight);
      this.slideShow = true;
    }
  },
  mounted() {
    // 返回顶部
    $('.top').on('click', function() {
      console.log(233);
      $('html, body').animate({scrollTop: '0px'}, 800);
    });

    $(window).scroll(function() {
    　　 var scrollTop = $(this).scrollTop();
    　　 var scrollHeight = $(document).height();
    　　 var windowHeight = $(this).height();

      if(scrollTop < scrollHeight / 7) {
        $('.top').css({
          'display': 'none'
        });
      } else {
        $('.top').css({
          'display': 'block'
        });
      }
    });

    let swiper = new Swiper('#swiper', {
      loop: true, 
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 500,
      mousewheelControl: true,
      releaseOnEdges: true,
      paginationClickable: true,
      prevButton: '.swiper-button-prev',
      nextButton: '.swiper-button-next',
    });

    let swiper04 = new Swiper('#swiper04', {
      loop: true, 
      slidesPerView: 1,
      spaceBetween: 100,
      speed: 500,
      mousewheelControl: true,
      releaseOnEdges: true,
      paginationClickable: true,
      pagination: '.swiper-pagination',
    });
  },
  components: {
    'app-header': Header,
    'app-footer': Footer
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  /*selection-1*/
  .selection-1 {
    background: url('../assets/PCdaoshizhenrong@2x.jpg') center center no-repeat;
    background-size: cover;
  }
  .selection-1 .con {
    
  }
  .selection-1 h1 {
    color: #FFFFFF;
    text-align: center;
    font-size: 3.13vw;
    font-family: 'PingFangSC-Medium';
  }
  .selection-1 .cont {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;
  }
  .selection-1 .cont_ {
    
  }

  /*selection-2*/
  .selection-2 {
    height: auto;
  }
  .selection-2 .tit {
    margin-top: 5vh;
    margin-bottom: 12.78vh;
  }
  .selection-2 .tit h2 {
    color: #000;
  }
  .selection-2 .tit p {
    color: #989A9C;
  }
  
  .selection-2 .master {
    display: block;
    width: 84.11vw;
    height: 459.26vh;
    margin: 0 auto;
  }
  
  .selection-2 .list_con {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 5.28vh;
  }
  .selection-2 .list_div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 10.68vw;
    margin: 0 2.84vw;
  }
  .selection-2 .list_div_ {
    
  }
  .selection-2 .list_div img {
    display: block;
    width: 10.68vw;
    margin: 0 auto 1.11vh;
  }
  .selection-2 .list_div h4 {
    color: #222222;
    text-align: center;
    font-size: 1.56vw;
    font-family: 'PingFangSC-Medium';
  }
  .selection-2 .list_div p {
    color: #989A9C;
    text-align: center;
    font-size: 0.94vw;
    font-family: 'PingFangSC-Regular';
  }
  
  #swiper {
    margin-bottom: 9.81vh;
  }

  .swiper-button-prev, .swiper-container-rtl .swiper-button-next {
    width: 4.17vw;
    background: url('../assets/pre.svg') center center no-repeat;
    background-size: 100% 100%;
    left: 7.55vw;
    right: auto;
  }

  .swiper-button-next, .swiper-container-rtl .swiper-button-prev {
    width: 4.17vw;
    background: url('../assets/next.svg') center center no-repeat;
    background-size: 100% 100%;
    right: 7.55vw;
    left: auto;
  }

   @media screen and (max-width: 750px) {
      /*selection-1*/
      .selection-1 {
        background: url('../assets/daoshi1@2x.jpg') center center no-repeat;
        background-size: cover;
      }
      .selection-1 .con {
        
      }
      .selection-1 h1 {
        font-size: 5.87vw;
      }
      .selection-1 .cont {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50vh;
      }
      .selection-1 .cont_ {
        
      }

      /*selection-2*/
      .selection-2 {
        height: auto;
      }
      .selection-2 .tit {
        margin-top: 5vh;
        margin-bottom: 12.78vh;
      }
      .selection-2 .tit h2 {
        color: #000;
      }
      .selection-2 .tit p {
        color: #989A9C;
      }
      
      .selection-2 .master {
        display: block;
        width: 90.67vw;
        height: 251.87vh;
        margin: 0 auto;
      }
      
      .selection-2 .list_con {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 5.28vh;
      }
      .selection-2 .list_div {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 27vw;
        margin: 0 2.84vw;
      }
      .selection-2 .list_div_ {
        
      }
      .selection-2 .list_div img {
        display: block;
        width: 24vw;
        margin: 0 auto 1.11vh;
      }
      .selection-2 .list_div h4 {
        text-align: center;
        font-size: 3.73vw;
      }
      .selection-2 .list_div p {
        text-align: center;
        font-size: 2.93vw;
      }
      
      #swiper04 {
        width: 100vw;
        height: 60vh;
        margin-bottom: 10.64vh;
      }

   }

   @media screen and (min-width: 751px) {

   }
  
</style>
