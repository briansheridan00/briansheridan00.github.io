// Scripts to be added here // 


// Responsive navigation bar  
//const toggle = document.getElementById('nav-toggle');
//const links = document.getElementById('nav-links');

//toggle.addEventListener('click', () => {
//    links.classList.toggle('active');
//}); 



// Responsive navigation bar  

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("nav-toggle");
  const links = document.getElementById("nav-links");


  toggle.addEventListener("click", () => {
      links.classList.toggle("active");
  }); 
});
