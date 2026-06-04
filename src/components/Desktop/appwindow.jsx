import '../../CSS/appwindow.css'

export default function Opened({obj}){
    
    return (<div style={{display:obj.isMinimized?'none':'block' ,
    height:!obj.isMaximized?`${obj.dimensions.height}px`:'94vh',
    width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',
    position:'absolute',top:`${obj.position.y}px`,left:`${obj.position.x}px`,border:'1px solid white'}}>

        <div style={{height:'20px',width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',
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

        <div style={{height:!obj.isMaximized?`${obj.dimensions.height-20}px`:'calc(94vh - 20px)',
        width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',overflow:'hidden'}}>

        </div>

    </div>)
}