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
        backgroundImage: `url(${Wallpaper.wallpaper})`, padding: '30px 10px 10px 30px ', overflow: 'hidden', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '94vh', borderRadius: '10px', gridArea: 'stack',
      }} >

       <div>
        {app.filter((app_data)=>app_data.isOpen)
        .map((app_data,id)=>{
          return(
            <Opened key={id} obj={app_data}/>
          )
        })}
        </div> 

      <div style={{ width: '300px', height: '88vh', display: 'flex', gap: '10px' ,flexWrap:'wrap'}}>

        {app.map((App, index) => {
          return (<div key={App.id} className='apps'>

            <button className='icon-app' onClick={() => Open(index)}><img style={{height:'40px',width:'40px',borderRadius:'10px'}} src={App.icon}/></button>
            
            <p style={{ margin: 0, fontSize: '15px', cursor: 'default' }}>{App.name}</p>

          </div>)
        })}

      </div>
    </div>

  )
}
