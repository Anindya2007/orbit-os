import './Taskbar.css'
import Clock from './Clock.jsx';
import {Atom} from 'lucide-react';

export default function taskbar(){
    return (<div id='Taskbar'>
        <button id='orbit-button'>{<Atom size={35}/>}</button>
        <div id='taskbar-content'></div>
        <Clock/>
    </div>)
}