// bring over used car data
const usedCars = [
  {
    year: 2018,
    make: "Toyota",
    model: "Camry",
    mileage: 30000,
    price: 18000,
    color: "Silver",
    gasMileage: "25 mpg city, 35 mpg highway",
  },
  {
    year: 2016,
    make: "Honda",
    model: "Civic",
    mileage: 45000,
    price: 14000,
    color: "White",
    gasMileage: "30 mpg city, 40 mpg highway",
  },
  {
    year: 2017,
    make: "Ford",
    model: "Fusion",
    mileage: 35000,
    price: 16000,
    color: "Black",
    gasMileage: "28 mpg city, 38 mpg highway",
  },
  {
    year: 2019,
    make: "Nissan",
    model: "Altima",
    mileage: 25000,
    price: 17000,
    color: "Blue",
    gasMileage: "27 mpg city, 36 mpg highway",
  },
  {
    year: 2015,
    make: "Chevrolet",
    model: "Malibu",
    mileage: 50000,
    price: 12000,
    color: "Red",
    gasMileage: "25 mpg city, 37 mpg highway",
  },
  // Additional entries:
  {
    year: 2016,
    make: "Volkswagen",
    model: "Passat",
    mileage: 40000,
    price: 15000,
    color: "Gray",
    gasMileage: "29 mpg city, 40 mpg highway",
  },
  {
    year: 2020,
    make: "Hyundai",
    model: "Elantra",
    mileage: 22000,
    price: 16000,
    color: "Silver",
    gasMileage: "30 mpg city, 41 mpg highway",
  },
  {
    year: 2014,
    make: "Subaru",
    model: "Outback",
    mileage: 60000,
    price: 14000,
    color: "Green",
    gasMileage: "22 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Mazda",
    model: "CX-5",
    mileage: 32000,
    price: 19000,
    color: "Blue",
    gasMileage: "24 mpg city, 31 mpg highway",
  },
  {
    year: 2018,
    make: "Kia",
    model: "Sorento",
    mileage: 28000,
    price: 17000,
    color: "White",
    gasMileage: "22 mpg city, 29 mpg highway",
  },
  // Five more entries:
  {
    year: 2015,
    make: "Dodge",
    model: "Challenger",
    mileage: 30000,
    price: 24000,
    color: "Black",
    gasMileage: "19 mpg city, 30 mpg highway",
  },
  {
    year: 2017,
    make: "Cadillac",
    model: "XT5",
    mileage: 28000,
    price: 32000,
    color: "Red",
    gasMileage: "19 mpg city, 27 mpg highway",
  },
  {
    year: 2018,
    make: "Jaguar",
    model: "F-PACE",
    mileage: 26000,
    price: 38000,
    color: "Blue",
    gasMileage: "18 mpg city, 23 mpg highway",
  },
  {
    year: 2019,
    make: "Tesla",
    model: "Model S",
    mileage: 18000,
    price: 55000,
    color: "Black",
    gasMileage: "Electric (370 miles per charge)",
  },
  {
    year: 2020,
    make: "Porsche",
    model: "Cayenne",
    mileage: 22000,
    price: 68000,
    color: "White",
    gasMileage: "20 mpg city, 26 mpg highway",
  },
  {
    year: 2017,
    make: "Lexus",
    model: "ES",
    mileage: 29000,
    price: 26000,
    color: "White",
    gasMileage: "21 mpg city, 30 mpg highway",
  },
  {
    year: 2016,
    make: "BMW",
    model: "5 Series",
    mileage: 32000,
    price: 27000,
    color: "Black",
    gasMileage: "23 mpg city, 34 mpg highway",
  },
];

//begin logic code

//start a variable with our html container and instantiate it
const resultsContainer = document.getElementById("product-cards");
//test manipulation
const test = document.createTextNode("button clicked");
//resultsContainer.appendChild(test);

//use a flag to execute this function once

//create a product-card for each vehicle - this logic has been moved into a closure
// usedCars.forEach((item, index) => {
//   //create the relevant content for each vehicle
//   const content = `
//      <div class="vehicle-card" id="${index}">
//         <h3>${item.year} ${item.make} ${item.model}</h3>
//             <p>Mileage: ${item.mileage}mi</p>
//            <p>Price:  $${item.price}</p>
//            <p>Color:  ${item.color}</p>
//            <p>Fuel Efficiency: ${item.gasMileage}</p>
//      </div>
//     `;

//   //append each element to our container
//   resultsContainer.innerHTML += content;
// });

//start a variable with our html container and instantiate it
//we only need to execute this once, so this is all placed in a closure
var initialize = (function () {
  var flag = false;
  return function () {
    if (!flag) {
      flag = true;
      //create a product-card for each vehicle
      usedCars.forEach((item) => {
        //create the relevant content for each vehicle
        const content = `
     <div class="vehicle-card">
        <h3>${item.year} ${item.make} ${item.model}</h3>
            <p>Mileage: ${item.mileage}mi</p>
           <p>Price:  $${item.price}</p>
           <p>Color:  ${item.color}</p>
           <p>Fuel Efficiency: ${item.gasMileage}</p> 
     </div>
    `;

        //append each element to our container
        resultsContainer.innerHTML += content;
      });
    }
  };
})();

initialize();

// execute the following if user wants to search car make
const searchBtnCMake = document.querySelector("#search-btn-c-make");
searchBtnCMake.addEventListener("click", (e) => {
  //first clear the current container
  resultsContainer.replaceChildren(" ");
  let cMake = document.getElementById("c-make").value;
  //now we are going to loop through all the elements again with the additional user inputs
  usedCars.forEach((item) => {
    if (item.make == cMake) {
      //create the relevant content for each vehicle
      const content = `
      <div class="vehicle-card">
         <h3>${item.year} ${item.make} ${item.model}</h3>
             <p>Mileage: ${item.mileage}mi</p>
            <p>Price:  $${item.price}</p>
            <p>Color:  ${item.color}</p>
            <p>Fuel Efficiency: ${item.gasMileage}</p> 
      </div>
     `;

      //append each element to our container
      resultsContainer.innerHTML += content;
    }
  });
});

// execute the following if user wants to search for minimum and maximum years
const searchBtnYear = document.querySelector("#search-btn-year");
searchBtnYear.addEventListener("click", (e) => {
  //first clear the current container
  resultsContainer.replaceChildren(" ");
  let minYear = document.getElementById("min-year").value;
  let maxYear = document.getElementById("max-year").value;
  //now we are going to loop through all the elements again with the additional user inputs
  usedCars.forEach((item) => {
    if (
      parseInt(item.year, 10) >= parseInt(minYear, 10) &&
      parseInt(item.year, 10) <= parseInt(maxYear, 10)
    ) {
      //create the relevant content for each vehicle
      const content = `
      <div class="vehicle-card">
         <h3>${item.year} ${item.make} ${item.model}</h3>
             <p>Mileage: ${item.mileage}mi</p>
            <p>Price:  $${item.price}</p>
            <p>Color:  ${item.color}</p>
            <p>Fuel Efficiency: ${item.gasMileage}</p> 
      </div>
     `;

      //append each element to our container
      resultsContainer.innerHTML += content;
    }
  });
});

// execute the following if user wants to search max mileage
const searchBtnMileage = document.querySelector("#search-btn-mileage");
searchBtnMileage.addEventListener("click", (e) => {
  //first clear the current container
  resultsContainer.replaceChildren(" ");
  let inputMileage = document.getElementById("mileage").value;
  //now we are going to loop through all the elements again with the additional user inputs
  usedCars.forEach((item) => {
    if (parseInt(item.mileage, 10) <= parseInt(inputMileage, 10)) {
      //create the relevant content for each vehicle
      const content = `
      <div class="vehicle-card">
         <h3>${item.year} ${item.make} ${item.model}</h3>
             <p>Mileage: ${item.mileage}mi</p>
            <p>Price:  $${item.price}</p>
            <p>Color:  ${item.color}</p>
            <p>Fuel Efficiency: ${item.gasMileage}</p> 
      </div>
     `;

      //append each element to our container
      resultsContainer.innerHTML += content;
    }
  });
});

// execute the following if user wants to reset the page
const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", (e) => {
  resultsContainer.replaceChildren(" ");
  usedCars.forEach((item) => {
    //create the relevant content for each vehicle
    const content = `
      <div class="vehicle-card">
         <h3>${item.year} ${item.make} ${item.model}</h3>
             <p>Mileage: ${item.mileage}mi</p>
            <p>Price:  $${item.price}</p>
            <p>Color:  ${item.color}</p>
            <p>Fuel Efficiency: ${item.gasMileage}</p> 
      </div>
     `;

    //append each element to our container
    resultsContainer.innerHTML += content;
  });
});

// execute the following if user wants to search for minimum and maximum price
const searchBtnPrice = document.querySelector("#search-btn-price");
searchBtnPrice.addEventListener("click", (e) => {
  //first clear the current container
  resultsContainer.replaceChildren(" ");
  let minPrice = document.getElementById("min-price").value;
  let maxPrice = document.getElementById("max-price").value;
  //now we are going to loop through all the elements again with the additional user inputs
  usedCars.forEach((item) => {
    if (
      parseInt(item.price, 10) >= parseInt(minPrice, 10) &&
      parseInt(item.price, 10) <= parseInt(maxPrice, 10)
    ) {
      //create the relevant content for each vehicle
      const content = `
      <div class="vehicle-card">
         <h3>${item.year} ${item.make} ${item.model}</h3>
             <p>Mileage: ${item.mileage}mi</p>
            <p>Price:  $${item.price}</p>
            <p>Color:  ${item.color}</p>
            <p>Fuel Efficiency: ${item.gasMileage}</p> 
      </div>
     `;

      //append each element to our container
      resultsContainer.innerHTML += content;
    }
  });
});
