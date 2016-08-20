var litUp = litUp || {};

litUp.setup = function() {
  $('li').click(litUp.getIndex);
}

litUp.getIndex = function() {
  var index   = $('li').index(this);
  var $boxes  = $('li').toArray();
  var a       = Math.sqrt($boxes.length);
  if (index % a === 0) {
    if (index > 0 && index < ($boxes.length)-a) {
      $($boxes[index]).toggleClass('light')
      $($boxes[index+1]).toggleClass('light')
      $($boxes[index-a]).toggleClass('light')
      $($boxes[index+a]).toggleClass('light')
    } else if (index === 0) {
      $($boxes[index]).toggleClass('light')
      $($boxes[index+1]).toggleClass('light')
      $($boxes[index+a]).toggleClass('light')
    } else {
      $($boxes[index]).toggleClass('light')
      $($boxes[index+1]).toggleClass('light')
      $($boxes[index-a]).toggleClass('light')
    }
  } else if (index % a === 4) {
    if (index > (a-1) && index < ($boxes.length)-1) {
      $($boxes[index]).toggleClass('light')
      $($boxes[index-a]).toggleClass('light')
      $($boxes[index+a]).toggleClass('light')
      $($boxes[index-1]).toggleClass('light')
    } else if (index === (a-1)) {
      $($boxes[index]).toggleClass('light')
      $($boxes[index-1]).toggleClass('light')
      $($boxes[index+a]).toggleClass('light')
    } else {
      $($boxes[index]).toggleClass('light')
      $($boxes[index-a]).toggleClass('light')
      $($boxes[index-1]).toggleClass('light')
    }
  } else if (index > 0 && index < (a-2)) {
    $($boxes[index]).toggleClass('light')
    $($boxes[index-1]).toggleClass('light')
    $($boxes[index+1]).toggleClass('light')
    $($boxes[index+a]).toggleClass('light')
  } else if (index >= ($boxes.length)-a && index < ($boxes.length)-1) {
    $($boxes[index]).toggleClass('light')
    $($boxes[index-1]).toggleClass('light')
    $($boxes[index+1]).toggleClass('light')
    $($boxes[index-a]).toggleClass('light')
  } else {
    $($boxes[index]).toggleClass('light')
    $($boxes[index-1]).toggleClass('light')
    $($boxes[index+1]).toggleClass('light')
    $($boxes[index-a]).toggleClass('light')
    $($boxes[index+a]).toggleClass('light')
  }
}

litUp.alight = function(a, b, c, d, e) {
  console.log(('li')[d])
  $(('li')[a,b,c,d,e]).toggleClass("light");
}

$(function() { litUp.setup() });