var transfo = [
  'rotate( 30deg) skewX( 30deg)',
  'rotate(-30deg) skewX(-30deg)',
  'rotate(-30deg) skewX( 30deg)'
];

var zIndex = [30, -20, -10];

$( document ).ready(function() {
  var strips = 6;
  var elements = 12;

  // draw strips 1
  var offY = 0;
  for (strip = 0; strip < strips; strip++) {
    offY = 52 * strip;
    for (i = 0; i < elements ; i++) {
      var elem = $('<div class="p1">1</div>');
          $("#pattern").append(elem);
      elem.css('z-index', zIndex[Math.abs(i-strip-1) % zIndex.length]);
      elem.css( 'transform', transfo[0] + ' translate(' + 60*i + 'px, ' + (offY) + 'px)');
    }
  }

  // draw strips 2
  var offY = 0;
  for (strip = 0; strip < strips; strip++) {
    for (i = 0; i < elements ; i++) {
      var elem = $('<div class="p2">2</div>');
          $("#pattern").append(elem);
      elem.css('z-index', zIndex[Math.abs(i-2*strip-1) % zIndex.length]);
      elem.css( 'transform', transfo[1] + ' translate(' + (60*strip) + 'px, ' + (52*i-26+52*strips) + 'px)');
    }
  }
  // draw strips 3
  var offY = 0;
  for (strip = 0; strip < strips; strip++) {
    offY = 52 * strip;
    for (i = 0; i < elements ; i++) {
      var elem = $('<div class="p3">3</div>');
          $("#pattern").append(elem);
      elem.css('z-index', zIndex[Math.abs(i-strip) % zIndex.length]);
      elem.css( 'transform', 'translate(52px, ' + (30+ 60*strips) + 'px) ' + transfo[2] + ' translate(' + (60*i) + 'px, ' + (offY) + 'px)');
    }
  }
});
