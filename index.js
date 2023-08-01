const http = require("http");

const express = require("express");

const bodyParser = require("body-parser");

const app = express();

const port = 4000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  const userAgent = req.headers["user-agent"];

  if (userAgent.includes("Instagram")) {
    const smallByteContent =
      "data:application/octet-stream;base64,AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

    res.setHeader("Content-Type", "application/octet-stream");

    res.setHeader(
      "Content-Disposition",

      "attachment; filename=small_file.txt"
    );

    res.end(Buffer.from(smallByteContent, "base64"));
  } else {
    res.writeHead(302, {
      Location:
        "https://experience.4excelerate.org/external/knowMore/Internship/I5ABAG8",
    });

    res.end();
  }
});

http.createServer(app).listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
