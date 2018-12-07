$(document).ready(function () {
	//hover menu
	$('.header .menu li').hover(function() {
		$(this).css('color','#989897');
	},function () {
		$(this).css('color','#000');
	})
 

	//SLIDER U MEJNU 

	$('#middle .img-slide ul li:eq(1)').hover(function () {
		$(this).addClass('hover');
	},function () {
		$(this).removeClass('hover');
	});

	$('#middle .img-slide ul li:eq(3)').hover(function () {
		$(this).addClass('hover');
	},function () {
		$(this).removeClass('hover');
	});

	$('#middle .img-slide ul li:eq(0)').hover(function () {
		$(this).addClass('hover');
	},function () {
		$(this).removeClass('hover');
	});

	$('#middle .img-slide ul li:eq(2)').hover(function () {
		$(this).addClass('hover2');
		},function () {
		$(this).removeClass('hover2');
	});
	//jquery plugin
    	$(".rslides").responsiveSlides();
    //jquery plugin
    //dinamicko ispisivanje slika
	for (var i =  6; i > 0; i--) {
		$('#place').append($('<img src="images/gimg'+i+'.jpeg"  alt="slika'+i+'" />').addClass('imgDis'))		
	}

	//prikaz slika u gallery 
	
	var fullScreen = document.getElementById('fullScreen');
	var img = document.getElementsByClassName('imgDis');
	var fullImg = document.getElementById("fullImage");
	for (var i = img.length - 1; i >= 0; i--) {
		img[i].addEventListener('click',show)
	}
	function show () {
	    fullScreen.style.display="block";
		fullImg.src = this.src;
	}
	window.onclick = function(e) {
    if (e.target == fullScreen) {
        fullScreen.style.display = "none";
    	}
	}



})