const fs = require('fs');

const filewriter = (file, newdata) =>
{
    // "all.json"
    let data = fs.readFile(file, (error, data) => {

    if(data <= 0 || error)
    {
        console.log("No/empty file. Creating it")
        fs.appendFile(file, "[]", (err) => { if(err) throw err });
        filewriter(file, newdata)
    }
    else
    {
        var parsedFile = JSON.parse(data);
        parsedFile.push(newdata);
        fs.writeFile(file, JSON.stringify(parsedFile), () => {})
    }
    });

}

exports.filewriter = filewriter;
