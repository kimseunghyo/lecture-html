const express = require("express");
const path = require("path");
const app = express();

app.set("views", path.join(__dirname, "views")); // 화면 보여줄 폴더 지정
app.set("view engine", "ejs"); // html에 자바스크립트 처리하는 방식으로 ejs

app.get("/", function (req, res) {
  res.render("index", { title: "메인", mainTitle: "우리집" });
});

app.get("/login", function (req, res) {
  //res.sendFile(path.join(__dirname, "html/login.html"));
  res.render("login", { title: "로그인", mainTitle: "로그인해주세요." });
});

app.get("/join", function (req, res) {
  res.render("join", { title: "회원가입", mainTitle: "회원가입해주세요." });
});

app.get("/board", function (req, res) {
  // 데이터베이스에서 글을 긁어와서
  res.render("board", {
    title: "게시판",
    mainTitle: "게시판입니다.",
    list: [
      {
        no: 1,
        title: "첫번째 글입니다.",
        writer: "김승효1",
        date: "2023.01.16",
        hit: 5,
      },
      {
        no: 2,
        title: "두번째 글입니다.",
        writer: "김승효2",
        date: "2023.01.16",
        hit: 5,
      },
      {
        no: 3,
        title: "세번째 글입니다.",
        writer: "김승효3",
        date: "2023.01.16",
        hit: 5,
      },
      {
        no: 4,
        title: "네번째 글입니다.",
        writer: "김승효4",
        date: "2023.01.16",
        hit: 5,
      },
      {
        no: 5,
        title: "다섯번째 글입니다.",
        writer: "김승효5",
        date: "2023.01.16",
        hit: 5,
      },
    ],
  });
});

app.listen(3000, function () {
  console.log("3000번에서 서버 대기중");
});
