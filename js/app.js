var litUp = litUp || {};

litUp.setup = function() {
  $boxes      = $('li');
  $audio      = $('#audio');
  this.moves  = 0;
  this.level  = 0;
  this.levels = [[3,7,8,9,11,13,15,16,17,21],
  [3,4,5,10,11,13,14,19,20,21],
  [1,5,7,8,10,14,16,17,19,23],
  [3,4,6,7,8,9,10,12,14,15,16,17,18,20,21],
  [2,7,10,11,13,14,17,22],
  [1,2,5,6,10,14,18,19,22,23],
  [2,3,5,6,9,11,12,13,14,16,17,19,23,24],
  [0,2,8,10,14,16,22,24],
  [3,4,5,6,7,8,11,12,13,16,17,18,19,20,21],
  [3,4,8,9,12,13,14,17,18,21,22,23],
  [3,7,8,9,17,18,24],
  [0,1,10,11,20,21],
  [1,6,12,18,24],
  [2,4,7,8,9,12,13,14,17,18,19,22,24],
  [1,3,8,10,15,16,17,20,22],
  [0,6,10,11,16,20],
  [0,1,7,13,14,18,19,23,24]];
  $('li').on('click', function() {litUp.getIndex($boxes)});
  $('#replay').on('mouseup', litUp.replay.bind(this));
  $('#next').on('mouseup', litUp.next.bind(this));
  $('#reset').on('click', litUp.reset.bind(this));
  litUp.loadLevel();
};

litUp.getIndex = function(buttons) {
  $('#audio').get(0).play();
  var $index   = $('li').index(event.target);
  var a        = Math.sqrt(buttons.length);
  if ($index % a === 0) {
    if ($index > 0 && $index < (buttons.length)-a) {
      litUp.toggler(buttons, [($index), ($index+1), ($index-a), ($index+a)]);
    } else if ($index === 0) {
      litUp.toggler(buttons, [($index), ($index+1), ($index+a)]);
    } else {
      litUp.toggler(buttons, [($index), ($index+1), ($index-a)]);
    }
  } else if ($index % a === 4) {
    if ($index > (a-1) && $index < (buttons.length)-1) {
      litUp.toggler(buttons, [($index), ($index-1), ($index-a), ($index+a)]);
    } else if ($index === (a-1)) {
      litUp.toggler(buttons, [($index), ($index-1), ($index+a)]);
    } else {
      litUp.toggler(buttons, [($index), ($index-1), ($index-a)]);
    }
  } else if ($index > 0 && $index < (a-2)) {
    litUp.toggler(buttons, [($index), ($index-1), ($index+1), ($index+a)]);
  } else if ($index > (buttons.length)-a && $index < (buttons.length)-1) {
    litUp.toggler(buttons, [($index), ($index-1), ($index+1), ($index-a)])
  } else {
    litUp.toggler(buttons, [($index), ($index-1), ($index+1), ($index-a), ($index+a)]);
  }
  litUp.updateCount();
  litUp.checkWin(buttons);
}

litUp.loadLevel = function() {
  litUp.toggler($boxes, this.levels[this.level]);
}

litUp.toggler = function(elements, array) {
  $.each(array, function(i, v) {
    $(elements[v]).toggleClass('light');
  });
};

litUp.updateCount = function() {
  this.moves++;
  $('#mvs').text(this.moves);
}

litUp.checkWin = function(elements) {
  if ($(elements).hasClass('light') === false) {
    litUp.modalMe();
  }
}

litUp.modalMe = function() {
  $('#modal').show();
  $($boxes).off();
}

litUp.reset = function() {
  $('#mvs').text('0');
  this.moves = 0;
  $('li').removeClass('light');
  litUp.loadLevel();
}

litUp.replay = function() {
  $('#mvs').text('0');
  this.moves = 0;
  litUp.loadLevel();
  $('#modal').hide();
  $('li').on('click', function() {litUp.getIndex($boxes)});
}

litUp.next = function() {
  this.level++;
  $('#mvs').text('0');
  this.moves = 0;
  litUp.loadLevel();
  $('#modal').hide();
  $('#lvl').text(this.level+1);
  $('li').on('click', function() {litUp.getIndex($boxes)});
}

$(function() { litUp.setup() });