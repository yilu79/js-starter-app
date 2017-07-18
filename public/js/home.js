/* GET home data */
'use strict';

$(document).ready(init);

function init() {
  loadHome();
}

function loadHome(e) {

  $.ajax({
    url:'https://api.walmartlabs.com/v1/vod?format=json&apiKey=2utyc5xj5c9tqkmasefs9ebm',
    type: "GET",
    success: function(data) {
      console.log('data: ', data);
      var $name = $('<p>').text(data.brandName);
      var $description = $('<p>').text(data.shortDescription);
      var $image = $('<img>').attr('src', data.thumbnailImage);
      var $rating = $('<p>').text(data.name);
      var $ratingImage = $('<img>').attr('src', data.customerRatingImage);
      $('.title').append($name);
      $('.content').append($description);
      $('.image').append($image);
      $('.rating').append($rating);
      $('.ratingImage').append($ratingImage);
    }
  });
}
