// JavaScript Document //
var openButton = document.querySelector("header > button");
var deNav = document.querySelector("header nav:nth-of-type(2)");

openButton.onclick = openMenu;

function openMenu() {
  deNav.classList.toggle("toonMenu");
}