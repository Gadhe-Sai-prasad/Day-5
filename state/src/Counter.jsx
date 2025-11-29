import { useState } from "react";
export default function Counter() {

    let [count, setCount] = useState(0);
    let inCount = () => {
        
        console.log(count);
        if(count<10) {
setCount(count+1);

        }
    }
    let outCount = () => {
        if(count>0) {
            setCount(count-1);
        }
        

    }

    return (
        <div>
            <h3>Count = {count }</h3>
            <button onClick={inCount}  >Count</button>
            <button onClick={outCount}>decrease</button>
        </div>


    );
}