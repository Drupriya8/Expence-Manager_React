import React from 'react'
import ListItem from './ListItem'

function Listgroup({transactions , deleteTransaction}) {
    return (
        <div className="container">
            {
                transactions.map(transaction => <ListItem key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction} />)
            }
        </div>
    )
}

export default Listgroup
