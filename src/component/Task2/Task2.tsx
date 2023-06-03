
import { useCallback, useMemo, useState, useEffect } from 'react';
import './Task2.css';
var updatedList: any;
const Task2 = () => {

    const [transactionText, settransactionText] = useState("")
    const [transactionAmount, settransactionAmount] = useState(0)
    const [balanceAmount, setBalanceAmount] = useState(0)
    const [incomeAmount, setIncomeAmount] = useState(0)
    const [expenseAmount, setExpenseAmount] = useState(0)
    const [listItemStore, setListItemStore] = useState([])

    // Get Transaction Text
    const TransactionTextChange = useCallback((e: any) => {
       
        settransactionText(e.target.value)
    }, [])

    //Get amount value
    const TransactionAmountChange = useCallback((e: any) => {
       
        settransactionAmount(e.target.value);
    }, [])

    //Button Click
    const AddTransaction = useCallback((event: any) => {
      
        event.preventDefault();
        updatedList = [...listItemStore, transactionText + " " + transactionAmount];
        setListItemStore(updatedList);
    }, [transactionAmount])


    //For Testing
    useEffect(() => {
        console.log(listItemStore)
    }, [listItemStore])


    //Balance Amount Display
    useEffect(() => {
       
        setBalanceAmount(Math.abs(expenseAmount - incomeAmount))
    }, [incomeAmount, expenseAmount])


   //Minus amount convert to plus
    useEffect(() => {
       
        if (transactionAmount > 0) {
          
            setIncomeAmount(transactionAmount)
        } else {
            setExpenseAmount(Math.abs(transactionAmount))
        }
    }, [transactionAmount])


    return (
        <div className="Main">
            <h2>Expense Tracker</h2>
            <div className="container">
                <h4>Your Balance</h4>
                <h1 id="balance">${balanceAmount}</h1>

                <div className="inc-exp-container">
                    <div>
                        <h4>Income</h4>
                        <p id="money-plus" className="money plus">${incomeAmount}</p>
                    </div>
                    <div>
                        <h4>Expense</h4>
                        <p id="money-minus" className="money minus">${expenseAmount}</p>
                    </div>
                </div>
                <h3>History</h3>
                <ul >
                    {listItemStore.map(item => (
                        <li key={item}>{item}</li>
                    ))}
                </ul>
                <h3>Add new transaction</h3>
                <form id="form" onSubmit={AddTransaction}>
                    <div className="form-control">
                        <label>Text</label>
                        <input type="text" placeholder="Enter text..." value={transactionText} onChange={TransactionTextChange} />
                    </div>
                    <div className="form-control">
                        <label>Amount <br />
                            (negative - expense, positive - income)</label>
                        <input type="text" placeholder="Enter amount..." value={transactionAmount} onChange={TransactionAmountChange} />
                    </div>
                    <button type="submit" className="btn" >Add transaction</button>
                </form>
            </div>
        </div>
    )
}
export default Task2

