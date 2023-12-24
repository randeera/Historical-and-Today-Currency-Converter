import express from "express";
import cores from "cors";
import axios from "axios";
const app = express();
//middle ware
app.use(express.json);
app.use(cores);
//Al Currencies
app.get("/getAllCurrencies", async (req, res) => {
    const nameUrl = `https://docs.openexchangerates.org/reference/currencies-json?app_id=ca5632bbd43240cda28faf4bb7eafe02`;
    try {
        const namesResponse = await axios.get(nameUrl);
        const nameData = namesResponse.data;
        return res.json(nameData);
    }
    catch (err) {
        console.error(err);
    }
});
// Listen to a port
app.listen(5050, () => {
    console.log("Server Started");
});
//# sourceMappingURL=main.js.map