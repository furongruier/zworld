define({
	baseUrl:'http://localhost',//10.0.161.94IP地址和本机没有绑定，所以获取不到本机服务器的数据
	port:'9000',
	getBaseURL:function(){
		return this.baseUrl+':'+this.port;
	}
});
