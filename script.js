// 🎬 INTRO
window.onload = function () {
  const sound = document.getElementById("introSound");

  // play on first interaction ANYWHERE
  function playSoundOnce() {
    sound.play();
    document.removeEventListener("click", playSoundOnce);
    document.removeEventListener("touchstart", playSoundOnce);
  }

  document.addEventListener("click", playSoundOnce);
  document.addEventListener("touchstart", playSoundOnce);

  // loader timing
  setTimeout(() => {
    document.querySelector(".loader").style.opacity = "1";
  }, 1000);

  setTimeout(() => {
    document.getElementById("intro").style.opacity = "0";
  }, 3000);

  setTimeout(() => {
    document.getElementById("intro").style.display = "none";
  }, 3500);
};

// NAV
function enterHome() {
  document.getElementById("profiles").classList.remove("active");
  document.getElementById("home").classList.add("active");

  // 🔥 THIS IS THE FIX
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

function goBack() {
  document.getElementById("home").classList.remove("active");
  document.getElementById("profiles").classList.add("active");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
function goToHome() {
  sessionStorage.setItem("visited", "true"); // 👈 THIS LINE FIXES EVERYTHING
  window.location.href = "home.html";
}

// MODALS
function openModal(id) {
  document.getElementById(id).style.display = "block";
}

function closeModal(id) {
  document.getElementById(id).style.display = "none";
}