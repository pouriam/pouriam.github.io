document.getElementById('bc1').onclick = function() {
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  var scene4 = document.getElementById("scene4");
  scene1.style.display = "block";
  scene2.style.display = "none";
  scene3.style.display = "none";
  scene4.style.display = "none";
  document.getElementById("bc4").classList.remove("is-active");
  document.getElementById("bc3").classList.remove("is-active");
  document.getElementById("bc2").classList.remove("is-active");
  document.getElementById("bc1").classList.add("is-active");
}

document.getElementById('bc2').onclick = function() {
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  var scene4 = document.getElementById("scene4");
  scene1.style.display = "none";
  scene2.style.display = "block";
  scene3.style.display = "none";
  scene4.style.display = "none";
  document.getElementById("bc1").classList.remove("is-active");
  document.getElementById("bc3").classList.remove("is-active");
  document.getElementById("bc4").classList.remove("is-active");
  document.getElementById("bc2").classList.add("is-active");
}

document.getElementById('bc3').onclick = function() {
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  var scene4 = document.getElementById("scene4");
  scene1.style.display = "none";
  scene2.style.display = "none";
  scene3.style.display = "block";
  scene4.style.display = "none";
  document.getElementById("bc1").classList.remove("is-active");
  document.getElementById("bc2").classList.remove("is-active");
  document.getElementById("bc4").classList.remove("is-active");
  document.getElementById("bc3").classList.add("is-active");
}

document.getElementById('bc4').onclick = function() {
  var scene1 = document.getElementById("scene1");
  var scene2 = document.getElementById("scene2");
  var scene3 = document.getElementById("scene3");
  var scene4 = document.getElementById("scene4");
  scene1.style.display = "none";
  scene2.style.display = "none";
  scene3.style.display = "none";
  scene4.style.display = "block";
  document.getElementById("bc1").classList.remove("is-active");
  document.getElementById("bc2").classList.remove("is-active");
  document.getElementById("bc3").classList.remove("is-active");
  document.getElementById("bc4").classList.add("is-active");
}