const fs = require('fs').promises;
const text = "This is a test it shoul be stored in a file";

fs.writeFile('message.txt', text).then(()=>{
    console.log("save")
})