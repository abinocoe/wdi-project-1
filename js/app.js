var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.getIndex);
  this.moves = 0;
}

litUp.getIndex = function() {
  var $index   = $('li').index(this);
  var $boxes  = $('li').toArray();
  var a       = Math.sqrt($boxes.length);
  if ($index % a === 0) {
    if ($index > 0 && $index < ($boxes.length)-a) {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index+1]).toggleClass('light');
      $($boxes[$index-a]).toggleClass('light');
      $($boxes[$index+a]).toggleClass('light');
    } else if ($index === 0) {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index+1]).toggleClass('light');
      $($boxes[$index+a]).toggleClass('light');
    } else {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index+1]).toggleClass('light');
      $($boxes[$index-a]).toggleClass('light');
    }
  } else if ($index % a === 4) {
    if ($index > (a-1) && $index < ($boxes.length)-1) {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index-a]).toggleClass('light');
      $($boxes[$index+a]).toggleClass('light');
      $($boxes[$index-1]).toggleClass('light');
    } else if ($index === (a-1)) {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index-1]).toggleClass('light');
      $($boxes[$index+a]).toggleClass('light');
    } else {
      $($boxes[$index]).toggleClass('light');
      $($boxes[$index-a]).toggleClass('light');
      $($boxes[$index-1]).toggleClass('light');
    }
  } else if ($index > 0 && $index < (a-2)) {
    $($boxes[$index]).toggleClass('light');
    $($boxes[$index-1]).toggleClass('light');
    $($boxes[$index+1]).toggleClass('light');
    $($boxes[$index+a]).toggleClass('light');
  } else if ($index >= ($boxes.length)-a && $index < ($boxes.length)-1) {
    $($boxes[$index]).toggleClass('light');
    $($boxes[$index-1]).toggleClass('light');
    $($boxes[$index+1]).toggleClass('light');
    $($boxes[$index-a]).toggleClass('light');
  } else {
    $($boxes[$index]).toggleClass('light');
    $($boxes[$index-1]).toggleClass('light');
    $($boxes[$index+1]).toggleClass('light');
    $($boxes[$index-a]).toggleClass('light');
    $($boxes[$index+a]).toggleClass('light');
  }
  litUp.updateCount();
  litUp.checkWin($boxes);
}

litUp.updateCount = function() {
  this.moves++;
  $('h2').text(this.moves);
}

litUp.checkWin = function(array) {
  if ($(array).hasClass('light') === false) {
    console.log("you've won!");
    $('h2').text("0");
    console.log(array);
    litUp.nextLevel(array);
  }
}

litUp.nextLevel = function(array) {
  console.log(array);
  this.levelTwo = [4,5,10,11,16,17,21]
  $.each(this.levelTwo, function(index) {
    $.array[index].toggleClass('light');
  });
}

$(function() { litUp.setup() });