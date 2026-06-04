import '../../CSS/Desktop.css';


export default function Desktop({ Wallpaper,app,setApp }) {

  function Open(index){
    console.log('Double clicked',index)
    setApp(prev=>{
      return prev.map((obj,i)=>{

        return i==index? {...obj,isOpen:true} : obj
      })
    })
  }

    return (
        <div
            style={{ backgroundImage: `url(${Wallpaper.wallpaper})`, padding:'30px 10px 10px 30px ',overflow: 'hidden', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '94vh', borderRadius: '10px',gridArea:'stack',}} >

          <div style={{width:'500px',height:'88vh',display:'flex',gap:'10px'}}>  

            {app.map((App,index)=>{
                return(<div key={App.id} className='apps'>
                  
                    <button className='icon-app' onClick={()=>Open(index)}>{App.icon}</button>
                    <p style={{margin:0, fontSize:'15px',cursor:'default'}}>{App.name}</p>

                </div>)
            })}

            </div>
        </div>

    )
}
