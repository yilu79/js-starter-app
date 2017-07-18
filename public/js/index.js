'use strict';

$(document).ready(init);

function init() {
  $('.sports').on('click', loadSports);
  $('.home').on('click', loadHome);
  $('.fashionista').on('click', loadFashionista);
  $('.cooking').on('click', loadCooking);
  $('.groceries').on('click', loadGrocerires);
  $('.mindfulness').on('click', loadMindfulness);
};
