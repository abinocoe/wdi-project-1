var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.getIndex);
  this.moves = 0;
}

litUp.getIndex = function() {
  var $index   = $('li').index(this);
  var $boxes   = $('li').toArray();
  var a        = Math.sqrt($boxes.length);
  if ($index % a === 0) {
    if ($index > 0 && $index < ($boxes.length)-a) {
      leftSide = [($index), ($index+1), ($index-a), ($index+a)];
      litUp.toggler($boxes, leftSide);
    } else if ($index === 0) {
      topLeft = [($index), ($index+1), ($index+a)];
      litUp.toggler($boxes, topLeft);
    } else {
      bottomLeft = [($index), ($index+1), ($index-a)];
      litUp.toggler($boxes, bottomLeft);
    }
  } else if ($index % a === 4) {
    if ($index > (a-1) && $index < ($boxes.length)-1) {
      rightSide = [($index), ($index-1), ($index-a), ($index+a)];
      litUp.toggler($boxes, rightSide);
    } else if ($index === (a-1)) {
      topRight = [($index), ($index-1), ($index+a)];
      litUp.toggler($boxes, topRight);
    } else {
      bottomRight = [($index), ($index+1), ($index-a), ($index+a)];
      litUp.toggler($boxes, bottomRight);
    }
  } else if ($index > 0 && $index < (a-2)) {
    topRow = [($index), ($index-1), ($index+1), ($index+a)];
    litUp.toggler($boxes, topRow);
  } else if ($index >= ($boxes.length)-a && $index < ($boxes.length)-1) {
    bottomRow = [($index), ($index+1), ($index-a), ($index+a)];
    litUp.toggler($boxes, bottomRow);
  } else {
    central = [($index), ($index-1), ($index+1), ($index-a), ($index+a)];
    litUp.toggler($boxes, central);
  }
  litUp.updateCount();
  litUp.checkWin($boxes);
}

litUp.toggler = function(elements, array) {
  $.each(array, function(i, v) {
    $(elements[v]).toggleClass('light');
  });
};


litUp.updateCount = function() {
  this.moves++;
  $('h2').text(this.moves);
}

litUp.checkWin = function(array) {
  if ($(array).hasClass('light') === false) {
    console.log("you've won!");
    this.moves = 0;
    $('h2').text("0");
    litUp.nextLevel(array);
  }
}

litUp.nextLevel = function(array) {
  levelTwo = [3,4,5,10,11,13,14,19,20,21]
  $.each(levelTwo, function(i, v) {
    $(array[v]).toggleClass('light');
  });
}

$(function() { litUp.setup() });