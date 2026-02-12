// const http = require('http');
// const fs = require('fs');   // to read image file

// const myserver = http.createServer((req, res) => {

//     if (req.url == '/') {
//         res.end("ABES College");
//     }

//     else if (req.url == "/about") {
//         res.writeHead(200, { 'Content-Type': 'text/html' });
//         res.end(`
//             <h1>This is my About Page</h1>
//             <img src="/image" width="300">
//         `);
//     }

//     else if (req.url == "/image") {
//         fs.readFile("image.png", (err, data) => {
//             res.writeHead(200, { 'Content-Type': 'image/png' });
//             res.end(data);
//         });
//     }

//     else if (req.url == "/contact") {
//         res.end("304 tulip grace");
//     }

//     else {
//         res.end("404 page is not found!");
//     }
// });

// myserver.listen(8000, () => console.log("server is running"));

// const fs=require('fs');
// // fs.writeFileSync("./cse-c.txt","HI");    // ./ means current directory
// const result=fs.readFileSync("./cse-c.txt","utf-8");
// console.log(result);

const fs = require('fs');
fs.readFile("./cse-c.txt", "utf-8", (err, result) => {
    if (err) {
        console.log("Error:", err);
    } else {
        console.log(result);
    }
});
console.log("File reading started...");


