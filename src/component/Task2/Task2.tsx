
import { useCallback, useMemo, useState,useEffect } from 'react';
import './Task2.css';

const Task2 = () => {

const [transactionText,settransactionText] = useState("")
const [transactionAmount,settransactionAmount] = useState(0)
const [balanceAmount,setBalanceAmount] = useState(0)
const [incomeAmount,setIncomeAmount] = useState(0)
const [expenseAmount,setExpenseAmount] = useState(0)
const [buttonExpenseAmount,setbuttonexpenseAmount]= useState(0)

const TransactionTextChange = useCallback((e: any)=>{
    settransactionText(e.target.value)

},[])

const TransactionAmountChange = useCallback((e: any)=>{
         settransactionAmount(e.target.value);
        
},[])

/*const AddTransaction = useCallback(()=>{
  setbuttonexpenseAmount(transactionAmount)
},[transactionAmount])*/

useEffect(()=>{
    setBalanceAmount( Math.abs(expenseAmount - incomeAmount) )
   
},[incomeAmount,expenseAmount])

useEffect(()=>{
     setbuttonexpenseAmount(transactionAmount)
        if (buttonExpenseAmount>0)
        {
            setIncomeAmount(buttonExpenseAmount)
        }else{
            setExpenseAmount( Math.abs(buttonExpenseAmount))
        }
        
},[buttonExpenseAmount,transactionAmount])

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
                    <ul id="list" className="list">

                    </ul>

                    <h3>Add new transaction</h3>
                    <form id="form">
                        <div className="form-control">
                            <label>Text</label>
                            <input type="text" placeholder="Enter text..." value={transactionText} onChange={TransactionTextChange} />
                        </div>
                        <div className="form-control">
                            <label>Amount <br />
                                (negative - expense, positive - income)</label>
                            <input type="text"  placeholder="Enter amount..."  value={transactionAmount} onChange={TransactionAmountChange}  />
                        </div>
                      { /* <button className="btn" onClick={AddTransaction}>Add transaction</button>*/}
                    </form>
                </div>
            </div>

       
    )

}
export default Task2