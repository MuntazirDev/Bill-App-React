/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

export default function Button({method,children,display}){
    return(
        <button className="button" onClick={method} style={{display:display}} >
       {children}
       </button>
    )
}