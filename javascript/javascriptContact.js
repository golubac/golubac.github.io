var btn = document.getElementById('contactBtn');
btn.addEventListener('click',predaj);
var tmailc = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]+$/
var messgc =/^[a-z]{1,30}$/
var namec = /^[A-z]{1,13}$/
var phonec = /^[0-9]{7,10}$/
function predaj () {
	var fname = document.querySelector('input[name="name"]');
	var	lname = document.querySelector('input[name="Lname"]');
	var mail = document.querySelector('input[name="cemail"]');
	var messg = document.querySelector('textarea[name="messg"]');
	if (tmailc.test(mail.value) || mail.disabled == true ) {
		mail.nextSibling.innerHTML=' ';
	}
	else {
		mail.nextSibling.innerHTML='Enter valid email'
	}

	if (namec.test(fname.value)) {
		fname.nextSibling.innerHTML=' ';
	}
	else {
		fname.nextSibling.innerHTML='Wrong firstname'
	}

	if (namec.test(lname.value)) {
		lname.nextSibling.innerHTML=' ';
	}
	else {
		lname.nextSibling.innerHTML='Wrong lastname'
	}
	if (messgc.test(messg.value) || messg.disabled == true) {
		messg.nextSibling.innerHTML=' ';
	}
	else {
		messg.nextSibling.innerHTML='Enter proper message'
	}
	if (phonec.test(phone.value) ||  phone.style.display=="none") {
		phone.nextSibling.innerHTML=' ';
	}
	else {
		phone.nextSibling.innerHTML='Enter proper phone'
	}

}

//upit da li je chekovano polje za telefon ukoliko jeste zatamneti email i message polje
 var mail = document.querySelector('input[name="cemail"]');
 var messg = document.querySelector('textarea[name="messg"]');	
 var check = document.querySelector('#phone');
 check.addEventListener('click',showphone);
 var phone = document.querySelector('.pho');
 phone.style.display="none";
 function showphone () {
 	if (check.checked == true ) {
 		 phone.style.display="inline-block";
 		 mail.disabled = true;
 		 messg.disabled = true;

 	}
 	else {
 		 phone.style.display="none";
 		 mail.disabled = false;
 		 messg.disabled=false;
 		 phone.nextSibling.innerHTML=' ';
 	}
 }