function fuGetJson(url){
var http = new XMLHttpRequest();
//xhttp.overrideMimeType("text/plain");
http.overrideMimeType("application/json");
 http.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
//localStorage.setItem("quote", http.responseText);

}
}
http.open("GET", url, true);
http.send();
}