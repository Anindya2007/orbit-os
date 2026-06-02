import '../../CSS/Taskbar.css';
import {Atom} from 'lucide-react';
import Clock from './Clock.jsx';
import Running from './Running.jsx';

export default function Taskbar({obj}){
    return (<div id='Taskbar'>
        <button id='orbit-button'>{<Atom size={35}/>} OrbitOS</button>
        <div id='taskbar-content'> {<Running data={obj}/>}</div>
        <Clock/>
    </div>)
}