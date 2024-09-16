// Write your Pizza Builder JavaScript in this file.

// Constants 
var basePrice = 10
var ingredients = {
  pepperonni: {name: 'Pepperonni', price: 1},
  mushrooms: {name: 'Mushrooms', price: 1},
  greenPeppers: {name: 'Green Peppers', price: 1},
  whiteSauce: {name: 'White sauce', price: 3},
  glutenFreeCrust: {name: 'Gluten-free crust', price: 5}
}

// Initial value of the state (the state values can change over time)
var state = {
  pepperonni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false
}

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the begining and everytime the state is changed
function renderEverything() {
  renderPepperonni()
  renderMushrooms()
  renderGreenPeppers()
  renderWhiteSauce()
  renderGlutenFreeCrust()

  renderButtons()
  renderPrice()
}

function renderPepperonni() {
  document.querySelectorAll('.pep').forEach(function($pep){
    if (state.pepperonni) {
      $pep.style.visibility = "visible";
    }
    else {
      $pep.style.visibility = "hidden";
    }
  })
}

function renderMushrooms() {
  document.querySelectorAll('.mushroom').forEach(function($mushroom){
    if (state.mushrooms) {
      $mushroom.style.visibility = "visible";
    }
    else {
      $mushroom.style.visibility = "hidden";
    }
  })
}

function renderGreenPeppers() {
  document.querySelectorAll('.green-pepper').forEach(function($greenPepper){
    if (state.greenPeppers) {
      $greenPepper.style.visibility = "visible";
    }
    else {
      $greenPepper.style.visibility = "hidden";
    }
  })
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  document.querySelectorAll('.sauce').forEach(function($crust){
    if (state.whiteSauce) {
      $crust.classList.add("sauce-white");
    }
    else {
      $crust.classList.remove("sauce-white");
    }
  })
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  document.querySelectorAll('.crust').forEach(function($crust){
    if (state.glutenFreeCrust) {
      $crust.classList.add("crust-gluten-free");
    }
    else {
      $crust.classList.remove("crust-gluten-free");
    }
  })
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  [...document.querySelectorAll('.btn')].forEach(function($btn){
    var isOnThePizza = ingredient => {
      if($btn.className.indexOf(ingredient) !== -1) return true;
    }

    var addActiveClass = () => $btn.classList.add(`active`);
    var removeActiveClass = () => $btn.classList.remove(`active`);

    if(isOnThePizza(`btn-pepperonni`)){
      if(!state.pepperonni){
        removeActiveClass();
      } else {
        addActiveClass();
      }
    }
  
    if(isOnThePizza(`btn-mushrooms`)){
      if(!state.mushrooms){
        removeActiveClass();
      } else {
        addActiveClass();
      }
    }
  
    if(isOnThePizza(`btn-green-peppers`)){
      if(!state.greenPeppers){
        removeActiveClass();
      } else {
        addActiveClass();
      }
    }
  
    if(isOnThePizza(`btn-sauce`)){
      if(!state.whiteSauce){
        removeActiveClass();
      } else {
        addActiveClass();
      }
    }

    if(isOnThePizza(`btn-crust`)){
      if(!state.glutenFreeCrust){
        removeActiveClass();
      } else {
        addActiveClass();
      }
    }
  })
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  var $ingredientsPriceList = [...document.querySelectorAll(`.price li`)];
  var $pizzaPrice = document.querySelector(`.price strong`);
  var pizzaPrice = 10;

  $ingredientsPriceList.forEach(function($ingredientPriceLine){
    var isOnThePizza = ingredient => {
      if ($ingredientPriceLine.innerHTML.indexOf(ingredient) !== -1) return true;
    }

    var hidesIngredientLine = () => $ingredientPriceLine.style.visibility = `hidden`;
    var showsIngredientLine = () => $ingredientPriceLine.style.visibility = `visible`;

    if(isOnThePizza(`pepperonni`)) {
      if(!state.pepperonni){
        hidesIngredientLine();
      } else {
        showsIngredientLine();
        pizzaPrice++;
      }
    }

    if(isOnThePizza(`mushrooms`)) {
      if(!state.mushrooms){
        hidesIngredientLine();
      } else {
        showsIngredientLine();
        pizzaPrice++;
      }
    }

    if(isOnThePizza(`green peppers`)) {
      if(!state.greenPeppers){
        hidesIngredientLine();
      } else {
        showsIngredientLine();
        pizzaPrice++;
      }
    }

    if(isOnThePizza(`white sauce`)) {
      if(!state.whiteSauce){
        hidesIngredientLine();
      } else {
        showsIngredientLine();
        pizzaPrice += 3;
      }
    }

    if(isOnThePizza(`gluten-free crust`)) {
      if(!state.glutenFreeCrust){
        hidesIngredientLine();
      } else {
        showsIngredientLine();
        pizzaPrice += 5;
      }
    }
  })

  $pizzaPrice.innerHTML = `$`+ pizzaPrice;
}


renderEverything()

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperonni">`
document.querySelector('.btn.btn-pepperonni').onclick = function() {
  state.pepperonni = !state.pepperonni
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document.querySelector('.btn.btn-mushrooms').onclick = function() {
  state.mushrooms = !state.mushrooms
  renderEverything()
}

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document.querySelector('.btn.btn-green-peppers').onclick = function() {
  state.greenPeppers = !state.greenPeppers
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector('.btn.btn-sauce').onclick = function() {
  state.whiteSauce = !state.whiteSauce
  renderEverything()
}

// Iteration 2: Add click event listener on `<button class="btn btn-crust">
document.querySelector('.btn.btn-crust').onclick = function() {
  state.glutenFreeCrust = !state.glutenFreeCrust
  renderEverything()
}