import '../../CSS/appwindow.css'

export default function Opened({obj,app,setApp}){
    // The function below is to make minimise button functional.
    function minimise(){
        setApp(()=>{
            return app.map((app_data)=>{
                return app_data.id==obj.id? {...app_data,isMinimized:!app_data.isMinimized}:app_data;
            })
        })
    }
    
    // The below button is to make the close button functional.
    function closed(){
        setApp(()=>{
            return app.map((app_data)=>{
                return app_data.id==obj.id? {...app_data,isOpen:!app_data.isOpen}:app_data;
            })
        })
    }

    return (<div style={{display:obj.isMinimized?'none':'block' ,height:'89vh',margin:'0px 0px 0px 30px',
    width:'96%',border:'1px solid white',position:'absolute',top:'0px',left:'0px',zIndex:obj.zIndex}}>

        <div style={{height:'20px',width:'100%',
        display:'flex',flexDirection:'row-reverse',justifyContent:'space-between'}}>

            <div>
            <button id='minimise-btn' onClick={minimise}>-</button>
            <button id='exit-btn' onClick={closed}>X</button>
            </div>

            <div id='open-app-icon'>
            {obj.icon}
            <p style={{color:'white',display:'inline',marginLeft:'8px'}}>{obj.name}</p>
            </div>
        </div>

        <div style={{height:'calc(89vh - 20px)',
        width:'100%'}}>
            {obj.content}
        </div>

    </div>)
}