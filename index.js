
var http = require('http'); // common js 문법
var hostname = "127.0.0.1"; // 내 컴퓨터 도메인 주소(모든 컴퓨터 공통적으로)를 가리킴 
var port = 8080;

const server = http.createServer(function (req, res) {
    // 요청을 각각 나눠서 처리해야함
    const path = req.url;
    const method = req.method;
    if (path === '/products') {
        if (method === 'GET') {
            res.writeHead(200, { "Content-Type": "application/json" });
            // writeHead => 응답 메세지 속 헤더의 값을 추가하는 명령어, 200-> status, applcation/json => json형태의 응답을 보내겠다
            const products = JSON.stringify([ //end안에는 str만 들어갈 수 있기에 객채를 str로 바꾸는 작업
                {
                    name: "농구공",
                    price: 5000,
                }
            ]);
            res.end(products) // end => 서버에서 작성한 응답메세지를 보내고 마무리함
        } else if (metho === "POST") {
            res.end("생성되었습니다!")
        }
    }
    res.end("Good Bye")
}); //서버를 만드는 명령어

server.listen(port, hostname); // 서버 요청을 기다리는 명령어 => 인자의 port 와 hostname 로 요청을 기다리겠다~!

console.log("grab market server on!")
