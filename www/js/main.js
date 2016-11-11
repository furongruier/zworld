requirejs.config({
	baseUrl:'js/lib',
	paths:{
		'app':"../app",
		'jquery':'jquery-3.1.1',
		'myutil':'../app/myutil'
	},
	shim:{
		'myutil':{
			exports:'createXHR'
		}
	}
});
//我定义的模块
/*define(['jquery','app/myfn','js/app/myfn1.js','myutil'],function($,url,mystyle,xhr){
	var x=xhr;
	x.open('get',url.getBaseURL()+'/books');
	x.send(null);
	x.onreadystatechange=function(){
		if(x.readystate===4){
			$('div').cs
		s(mystyle).html(x.responseText);
		}
	}
});*/
define(['app/index4Nav','app/img','app/menu','app/freewalk'],function(nav,banner,menu,Freewalk){
	var root=document.querySelector('#nav ul');
	nav(root);
	var root1=document.querySelector('#banner #scroll');
	banner(root1);
	var root2=document.querySelector('#menu ul');
	menu(root2);
	
	var freewalk=document.querySelector('#freewalk');
	Freewalk(freewalk);
	
	
})
