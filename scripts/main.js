function myFunction() {
  const links = document.getElementById("myLinks");
  const crossIcon = document.getElementById('cross');
  const burgerIcon = document.getElementById('burger');

  if (links.style.display === "block") {
    //icon should be a burger
    crossIcon.style.display = "none";
    burgerIcon.style.display = "block";
    links.style.display = "none";
  
   
  } else {
    //icon should be cross
    crossIcon.style.display = "block";
    burgerIcon.style.display = "none";
    links.style.display = "block";
  }
}