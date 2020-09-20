import React,{useContext} from 'react';
import {ListContext} from '../contexts/listContext';

const ItemList =()=>{
    const {list,removeItem,totalAmount} = useContext(ListContext);
    return(list.length?(
        <div className="list">
            <ul>
                {list.map(item =>{ return(
                    <li key={item.id} className="listOfItem">
                        <div>
                            <div>{item.rs}</div>
                            <div className="item-name">{item.item}</div>
                        </div>
                        <abbr title="Delete This Item"><button onClick={()=>removeItem({id:item.id,rs:item.rs})}>X</button></abbr>
                    </li>
                )})}
            </ul>
            <li className="listOfItem total-amount">
                <div>Total Amount</div> 
                <div className="amount"> {totalAmount}</div>
            </li>
        </div>):<div className="empty">Till Now You Not Made Any Expense</div>
    )
}

export default ItemList;