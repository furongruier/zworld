var express=require("express");
var app=express();
var fs=require('fs');
var url=require('url');
//存储从文件读取的数据
/*var gdata=null;
fs.readFile('nav.json',function(err,data){
	if(err){
		console.log(err);
	}
	gdata=data;
	app.listen(9000);
	console.log("服务器已启动");

})
//提供web服务功能
app.use(express.static("www"));
app.get("/znav",function(req,res,next){
	console.log("请求");
	res.header("Content-type","application/json");
	console.log(gdata);
	res.send(gdata);
})*/
var navData=null;
var menuData=null;
var bannerData=null;
var freewalkData=null;
fs.readFile('nav.json',function(err,data){
		if(err){
			console.log("错了");
		}
	navData=data;
	fs.readFile('menu.json',function(err,data1){
			if(err){
				console.log("错了");
			}
		menuData=data1;
		fs.readFile('banner.json',function(err,data2){
				if(err){
					console.log("错了");
				}
			bannerData=data2;
			fs.readFile('freewalk.json',function(err,data3){
					if(err){
							console.log("错了啊");
					}
					freewalkData=data3;
					app.listen(9000);
					console.log("服务器已启动");
		   	});
		});
	});
});

app.use(express.static('www'));
app.all('/*',function(req,res,next){//先给all发请求，请求往下分发
	console.log("我是根");
	res.header("Access-Control-Allow-Origin","*");
	res.header("Access-Control-Allow-Headers","Content-Type,Content-Length,Authorization,Accept,X-Request-With");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	next();//请求往下传递
});
app.get('/znav',function(req,res){
	console.log("请求");
	res.header("Content-type","application/json");
	res.send(navData);
});
app.get('/zmenu',(req,res)=>{
	console.log("请求");
	res.header("Content-type","application/json");
	res.send(menuData);
});
app.get('/zbanner',function(req,res){
	console.log("请求");
	res.header("Content-type","application/json");
	res.send(bannerData);
});
app.get('/freewalk',function(req,res){
	console.log("请求");
	res.header("Content-type","application/json");
	res.send(freewalkData);
});
var url=require('url');
app.get('/remote',(req,res)=>{
	//console.log(typeof req.query['callback']);
	var cbName=req.query['callback'];
	var obj="{name:\"tom\",age:22}";
	var data=cbName+"("+obj+")";
	console.log(data);
	res.send(data);
});
