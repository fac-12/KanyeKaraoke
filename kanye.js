// const apiKey = require('./config.js');

const apiKey = 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE';

var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchResult = event.target[0].value;
  
  var apiYT = setApi('yt', searchResult);
  var apiKW = setApi('kw', searchResult);

  apiKW();
  apiYT();
});

function setApi(apiName, searchValue) {
  var url;

  if(apiName === 'yt') url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=kanye+west+' + searchValue.replace(' ', '+') + '&key=' + apiKey;
  else if(apiName === 'kw') url = 'https://cors-anywhere.herokuapp.com/http://kanyerest.xyz/api/track/' + searchValue.replace(' ', '_');

  return function() {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4 && xhr.status == 200){
        //document.getElementById("results").textContent = JSON.parse(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }

}


//
// function kanyeAPI(value){
//   // var newValue = value.split(" ").join("_");
//   var xhr = new XMLHttpRequest();
//   // xhr.setRequestHeader("Authorization", "");
//   xhr.onreadystatechange = function(){
//     if(xhr.readyState == 4 && xhr.status == 200){
//       //document.getElementById("results").textContent = JSON.parse(xhr.responseText);
//       console.log(JSON.parse(xhr.responseText));
//     }
//   };
//
//
//   xhr.open("GET","https://cors-anywhere.herokuapp.com/http://kanyerest.xyz/api/track/good_morning",true);
//
//   // xhr.setRequestHeader('Access-Control-Allow-Origin', "http://127.0.0.1:63213/")
//   xhr.send();
// }
//
// kanyeAPI();
