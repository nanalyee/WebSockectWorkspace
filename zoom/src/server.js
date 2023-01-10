import express from "express";

const app = express(); // express 어플리케이션 구성
app.set("view engine", "pug"); // view 엔진 pug로 구성
app.set("views", __dirname + "/views"); // views 디렉토리 설정
// public : frontend에서 구동되는 코드
app.use("/public", express.static(__dirname + "/public")); // static 설정
app.get("/", (req, res) => res.render("home")); // view render하는 route handler
app.get("/*", (req, res) => res.redirect("/")); // 다른 경로 모두 홈으로 가도록

const handleListen = () => console.log(`Lisetening on http://localhost:3000`);
app.listen(3000, handleListen); // 포트 3000
