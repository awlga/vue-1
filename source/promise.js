const fs = require('fs');
new Promise((resolve, reject) => {
  fs.open('file.txt', 'r', (err, fd) => {
    if (err) reject(err);
    resolve(fd);
  });
})
.then((fd) => {
  return new Promise((resolve, reject)=> {
      fs.close(fd, (err) => {
      if (err) reject(err);
      resolve();
    });
  });
})
.then(()=> {
  console.log("end of promise");
});
