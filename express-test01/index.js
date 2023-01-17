const express = require("express");
const path = require("path");
const app = express();

// routing
app.get("/", function (req, res) {
  res.send('<a href="/login">로그인');
});

app.get("/login", function (req, res) {
  // res.send(' <form method="get" action="/loginOK">)
  res.sendFile(path.join(__dirname, "html/login.html"));
});

app.get("/loginOK", function (req, res) {
  const id = req.query.userID;
  const pw = req.query.userPW;
  const gender = req.query.gender;
  let _gender = "";

  if (gender === "male") {
    _gender = "남자";
  } else {
    _gender = "여자";
  }

  if (id === "seung" && pw === "0916") {
    res.send(`<h1>${_gender} 김승효님 </h1> 반갑습니다.`);
  } else {
    res.send("<h1>아이디 패스워드를 확인해 주세요.</h1>");
  }
});

app.listen(3000, function () {
  console.log("3000번에서 서버 대기중");
});
