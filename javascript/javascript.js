
//Provera sign up i login forme
//prikaz login bloka

function signUp () {
	document.getElementById('id01').style.display='block'
}

function login () {
	document.getElementById('id02').style.display='block'
}

function exit1 () {
	document.getElementById('id01').style.display='none'
}
function exit2 () {
	document.getElementById('id02').style.display='none'
}
 
var modal = document.getElementById('id01');
var modal2 = document.getElementById('id02');
window.onclick = function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
    if (e.target == modal2) {
        modal2.style.display = "none";
    }
}
//Promena stila naslovne strane
var style = document.getElementById('style');
style.addEventListener('click', changeStyle);
var check =0;
function changeStyle() {
	if (check==0) {		
		var all = document.getElementsByTagName('body');
		all[0].style= "background-color:rgba(0,0,0,0.8);";
		var top = document.getElementsByClassName('top');
		top[1].style= "color:#fff";
		for (var i = top.length - 1; i >= 0; i--) {
			top[i].classList.add("top1");
		}
		check++;
	}
	else {
		var all = document.getElementsByTagName('body');
		all[0].style= "background-color:#fff;";
		var top = document.getElementsByClassName('top');
		top[1].style= "color:#000";
		for (var i = top.length - 1; i >= 0; i--) {
			top[i].classList.remove("top1");
		check=0;
		}
	}
} 

//slider za artista
	var i = 2; 
	var imagesArt=[];
	imagesArt[0] = 'images/img11.jpeg';
	imagesArt[1] = 'images/img22.jpg';
	imagesArt[2] = 'images/img7.jpeg';
	var place = document.getElementsByClassName('middle')
	function slideimg () {
		place[0].src=imagesArt[i]
		if (i < imagesArt.length-1) {
			i++;
		}else{
			i=0;
		}
		setTimeout("slideimg()",3000);
	}
	slideimg();

//input test
	var mail = document.querySelector("input[name='email']");
	var pass = document.querySelector("input[type='psw']");
	var passR = document.querySelector("input[type='psw-repeat']");
	var tmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/
	var pass =/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/


