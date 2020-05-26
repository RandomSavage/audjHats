
const myFunction = ()=> {
  let menuBtn = document.querySelector('.menu-btn');
  let mobileMenu = document.querySelector('.mobile-menu');
  let querpo = document.getElementById('mob-container');
  if(mobileMenu.style.display = "none") {
    mobileMenu.classList.toggle('active');
    mobileMenu.style.display = "flex";
    querpo.addEventListener('click', function() {
      mobileMenu.style.display = "none";
    })
  } else {
    console.log("active");
  }
}
