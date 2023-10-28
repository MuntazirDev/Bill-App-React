/* eslint-disable react/prop-types */
import Friend from "./Friend";

export default function FriendsList({friends,handleSplit,selectFriend}) {
  
    return (
      <ul>
        {friends.length ? friends.map(function(item,index){
         return <Friend key={index} item={item} handleSplit={handleSplit} selectFriend={selectFriend} />
        }):''}
       
       
      </ul>
      
    );
  }