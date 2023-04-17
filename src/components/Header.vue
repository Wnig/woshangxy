<template>
  <header>
  	<div class="pc">
  		<div class="cont">
			<ul>
				<li v-for="(navs, index) in navData" v-bind:class="{'btn_sel': index == num && index != 2}" @click="selMenus(index)">
	              <router-link v-if="index != 2" :to="navs.links">{{navs.tit}}</router-link>
	              <router-link class="logo_li" v-else :to="navs.links">
	              	<div class="logo">
	              		<img src="../assets/logo@2x.svg" alt="">
	              	</div>
	              </router-link>
	            </li>
	            <li class="backstage">
	            	<a href="#">
	            		<img src="../assets/Shape@2x.svg" alt="">
	            	</a>
	            </li>
	  		</ul>
	  	</div>
  	</div>
  	<div class="mob">
  		<div class="con">
  			<div class="logo">
          		<img src="../assets/logo@2x.svg" alt="">
          	</div>
        	<img @click="isShow" class="menu" src="../assets/fenlei.svg" alt="">
        	<transition name='fade'>
				<div class="nav" v-show="selShow" @click="isShow">
					<transition name='slide'>
					  	<nav v-if="selShow">
					  		<ul>
								<li v-for="(navs, index) in nav" v-bind:class="{'btn_sel': index == nums}" @click="selNav(index)">
					              <router-link :to="navs.links">{{navs.tit}}</router-link>
					            </li>
					  		</ul>
					  		<div class="code">
								<img src="../assets/PCerweima@2x.png" alt="">
								<p>长按识别公众号</p>
							</div>
					  	</nav>
					</transition>
				</div>
			</transition>
  		</div>
  	</div>
  </header>
</template>

<script>
let storage = window.sessionStorage;

export default {
  name: 'Home',
  data () {
    return {
    	navData: [
	        {tit: '首页', links:'/'},
	        {tit: '解决方案', links:'/Solution'},
	        {tit: '', links:'/'},
	        {tit: '导师阵容', links:'/Masters'},
	        {tit: '招募合伙人', links:'/Cooperation'},
        ],
        nav: [
	        {tit: '首页', links:'/'},
	        {tit: '解决方案', links:'/Solution'},
	        {tit: '导师阵容', links:'/Masters'},
	        {tit: '招募合伙人', links:'/Cooperation'},
        ],
      	num: '',
      	nums: '',
      	selShow: false
    }
  },
  created: function() {
    if(storage['selNumwoyun']) {
      this.num = storage['selNumwoyun'];
    } else {
      this.num = 0;
    };

    if(storage['selNumwoyuns']) {
      this.nums = storage['selNumwoyuns'];
    } else {
      this.nums = 0;
    };
  },
  methods: {
    selMenus(index) {
      if(index == 2) {
      	this.jump();
      } else {
	    storage['selNumwoyun'] = index;
	    this.selShow = false;
      };
    },
    selNav(index) {
	    storage['selNumwoyuns'] = index;
	    this.selShow = false;
    },
    isShow() {
      //点击：左侧菜单栏 收起-展开
      this.selShow = ! this.selShow;
    },
    jump() {
      storage['selNumwoyun'] = 0;
      this.selShow = false;
      this.$router.push({path: '/'});
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	header {

	}
	.cont {
		position: relative;
	}
	.cont ul {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 82.06vw;
		height: 13.52vw;
		margin: 0 auto;
	}
	.cont li {
		width: 15%;
		height: 100%;
		margin: 0 4.4vw;
	}
	.cont .logo_li {
		margin: 0 5.5vw;
	}
	.cont li a {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100%;
		color: #FFFFFF;
		text-align: center;
		font-size: 1.15vw;
	}
	.cont .btn_sel a {
		position: relative;
		color: #71B9F4;
		font-size: 1.15vw;
		font-family: 'PingFangSC-Semibold';
	}
	.cont .btn_sel a:after {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 5vw;
		margin: auto;
		content: "";
		width: 3.13vw;
		height: 0.16vw;
		background: #71B9F4;
	}
	.logo img {
		display: block;
		width: 9.38vw;
	}
	.cont .backstage {
		position: absolute;
		top: 0;
		right: -3.07vw;
		width: 2.34vw;
		margin: 0;
	}
	.backstage img {
		display: block;
		width: 2.34vw;
	}

    @media screen and (max-width: 750px) {
    	.con {
    		display: flex;
    		justify-content: center;
    		align-items: center;
    		width: 80%;
    		height: 20vh;
    		margin: 0 auto;
    	}
    	.logo {
    		flex: 1;
    	}
    	.logo img {
    		width: 23.2vw;
    	}
    	.menu {
    		width: 9.6vw;
    	}

    	.nav {
			position: fixed;
			left: 0;
			top: 0;
			width: 100%;
			height: 100vh;
			background: rgba(0, 0, 0, 0.65);
			z-index: 9999;
			opacity: 1;
		}
		.nav-btn-con {
			display: flex;
			justify-content: flex-end;
		}

		.fade-enter-active, .fade-leave-active {
		    transition: all .3s
		}

		.fade-enter, .fade-leave-to {
		    opacity: 0;
		}

		nav {
			width: 62.93vw;
			height: 100vh;
			background: #fff;
			transform: translate3d(0, 0, 0);
		}
		.slide-enter-active, .slide-leave-active {
		    transition: all .3s
		}

		.slide-enter, .slide-leave-to {
		    transform: translate3d(-100%, 0, 0);
		}

		nav ul {
			display: block;
			padding-top: 14.33vh;
		}
		nav li {
			display: block;
			margin-bottom: 6.3vh;
		}
		nav p {
	      margin-bottom: 1.05vh;
	      color: #797979;
	      font-size: 3.2vw;
	    }
	    nav h2 {
	      color: #000000;
	      line-height: 6.67vw;
	      font-size: 6.67vw;
	      font-family: 'PingFangSC-Semibold';
	    }
	    nav .hot {
	      position: absolute;
	      left: 9.2vw;
	      bottom: 7.95vh;
	    }
	    nav li a {
	    	display: block;
	    	color: #000;
	    	text-align: center;
	    	line-height: 7.33vw;
			font-size: 5.33vw;
		}
		nav .btn_sel a {
			color: #71B9F4;
			font-size: 5.33vw;
			font-family: 'PingFangSC-Medium';
		}

		.code img {
			display: block;
			width: 22.93vw;
			margin: 16.79vh auto 2.85vh;
		}
		.code p {
			color: #989A9C;
			text-align: center;
			font-size: 2.93vw;
			font-family: 'PingFangSC-Light';
		}

    }

    @media screen and (min-width: 751px) {
    	.cont li:hover a {
			position: relative;
			color: #71B9F4;
			font-family: 'PingFangSC-Semibold';
    	}
    }


</style>
