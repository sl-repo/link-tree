const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];

  if (userAgent.includes("Instagram")) {
    const content = "This is text file";
    const fileName = "small_file.txt";
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Content-Disposition", `attachment; filename=${fileName}`);
    const buffer = Buffer.from(content, "utf-8");
    res.send(buffer);
  } else {
    res.writeHead(302, {
      Location:
        "https://linktr.ee/excelerate__",
    });

    res.end();
  }
});

http.createServer(app).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
