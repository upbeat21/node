//CLosures have access to hte outer function's variable even after the outer function returns
function celebrityName(firstName) {
    var nameIntro = "This celebrity is ";
    function lastName(theLastName) {
        return nameIntro + firstName + " " + theLastName;
    }
    return lastName;
}

var mjName = celebrityName("Michael"); //At this juncture, the celebrityName outer function has returned

//The closure(lastName) is called here after the outer function has returned above
//Yet, hte closure still has access to the outer function's variables and parameter
console.log(mjName("Jackson"));