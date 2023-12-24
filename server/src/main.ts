import express from "express";
import cores from "cors";
import axios from "axios";
import {Request, Response} from "express";
import {json} from "node:stream/consumers";

const app = express();
//middle ware
app.use(express.json());
app.use(cores());

//Al Currencies
app.get("/getAllCurrencies", async (req: Request, res: Response) => {
    const nameUrl = "https://openexchangerates.org/api/currencies.json?app_id=ca5632bbd43240cda28faf4bb7eafe02";

    try{
        const namesResponse = await axios.get(nameUrl);
        const nameData = namesResponse.data;
        return res.json(nameData)
    }catch (err){
        console.error(err);
    }

});

// Listen to a port
app.listen(5000, ()=>{
    console.log("Server Started");
});

//get the target Amount
app.get("/convertings", async (req: Request, res: Response) => {
    const {
        date,
        sourceCurrency,
        targetCurrency,
        amountInSourceCurrency
    }  = req.query;
    try{
        const dataUrl = `https://openexchangerates.org/api/historical/${date}.json?app_id=ca5632bbd43240cda28faf4bb7eafe02`;
        const dataResponse = await axios.get(dataUrl);
        const rates = dataResponse.data.rates;

        //rates
        const sourceRate = rates[sourceCurrency];
        const targetRate = rates[targetCurrency]

        //final target val
        const targetAmount =  (targetRate / sourceRate) * amountInSourceCurrency ;

        return res.json(targetAmount.toFixed(2));

    }catch (err){
        console.error(err);
    }
});

