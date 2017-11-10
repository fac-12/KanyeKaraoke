// const apiKey = require('./config.js');

const apiKey = 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE';

var searchForm = document.getElementById('searchForm');
var resultSection = document.getElementById('results');
var searchValue;

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  searchValue = event.target[0].value;

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
      objArray[index] = obj;
      console.log(objArray);
      if(objArray.length === 2) callbackHandler(objArray);
    })
  });
}



//callback Handler
function callbackHandler (objArray) {
    clearPage();
    updateSongTitle(searchValue);
    var twitterImg = document.getElementById('twitterImg').style.display = 'none';
  if (objArray[1].album !== null && objArray[0].items) {
    successYtObj(objArray);
    successKwObj(objArray);
  } else {
    errorHandler();
  }
}


function errorHandler(){
  var errorMsg = document.createElement('p');
  errorMsg.textContent = "Right now we can't handle your Kanye-Request";
  errorMsg.classList = 'errorMsg';
  var sadKanye = document.createElement('img');
  sadKanye.src = "images/sadKanye.gif";
  sadKanye.classList = 'sadImg';
  resultSection.appendChild(errorMsg);
  resultSection.appendChild(sadKanye);
}

function successYtObj(objArray){
  var iframe = document.createElement('iframe');
  iframe.src = "https://www.youtube.com/embed/" + objArray[0].items[0].id.videoId;
  iframe.classList = 'iframe';
  resultSection.appendChild(iframe);
}

function successKwObj(objArray){
  var p = document.createElement('p')
  p.innerText = objArray[1].lyrics;
  p.classList = 'lyrics';
  var div = document.createElement('div');
  div.classList = 'lyric-container';
  div.appendChild(p);
  resultSection.appendChild(div);
}

function clearPage(){
  while (resultSection.firstChild) {
    resultSection.removeChild(resultSection.firstChild);
  }
}

function updateSongTitle(newTitle) {
  var title = document.getElementById('songTitle');
  title.innerText = newTitle.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');
}
