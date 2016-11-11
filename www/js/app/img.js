define(['myutil','app/myfn'],function(x,url){
	function getImgData(root1){//root:放导航节点的根元素
		var xhr=x();//创建ajax对象
		xhr.open('get',url.getBaseURL()+'/zbanner');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				//console.log(xhr.responseText);
				//f(xhr.responseText);
				console.log(xhr.responseText);
				var banners=JSON.parse(xhr.responseText);//数组对象
				banners.forEach(function(elem,index){
					var a=document.createElement('a');
					var img=document.createElement('img');
					img.setAttribute('src',elem['imgUrl']);
                   	a.setAttribute('href',elem['href']);
                   	a.appendChild(img);
                   root1.appendChild(a);

				})
				
				/*$('#banner #scroll').css('left','0');
				setInterval(function(){
					var left=$('#banner #scroll').offset().left;
					$('#banner #scroll').css('left',left-1920+'px');
					if(left==-5760){
						$('#banner #scroll').css('left','0');
					}
				},100)*/
				var l=0;
				setInterval(function(){
					l=root1.offsetLeft-1920;
					root1.style.left=l+'px';
					if(l<-5760){
						root1.style.left=0;
					}
				},2000);
				
			}
		}
	}
	return getImgData;
})