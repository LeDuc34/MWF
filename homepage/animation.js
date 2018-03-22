var border = 0;
function changer() {

      if (border == 0) {
        document.getElementById("events").style.border = "solid 1px black";
        document.getElementById("events").innerHTML = "Evenement -";
        document.getElementById("events").style.width = "200px";
        document.getElementById("events").style.height = "500px";
        border = 1;
      } else {
        document.getElementById("events").style.border = "solid 0px black";
        document.getElementById("events").innerHTML = "Evenement +";
        document.getElementById("events").style.width = "";
        document.getElementById("events").style.height = "";
        border = 0;
      }
    }
  