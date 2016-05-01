$(document).ready(function() {
  var ele = $('#haha');
  var clr = null;
  var rand = (21879) >> 0;
  (loop = function() {
    clearTimeout(clr);
    (inloop = function() {
      ele.html(rand += 1);
      if (!(rand % 50)) {
        return;
      }
      clr = setTimeout(inloop, 1);
    })();
    setTimeout(loop, 1);
  })();
    
setTimeout(function(){ location.assign("9.html");}, 2500);
    
});