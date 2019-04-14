new Promise((reslove) => {
  console.log("exec 1"); reslove();
}).then(() => {
    console.log("exec 3"); 
}).then((e) => { });
console.log("exec 2");
