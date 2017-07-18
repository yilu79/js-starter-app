function init() {
  loadFromStorage();
  updateList();
  $('#sportsCard').on('click', loadSports);
};
