const express = require("express");
const cors = require("cors");
const cardapioRoutes = require("./src/routes/cardapioRoutes");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.use ("/api", cardapioRoutes);

app.get("/", (req, res) => {
    res.send("EUUUU AMOOOO BACKEND <3");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});