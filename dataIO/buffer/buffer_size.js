console.log("UTF8 text \u00b6".length);
console.log(Buffer.byteLength("UTF8 text \u00b6", 'utf8'));
console.log(Buffer("UTF8 text \u00b6").length);