var in_theaterUrl = "http://api.douban.com/v2/movie/in_theaters"
//电影条目的接口
var movieInfo = "https://api.douban.com/v2/movie/subject"
$.ajax({
	url : 'js/data1.json',
	type : 'GET',
	dataType :　'json',
	data : {
		name :in_theaterUrl
	}
})
.done(function(data){
	console.log(data)
	//jq的缺点 所有的业务结构处理 都放在回调函数里 耦合性特别高 简单
	//模块化开发 耦合性特别低 业务可以分离 可读性高 复杂
	var result = data.subjects;
	var str = "";
	for(var i=0, length1=6; i<length1; i++){
		str+=`<li>
		        <div class="am_ga am-gallery-item">
		            <a href="info.html?${result[i].id}">
		              <img src="${result[i].images.small}" alt=""/>
		                <figcaption class="title am-text-center am-text-xs am-gallery-title">${result[i].title}</figcaption>
		                <div class="title_1 am-gallery-desc am-text-center am-text-xs am-gallery-title">${result[i].genres}</div>
		            </a>
		        </div>
		    </li>`
	}
	$(".am-g").html(str);
	
	setTimeout(function(argument){
		nowShowing();
	},0)
})
.fail(function(err,TestStatus) { //请求失败的两个参数
	console.log(err);
	console.log(TestStatus);
})
.always(function(){
	console.log("complete");
});
	
function nowShowing(){
	var mySwiper2 = new Swiper(".am-g",{
		slidesPerView : 3 //设置swiper 轮播内容的长度
 	});
	var txt = $(".title").each(function(index,el){
		console.log($(this).text().length)
		if($(this).text().length >5){
			var newTxt = $(this).text().substr(0,5)+"...";
			$(this).text(newTxt)
		}
	}).css({'fontWeight':'bold','color':'black'});
}

$.ajax({
	url : 'js/data3.json',
	type : 'GET',
	dataType :　'json',
	data : {
		name :in_theaterUrl
	}
})
.done(function(data){
	console.log(data)
	//jq的缺点 所有的业务结构处理 都放在回调函数里 耦合性特别高 简单
	//模块化开发 耦合性特别低 业务可以分离 可读性高 复杂
	var result = data.subjects;
	var str = "";
	for(var i=0, length1=6; i<length1; i++){
		str+=`<li>
		        <div class="am_ga am-gallery-item">
		            <a href="info.html?${result[i].id}">
		              <img src="${result[i].images.small}" alt=""/>
		                <figcaption class="title am-text-center am-text-xs am-gallery-title">${result[i].title}</figcaption>
		                <div class="title_1 am-gallery-desc am-text-center am-text-xs am-gallery-title">${result[i].genres}</div>
		            </a>
		        </div>
		    </li>`
	}
	$(".am-h").html(str);
	
	setTimeout(function(argument){
		nowShowing();
	},0)
})
.fail(function(err,TestStatus) { //请求失败的两个参数
	console.log(err);
	console.log(TestStatus);
})
.always(function(){
	console.log("complete");
});
	
function nowShowing(){
	var mySwiper2 = new Swiper(".am-g",{
		slidesPerView : 3 //设置swiper 轮播内容的长度
 	});
	var txt = $(".title").each(function(index,el){
		console.log($(this).text().length)
		if($(this).text().length >5){
			var newTxt = $(this).text().substr(0,5)+"...";
			$(this).text(newTxt)
		}
	}).css({'fontWeight':'bold','color':'black'});
}