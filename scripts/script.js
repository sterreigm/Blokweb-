// JavaScript Document

var hamburgerButton = document.querySelector('nav button:last-of-type');
var menuList = document.querySelector('nav ul');
// element aanspreken 

console.log(hamburgerButton);

hamburgerButton.addEventListener('click', uitklappen);
//dit element laten reageren op klik --> 
//wanneer er op word geklikt gebeurd er iets met de functie uitklappen.

function uitklappen() {
    menuList.classList.toggle('open');
}