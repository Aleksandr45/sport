$(document).ready(function(){
	$('.handle').on('click', function(){
		$('nav ul').toggleClass('showing');
});
});
const mySiema = new Siema();
document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());
window.addEventListener('DOMContentLoaded',init);
function init(){
var el=document.getElementById('video');
var but=document.getElementById('but')
	var count = 0;	
	el.addEventListener('click',func);
	but.addEventListener('click',func);
	function func (){
		video.play();
		count++;
		but.style.display="none";
		if(count%2==0){
			video.pause();
		but.style.display="block";
		but.style.transition="ease-in-out 0.5s";
		}
	}
var modal=document.getElementById('firmodal');
var btn=document.getElementById('firbtn'); 
var span=document.getElementsByClassName("close")[0];
btn.addEventListener('click',function(){
	modal.style.display="block";
})
span.addEventListener('click',function(){
	modal.style.display="none";
})
var submit=document.getElementById('submit');
submit.addEventListener('click',function(){
	modal.style.display="none";
})
var sub=document.getElementById('top');
var modalTwo=document.getElementById('modal_two');
sub.addEventListener('click',function(){
	modalTwo.style.display="none";
})
var modalTwo=document.getElementById('modal_two');
var btnTwo=document.getElementById('btn_two');
var spanTwo=document.getElementsByClassName("close_two")[0];
btnTwo.addEventListener('click',function(){
	modalTwo.style.display="block";
})
spanTwo.addEventListener('click',function(){
	modalTwo.style.display="none";
})
}
function checkParams() {
    var name = $('#name').val();
    var age = $('#age').val();
    var weight = $('#weight').val();
    var sex = $('#sex').val();
    
    if(name.length != 0 && age.length != 0 && weight.length != 0 && sex.length != 0) {
        $('#submit').removeAttr('disabled');
    } else {
        $('#submit').attr('disabled', 'disabled');
    }
}