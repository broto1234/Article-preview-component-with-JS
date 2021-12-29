
const commonBtn = document.getElementById("commonBtn");
const forPicture = document.querySelector(".forPicture");
const linkDeactivated = document.getElementById("linkDeactivated");
const forSocial = document.querySelector(".forSocial");
const forDesktop = document.querySelector(".forDesktop");

commonBtn.addEventListener("click", ()=> {
  forPicture.style.visibility = "hidden";
  forDesktop.style.visibility = "visible";
  forSocial.style.visibility = "visible";
})

linkDeactivated.addEventListener("click", ()=> {
  forPicture.style.visibility = "visible";
  forSocial.style.visibility = "hidden";
})