import express from "express";
import morgan from "morgan";

const PORT = 4000
const app = express();
const logger = morgan("dev");

const privateMiddleware = (req, res, next) => {
    const url = req.url;
    if (url === "/protected"){
        return res.send("<h1>Not allowed</h1>");
    }
    next();
}

app.use(logger);
app.use(privateMiddleware);
app.get("/", (res, req) => {
    req.send("Hi");
});
app.get("/protected", (res, req) => {
    req.send("hey its not protected bro");
});

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);