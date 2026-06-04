import '../../CSS/appwindow.css'

export default function Opened({obj}){
    
    return (<div style={{display:obj.isMinimized?'none':'block' ,
    height:!obj.isMaximized?`${obj.dimensions.height}px`:'94vh',
    width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',
    position:'absolute',top:`${obj.position.y}px`,left:`${obj.position.x}px`}}>

        <div style={{height:'50px',width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',
        display:'flex',overflow:'hidden'}}>

            <button id='minimise-btn'>-</button>
            <button id='maximise-btn'>+</button>
            <button id='exit-btn'>X</button>

        </div>

        <div style={{height:!obj.isMaximized?`${obj.dimensions.height-50}px`:'calc(94vh - 50px)',
        width:!obj.isMaximized?`${obj.dimensions.width}px`:'100%',overflow:'hidden'}}>

        </div>

    </div>)
}