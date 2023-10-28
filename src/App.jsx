/* eslint-disable no-unused-vars */
import { useState } from "react";
import FriendsList from "./components/FriendsList";
import FormSplitBill from "./components/FormSplitBill";
import FormAddFriend from "./components/FormAddFriend";
import { initialFriends } from "./components/data";
import Button from "./components/Button";



export default function App() {
  const [friends,setFriends]=useState(initialFriends);
  const [showAddFriends,setShowAddFriends]=useState(false);
  const [showSplit,setShowSplit]=useState(false);
  
  
  const[selectFriend,setSelectFriend]=useState();

  function handleShow(){
    setShowAddFriends(showAddFriends=>!showAddFriends);
  }

  function handleSplit(id){
   
    setSelectFriend(...friends.filter(item=>item.id==id));
    setShowSplit(e=>e?e:!e);
 

    
  }

  return (
    <div className="app">
      <div className="sidebar "  >
       <FriendsList friends={friends} showSplit={showSplit} handleSplit={handleSplit} selectFriend={selectFriend} />
       
        {showAddFriends? 
        <FormAddFriend setFriends={setFriends} setShowAddFriends={setShowAddFriends}/>:''}

        <Button method={handleShow}  >
          {showAddFriends?'closs':' Add New Friend'}
          
        </Button>
     
      </div>

      {showSplit?<FormSplitBill setFriends={setFriends} selectFriend={selectFriend} setShowSplit={setShowSplit} />:''}
    </div>
  );
}





