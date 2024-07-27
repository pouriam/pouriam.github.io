document.getElementById('bc1').onclick = function(){
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  scene1.style.display = "block";
  scene2.style.display = "none";
  scene3.style.display = "none";

}

document.getElementById('bc2').onclick = function(){
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  scene1.style.display = "none";
  scene2.style.display = "block";
  scene3.style.display = "none";
}

document.getElementById('bc3').onclick = function(){
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  scene1.style.display = "none";
  scene2.style.display = "none";
  scene3.style.display = "block";
}
