// console.log("hello");

// const fs = require("fs");
// fs.readFile("newfile.txt", (err, data) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("Async read", data.toString());

// });

// fs.writeFile("newfile.txt", "ahmed ali", (err) => {
//     if (err) {
//         return console.log(err);
//     }
// })

// fs.unlink("newfile.txt", (err) => {
//     if (err) {
//         return console.log(err);
//     }
//     console.log("file deleted")
// })

const http = require("http");
const server = http.createServer((req, res) => {
    const url = req.url;
    if (url == '/') {
        res.write("<html>");
        res.write("<head><title>Microsoft</title></head>");
        res.write("<body>Welcom,the server is running!</body");
        res.write("</html>");
        return res.end();
    }
    if (url == '/admin') {
        res.write("<html>");
        res.write("<head><title>Microsoft</title></head>");
        res.write("<body>you can see all user</body");
        res.write("</html>");
        return res.end();
    }
    res.write("<html>");
    res.write("<head><title>Microsoft</title></head>");
    res.write("<body>anthor route</body");
    res.write("</html>");
    return res.end();
});
server.listen(3002, () => {
    console.log("server is running..")
});