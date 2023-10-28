/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "./Button";


export default function FormAddFriend({setFriends,setShowAddFriends}) {
  const [name,setName]=useState('');
  const [img,setImg]=useState('');
 
  function handleAddFriends(e){
    e.preventDefault();

    if(!name)return alert(' the input is Empty 😢');
    const ID=Math.floor((Math.random()+1)*454238);

    const newFriend={
      id:ID,
      name:name,
      image:`${img.length >0 ?img:'https://i.pravatar.cc/48?u='+ID}`,
      balance:0,
    }
    
    setFriends(e=>[...e,newFriend]);
    
    
    setShowAddFriends(false);

  }

  return (
    <form className="form-add-friend"  >
      <label>👫 Friend name</label>
      <input
        type="text"
        value={name}
        onChange={e=>setName(e.target.value)}
       
      />

      <label>🌄 Image URL</label>
      <input
        type="text"
        value={img}
        onChange={e=>setImg(e.target.value)}
       
      />

      <Button method={handleAddFriends} >
        Add New Friend
      </Button>
    </form>
  );
}
