import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.status(200).json({ status: "alive" });
});

app.listen(PORT, () => {
    console.log(`Server listening on PORT ${PORT}`);
})