import '../../CSS/Desktop.css';
import { useState } from 'react';
import Opened from './appwindow.jsx';

export default function Desktop({ Wallpaper, app, setApp }) {

  const [highestZ, setHighestZ] = useState(0);

  function Open(index) {
    const newZ=highestZ+1;
// For updating the z index each time an app is opened
    setHighestZ(newZ);


    setApp(prev => {
      return prev.map((obj, i) => {

        return i == index ? { ...obj, isOpen: true ,zIndex:newZ} : obj
      })
    })
  }

  return (
    <div
      style={{
        backgroundImage: `url(${Wallpaper.wallpaper})`, overflow: 'hidden', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '94vh', borderRadius: '10px', gridArea: 'stack',
      }} >

       
        {app.filter((app_data)=>app_data.isOpen)
        .map((app_data,id)=>{
          return(
            <Opened key={id} obj={app_data} app={app} setApp={setApp}/>
          )
        })}
        

      <div style={{ width: '300px', height: '88vh', display: 'flex', gap: '10px' }}>

        {app.map((App, index) => {
          return (<div key={App.id} className='apps'>

            <button className='icon-app' onClick={() => Open(index)}>
              <img style={{height:'40px',width:'40px',borderRadius:'10px'}} src={App.icon}/>
            <p style={{ margin: 0, fontSize: '15px', cursor: 'default' ,color:'white'}}>{App.name}</p>
              </button>
            

          </div>)
        })}

      </div>
    </div>

  )
}
