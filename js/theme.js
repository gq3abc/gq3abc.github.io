var theme = 'auto';


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

if(theme == 'auto'){
themeAuto();
window.matchMedia("(prefers-color-scheme: light)").addEventListener("change", function () {
themeAuto();
});
}