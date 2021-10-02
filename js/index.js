// Write your Pizza Builder JavaScript in this file.

// Constants
const basePrice = 10;
const ingredients = {
  pepperoni: { name: 'pepperoni', price: 1 },
  mushrooms: { name: 'Mushrooms', price: 1 },
  greenPeppers: { name: 'Green Peppers', price: 1 },
  whiteSauce: { name: 'White sauce', price: 3 },
  glutenFreeCrust: { name: 'Gluten-free crust', price: 5 }
};

// Initial value of the state (the state values can change over time)
const state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  
  renderButtons1();
  renderButtons2();
  renderPrice();
}


function addPrice(price) {
  intPrice = Number(price[1]);
  totalHtml = document.querySelector('.price strong');
  totalStringNum1 = totalHtml.textContent[1];
  totalStringNum2 = totalHtml.textContent[2];
  totalString = Number(totalStringNum1 + totalStringNum2);  
  let result = totalString + intPrice;
  totalHtml.textContent = `$${result}`

}

function reducePrice(price) {
  intPrice = Number(price[1]); 
  totalHtml = document.querySelector('.price strong');
  totalStringNum1 = totalHtml.textContent[1];
  totalStringNum2 = totalHtml.textContent[2];
  totalString = Number(totalStringNum1 + totalStringNum2);
  console.log("redu tot"+totalString);
  console.log("int price tot"+intPrice);
  let result = totalString - intPrice;
  console.log("surlt"+result);
  totalHtml.textContent = `$${result}`;  
}

function renderPepperoni() { 
  // let peperoniState = document.querySelector('.btn.btn-pepperoni');
  // if(state.pepperoni === true){
  //   peperoniState.classList.toggle("active");
  // }
  // else{
  //   peperoniState.classList.toggle("active");
  // }
   document.querySelectorAll('.pep').forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = 'visible';
    } else {
      onePep.style.visibility = 'hidden';
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  // let peperoniState = document.querySelector('.btn.btn-pepperoni');
  // if(state.pepperoni === true){
  //   peperoniState.classList.toggle("active");
  // }
  // else{
  //   peperoniState.classList.toggle("active");
  // }
  document.querySelectorAll('.mushroom').forEach((oneMushroom) => {
    if (state.mushrooms) {
      oneMushroom.style.visibility = 'visible';
    } else {
      oneMushroom.style.visibility = 'hidden';
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  // let peperoniState = document.querySelector('.btn.btn-pepperoni');
  // if(state.pepperoni === true){
  //   peperoniState.classList.toggle("active");
  // }
  // else{
  //   peperoniState.classList.toggle("active");
  // }
  document.querySelectorAll('#pizza .green-pepper').forEach((oneGreenPepper) => {
    if (state.greenPeppers) {
      oneGreenPepper.style.visibility = 'visible';
    } else {
      oneGreenPepper.style.visibility = 'hidden';
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  // let peperoniState = document.querySelector('.btn.btn-pepperoni');
  // if(state.pepperoni === true){
  //   peperoniState.classList.toggle("active");
  // }
  // else{
  //   peperoniState.classList.toggle("active");
  // }
  let sauceStateWhite = document.querySelector('.sauce');
  if(state.whiteSauce === true){
  sauceStateWhite.classList.toggle("sauce-white");
  }
  else{
    sauceStateWhite.classList.toggle("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  // let peperoniState = document.querySelector('.btn.btn-pepperoni');
  // if(state.pepperoni === true){
  //   peperoniState.classList.toggle("active");
  // }
  // else{
  //   peperoniState.classList.toggle("active");
  // }
  let glutenFree = document.querySelector('.crust');
  if(state.glutenFreeCrust === true){
    glutenFree.classList.toggle("crust-gluten-free");
  }
  else{
    glutenFree.classList.toggle("crust-gluten-free");
  }
}

function renderButtons2() {
    
  let crust = document.querySelector('.btn.btn-crust');
  if(state.glutenFreeCrust){
    crust.classList.toggle("active");
  }
  else{
    crust.classList.toggle("active");
  };
}

function renderButtons1() {
  let sauce = document.querySelector('.btn.btn-sauce');
  if(state.whiteSauce){
    sauce.classList.toggle("active");
  }
  else{
    sauce.classList.toggle("active");
  };

  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  //let el = document.getElementsByTagName('button');
/*
  if (el. === 'active') {
    el.classList.toggle("inactive");
  } else {
    el.classList.toggle("active");
  }
*/
// let pep = document.querySelector('.btn.btn-pepperoni');
// let mush = document.querySelector('.btn.btn-mushrooms');
// let greenPep = document.querySelector('.btn.btn-green-peppers');
// let sauce = document.querySelector('.btn.btn-sauce');
// let crust = document.querySelector('.btn.btn-crust');

// if(state.pepperoni === true) pep.classList.toggle("active")
// else if(state.mushrooms === true) mush.classList.toggle("active")
// else if(state.greenPeppers === true) greenPep.classList.toggle("active")


}

function renderPrice() {
  
  // list = document.querySelector('.price ul :nth-child(1)'); // :nth-child(1) 
  // const a  = list.textContent = " ";
  // console.log(a); 
  // const li = document.createElement('li');
  // list.appendChild(li);
  
  //PEPPERONI
  pep = document.querySelector('.price ul :nth-child(1)'); 
  // state.pepperoni ? pep.textContent ='$1 pepperoni!' && addPrice("$1") : pep.innerHTML = " " && reducePrice("$1");
  if(state.pepperoni){
    pep.textContent ='$1 pepperoni';
    addPrice("$1");
  } else {
    pep.innerHTML = " ";
    reducePrice("$1");
  }
  //MUSHROOMS
  mush = document.querySelector('.price ul :nth-child(2)'); 
  // state.mushrooms ? mush.textContent ='$1 mushrooms' && addPrice("$1") : mush.innerHTML = " " && reducePrice("$1");
  if(state.mushrooms){
    mush.textContent ='$1 mushrooms';
    addPrice("$1");
  } else {
    mush.innerHTML = " ";
    reducePrice("$1");
  }
  //GREEN PEP
  greenPep = document.querySelector('.price ul :nth-child(3)'); 
  // state.greenPeppers ? greenPep.textContent ='$1 green peppers' && addPrice("$1") : greenPep.innerHTML = " " && reducePrice("$1");
  if(state.greenPeppers){
    greenPep.textContent ='$1 green peppers';
    addPrice("$1");
  } else {
    greenPep.innerHTML = " ";
    reducePrice("$1");
  }
  // WHITE SAUCE
  sauce = document.querySelector('.price ul :nth-child(4)'); 
  // state.whiteSauce ? sauce.textContent ='$3 white sauce' && addPrice("$3") : sauce.innerHTML = " " && reducePrice("$3");
  if(state.whiteSauce){
    sauce.textContent ='$3 white sauce';
    addPrice("$3");
  } else {
    sauce.innerHTML = " ";
    reducePrice("$3");
  }
  //CRUST
  crust = document.querySelector('.price ul :nth-child(5)');   
  // state.glutenFreeCrust ? crust.textContent ='$5 gluten-free crust' && addPrice("$5") : crust.innerHTML = " " && reducePrice("$5");
  if(state.glutenFreeCrust){
    crust.textContent ='$5 gluten-free crust';
    addPrice("$5");
  } else {
    crust.innerHTML = " ";
    reducePrice("$5");
  }
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector('.btn.btn-pepperoni').addEventListener('click', function () {
  console.log(state.pepperoni);
  console.log("out1");
  state.pepperoni = !state.pepperoni;
  console.log(state.pepperoni);
  console.log("in1");
  let pep = document.querySelector('.btn.btn-pepperoni');
 
  if(state.pepperoni){
    pep.classList.toggle("active");
  }
  else{
    pep.classList.toggle("active");
  };
  renderPepperoni();
  renderPrice();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector(".btn.btn-mushrooms").addEventListener("click", function() {
  state.mushrooms = !state.mushrooms;
  let mush = document.querySelector('.btn.btn-mushrooms');
  if(state.mushrooms){
    mush.classList.toggle("active");
  }
  else{
    mush.classList.toggle("active");
  };
  renderMushrooms();
  renderPrice();
})


// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector(".btn.btn-green-peppers").addEventListener("click", function() {
  state.greenPeppers = !state.greenPeppers;
  let greenPep = document.querySelector('.btn.btn-green-peppers');
  if(state.greenPeppers){
    greenPep.classList.toggle("active");
  }
  else{
    greenPep.classList.toggle("active");
  };
  renderGreenPeppers();
  renderPrice();
})

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", function() {
  state.whiteSauce = !state.whiteSauce;
  renderWhiteSauce();
  renderPrice();
  renderButtons1();
})

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", function() {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderGlutenFreeCrust();
  renderPrice();
  renderButtons2();
})
