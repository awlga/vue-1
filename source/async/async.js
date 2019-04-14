const util = require('util');
const fs = require('fs');

const open = util.promisify(fs.open);
const close = util.promisify(fs.close);

async function openAndClose() {
  const fd = await open('file.txt', 'r');
  await close(fd);
}



console.log("start open close file");
openAndClose().then(() => {
  console.log("end of open And Close");
});

console.log("end of file");


async function openAndCloseCatch() {
  try {
    const fd = await open('file.txt', 'r');
    await close(fd);
  } catch(e) {
    console.log("error caught:" + e.message);
  }
}