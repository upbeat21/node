//Because closure have access to the updated values of the outer function's variables,
// they can also lead to bugs when the outer function's variable changes with a for loop.
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for(i=0;i<theCelebrities.length;i++) {
        theCelebrities[i]["id"] = function() {
            return uniqueID + i;
        }
    }
    return theCelebrities;
}

var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id());