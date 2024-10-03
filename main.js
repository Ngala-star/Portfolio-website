var navBar = document.getElementById("navbar-links");
var bars = document.getElementById("bars");
var close = document.getElementById("close");
bars.addEventListener("click", () => {
  navBar.style.right = 0;
});
close.addEventListener("click", () => {
  navBar.style.right = "-200px";
});

const tablinks = document.getElementsByClassName("content-links");
const contenttabs = document.getElementsByClassName("content-info");

function openTab(event ,tagname) {
  for(tablink of tablinks){
    tablink.classList.remove('active-link')
  }
  for(contenttab of contenttabs){
    contenttab.classList.remove('active-tab')
  }
  event.currentTarget.classList.add('active-link')
  document.getElementById(tagname).classList.add('active-tab')
   
}

