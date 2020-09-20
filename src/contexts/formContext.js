import React,{useContext,useState} from 'react';
import {ListContext} from './listContext';

const FormContext = () =>{
    const [rs,setRs] = useState('');
    const [item,setItem] = useState('');
    const {addItem} = useContext(ListContext);

    const handleSubmit = (e) =>{
        e.preventDefault();
        addItem(rs,item);
        setRs('');
        setItem('');
    }

    return(
        <div>
            <form onSubmit={handleSubmit} className="add-item">
                <input type="number" value={rs} placeholder="Enter Amount" required onChange={(e)=>setRs(e.target.value)}/>
                <input type="text" value={item} placeholder="Enter Item" onChange={(e)=>setItem(e.target.value)} required/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default FormContext;