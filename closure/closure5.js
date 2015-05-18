//Fix the last file's bug
function celebrityIDCreator(theCelebrities) {
    var i;
    var uniqueID = 100;
    for(i=0;i<theCelebrities.length;i++) {
        theCelebrities[i]["id"] = function(j) { //the j parametric variable is the i passed in on invocation of this IIFE
            return function() {
                return uniqueID + j; //each iteration of the for loop passes the current value of i into this IIFE and it saves the correct value to the array
            }//by adding () at the end of this function, we are executing it immediately and returning just the value of unqiueID + j, instead of returning a function
        }(i);
    }
    return theCelebrities;
}
var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise",id:0}, {name:"Willis", id:0}];
var createIdForActionCelebs = celebrityIDCreator(actionCelebs);
var stalloneID = createIdForActionCelebs[0];
console.log(stalloneID.id);
var cruiseID = createIdForActionCelebs[1];
console.log(cruiseID.id);