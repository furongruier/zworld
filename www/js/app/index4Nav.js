define(['myutil','app/myfn'],function(x,url){
	function getNavData(root){//root:放导航节点的根元素
		var xhr=x();//创建ajax对象
		xhr.open('get',url.getBaseURL()+'/znav');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				//console.log(xhr.responseText);
				//f(xhr.responseText);
				console.log(xhr.responseText);
				
				var navs=JSON.parse(xhr.responseText);//数组对象
				
				navs.forEach(function(elem,index){
					var a=document.createElement('a');
					var li=document.createElement('li');
					var img=document.createElement('img');
					img.setAttribute('src',elem.dymicImagesUrl);
					li.appendChild(img);
					a.innerHTML=elem['name'];
					a.setAttribute('href',elem['url']);
					li.appendChild(a);
					root.appendChild(li);
					
					
					
				});
				
			}
		}
	}
	return getNavData;
})