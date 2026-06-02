import {useState,useEffect} from 'react';
import '../../CSS/Clock.css';

export default function Clock(){
    const [time,setTime]=useState(new Date());
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date());
        },1000)
    },[])
    
    return <div id='clock-div'>
        <h3 >{time.toLocaleTimeString()}</h3>
        </div>

}