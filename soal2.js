var fs = require ("fs");

fs.readFile('logging.txt', 'utf-8', (err, data) =>{
    if (err) {
        console.error(err)
    } else {
        console.log(data);
    }
});