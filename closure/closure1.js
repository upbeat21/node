//inner function that has access to the outer function's variables and outer function's parameters
function showName(firstName, lastName) {
    var nameIntro = "Your name is ";
    function makeFullName() {
        return nameIntro + firstName + " " + lastName;
    }
    return makeFullName();
}
console.log(showName("Michael", "Jackson"));