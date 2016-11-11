define(['myutil','app/myfn'],function(x,url) {
    function getMainData(main3){
        var xhr=x();
        xhr.open('get',url.getBaseURL()+'/zcmain3');
        xhr.send(null);
        xhr.onreadystatechange=function(e){
            if(xhr.readyState===4){
                var navs = JSON.parse(xhr.responseText);
                navs.forEach(function (elem, index) {
                    var div=document.createElement("div");
                    main3.appendChild(div);
                    
                    var img=document.createElement("img");
                    div.appendChild(img);
                    img.setAttribute("src",elem["imgurl"]);
                    
                    var p1=document.createElement("p");
                    div.appendChild(p1);
                    var span1=document.createElement("span");
                    span1.innerHTML=elem["address"];
                    p1.appendChild(span1);
                    var span2=document.createElement("span");
                    span2.innerHTML=elem["browseCount"];
                    p1.appendChild(span2);
                    var span3=document.createElement("span");
                    span3.innerHTML=elem["soldCount"];
                    p1.appendChild(span3);
                    
                    var p2=document.createElement("p");
                    div.appendChild(p2);
                    var h3=document.createElement("h3");
                    h3.innerHTML=elem["title"];
                    p2.appendChild(h3);
                    
                    var ul=document.createElement("ul");
                    div.appendChild(ul);
                    elem["introduce"].forEach(function(elem1,index1){
                    	var li=document.createElement("li");
                    	li.innerHTML=elem1;
                    	ul.appendChild(li);
                    });
                    
                    var span4=document.createElement("span");
                    span2.innerHTML=elem["oldPrice"];
                    div.appendChild(span4);
                    var span5=document.createElement("span");
                    span3.innerHTML=elem["newPrice"];
                    div.appendChild(span5);
                    console.log(a);
                })
            }
        }
    }
    return getMainData;
});


//热门目的地下拉菜单动画
$("#nav2>a").on("mouseenter",function(e){
 	$("#banner4").css("display","block");
 }).on("mouseleave",function(e){
 	$("#banner4").css("display","none");
 })