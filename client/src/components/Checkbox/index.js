import React from "react";

export default function Checkbox (props) {
    // function checked () {
    //     console.log("CHECKEDDDDDDDDDDDDDDDDDDDDDDD");
    // }
    return (
        <>
        <button 
            className="justify-center m-1 font-semibold border border-gray-400 rounded shadow"  
            onClick={props.checked}
            >
        check
     </button>
     </>
    )
}