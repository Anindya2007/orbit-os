import './App.css';
import {useState} from 'react';
import Desktop from './components/Desktop/Desktop.jsx';
import Taskbar from './components/Taskbar/Taskbar.jsx'
import { Image } from "lucide-react";

export default function OS(){
  // Below is the data for a single app in taskbar.
  const [app,setApp]=useState([
  {
    id: "notes",
    name: "Notes",
    icon: "https://tse1.mm.bing.net/th/id/OIP.Nr_d-NYDBdz0A3QFqyO44AHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 700,
      height: 550,
    },

    position: {
      x: 100,
      y: 100,
    },

    zIndex: 0,
  },

  {
    id: "gallery",
    name: "Gallery",
    icon: 'https://cdn.pixabay.com/photo/2022/07/30/07/50/gallery-7353267_1280.png',

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
    icon: "https://getdrawings.com/free-icon/windows-calculator-icon-64.png",

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
    id: "prera",
    name: "Prera",
    icon:'/Prera.png',
    
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
    icon:'https://tse2.mm.bing.net/th/id/OIP.YMOdfxzCTbVfZ3t1EOpwOAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3',
    
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