import express from "express";
import routes from "./routes/index"

const app = express();

app.use(express.json());

app.use(routes);

app.get("/", (request, response) =>
    response.json({ message: "Hello GoStack" })
);

app.listen(3333, () => console.log("🚀 Server started on Port 3333"));
