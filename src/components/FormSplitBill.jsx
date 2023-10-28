/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";

export default function FormSplitBill({setFriends,selectFriend,setShowSplit}) {
  const [bill,setBill]=useState('');
  const [myExpense,setMyExpense]=useState('');
  const [weExpecse,setWeExpecse]=useState('');
  const [payBil,setPayBil]=useState('user');

  function handleAllBlill(e){
    setBill(Number(e.target.value));
    setWeExpecse(Number(e.target.value));
  }

  function handleMyExpense(e){
    setMyExpense(Number(e.target.value));
    setWeExpecse(bill-Number(e.target.value));
  }

  function splitBill(e){
    e.preventDefault();
  
 
    
    payBil==='user'?
    selectFriend.balance=selectFriend.balance+weExpecse:
    selectFriend.balance=selectFriend.balance+(-myExpense);
    setFriends(items=>items.map(item=>item.id==selectFriend.id?
      {...item,balance:selectFriend.balance}:item));
    console.log(selectFriend);
    
    
   
    setShowSplit(false);

  }
  



    return (
      <form className="form-split-bill" >
        <h2>Split a bill with {selectFriend.name} </h2>
  
        <label>💰 Bill value</label>
        <input
          type="number"
          value={bill}
          onChange={handleAllBlill}
         
        />
  
        <label>🧍‍♀️ Your expense</label>
        <input
          type="number"
          value={myExpense}
          onChange={handleMyExpense}
          
        />
        
  
        <label>👫{selectFriend.name} s expense</label>
        <input 
        type="number" 
        value={weExpecse}
        onChange={e=>setWeExpecse(e.target.value)}
        className="friend_expecse" 
         />
  
        <label>🤑 Who is paying the bill</label>
        <select value={payBil} onChange={e=>setPayBil(e.target.value)} >
          <option value="user">You</option>
          <option value="friend">{selectFriend.name}</option>
        </select>
  
       <Button method={splitBill} >
       Split bill
       </Button>
      </form>
    );
  }