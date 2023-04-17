<template>
  <footer>
  	<div class="pc">
	  	<div class="footer">
			<div class="con">
				<img class="logo" src="../assets/logo.svg" alt="">
				<div class="cont">
					<ul class="links clearfix">
						<li><a href="#" title="商务合作">商务合作</a></li>
						<li><a href="#" title="意见反馈">意见反馈</a></li>
						<li><a href="#" title="关于我们">关于我们</a></li>
						<li><a href="#" title="联系我们">联系我们</a></li>
					</ul>
					<p>闽ICP备1222343463号-2 </p>
					<ul class="other clearfix">
						<li><a href="#"><img src="../assets/PCweixin.svg" alt=""></a></li>
						<li><a href="#"><img src="../assets/PCweibai.svg" alt=""></a></li>
						<li><a href="#"><img src="../assets/PCDAQQ.svg" alt=""></a></li>
					</ul>
				</div>
				<div class="code">
					<img src="../assets/PCerweima@2x.png" alt="">
					<p>扫一扫识别公众号</p>
				</div>
			</div>
	  	</div>
  	</div>
  	<div class="mob">
		<div class="footer">
			<div class="con">
				<div class="con_">
					<h3>沃云商学院</h3>
					<h4>ADD : 厦门市思明区观音山营运中心18号楼402单元</h4>
					<p>Copyriht @ 2017 ShunFengDi.All Rights </p>
					<p>Reserved闽ICP备18004059号-1 </p>
				</div>
			</div>
	  	</div>
  	</div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	footer {
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 31.67vh;
		background: #fff;
	}
	.footer {
		width: 80%;
		margin: 0 auto;
	}
	.logo {
		width: 11.46vw;
		margin-right: 4.69vw;
	}
	.con {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.con .links {
		margin-bottom: 1.11vh;
	}
	.links li {
		float: left;
		margin-right: 4.38vw;
		text-align: center;
		font-size: 1.25vw;
		font-family: 'PingFangSC-Regular';
	}
	.links li a {
		color: #222222;
	}
	.cont {
		flex: 1;
	}
	.cont p {
		margin-bottom: 1.11vh;
		color: #999999;
		text-align: left;
		font-size: 1.04vw;
		font-family: 'PingFangSC-Regular';
	}
	.code img {
		display: block;
		width: 6.93vw;
		margin: 0 auto 1.57vh;
	}
	.other li {
		float: left;
		margin-right: 0.36vw;
	}
	.other a {
		display: block;
	}
	.other img {
		display: block;
		width: 2.76vw;
	}

	@media screen and (max-width: 750px) {
		.mob {
	      	display: block;
	    }
	    footer {
			height: 22.49vh;
		}
	    .footer {
	    	width: 100%;
	    }
	    .con h3 {
			color: #222222;
			text-align: center;
			font-family: 'PingFangSC-Regular';
			font-size: 3.73vw;
	    }
	    .con h4 {
	    	margin-bottom: 2.25vh;
	    	color: #989A9C;
			text-align: center;
			font-size: 2.67vw;
			font-family: 'PingFangSC-Light';
	    }
	    .con p {
			color: #989A9C;
			text-align: center;
			font-size: 2.67vw;
	    	font-family: 'PingFangSC-Light';
	    }
	}

</style>
