$(function() {
	init();
	addEventListener();
});

var openContentId; //現在開いているコンテンツのID

function init() {
	openContentId="home";
	$("#"+openContentId).css("border", "3px solid darkgreen").css("width", "114px").css("line-height", "34px");
	$("#2").toggle();
	$("#3").toggle();
	$("#4").toggle();
}

function addEventListener() {
	$("#HeaderGrovalNav li").on("mouseenter", function() {
		$(this).css("background-color", "darkgreen");
		$(this).css("cursor", "pointer");
	});
	$("#HeaderGrovalNav li").on("mouseleave", function() {
		$(this).css("background-color", "green");
	});
	$("#HeaderGrovalNav li").on("click", function() {
		var thisId=$(this).attr("id"); //クリックされたコンテンツのIDを取得
		if (openContentId==thisId) {
			return; //現在開いているコンテンツと同じボタンを押した場合は何もしない
		} else {
			$(getTargetId(openContentId)).toggle(); //現在開いているコンテンツを閉じる
			$(getTargetId(thisId)).toggle(); //新しいコンテンツを開く

			$("#"+openContentId).css("border", "0px").css("width", "120px").css("line-height", "40px");
			$("#"+thisId).css("border", "3px solid darkgreen").css("width", "114px").css("line-height", "34px");

			openContentId=thisId;
		}
	});
}

function getTargetId(receive) {
	if(receive=="home"){
		return "#1";
	} else if (receive=="profile"){
		return "#2";
	} else if (receive=="activity"){
		return "#3";
	} else if (receive=="link"){
		return "#4";
	}
		return "#0";
}