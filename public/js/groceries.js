/* GET sports data */
'use strict';

$(document).ready(init);

function init() {
  loadGroceries();
}

function loadGroceries(e) {

  $.ajax({
    url:'http://api.walmartlabs.com/v1/items/25524661?format=json&apiKey=2utyc5xj5c9tqkmasefs9ebm',
    type: "GET",
    success: function(data) {
      console.log("data: ", data);
      var $name = $('<p>').text(data.brandName);
      var $description = $('<p>').text(data.longDescription);
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
