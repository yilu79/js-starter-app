/* GET sports data */
'use strict';

console.log("it's working");

$(document).ready(init);

var sportsArray = [], itemTitle, description, imgSrc;

function init() {
  loadSports();
  // $('#sportsCard').on('click', loadSports);
}
  function createSports(data) {
  console.log('hey');
  console.log('data');
  return data.map(function(item) {
    var $li = $("#template").clone();
    $li.removeAttr("id");
    $li.children(".itemTitle").text(item.name);
    $li.children(".description").text(item.longDescription);
    $li.children(".image").text(item.thumbnailImage);

    return $li;
  });
}

function loadSports(e) {
  // e.preventDefault();

  var newSportsObj = {name: itemTitle, longDescription: description};

  $.ajax({
    url:'http://api.walmartlabs.com/v1/items/12417832?apiKey=rzmhzjsyz8w3vgrtaqyp2yf5&&format=json',
    type: "GET",
    success: function(data){
      console.log(data);
      var $new = createSports([newSportsObj]);
      $('#list').append($new);
    }
  });
}
