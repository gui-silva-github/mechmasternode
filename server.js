import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import bodyParser from "body-parser";

import { get404 } from "./controllers/error.js";
import adminRoutes from "./routes/admin.js";
import mechRoutes from "./routes/mech.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));
app.use("/cars", express.static(path.join(__dirname, "public/cars")));

app.use("/admin", adminRoutes);
app.use(mechRoutes);

app.use(get404);

app.listen(3000, () => console.log(`Servidor rodando no endereço: http://localhost:3000`));
