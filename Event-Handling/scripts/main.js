var module = (function () {
//private methods
  var brands =
    [{brand: "Extra", price: 1.55},
    {brand: "Trident", price: 1.99},
    {brand: "Doublemint", price: 7.87},
    {brand: "BubbleGum", price: 2.43}];

//Get DOM IDs
  var extra = document.getElementById("extra");
  var trident = document.getElementById("trident");
  var doublemint = document.getElementById("doublemint");
  var bubblegum = document.getElementById("bubblegum");
  var clear = document.getElementById("mybutton");
  var selected = document.getElementById("selected");
  var newTotal = document.getElementById("123456");

return {
  //public
  //make events for each var to correspond to differenct indexes in the brands array
  eventListeners: function() {
    extra.addEventListener("click",function () {module.addPrice(0);
    });
    trident.addEventListener("click",function () {module.addPrice(1);
    });
    doublemint.addEventListener("click", function () {module.addPrice(2);
    });
    bubblegum.addEventListener("click", function () {module.addPrice(3);
    });
    clear.addEventListener("click", function () {module.clearing()
    });
  },

  addPrice: function(i) {
    //if there is no value where total should be, use the returned value from the coresponding index of the brands object
    if (newTotal.innerHTML == "") {
    newTotal.innerHTML = brands[i].price;
    //otherwise convert the value in total to a float and add the corresponding price from the brands object
    } else {
    var totalprice = parseFloat(newTotal.innerHTML) + brands[i].price;
    newTotal.innerHTML = totalprice.toFixed(2);
    }
    //same thing but with the list of chosen objects
    if (selected.innerHTML == "") {
    selected.innerHTML = brands[i].brand;
    } else {
    selected.innerHTML = selected.innerHTML + ', ' + brands[i].brand;
    }
  },
//clear all the recorded values
  clearing: function() {
    selected.innerHTML = "";
    newTotal.innerHTML = "0";
  }
};
})();


//call function and event listener()
module.eventListeners()




// var Module = (function () {
//
//   var brands =
//     [{brand: "yumExtra", price: 1.50},
//     {brand: "yumTrident", price: 1.00},
//     {brand: "yumDoublemint", price: 7.00},
//     {brand: "yumBubbleGum", price: 2.00}];
//     // console.log(privateArray[1])
//
//     return {
//       eventListenerMethod: eventListener(){
//         document.getElementById('yumExtra').addEventListener("click", getPrice(1.50));
//         document.getElementById('yumTrident').addEventListener("click", getPrice(1.00));
//         document.getElementById('yumBubbleGum').addEventListener("click", getPrice(2.00));
//         document.getElementById('yumDoublemint').addEventListener("click", getPrice(7.00));
//
//         document.getElementById('mybutton').addEventListener("click", Module);
//
//       },
//       publicMethodOne: addPrice () {
//         //4 if statements for each id
//         console.log(privateMethod());
//       },
//       publicMethodTwo: clear() {
//         //clear function if the clear button is pressed
//         console.log(privateArray[1]);
//
//       },
//
//     };
//
// })();










// document.getElementById('mybutton').addEventListener("click", Module);


//THIS WORKS ALONE
// var sayHello = function(){
//     alert("Hello World!");
// };
// document.getElementById('mybutton').addEventListener("click", sayHello);
//
//
// console.log("is this working???")
