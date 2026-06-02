import './App.css';
import Desktop from './components/Desktop/Desktop.jsx';
import Taskbar from './components/Taskbar/Taskbar.jsx';

export default function OS(){
  // Below is the data for a single app in taskbar.
  const taskbar_app={
    id: "notes",
    name: "Notes",
    icon: "📝",
  };

  const Desktop_data={
    wallpaper:'/wallpaper.jpeg'
  }


  return(<div id='Desktop-page'>
    <Desktop Wallpaper={Desktop_data}  />
    <Taskbar obj={[taskbar_app]}/>
  </div>)
}