
test("setApi() function",function(assert){
  var result = setApi("https://www.googleapis.com/youtube/v3/search?part=snippet&q=kanye+west+gold+digger&key=AIzaSyAFTWZBOIY-wrOxqGK3D1kQRMvAKmIbIlk");
  var expected = "function";
  assert.equal(typeof result,expected,"The return should be a function");
});


test("parallelFunction() should not change the 1st argument apiFunctionArray ",function(assert){
  var apiArray = [];
  var expected = [];
  var callBack = function(){};
  parallelFunction(apiArray,callBack);

  assert.deepEqual(apiArray,expected,"The apiArray argument should not be changed ");
});


test("callbackHandler() should not mutate the object ",function(assert){
  var result  = [newObject,newObject1];
  var expected = [newObject,newObject1];
  callbackHandler(result);

  assert.deepEqual(result,expected,"The ");
});

test("errorHandler() should output an error message ' ",function(assert){
  errorHandler();
  var expected = 'Kayne either doesn\'t sing this song or doesn\'t want you to sing!';
  var result = document.getElementById("errorMessage").innerText;
  assert.equal(result,expected,"The erroe message should be Kayne either doesn\'t sing this song or doesn\'t want you to sing!' ");


});

test("successYtObj() should create an iframe tag after being called ",function(assert){
  successYtObj([newObject,newObject1]);
  var expected = true;
  var result = document.getElementsByTagName("iframe").length != 0;

  assert.deepEqual(result,expected,"Theere should be on iframe on the page ");
});

test("successKwObj() should create a p tag after being called ",function(assert){
  successKwObj([newObject,newObject1]);
  var expected = true;
  var result = document.getElementById("lyrics").innerHTML == newObject1.lyrics;

  assert.deepEqual(result,expected,"Theere lyrics printed on the page ahould be equal wiht property lyrics");
});

test("clearPage() should check the results should have no children ",function(assert){
  clearPage();
  var expected = true;
  var result = document.getElementById("results").childNodes.length == 0;

  assert.deepEqual(result,expected,"There should be no childNodes in the result section after the clearPage() invocation");
});


var newObject = {
kind: "youtube#searchListResponse",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/GXic69GWbP_kfL9gawjSU2fEHEU",
nextPageToken: "CAUQAA",
regionCode: "GB",
pageInfo: {
totalResults: 1000000,
resultsPerPage: 5
},
items: [
{
kind: "youtube#searchResult",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/g2guh-XntoTdazDZWVevGtadANs",
id: {
kind: "youtube#video",
videoId: "Q821mNXNw-I"
},
snippet: {
publishedAt: "2016-04-15T23:16:45.000Z",
channelId: "UCa35yNiTFwMoGnbIIOs8Ryw",
title: "Kanye West - 'Famous' (Unofficial Official Video)",
description: "Written, Directed, and Starring Big Bud, Lil Bud. Aziz Ansari and Eric Wareheim Buy full album: shop.kanyewest.com Big Bud, Lil Bud Productions INC. Kanye ...",
thumbnails: {
default: {
url: "https://i.ytimg.com/vi/Q821mNXNw-I/default.jpg",
width: 120,
height: 90
},
medium: {
url: "https://i.ytimg.com/vi/Q821mNXNw-I/mqdefault.jpg",
width: 320,
height: 180
},
high: {
url: "https://i.ytimg.com/vi/Q821mNXNw-I/hqdefault.jpg",
width: 480,
height: 360
}
},
channelTitle: "Eric Wareheim",
liveBroadcastContent: "none"
}
},
{
kind: "youtube#searchResult",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/JBbcPt6dBK6gQRkiB-0IRQ3ZJyk",
id: {
kind: "youtube#video",
videoId: "p7FCgw_GlWc"
},
snippet: {
publishedAt: "2016-07-01T15:30:00.000Z",
channelId: "UChpJbg7zMbi5jx9Gdjaxa9g",
title: "Kanye West - Famous",
description: "Kanye West - Famous http://vevo.ly/cVDXmL.",
thumbnails: {
default: {
url: "https://i.ytimg.com/vi/p7FCgw_GlWc/default.jpg",
width: 120,
height: 90
},
medium: {
url: "https://i.ytimg.com/vi/p7FCgw_GlWc/mqdefault.jpg",
width: 320,
height: 180
},
high: {
url: "https://i.ytimg.com/vi/p7FCgw_GlWc/hqdefault.jpg",
width: 480,
height: 360
}
},
channelTitle: "KanyeWestVEVO",
liveBroadcastContent: "none"
}
},
{
kind: "youtube#searchResult",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/qzpYh9cZUiKPBdjb_GZbllcY8BQ",
id: {
kind: "youtube#video",
videoId: "1wYXSxCvN68"
},
snippet: {
publishedAt: "2016-06-25T23:17:34.000Z",
channelId: "UC05mM1Izkfh0YF5MaoxJ3Aw",
title: "Kanye West- Famous ( 2016) audio with lyrics",
description: "Please watch catastrophe ft. Mehrab https://www.youtube.com/watch?v=KvdNaD6uTpg&feature=youtu.be.",
thumbnails: {
default: {
url: "https://i.ytimg.com/vi/1wYXSxCvN68/default.jpg",
width: 120,
height: 90
},
medium: {
url: "https://i.ytimg.com/vi/1wYXSxCvN68/mqdefault.jpg",
width: 320,
height: 180
},
high: {
url: "https://i.ytimg.com/vi/1wYXSxCvN68/hqdefault.jpg",
width: 480,
height: 360
}
},
channelTitle: "Mehrab Ahmed BD",
liveBroadcastContent: "none"
}
},
{
kind: "youtube#searchResult",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/QjlaHvcbmewyJPuT5Hy05Z8mhy0",
id: {
kind: "youtube#video",
videoId: "VtmOu951xeU"
},
snippet: {
publishedAt: "2016-06-26T07:50:04.000Z",
channelId: "UCno8Q-Su1JLiclZgFs72q6Q",
title: "Kanye West - Famous (Audio)",
description: "Music video by Kanye West performing Famous (Audio). © 2016 Getting Out Our Dreams II, LLC. Distributed by Def Jam Recordings, a division of UMG ...",
thumbnails: {
default: {
url: "https://i.ytimg.com/vi/VtmOu951xeU/default.jpg",
width: 120,
height: 90
},
medium: {
url: "https://i.ytimg.com/vi/VtmOu951xeU/mqdefault.jpg",
width: 320,
height: 180
},
high: {
url: "https://i.ytimg.com/vi/VtmOu951xeU/hqdefault.jpg",
width: 480,
height: 360
}
},
channelTitle: "Pop Music",
liveBroadcastContent: "none"
}
},
{
kind: "youtube#searchResult",
etag: "ld9biNPKjAjgjV7EZ4EKeEGrhao/U6yiI3HIMtCHxP5Ah88UVQzYhLw",
id: {
kind: "youtube#video",
videoId: "bejRzEEm2lE"
},
snippet: {
publishedAt: "2016-06-27T00:23:29.000Z",
channelId: "UCWRQJlhoi8b6abrnNYz2K7A",
title: "Kanye west ft Rihanna - Famous Lyrics",
description: "Kanye west ft Rihanna - Famous Lyrics.",
thumbnails: {
default: {
url: "https://i.ytimg.com/vi/bejRzEEm2lE/default.jpg",
width: 120,
height: 90
},
medium: {
url: "https://i.ytimg.com/vi/bejRzEEm2lE/mqdefault.jpg",
width: 320,
height: 180
},
high: {
url: "https://i.ytimg.com/vi/bejRzEEm2lE/hqdefault.jpg",
width: 480,
height: 360
}
},
channelTitle: "max065011",
liveBroadcastContent: "none"
}
}
]
};

var newObject1 = {
album: "late_registration",
lyrics: "She take my money when I'm in need Yeah she's a triflin' friend indeed Oh, she's a gold digger, way over town That digs on me Now I ain't sayin' she a gold digger But she ain't messin' wit' no broke niggas Now I ain't sayin' she a gold digger But she ain't messin' wit' no broke niggas Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head Cutie the bomb, met her at a beauty salon With a baby Louis Vuitton under her underarm She said, I can tell you rock, I can tell by your charm Far as girls you got a flock, I can tell by your charm And your arm, but I'm lookin' for the one. Have you seen her? My psychic told me she'll have an ass like Serena Trina, Jeena-fah Lopez, four kids And I gotta take all they bad ass to ShowBiz Okay, get your kids, but then they got their friends I pulled up in the Benz, they all got up in We all went to din and then I had to pay If you fuckin' with this girl then you better be paid You know why? It take too much to touch her From what I heard she got a baby by Busta My best friend said she used to fuck with Usher I don't care what none of y'all say, I still love her Now I ain't sayin' she a gold digger, uh But she ain't messin' wit' no broke niggas, uh Now I ain't sayin' she a gold digger, uh But she ain't messin' wit' no broke niggas, uh Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head Eighteen years, eighteen years She got one of yo' kids, got you for eighteen years I know somebody payin' child support for one of his kids His baby mama car and crib is bigger than his You will see him on TV, any given Sunday Win the Super Bowl and drive off in a Hyundai She was supposed to buy your shorty Tyco with your money She went to the doctor got lipo with your money She walkin' around lookin' like Michael with your money Should've got that insured, GEICO for your money If you ain't no punk Holla we want prenup (We want prenup!) Yeah, it's something that you need to have 'Cause when she leave your ass she gon' leave with half Eighteen years, eighteen years And on her eighteenth birthday, he found out it wasn't his Now I ain't sayin' she a gold digger, uh But she ain't messin' wit' no broke niggas, uh Now I ain't sayin' she a gold digger, uh But she ain't messin' wit' no broke niggas, uh Get down girl, go 'head get down, uh Get down girl, go 'head get down Get down girl, go 'head get down, uh Get down girl, go 'head Now I ain't sayin' you a gold digger, you got needs You don't want a dude to smoke but he can't buy weed You got out to eat and he can't pay, y'all can't leave There's dishes in the back, he gotta roll up his sleeves But while y'all washin', watch him He gon' make it into a Benz out of that Datsun He got that ambition, baby, look at his eyes This week he moppin' floors, next week it's the fries So, stick by his side I know there's dude's ballin', but yeah that's nice And they gon' keep callin' and tryin', but you stay right, girl And when you get on, he leave yo' ass for a white girl Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head get down Get down girl, go 'head",
title: "gold_digger"
};
