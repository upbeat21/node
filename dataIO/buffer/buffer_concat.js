var af = new Buffer("African Swallow?");
var eu = new Buffer("European Swallow?");
var question = new Buffer("Aire Speed Velocity of an " );
console.log(Buffer.concat([question, af]).toString());
console.log(Buffer.concat([question, eu]).toString());
console.log(af.length);
console.log(question.length);