var theme = localStorage.getItem('theme');
var themeList = ["light", "dark", "light-blue", "light-green", "light-orange"];
if(theme == null||theme == ''){ theme = 'auto'; }

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

themeList.forEach((element) => {
if(mode == element){ document.getElementById('theme').href = '/css/'+mode+'.css'; }
})




switch (mode) {
case 'random':
document.getElementById('theme').href = '/css/'+themeList[Math.floor(Math.random()*themeList.length)]+'.css';
break;

case 'auto':
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
break;

}


if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
document.cookie = "theme=dark; SameSite=None; Secure; path=/";
}else{
document.cookie = "theme=light; SameSite=None; Secure; path=/";
}

}

setTheme(theme);