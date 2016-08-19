var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.alight)
  
litUp.alight = function() {
  console.log(event.target.value);
}

$(function() { litUp.setup() });