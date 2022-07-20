var  geturl = window.location;
var url = new URL(geturl);
var q = url.searchParams.get("q");

//console.log(url);
//alert(q);
if(q != null&&q == ''){ q = 'rand'; }
//alert(url);
// random search angine  adn search command: test l, test n
if(q != null&&q != ''){

// for the command at the end of the search query
var strArray = q.split(" ");
var q2 = strArray[strArray.length - 1] + "#";
var q3 = q + "#";


switch (q2) {

case 'r#':
case 'rand#':
var url_list = [
'https://www.w3.org/',
'https://isocpp.org/tour',
'https://www.ruby-lang.org/en/documentation/',
'https://docs.scala-lang.org/',
'https://docs.python.org/',
'https://golang.org/doc/',
'https://www.rust-lang.org/learn',
'https://www.php.net/docs.php',
'https://www.w3schools.com/',
'https://developer.mozilla.org/docs/',
'https://devdocs.io/',
'https://docs.julialang.org/',
'https://www.typescriptlang.org/docs/',
'http://www.lua.org/docs.html'
];
var random = Math.floor(Math.random() * url_list.length);
var random = url_list[random];
window.location.href = random;
break;

case 'g#': case 'goo#':
case 'г#': case 'гу#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.google.com/search?q=" + q;
if(q == ''){ var url = "https://newsstand.google.com/?nsro=true&hl=en"; }
window.location.href = url;
break;

case 'b#': case 'bin#':
case 'б#': case 'бін#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.bing.com/search?q=" + q;
if(q == ''){ var url = "https://www.msn.com/"; }
window.location.href = url;
break;

case 'q#': case 'к#':
case 'qwa#': case 'ква#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.qwant.com/?q=" + q;
window.location.href = url;
break;

case 'd#': case 'duc#': case 'duk#':
case 'д#': case 'дак#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://duckduckgo.com/?q=" + q;
if(q == ''){ var url = "https://duckduckgo.com/about"; }
window.location.href = url;
break;

case 'l#':  case 'll#':
case 'л#':  case 'лл#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://duckduckgo.com/?q=%5C" + q;
if(q == ''){ var url = "https://duckduckgo.com/about"; }
window.location.href = url;
break;



case 's#': case 'с#':
case 'soc#': case 'соц#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
window.location.href = url;
var url_list = [
"https://twitter.com/search?q="+q,
"https://www.reddit.com/search/?q="+q+"&t=day",
//"https://www.tumblr.com/search/"+q+"?t=1",
"https://mastodon.social/web/timelines/tag/"+q,
"https://medium.com/tag/"+q+"/latest"
];
var random = Math.floor(Math.random() * url_list.length);
var random = url_list[random];
window.location.href = random;
break;

case 'gig#': case 'гіг#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.gigablast.com/search?q=" + q;
window.location.href = url;
break;

case 'y#': case 'ю#': case '.#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.youtube.com/results?search_query=" + q;
if(q == ''){ var url = "https://www.youtube.com/feed/explore"; }
window.location.href = url;
break;

case 'twi#': case 'тві#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://twitter.com/search?q=" + q;
if(q == ''){ var url = "https://twitter.com/explore"; }
window.location.href = url;
break;

case 'red#': case 'ред#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://www.reddit.com/search/?q=" + q;
if(q == ''){ var url = "https://www.reddit.com/rpan/"; }
window.location.href = url;
break;

case 'mas#': case 'мас#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://mastodon.social/web/timelines/tag/" + q;
if(q == ''){ var url = "https://mastodon.social/"; }
window.location.href = url;
break;

case 'med#': case 'мед#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url = "https://medium.com/tag/"+q+"/latest";
if(q == ''){ var url = "https://twitter.com/explore"; }
window.location.href = url;
break;



case 't#': case 'т#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://translate.google.com/#auto/auto/" + q,
"https://www.bing.com/translator/?text=" + q + "&from=auto&to=auto"
];
var random = Math.floor(Math.random() * url_list.length);
var random = url_list[random];
window.location.href = random;
break;

case 'tt#': case 'тт#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://translate.google.com/#auto/en/" + q,
"https://www.bing.com/translator/?text="+ q +"&from=auto&to=en"
];
var random = Math.floor(Math.random() * url_list.length);
var random = url_list[random];
window.location.href = random;
break;



case 'n#': case 'н#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://www.google.com/search?q="+q+"&tbm=nws",
"https://www.bing.com/news/search?q="+q,
"https://www.qwant.com/?t=news&q="+q
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
if(q == ''){
var url_list = [
"https://flipboard.com/",
"https://news.google.com/",
"https://www.msn.com/news",
"https://www.mojeek.com/news",
"https://getpocket.com/explore",
"https://www.reddit.com/r/news/",
"https://twitter.com/explore/tabs/news"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
}
window.location.href = url;
break;


case 'v#': case 'в#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://www.youtube.com/results?search_query=" + q,
"https://vimeo.com/search?q=" + q,
"https://www.dailymotion.com/search/"+ q +"/videos",
"https://search.joinpeertube.org/search?search="+ q
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
if(q == ''){
var url_list = [
"https://www.youtube.com/feed/explore",
"https://vimeo.com/watch",
"https://www.dailymotion.com/"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
}
window.location.href = url;
break;

case 'm#': case 'м#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://music.youtube.com/search?q=" + q,
"https://soundcloud.com/search?q="+ q
//"https://www.deezer.com/search/"+ q +"/track",
//"https://music.apple.com/search?term="+q,
//"https://audiomack.com/search?q="+q,
//"https://www.twitch.tv/directory/game/Music?tl=57e81aba-c8ae-48aa-8fba-7a7eb9d3dd23"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
if(q == ''){
var url_list = [
"https://music.youtube.com/explore",
//"https://www.deezer.com/channels/explore",
"https://soundcloud.com/discover",
"https://vimeo.com/categories/music"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
}
window.location.href = url;
break;


case 'mus#': case 'мус#':
var url_list = [
"https://tunein.com/radio/KEXP-903-s32537/"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
window.location.href = url;
break;


case 'mm#': case 'мм#':
window.location.href = "other_music.html";
break;

case 'o#': case 'о#':
var q = q3.replace(q2, '');
var q = q.trim();
var q = encodeURIComponent(q);
var url_list = [
"https://www.gigablast.com/search?q="+q,
//"https://www.qwant.com/?q="+ q,
"https://www.mojeek.com/search?q="+q
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
if(q == ''){
var url_list = [
"?q=n"
];
var random = Math.floor(Math.random() * url_list.length);
var url = url_list[random];
}
window.location.href = url;
break;

default:
var q = encodeURIComponent(q);
var url_list = [
"https://www.google.com/search?q="+ q,
"https://www.bing.com/search?q="+ q
//"https://www.qwant.com/?q="+q+"&t=web"
];
var random = Math.floor(Math.random() * url_list.length);
random = url_list[random];
window.location.href = random;
}
}
