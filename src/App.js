import { useState } from "react";
import BalanceSection from "./components/BalanceSection";
import Listgroup from "./components/Listgroup";
import Mainsection from "./components/Mainsection";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function App() {


  const notify = () => toast("Wow so easy!");


     const [transactions , setTransactions] = useState([
      // {
      //    id : 1,
      //    text : "Salary",
      //    amount : 100000
      // },
      // {
      //    id : 2,
      //    text : "iphone",
      //    amount : -85000
      // },
      // {
      //    id : 3,
      //    text : "Comission",
      //    amount : 50000
      // }
    ])

    const saveTransaction = (transaction)=>{
       const newTransaction = {
        id : uuidv4(),
        text : transaction.text,
        amount : parseInt(transaction.amount)
       }
       setTransactions([...transactions , newTransaction])
    }

    const deleteTransaction = (id) => {
        setTransactions(transactions.filter(item => item.id !== id))
    }

  return (

    <>

      <Navbar />

      <div className="container d-flex  mt-3  px-0">
        <Mainsection saveTransaction={saveTransaction}/>
        <BalanceSection transactions={transactions}/>
      </div>

      <Listgroup transactions={transactions} deleteTransaction={deleteTransaction}/>
      <ToastContainer />
    </>

  );
}

export default App;
