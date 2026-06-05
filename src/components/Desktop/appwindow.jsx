import '../../CSS/appwindow.css'

export default function Opened({obj}){
    
    return (<div style={{display:obj.isMinimized?'none':'block' ,
    height:'94vh',width:'100%',border:'1px solid white',position:'absolute',zIndex:obj.zIndex}}>

        <div style={{height:'20px',width:'100%',
        display:'flex',flexDirection:'row-reverse',justifyContent:'space-between',overflow:'hidden'}}>

            <div>
            <button id='exit-btn'>X</button>
            <button id='maximise-btn'>+</button>
            <button id='minimise-btn'>-</button>
            </div>

            <div id='open-app-icon'>
            {obj.icon}
            <p style={{color:'white',display:'inline',marginLeft:'8px'}}>{obj.name}</p>
            </div>
        </div>

        <div style={{height:'calc(94vh - 20px)',
        width:'100%',overflow:'hidden'}}>
            {obj.content}
        </div>

    </div>)
}