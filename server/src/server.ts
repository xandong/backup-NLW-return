import express from "express";
import cors from "cors";
import { routes } from "./routes";

const app = express();
const port = 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, () => {
  console.log("\u001b[32m" + `Server on:\nhttp://localhost:${port}`);
});
