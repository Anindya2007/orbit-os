import './App.css';
import {useState} from 'react';
import Desktop from './components/Desktop/Desktop.jsx';
import Taskbar from './components/Taskbar/Taskbar.jsx';

export default function OS(){
  // Below is the data for a single app in taskbar.
  const [app,setApp]=useState([
  {
    id: "notes",
    name: "Notes",
    icon: "📝",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 700,
      height: 500,
    },

    position: {
      x: 100,
      y: 100,
    },

    zIndex: 0,
  },

  {
    id: "todo",
    name: "Todo",
    icon: "✅",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 600,
      height: 500,
    },

    position: {
      x: 120,
      y: 120,
    },

    zIndex: 0,
  },

  {
    id: "calculator",
    name: "Calculator",
    icon: "🧮",

    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 350,
      height: 500,
    },

    position: {
      x: 140,
      y: 140,
    },

    zIndex: 0,
  },

  {
    id: "pomodoro",
    name: "Pomodoro",
    icon: "⏱️",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 450,
      height: 550,
    },

    position: {
      x: 160,
      y: 160,
    },

    zIndex: 0,
  },

  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",

    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 800,
      height: 600,
    },

    position: {
      x: 180,
      y: 180,
    },

    zIndex: 0,
  },
])


  const Desktop_data={
    wallpaper:'/wallpaper.jpeg'
  }


  return(<div id='Desktop-page'>
    <Desktop Wallpaper={Desktop_data} app={app} setApp={setApp} />
    <Taskbar app={app}/>
  </div>)
}