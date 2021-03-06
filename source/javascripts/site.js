//  Pick up interaction
const $pickups = document.querySelectorAll('[data-interaction="pickup"]');
$pickups.forEach(function($pickup){
  //  Mouse over
  $pickup.addEventListener('mouseover', function(){
    removeClasses(this, ["t-translateY0", "bs-alpha"]);
    addClasses(this, ["t-translateY-0_5r", "bs-beta"]);
  });
  //  Mouse out
  $pickup.addEventListener('mouseout', function(){
    removeClasses(this, ["t-translateY-0_5r", "bs-beta"]);
    addClasses(this, ["t-translateY0", "bs-alpha"]);
  });
});
//  Fade interaction
const $fades = document.querySelectorAll('[data-interaction="fade"]');
$fades.forEach(function($fade){
  //  Mouse over
  $fade.addEventListener('mouseover', function(){
    removeClasses(this, ["o-1"]);
    addClasses(this, ["o-0_5"]);
  });
  //  Mouse out
  $fade.addEventListener('mouseout', function(){
    removeClasses(this, ["o-0_5"]);
    addClasses(this, ["o-1"]);
  });
});
//  Remove list of classes from selected element
function removeClasses($element, classes) {
  for (var i = 0; i < classes.length; i++) {
    $element.classList.remove(classes[i]);
  }
}
//  Add list of classes from selected element
function addClasses($element, classes) {
  for (var i = 0; i < classes.length; i++) {
    $element.classList.add(classes[i]);
  }
}
