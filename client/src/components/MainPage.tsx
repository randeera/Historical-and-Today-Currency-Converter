import './MainPage.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Loader} from "./Loader.tsx";

export function MainPage() {


    const [date, setDate] = useState("");
    const [sourceCurrency, setSourceCurrency] = useState<string>("");
    const [targetCurrency, setTargetCurrency] = useState("");
    const [amountInSourceCurrency, setAmountInSourceCurrency] = useState<number>(0);
    const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0 );
    // @ts-ignore
    const [currencyNames, setCurrencyNames] = useState<String>([]);
    const [loading, setLoading] = useState(true);

    const handleSubmit = async (e : any) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await axios.get("http://localhost:5000/convertings", {params :{
                date, sourceCurrency, targetCurrency, amountInSourceCurrency,
                },
            });

            setAmountInTargetCurrency(response.data);
            setLoading(false);

        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        const getCurrencyNames = async ()=> {
            try {
                const response = await axios.get("http://localhost:5000/getAllCurrencies");
                setCurrencyNames(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getCurrencyNames().then(() => {} );
    }, []);


    return (
        <>
            <h1 className={"lg:mx-32 text-green-500 text-5xl font-bold"}>
                Convert Currencies Today
            </h1>
            <p className={"lg:mx-32 opacity-40 py-6"}>
                Welcome to "Covert Your Currencies Today" This application allows you to easily convert currencies base on the latest exchange rates. Whether you are planning a trip, managing your finances, or simply curious about the value of your money in different currencies, this tool is here to help.
            </p>
            <div className={"mt-5 mb-0 flex items-center justify-center flex-col"}>
                <section className={"w-full lg:w-1/2"}>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5 ">
                            <label htmlFor={date}
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Your
                                email</label>
                            <input onChange={(e) => {setDate(e.target.value); setLoading(true)}}
                                   type="Date" id={date} name={date}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                                   required/>
                        </div>

                        <div className="mb-5  ">
                            <label htmlFor={sourceCurrency}
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Source Currency</label>

                            <select
                                onChange={(e) => {setSourceCurrency(e.target.value); setLoading(true)}}
                                id={sourceCurrency} name={sourceCurrency} value={sourceCurrency}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                            >
                            <option value=""> Select Source Currency </option>
                                {Object.keys(currencyNames).map((currency)=>(
                                    <option className=" p-1" key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5  ">
                            <label htmlFor={targetCurrency}
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Target Currency</label>
                            <select
                                onChange={(e) => {setTargetCurrency(e.target.value); setLoading(true)}}
                                id={targetCurrency} name={targetCurrency} value={targetCurrency}
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                            >
                                <option value=""> Select Source Currency</option>
                                {Object.keys(currencyNames).map((currency)=>(
                                    <option className=" p-1" key={currency} value={currency}>
                                        {currencyNames[currency]}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="mb-5  ">
                            <label htmlFor={"amountInSourceCurrency"}
                                   className="block mb-2 text-sm font-medium text-green-500
                                    dark:text-white">Amount in Source Currency</label>
                            <input onChange={(e) => {setAmountInSourceCurrency(e.target.value); setLoading(true)}}
                                   type="text" id={"amountInSourceCurrency"} name={"amountInSourceCurrency"}
                                   value={amountInSourceCurrency}
                                   className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-green-500
                                    focus:border-green-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey
                                     dark:focus:ring-green-500 dark:focus:border-green-500"
                                   placeholder="Select target currency"
                                   required/>
                        </div>
                        <button type="submit"
                                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            Get the Amount of target currency
                        </button>
                    </form>
                </section>
                {!loading ? (
                    <>
                        <section className={"mt-5"}>
                            {amountInSourceCurrency} {currencyNames[setSourceCurrency]} is equals to
                            <span className={"text-green-500 font-bold"}>
                            {" "}
                                {amountInTargetCurrency}
                                {" "}
                        </span>
                            in {currencyNames[targetCurrency]}
                            <br/><br/><br/><br/>

                        </section>
                        <section className="text-xs mb-0">
                            Copyright © 2023 | Kaveendra Randeera | All Rights Reserved.
                        </section>
                    </>
                    ) : <Loader />}
            </div>

        </>
    );
}