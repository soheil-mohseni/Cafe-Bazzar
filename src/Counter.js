import React , { useState } from "react";




export default function Counter() {

    const [counter, setcounter] = useState(0);



    return (
      <div >

        {counter}
        <button onClick={() => setcounter(counter + 1)}> plus</button>
        <button onClick={() =>
        { if(counter > 0){
            setcounter(counter - 1)
        }}}> mines</button>

      </div>
    );
  }
  
  