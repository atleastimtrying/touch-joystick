(function() {
  var makeHandle = function(element){
    var mouseIsDown = false;
    element.onmousedown = function(){
      mouseIsDown = true;
      console.log(element.style.left);
    }
    element.onmouseup = function(){
      mouseIsDown = false;
      console.log(element.style.left);
    }
    return{
      element:element
    }
  }
  var handles = '';
  window.onload = function() {
    handles = document.getElementsByClassName('handle');
    for (var i = 0; i < handles.length; i++){
      handles[i]
    }
  };

}).call(this);
