// Add your javascript code here.
function addTitle(){
   const h1 = document.querySelector("h1"); 
   h1.innerText = "Harry Potter Character Selection";   
}
addTitle()

function flexIt(){
  const flex = document.getElementsByClassName("needFlex");
  flex[0].classList.toggle("flexIt");
}

function addHouses(){
    const description = document.getElementsByClassName("description");  
    description[0].classList.add("gryffindor");
    description[1].classList.add("hufflepuff");
    description[2].classList.add("ravenclaw");
    description[3].classList.add("slytherin");
}
addHouses()

function emphasize(house){
    const hogwarts = document.getElementsByClassName(house); 
    for (let i = 0; i < hogwarts.length; i++) {
    hogwarts[i].classList.toggle("emphasis");
}
}

function hideTheSnitch(){
  const hide = document.getElementById("golden");
  hide.classList.toggle("snitch");
}
