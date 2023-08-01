const http = require("http");
const fs = require("fs");
const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;
app.use(bodyParser.json());

http
  .createServer((req, res) => {
    const userAgent = req.headers["user-agent"];
    const file = "./sample.pdf";
    if (userAgent.includes("Instagram")) {
      fs.readFile(file, (err, data) => {
        if (err) {
          res.writeHead(500, { "Content-Type": "text/plain" });
          res.end("Error reading the file.");
        } else {
          const smallByteContent =
            "data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";
          res.setHeader("Content-Type", "application/octet-stream");
          res.setHeader(
            "Content-Disposition",
            "attachment; filename=small_file.txt"
          );
          res.end(Buffer.from(smallByteContent, "base64"));
          res.end(data);
        }
      });
    } else {
      res.writeHead(302, {
        Location:
          "https://experience.4excelerate.org/external/knowMore/Competition/M9MH7CS",
      });
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
