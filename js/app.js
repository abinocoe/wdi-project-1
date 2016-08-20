var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.getIndex);
  this.moves = 0;
}

litUp.getIndex = function() {
  var index   = $('li').index(this);
  var $boxes  = $('li').toArray();
  var a       = Math.sqrt($boxes.length);
  if (index % a === 0) {
    if (index > 0 && index < ($boxes.length)-a) {
      $($boxes[index]).toggleClass('light');
      $($boxes[index+1]).toggleClass('light');
      $($boxes[index-a]).toggleClass('light');
      $($boxes[index+a]).toggleClass('light');
    } else if (index === 0) {
      $($boxes[index]).toggleClass('light');
      $($boxes[index+1]).toggleClass('light');
      $($boxes[index+a]).toggleClass('light');
    } else {
      $($boxes[index]).toggleClass('light');
      $($boxes[index+1]).toggleClass('light');
      $($boxes[index-a]).toggleClass('light');
    }
  } else if (index % a === 4) {
    if (index > (a-1) && index < ($boxes.length)-1) {
      $($boxes[index]).toggleClass('light');
      $($boxes[index-a]).toggleClass('light');
      $($boxes[index+a]).toggleClass('light');
      $($boxes[index-1]).toggleClass('light');
    } else if (index === (a-1)) {
      $($boxes[index]).toggleClass('light');
      $($boxes[index-1]).toggleClass('light');
      $($boxes[index+a]).toggleClass('light');
    } else {
      $($boxes[index]).toggleClass('light');
      $($boxes[index-a]).toggleClass('light');
      $($boxes[index-1]).toggleClass('light');
    }
  } else if (index > 0 && index < (a-2)) {
    $($boxes[index]).toggleClass('light');
    $($boxes[index-1]).toggleClass('light');
    $($boxes[index+1]).toggleClass('light');
    $($boxes[index+a]).toggleClass('light');
  } else if (index >= ($boxes.length)-a && index < ($boxes.length)-1) {
    $($boxes[index]).toggleClass('light');
    $($boxes[index-1]).toggleClass('light');
    $($boxes[index+1]).toggleClass('light');
    $($boxes[index-a]).toggleClass('light');
  } else {
    $($boxes[index]).toggleClass('light');
    $($boxes[index-1]).toggleClass('light');
    $($boxes[index+1]).toggleClass('light');
    $($boxes[index-a]).toggleClass('light');
    $($boxes[index+a]).toggleClass('light');
  }
  litUp.updateCount();
  litUp.checkWin();
}

litUp.updateCount = function() {
  this.moves++;
  $('h2').text(this.moves);
}

litUp.checkWin = function() {
  if ($('li').hasClass('light') === false) {
    console.log("you've won!");
  }
}

$(function() { litUp.setup() });