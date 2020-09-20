import React,{useState,createContext,useEffect} from 'react';
import { v1 as uuidv1 } from 'uuid/dist';

export const ListContext = createContext();

const ListContextProvider = (props) =>{
    var getItem = JSON.parse(localStorage.getItem('items'));
    var getAmount = parseInt(localStorage.getItem('total'));

    const [list,setList] = useState(getItem?getItem:[])
    const [totalAmount,setTotalAmount] = useState(getAmount?getAmount:0)
  
   useEffect(()=>{localStorage.setItem('items',JSON.stringify(list))
                 localStorage.setItem('total',totalAmount.toString())},[list])

    const addItem = (rs,item) =>{
        setList([...list,{rs,item,id:uuidv1()}]);
        setTotalAmount(totalAmount+parseInt(rs));
    }

    const removeItem = ({id,rs}) =>{
        setList(list.filter(item=>item.id!==id))
        setTotalAmount(parseInt(totalAmount)-parseInt(rs))
    }

    return(
        <ListContext.Provider value={{list,totalAmount,addItem,removeItem}}>
            {props.children}
        </ListContext.Provider>
    )
}

export default ListContextProvider;