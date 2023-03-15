import React from 'react'

function ListItem({transaction , deleteTransaction}) {
    return (
        <li className="bg-light list-group-item  my-1 d-flex between ">
            <button className={transaction.amount > 0 ? "btn btn-success py-2 rounded-0 px-4 " : "btn btn-danger py-2 rounded-0 px-4 "}>
                <h3 className="">₹{transaction.amount}</h3>
            </button>
            <h3>{transaction.text}</h3>
            <button className="btn btn-danger py-2 rounded-0 px-4 " onClick={()=>deleteTransaction(transaction.id)}>
                <h3 className=""><i className="bi bi-trash"></i></h3>
            </button>
        </li>
    )
}

export default ListItem
