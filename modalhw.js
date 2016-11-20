/*You will create a single web page for a fake company. 
Use HTML and CSS to fully style it using modern design 
trends and page layout. Use JavaScript to create a modal
to appear after a given amount of time on the page. 
You will need to fully style the modal too so think 
about what this modal will be used for.
Is it a pop-up ad? Is it a prompt to get the 
user to enter their email address to sign up for
the company newsletter? Is it a prompt to get
the user to share this page on Facebook? You decide but
make it look as professional as possible.

The modal appears after 3 seconds of being on the web page.
JavaScript is fully functional and throws no errors
It is clear how the user would exit the modal (e.g. x or close button)
Clear usage of modal - the user understands what is being asked of them
Thoughtful styling has been integrated
Proper HTML formatting
Proper CSS formatting
*/


window.setTimeout(showModal, 500);

var closeVar = document.getElementById('close');
var closeXVar = document.getElementById('closeX');
var modalVar = document.getElementById('timedModal');
var modalContentVar = document.getElementById('modalContent');
var modalTextVar = document.getElementById('modalText');


closeVar.addEventListener('click', hideModal);
closeXVar.addEventListener('click', hideModal);


function hideModal(){
	modalVar.style.display = "none";
}

function showModal(){
	modalVar.style.display = "block";
}














