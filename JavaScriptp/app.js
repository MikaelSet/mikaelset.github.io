const toggleBtn = document.querySelector(".sidebar-toggle");
const CloseBtn = document.querySelector(".close-btn");
const sidebar = document.querySelector(".sidebar");

toggleBtn.addEventListener("click", function () {
 console.log(sidebar.classList);
sidebar.classList.toggle("show-sidebar")
});

CloseBtn.addEventListener("click", function(){
  sidebar.classList.remove("show-sidebar");
});