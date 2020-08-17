$(document).ready(function(){
  // event.preventDefault();

  const flavArray = ["Chocolate", "Strawberry", "Caramel"]

  flavArray.forEach(function(element){
    $("#flavors").append(element + " is one of my favorite ice-cream flavors")
  })


})