var theme = localStorage.getItem('theme');

if(theme == null){ theme = 'auto'; }

/*var loc = window.location.pathname;
var dir = loc.substring(0, loc.lastIndexOf('/'));
dircount = (dir.match(new RegExp("/", "g")) || []).length;
let text = "../";
let d = text.repeat(dircount);
//alert(d);*/



function themeAuto(){
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.getElementById('theme').href = '/css/dark.css';
}else{
document.getElementById('theme').href = '/css/light.css';
}
}

function setTheme(mode){

switch (mode) {

case 'light':
document.getElementById('theme').href = '/css/light.css';
break;

case 'dark':
document.getElementById('theme').href = '/css/dark.css';
break;

case 'random':
let themelist = [
"/css/light.css",
"/css/dark.css"
];

document.getElementById('theme').href = themelist[Math.floor(Math.random()*themelist.length)];
break;

default:

themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});

}
}

setTheme(theme);