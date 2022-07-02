const http = require("http");
const fs = require("fs");

const homeFile = fs.readFileSync("home.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests("https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=3f42ee61c79c317e5a82916d28ce4b08")
            .on('data', function (chunk) {
                console.log(chunk)
            })
            .on('end', function (err) {
                if (err) return console.log('connection closed due to errors', err);

                console.log('end');
            });
    }
});

server.listen(8000,"127.0.0.1");