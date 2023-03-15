import React from 'react'

function BalanceSection({transactions}) {

    const balance = transactions.reduce((p,c)=>{
         return p + c.amount
    },0)

    const totalIncome = transactions.filter((item)=>{
        if(item.amount>0){
            return item
        }
    }).reduce((p,c)=>{
        return p + c.amount
    },0)

    const totalExpense = transactions.filter((item)=>{
        if(item.amount<0){
            return item
        }
    }).reduce((p,c)=>{
        return p + c.amount
    },0)

    

   

    return (
        <div className="py-2  w-50 evenly flex-column">
            <span className=""><i className="bi bi-briefcase-fill fs-75  text-light"></i></span>
            <span className="ms-3">
                <p><b className="text-warning">CURRENT BALANCE</b></p>
                <h1 className="text-light">₹{balance}</h1>
            </span>

            <div className="container mt-2 px-5">
                <div className="d-flex">
                    <div className="w-50 py-1  rounded center text-light flex-column">
                        <p className="text-warning">CURRENT INCOME</p>
                        <h1>₹{totalIncome}</h1>
                    </div>

                    <div className="w-50 py-1  rounded center text-light flex-column">
                        <p className="text-warning">CURRENT EXPENSE</p>
                        <h1>₹{totalExpense}</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BalanceSection
