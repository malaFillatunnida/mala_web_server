import http from "http";
import fs from "fs";

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });

    switch (req.url) {
      case "/":
        fs.readFile("assets/home.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/visi":
        fs.readFile("assets/visimisi.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/sambutan":
        fs.readFile("assets/sambutan.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/blog":
        fs.readFile("assets/blog.html", function (err, data) {
          res.write(data);
          return res.end();
        });
        break;
      case "/perpus":
        fs.readFile("assets/perpus.pdf", (err, data) => {
          if (err) throw err;

          // send respon
          res.writeHead(200, { "Content-Type": "application/pdf" });
          res.write(data);
          res.end();
        });
        break;
      default:
        break;
    }
  })
  .listen(8000);

console.log("server is running on http://localhost:8000");
// var http = require("http");
// var url = require("url");
// var fs = require("fs");

// http
//   .createServer(function (req, res) {
//     var q = url.parse(req.url, true);
//     var filename = "." + q.pathname; // ./home.html

//     fs.readFile(filename, function (err, data) {
//       if (err) {
//         res.writeHead(404, { "Content-Type": "text/html" });
//         return res.end("Selamat Datang di Halaman Index");
//       }
//       res.writeHead(200, { "Content-Type": "text/html" });
//       res.write(data);
//       return res.end();
//     });
//   })
//   .listen(8000);
// console.log("server running on http://localhost:8000");
