// const apiKey = require('./config.js');

const apiKey = 'AIzaSyCR5In4DZaTP6IEZQ0r1JceuvluJRzQNLE';

var searchForm = document.getElementById('searchForm');

searchForm.addEventListener('submit', function(event) {
  event.preventDefault();
  var searchValue = event.target[0].value;

  var urlYT = 'https://www.googleapis.com/youtube/v3/search?part=snippet&q=kanye+west+' + searchValue.replace(' ', '+') + '&key=' + apiKey;
  var urlKW = 'https://cors-anywhere.herokuapp.com/http://kanyerest.xyz/api/track/' + searchValue.replace(' ', '_');

  var apiYTfunction = setApi(urlYT);
  var apiKWfunction = setApi(urlKW);


  var apiFunctionArray = [apiYTfunction, apiKWfunction];

  parallelFunction(apiFunctionArray, function(err, results) {
    console.log(results);
  });


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

      if(objArray.length === 2) callbackHandler(objArray);
    })
  });
}
