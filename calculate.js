let degLa = parseFloat(prompt("Enter the latitude degrees: "));
let minLa = parseFloat(prompt("Enter the latitude minutes: "));
let secLa = parseFloat(prompt("Enter the latitude seconds: "));

let degLo = parseFloat(prompt("Enter the longitude degrees: "));
let minLo = parseFloat(prompt("Enter the longitude minutes: "));
let secLo = parseFloat(prompt("Enter the longitude seconds: "));

let la = degLa + minLa / 60 + secLa / 3600;
let lo = degLo + minLo / 60 + secLo / 3600;
document.write(la.toFixed(4) + ", " + lo.toFixed(4));
