const moment = requere("moment");
const hoy = moment();

console.log(`fecha de ${hoy}`);
console.log(hoy.format("MMMM Do YYYY ; h:m a "));
