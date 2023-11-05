// idSelector is a random number from 1 to 10
let idSelector = Math.floor(Math.random() * 10) + 1;

const alertButton = document.querySelector(".quote-btn");
alertButton.addEventListener("click", (e) => {
  //alert("Test alert.");
  //idSelector is a random number from 1 to 10
  let idSelector = Math.floor(Math.random() * 10) + 1;
  quoteLibrary.forEach((item) => {
    if (item.id == idSelector) {
      alert(`"${item.quote}" - ${item.person}`);
    }
  });
});

// idSelector is a random number from 1 to 10
//let idSelector = Math.floor(Math.random() * 10) + 1;
//quoteLibrary.forEach((item) => {
//  if (item.id == idSelector) {
//    alert(`"${item.quote}" - ${item.person}`);
//  }
//});
