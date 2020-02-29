//not sure if this counts as a method....
function validateProfile(d){

    d.preventDefault();

    //weGood = valid
    var weGood=true;

    if(profileT.fname.value === ""){
    document.getElementById('firstNameWarning').innerHTML="<-- You have not entered a first name!";
        weGood = false;
    }

    if(profileT.lname.value == ""){
        document.getElementById('lastNameWarning').innerHTML="<-- You have not entered a last name!";
        weGood=false;
    }

    if(profileT.address1.value == ""){
        document.getElementById('address1Warning').innerHTML="<-- You have not entered an address!?!";
        weGood=false;
    }

    if(profileT.city1.value == ""){
        document.getElementById('cityWarning').innerHTML="<-- You have not entered a city!?!";
        weGood=false;
    }

    if(profileT.province.options.selectedIndex === 0){
        weGood = false;
        document.getElementById("provinceWarning").innerHTML="<-- You didn't select a province...";
    }

    if(profileT.country.options.selectedIndex === 0){
        weGood = false;
        document.getElementById("countryWarning").innerHTML="<-- You didn't select a country...";
    }

    if(weGood){
        alert("'Thank you' \n \n \n Congrats, you successfully completed a whole form... ");
    }

    return weGood;

};
