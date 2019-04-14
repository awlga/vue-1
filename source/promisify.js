const util = require('util');
const fs = require('fs');

const open = util.promisify(fs.open);
const close = util.promisify(fs.close);
open('file.txt', 'r').then((fd) => {
  return close(fd);
}).then(() => {
  console.log("end of promisify");
}).catch((e) => {
  console.error("error occur" + e);
}).finally(() => {
  console.log("finally executed");
  throw new Error("Fuck!");
}).catch((e)=> {
  console.error("error occur" + e);

});
