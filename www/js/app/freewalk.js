define(['myutil','app/myfn','jquery'],function(x,url,$){
	function getflywalkData(root){//root:放导航节点的根元素
		var xhr=x();//创建ajax对象
		xhr.open('get',url.getBaseURL()+'/freewalk');
		xhr.send(null);
		xhr.onreadystatechange=function(e){
			if(xhr.readyState===4){
				//console.log(xhr.responseText);
				//f(xhr.responseText);
				console.log(xhr.responseText);
				
				var freewalks=JSON.parse(xhr.responseText);//数组对象
				
				var ul=document.createElement('ul');
				ul.setAttribute('id','ul1');
				freewalks.forEach(function(elem,index){
					var li=document.createElement('li');
					li.innerHTML=elem.title;
					ul.appendChild(li);
					
				var Maxdiv=document.createElement('div');
//				Maxdiv.setAttribute('id','div1');
				var div1data=elem.data;
				div1data.forEach(function(elem1,index1){
					var div=document.createElement('div');
//					div.setAttribute('id','div1_1');
					var img=document.createElement('img');
					img.setAttribute('src',elem1.imgUrl);
					var span1=document.createElement('span');
					span1.innerHTML=elem1.price;
					var span=document.createElement('span');
					var span2=document.createElement('span');
					span2.innerHTML="元起";
					span.appendChild(span1);
					span.appendChild(span2);
					var p=document.createElement('p');
					var p1=document.createElement('p');
					p1.innerHTML=elem1.title;
					p.appendChild(p1);
					div.appendChild(img);
					div.appendChild(span);
					div.appendChild(p);
					Maxdiv.appendChild(div);
//					var div7=document.createElement('div');
//					var a1=document.createElement('a');
//					a1.innerHTML='查看更多'+'机酒自由行产品';
//					var a2=document.createElement('div');
//					a2.innerHTML='<';
//					div7.appendChild(a1);
//					div7.appendChild(a2);
//					var divdd=document.createElement('div');
//					divdd.setAttribute('id','last');
//					var as=["机票","酒店","机\"+\"酒","邮轮"];
//					as.forEach(function(elem2,index2){
//						var a=document.createElement('a');
//						a.innerHTML=elem2[index2];
//						divdd.appendChild(a);
//					});
//					div7.appendChild(divdd);
//					Maxdiv.appendChild(div7);
				});
				
				root.appendChild(Maxdiv);
			});
				root.appendChild(ul);
				$('#freewalk>div').on('mouseenter',function(e){
					$(this).siblings().children("div").css("display","none");
					$(this).children("div").css("display","block");
				}).on('mouseleave',function(e){
					$(this).siblings().children("div").css("display","none");
				});
			}
		}
	}
	return getflywalkData;
})