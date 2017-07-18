/* GET sports data */
'use strict';

$(document).ready(init);

function init() {
  loadCooking();
}

function loadCooking(e) {

  $.ajax({
    url:'http://api.walmartlabs.com/v1/items/12417832?apiKey=rzmhzjsyz8w3vgrtaqyp2yf5&&format=json',
    type: "GET",
    success: function(data) {
      var $name = $('<p>').text(data.brandName);
      var $description = $('<p>').text(data.longDescription);
      var $image = $('<img>').attr('src', data.thumbnailImage);
      var $rating = $('<p>').text(data.customerRating);
      var $ratingImage = $('<img>').attr('src', data.customerRatingImage);
      $('.title').append($name);
      $('.content').append($description);
      $('.image').append($image);
      $('.rating').append($rating);
      $('.ratingImage').append($ratingImage);
    }
  });
}
