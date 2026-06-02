import '../../CSS/Taskbar.css';
import {Atom} from 'lucide-react';
import Clock from './Clock.jsx';
import Running from './Running.jsx';

export default function Taskbar(){

    const data=[
        {
    id: "notes",
    name: "Notes",
    icon: "📝",
  }
];

    return (<div id='Taskbar'>
        <button id='orbit-button'>{<Atom size={35}/>} OrbitOS</button>
        <div id='taskbar-content'> {<Running data={data}/>}</div>
        <Clock/>
    </div>)
}