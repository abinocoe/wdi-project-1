var litUp = litUp || {};

litUp.setup = function() {
  this.moves  = 0;
  this.level  = 0;
  $boxes = $('li');
  this.levels = [[3,7,8,9,11,13,15,16,17,21],
  [3,4,5,10,11,13,14,19,20,21],
  [1,5,7,8,10,14,16,17,19,23],
  [3,4,6,7,8,9,10,12,14,15,16,17,18,20,21],
  [2,7,10,11,13,14,17,22],
  [1,2,5,6,10,14,18,19,22,23]
  [0,2,8,10,14,16,22,24],
  [2,3,5,6,9,11,12,13,14,16,17,19,23,24]];
  litUp.loadLevel();
  console.log(this.level)
  $('li').on("click", function() {
    litUp.getIndex($boxes)
  });
};

litUp.getIndex = function(buttons) {
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
  $('span').text(this.moves);
}

litUp.checkWin = function(elements) {
  if ($(elements).hasClass('light') === false) {
    console.log("you've won!");
    $('span').text("0");
    this.moves = 0;
    litUp.modalMe();
  }
}

litUp.modalMe = function() {
  $('#modal').toggle();
  $('#replay').on('click', litUp.replay.bind(this));
  $('#next').on('click', litUp.next.bind(this));
}

litUp.replay = function() {
  console.log(this.level)
  litUp.loadLevel();
  $('#modal').toggle();
}

litUp.next = function() {
  this.level++;
  litUp.loadLevel();
  $('#modal').toggle();
}

$(function() { litUp.setup() });