var border = 0;
function changerEvent() {

      if (border == 0) {
        document.getElementById("events").innerHTML = 'Evenements :';
        document.getElementById("events").style.width = "200px";
        document.getElementById("events").style.height = "500px";
        border = 1;
      } else {


        document.getElementById("events").innerHTML = "+";
        document.getElementById("events").style.width = "";
        document.getElementById("events").style.height = "";
        border = 0;
      }
    }
//////////////////Menu deroulant/////////////////////////////////////

/*document.getElementById ("marche").onmouseover = function() {mouseOver()};
document.getElementById("marche").onmouseout = function() {mouseOut()};
document.getElementById ("menu").onmouseover = function() {mouseOver()};
document.getElementById("menu").onmouseout = function() {mouseOut()};

function mouseOver() {
  document.getElementById("menu").style.display = "block";
}

function mouseOut() {
  document.getElementById("menu").style.display = "none";
}*/

function changerInfo() {

        if (border==0) {
        document.getElementById("info").style.display="block";

        border = 1;
      } else {

     document.getElementById("info").style.display="none";


        border = 0;
      }
    }
