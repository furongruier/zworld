define(['myutil','app/myfn','jquery'],function(x,url,$){
	function getMenuData(root2){//root:放导航节点的根元素
		var xhr=x();//创建ajax对象
		xhr.open('get',url.getBaseURL()+'/zmenu');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				//console.log(xhr.responseText);
				//f(xhr.responseText);
				console.log(xhr.responseText);
				var menus=JSON.parse(xhr.responseText);//数组对象
				menus.forEach(function(elem,index){
					var div=document.createElement("div");
					var li=document.createElement('li');
					var h3=document.createElement('h3');
					var img=document.createElement('img');
					var p=document.createElement('p');
					var as=menus[index].mainCity;					
					h3.innerHTML=elem['title'];
//					h3.innerHTML=menus[index].title;
					li.appendChild(h3);
					as.forEach(function(elem1,index1){
						var a=document.createElement('a');
						a.innerHTML=elem.mainCity[index1];
						a.setAttribute('href','#');
						p.appendChild(a);
					});
					li.appendChild(p);
					elem['moreCity'].forEach(function(elem2){
						var city=document.createElement("div");
						div.appendChild(city);
						var h3=document.createElement("h3");
						city.appendChild(h3);
						h3.innerHTML=elem2.cityName;
						elem2['items'].forEach(function(elem3){
							var a=document.createElement("a");
							a.innerHTML=elem3;
							city.appendChild(a);
						})
					})
					li.appendChild(div);
					img.setAttribute('src',elem["moreCityImg"]);
					div.appendChild(img);
					root2.appendChild(li);
				})
				 $('#menu ul li').on('mouseenter',function(e){
					$(this).children('div').css('display','block');
					$(this).siblings().children('div').css('display','none');
				}).on("mouseleave",function(e){
					$(this).children('div').css('display','none');
				});
			}
		}
	}
	return getMenuData;
});