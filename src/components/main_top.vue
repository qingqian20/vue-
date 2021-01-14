<template>
	<div class="top bg-secondary navbar-dark">
		<div>
			<div class=" bg-secondary navbar-dark" style="width: 10%;float: left;height: 83px;"></div>
			<nav class="navbar navbar-expand-sm bg-secondary navbar-dark" style="width: 70%;float: left;height: 83px;">
				<form class="form-inline">
					<div class="input-group">
						<input type="text" class="form-control" placeholder="请输入">
						<span class="input-group-btn">
							<button class="btn btn-dark " type="button">查询</button>
						</span>
					</div>

				</form>
			</nav>
		</div>
		<div style="float: right;">
			<div>
				<div class="dropdown">
					<button type="button" class="btn btn-link dropdown-toggle" data-toggle="dropdown" style="font-size: 20px; line-height: 60px;margin-right: 20px;">
						<img  :src="'../../static/tx/'+administrator.headportrait"  style="height: 65px;width: 65px; border-radius: 80px;border: 1px solid black;"/>
						<span>{{administrator.aname}}</span>
					</button>
					<div class="dropdown-menu">
						<a class="dropdown-item" href="http://127.0.0.1:8056/back/app/logout">退出</a>
						<a class="dropdown-item" href="#">修改密码</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data: function() {
			return {
				administrator: ""
			}
		},
		methods: {
			//获取登录状态
			success: function() {
				var o = this;
				$.ajax({
					url: "http://127.0.0.1:8056/back/ajax/administratoronline",
					success: function(r) {
						o.administrator=r;
					},
					xhrFields: {
						withCredentials: true //传递cookie,保持session的唯一性
					},
					crossDomain: true,
				})
			},
		},
		mounted() {
			this.success();

		}
	}
</script>

<style scoped="">
	.top {
		width: 85%;
		border-bottom: 1px solid #888888;

		height: 83px;
		float: right;
	}
</style>
