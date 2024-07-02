const http = require("http");
const fsPromises = require("fs/promises");
const app = http.createServer(async(req,res) => {
    res.writeHead(200, 
        {"Content-Type": "text/plain",
        });
        const route = req.url;
        switch (route) {
            case "/": {
                const bf = await fsPromises.readFile("../index.html")
                res.end(bf);
                break;
            }
            default: {
                res.end("Not Found");
            }
        }
});

app.listen(1401, () => {
    console.log("-----------Server Started-----------")
})