

"Q1"

var footer = document.getElementsByTagName("footer");

var count = 0;


footer[0].addEventListener("click", function(){

count +=1

console.log("clic numéro " + count)
 });

"Q2"

var button = document.getElementsByClassName("navbar-toggler-icon")

var nav = document.getElementById("navbarHeader")

button[0].addEventListener("click", function() {

	nav.classList.toggle("collapse")
	
})



"Q3"


var button1 = document.getElementsByClassName("btn btn-sm btn-outline-secondary")

var card1 = document.getElementsByClassName("card mb-4 box-shadow")

button1[0].addEventListener("click",function(){
	card1[0].style.color = "red"
})


"Q4"

button1[1].addEventListener("click",function(){

	if (card1[1].style.color === 'green')
	{
card1[1].style.color = 'black' ;
}
else 

card1[1].style.color="green"

	
})

"Q5"


var header = document.getElementsByTagName("header")
var cdn = document.getElementsByTagName("link")

header[0].addEventListener("dblclick", function()
{
	if (cdn[0].disabled)
	{
	cdn[0].disabled = false
}
	else {
		cdn[0].disabled = true
	}
});



