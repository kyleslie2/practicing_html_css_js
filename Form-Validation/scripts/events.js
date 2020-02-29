//Event Handlers page

//Welcome message
document.getElementById("fname").addEventListener("change", function(){
    greeting.innerHTML = "Welcome " + this.value;
});

//remove firstNameWarning
document.getElementById("fname").addEventListener("blur", function(){
    if(this.value !== ""){
        firstNameWarning.innerHTML = "";
    }
});

//remove lastNameWarning
document.getElementById("lname").addEventListener("blur", function(){
    if(this.value !== ""){
        lastNameWarning.innerHTML = "";
    }
});

//remove address1Warning
document.getElementById("address1").addEventListener("blur", function(){
    if(this.value !== ""){
        address1Warning.innerHTML = "";
    }
});

//remove cityWarning
document.getElementById("city1").addEventListener("blur", function(){
    if(this.value !== ""){
        cityWarning.innerHTML = "";
    }
});

//remove provinceWarning
document.getElementById("province").addEventListener("blur", function(){
    if(profileT.province.options.selectedIndex !== -1){
        provinceWarning.innerHTML = "";
    }
});

//remove countryWarning
document.getElementById("country").addEventListener("blur", function(){
    if(profileT.country.options.selectedIndex !== -1){
        countryWarning.innerHTML = "";
    }
});

//invoke validate function when submit button pressed
document.profileT.addEventListener("submit", validateProfile);
