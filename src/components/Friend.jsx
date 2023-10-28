/* eslint-disable react/prop-types */
import Button from "./Button";

export default function Friend({item,handleSplit,selectFriend}) {

  return (
    <li className={item===selectFriend?'selected':''}>
      <img src={item.image}alt='' />
      <h3>{item.name}</h3>

      {item.balance ==0?
      <p>You and {item.name} are even</p>:
      item.balance<0?
      <p className= "red"> You owe {item.name} {item.balance}€ </p>:
      <p className= "green"> {item.name} owe You {item.balance}€ </p>
      }
      
      {/* <p className="red"> You owe NAME {item.balance}€ </p>
      <p>You and {item.name} are even</p> */}

      <Button method={( )=>handleSplit(item.id)}>
         Select
      </Button>
    </li>
  );
}