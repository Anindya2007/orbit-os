import './App.css';
import Desktop from './components/Desktop/Desktop.jsx';
import Taskbar from './components/Taskbar/Taskbar.jsx';

export default function OS(){
  const Desktop_data={
    wallpaper:'/wallpaper.jpeg'
  }

  return(<div id='Desktop-page'>
    <Desktop obj={Desktop_data} />
    <Taskbar/>
  </div>)
}