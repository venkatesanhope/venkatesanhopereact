import { useCallback, useMemo, useState } from "react";
import { useEffect } from "react";

import './Task1.css';
var dummyVar = "";
const Task1 = () => {


    const [dollardrop, setDollardrop] = useState("USD");
    const [dollarcurrencycount, setDollarcurrencycount] = useState(1);


    const [indiandropcurrency, setIndiadropcurrency] = useState("INR");
    const [indcurrencycount, setIndiancurrencycount] = useState(0);

    const [getvalue, setGetvalue] = useState(0);
    const [getdvalue, setGetdvalue] = useState(0);


    const [count, setCount] = useState(0);
    const [countinr, setCountinr] = useState(0);



    const currencydopChange = useCallback((e: any) => {
        setIndiadropcurrency(e.target.value);
    }, [])

    const dollardropChange = useCallback((e: any) => {
        setDollardrop(e.target.value);
    }, [])



    const indcurrencycountChange = useCallback((e: any) => {
        setIndiancurrencycount(e.target.value);
    }, [])

    const dollarcurrencycountChange = useCallback((e: any) => {
        setDollarcurrencycount(e.target.value);
    }, [])

    const swap = () => {
        dummyVar = indiandropcurrency;
        setIndiadropcurrency(dollardrop)
        setDollardrop(dummyVar);
    }



    const calculation = useMemo(() => {
        setCount(getvalue / getdvalue)
    }, [getdvalue, getvalue]);

    const calculation2 = useMemo(() => {
        setCountinr(dollarcurrencycount * count)
    }, [count, dollarcurrencycount]);



    useEffect(() => {

        fetch("https://open.exchangerate-api.com/v6/latest")
            .then((res) => res.json())

            .then((data) => setGetvalue(data.rates[indiandropcurrency]))
            .catch((err) => console.log(err));
        console.log(getvalue)
    }, [indiandropcurrency]);


    useEffect(() => {

        fetch("https://open.exchangerate-api.com/v6/latest")
            .then((res) => res.json())

            .then((data) => setGetdvalue(data.rates[dollardrop]))
            .catch((err) => console.log(err));
        console.log(getdvalue)
    }, [dollardrop]);

    return (
        <>
            <div className="container">
                <img src="././Assets/money.png" alt="" className="money-img" />
                <h1>Exchange Rate Calculator</h1>
                <p>Choose the currency and the amounts to get the exchange rate</p>
                <div className="currency">
                    <select id="currency-one" value={dollardrop} onChange={dollardropChange}>
                        <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">EUR</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">GBP</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">JPY</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="USD">USD</option>
                        <option value="UYU">UYU</option>
                        <option value="VND">VND</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                    <input type="text" placeholder="0" value={dollarcurrencycount} onChange={dollarcurrencycountChange} />
                </div>
                <div className="swap-rate-container">

                    <button className="btn" onClick={swap}>Swap</button>

                    <div className="rate" id="rate"></div>
                </div>
                <div className="currency">
                    <select id="currency-two" value={indiandropcurrency} onChange={currencydopChange} >
                        <option value="AED">AED</option>
                        <option value="ARS">ARS</option>
                        <option value="AUD">AUD</option>
                        <option value="BGN">BGN</option>
                        <option value="BRL">BRL</option>
                        <option value="BSD">BSD</option>
                        <option value="CAD">CAD</option>
                        <option value="CHF">CHF</option>
                        <option value="CLP">CLP</option>
                        <option value="CNY">CNY</option>
                        <option value="COP">COP</option>
                        <option value="CZK">CZK</option>
                        <option value="DKK">DKK</option>
                        <option value="DOP">DOP</option>
                        <option value="EGP">EGP</option>
                        <option value="EUR">EUR</option>
                        <option value="FJD">FJD</option>
                        <option value="GBP">GBP</option>
                        <option value="GTQ">GTQ</option>
                        <option value="HKD">HKD</option>
                        <option value="HRK">HRK</option>
                        <option value="HUF">HUF</option>
                        <option value="IDR">IDR</option>
                        <option value="ILS">ILS</option>
                        <option value="INR">INR</option>
                        <option value="ISK">ISK</option>
                        <option value="JPY">JPY</option>
                        <option value="KRW">KRW</option>
                        <option value="KZT">KZT</option>
                        <option value="MXN">MXN</option>
                        <option value="MYR">MYR</option>
                        <option value="NOK">NOK</option>
                        <option value="NZD">NZD</option>
                        <option value="PAB">PAB</option>
                        <option value="PEN">PEN</option>
                        <option value="PHP">PHP</option>
                        <option value="PKR">PKR</option>
                        <option value="PLN">PLN</option>
                        <option value="PYG">PYG</option>
                        <option value="RON">RON</option>
                        <option value="RUB">RUB</option>
                        <option value="SAR">SAR</option>
                        <option value="SEK">SEK</option>
                        <option value="SGD">SGD</option>
                        <option value="THB">THB</option>
                        <option value="TRY">TRY</option>
                        <option value="TWD">TWD</option>
                        <option value="UAH">UAH</option>
                        <option value="USD">USD</option>
                        <option value="UYU">UYU</option>
                        <option value="VND">VND</option>
                        <option value="ZAR">ZAR</option>
                    </select>
                    <input type="text" value={countinr} onChange={indcurrencycountChange} />

                </div>
            </div>
        </>
    )


}
export default Task1