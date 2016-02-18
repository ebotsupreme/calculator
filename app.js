// display button number value to p

// function displayDigit(div){
//   var x = div.value;
//   document.getElementById("total").innerHTML = x;
// }
 function displayDigit(){
   var x = document.querySelector(".btn").getAttribute("data-value");
   console.log(x);
   document.getElementById("total").innerHTML = x;
 }
