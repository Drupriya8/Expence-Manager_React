import React, { useState } from 'react'
import { toast } from 'react-toastify'


function Mainsection({ saveTransaction }) {

    const [text , setText] = useState("")
    const [amount , setAmount] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        const transaction = {
            text : text,
            amount : amount 
        }
        if(text==""||amount==""){
            toast.error("Please Fill All Inputs" , {position: "top-center"})
        }else{
            saveTransaction(transaction)
        }
        
        setText("")
        setAmount("")
    }


    return (
        <div className="py-3  w-50 me-2">
            <div className="container w-75 ">
                <form onSubmit={(e)=> handleSubmit(e)}>
                    <input value={text} type="text" className="w-100 mt-5 border-0 py-1 px-2" placeholder="Enter Your Transaction"  onChange={(e)=> setText(e.target.value)} />
                    <input value={amount} type="text" className="w-100 border-0 py-1 mt-3 px-2" placeholder="Enter Amount"  onChange={(e)=> setAmount(e.target.value)} />
                    <button className="w-100 mt-3 py-1 bg-danger border-0 text-light">SAVE TRANSACTION <i
                        className="bi bi-file-earmark text-light fs-5"></i></button>
                </form>
            </div>
        </div>
    )
}

export default Mainsection
