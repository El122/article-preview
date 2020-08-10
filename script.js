let share = document.getElementById("shareBtn");
let shareMenu = document.getElementsByClassName("dropdownShare")[0];
let screenWid = document.body.clientWidth;

if (screenWid <= 768) {
    shareMenu.className = "dropdownShareMob";
    shareMenu = document.getElementsByClassName("dropdownShareMob")[0];
  } else {
    shareMenu.className = "dropdownShare";
    shareMenu = document.getElementsByClassName("dropdownShare")[0];
  }

window.addEventListener("resize", event => {
    screenWid = document.body.clientWidth;

    if (screenWid <= 768) {
      shareMenu.className = "dropdownShareMob";
      shareMenu = document.getElementsByClassName("dropdownShareMob")[0];
    } else {
      shareMenu.className = "dropdownShare";
      shareMenu = document.getElementsByClassName("dropdownShare")[0];
    }
})

share.addEventListener("mouseover", function() {
    if (screenWid > 768) {
        shareMenu.style.display = "flex";
    }
}, false);

share.addEventListener("mouseout", function() {
    if (screenWid > 768) {
        setTimeout(function() {
            shareMenu.style.display = "none";
        }, 1500);
    }
}, false);

let opened = false;

function openShare() {
  if (screenWid <= 768 && !opened) {
        shareMenu.style.display = "flex";
    opened = true;
  } else {
    shareMenu.style.display = "none";
    opened = false;
  }
}