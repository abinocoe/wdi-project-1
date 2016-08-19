var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.getIndex);
}

litUp.getIndex = function() {
  var index = $('ul').index(this);
  litUp.alight();
}

litUp.alight = function(index) {
  console.log(index)
  $(event.target).toggleClass("light");

}

$(function() { litUp.setup() });