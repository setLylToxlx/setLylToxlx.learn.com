define(function(require,exports,module){
	// alert(1);
	// var $ = require('jquery.min.js');
	console.log($('.container').html());
	

	wx.ready(function(){
		$('#shareWin').click(function(){
			wx.onMenuShareTimeline({
				title: '我的标题',
				link: "https://setlyltoxlx.github.io/818.html",
				// desc: '在长大的过程中，我才慢慢发现，我身边的所有事，别人跟我说的所有事，那些所谓本来如此，注定如此的事，它们其实没有非得如此，事情是可以改变的。更重要的是，有些事既然错了，那就该做出改变。',
				imgUrl: 'https://setlyltoxlx.github.io/setlyltoxlx.github.io/images/apple.png',
				success: function(){
					alert('分享成功！');
				},
				cancel: function(){
					alert('取消分享！');
				}
			});
			$('#uploadImg').click(function(){
				wx.chooseImage({
					count:1,
					sizeType:['original','compressed'],
					sourceType:['album','camera'],
					success:function(res){
						var localIds = res.localIds;
					}
				});
			});
		});
		
    // config信息验证后会执行ready方法，所有接口调用都必须在config接口获得结果之后，config是一个客户端的异步操作，所以如果需要在页面加载时就调用相关接口，则须把相关接口放在ready函数中调用来确保正确执行。对于用户触发时才调用的接口，则可以直接调用，不需要放在ready函数中。
	});
	/*wx.checkJsApi({
    jsApiList: ['chooseImage'], // 需要检测的JS接口列表，所有JS接口列表见附录2,
    success: function(res) {
        // 以键值对的形式返回，可用的api值true，不可用为false
        // 如：{"checkResult":{"chooseImage":true},"errMsg":"checkJsApi:ok"}
    }
	});*/
	
})