let convertBtn = document.getElementById("convertBtn")

meterBtn.addEventListener("click", function(){
  let inputEl = document.getElementById("input-el").value;
  document.getElementById("length").value = inputEl +" meters "+" = " + Number (inputEl* 3.281).toFixed(3) +" feet"+" | "+inputEl +" feet "+" = " + Number (inputEl / 3.281).toFixed(3) +" meters";

  document.getElementById("volume").value = inputEl +" liters "+" = " + Number (inputEl / 4.546).toFixed(3) +" gallons"+" | "+inputEl +" gallons "+" = " + Number (inputEl * 4.546).toFixed(3) +" liters";
  document.getElementById("mass").value = inputEl +" kilos "+" = " + Number (inputEl * 2.2046).toFixed(3) +" pounds"+" | "+inputEl +" pounds "+" = " + Number (inputEl / 2.2046).toFixed(3) +" kilograms";

})




