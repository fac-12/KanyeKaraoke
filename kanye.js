// const apiKey = require('./config.js');

const apiKey = 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE';

var searchForm = document.getElementById('searchForm');
var resultSection = document.getElementById('results');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchValue = event.target[0].value;

  var urlYT = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=kanye+west+' + searchValue.replace(' ', '+') + '&key=' + apiKey;
  var urlKW = 'https://cors-anywhere.herokuapp.com/http://kanyerest.xyz/api/track/' + searchValue.replace(' ', '_');

  var apiYTfunction = setApi(urlYT);
  var apiKWfunction = setApi(urlKW);


  var apiFunctionArray = [apiYTfunction, apiKWfunction];

  parallelFunction(apiFunctionArray, callbackHandler);


});

function setApi(url) {

  return function(callback) {
    var xhr = new XMLHttpRequest();
    var obj;

    xhr.onreadystatechange = function(){
      if(xhr.readyState == 4){

        obj = JSON.parse(xhr.responseText);
        callback(obj);
      }
    };

    xhr.open("GET", url, true);
    xhr.send();
  }
}

function parallelFunction(apiFunctionArray, callbackHandler) {
  var objArray = [];

  apiFunctionArray.forEach(function(apiFunction, index) {
    apiFunction(function(obj) {
      objArray.push(obj);
      console.log(objArray);
      if(objArray.length === 2) callbackHandler(objArray);
    })
  });
}



//callback Handler
function callbackHandler (objArray) {
  if (objArray[1].album == null){
    errorHandler();
  } else {
    successYtObj(objArray);
    successKwObj(objArray);
  }
}

function errorHandler(){
  var errorMsg = document.createElement('p');
  errorMsg.textContent = 'Kayne either doesn\'t sing this song or doesn\'t want you to sing!';

  while (resultSection.firstChild) {
    resultSection.removeChild(resultSection.firstChild);
  }
  resultSection.appendChild(errorMsg);
}

function successYtObj(objArray){
  while (resultSection.firstChild) {
    resultSection.removeChild(resultSection.firstChild);
  }
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/" + objArray[0].items[0].id.videoId;
  resultSection.appendChild(iframe);
}

function successKwObj(objArray){
  var text = document.createTextNode(objArray[1].lyrics);
  var div = document.createElement('div');
  var p = document.createElement('p');
  p.appendChild(text);
  div.appendChild(p);
  resultSection.appendChild(div);
}
