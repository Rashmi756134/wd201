/* eslint-disable no-undef */
//import {ESLint} from "eslint";
const http = require("http");
const fs = require("fs");
const minimist = require("minimist");
// const { ESLint } = require("eslint");

// Creating new file using node.js

// fs.writeFile(
//     "sample.txt",
//     "Hello world. welcome to Node.js File System module.",
//     (err) => {
//         if (err) throw err;
//         console.log("File created!");
//     }
// );

// // Reading new file using node.js

// fs.readFile("sample.txt",(err , data) =>{
//     if (err) throw err;
//     console.log(data.toString());
// });

// Appending new file using node.js

// fs.appendFile(
//     "sample.txt" , "This is my updated content", (err) => {
//         if (err) throw err;
//         console.log("File Updated!");
//     }
// );

// // Renameing new file using node.js

// fs.rename("sample.txt" , "test.txt" , (err) => {
//     if (err) throw err;
//     console.log("File name updated!");
// });

// // Deleting file using node.js

// fs.unlink("test.txt" , (err) =>{
//     if (err) throw err;
//     console.log("File test.text deleted successfully!");
// });

// const server = http.createServer((req,res) => {
//     const stream = fs.createReadStream("sample.txt");
//     stream.pipe();
//     // fs.readFile("sample.txt",(err,data) => {
//     //     res.end(data);
//     // })
// });
// server.listen(3000);

const args = minimist(process.argv.slice(2),{
    default:{
        port:3000
    }
});

let homeContent = "";
let projectContent = "";
let registrationContent = "";

fs.readFile("home.html", (err,home) => {
    if (err) {
        throw err;
    }
    homeContent = home;
});

fs.readFile("project.html", (err,project) => {
    if (err) {
        throw err;
    }
    projectContent = project;
});

fs.readFile("registration.html" , (err , registration) => {
    if (err) {
        throw err;
    }
    registrationContent = registration;
});

http.createServer((request , response) => {
    let url = request.url;
    response.writeHeader(200 , {"Content-Type" : "text/html"});
    switch(url) {
        case "/project":
            response.write(projectContent);
            break;
        case "/registration":
            response.write(registrationContent);
            break;
        default:
            response.write(homeContent);
            break;
    }
    response.end();
}).listen(args.port);

