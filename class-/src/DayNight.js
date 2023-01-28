import {useState} from "react";
import Day from "./Day"
import Night from "./Night"


function DayNight (){

    const [state , setState] = useState("day");
    return (

        <div 
        onClick={() => {
            state ==="day" ? setState("night") : setState("day");
        }}
        >
            {state ==="day" ? <Day/>: <Night/>} 
        

        </div>
    )
}
export default DayNight;