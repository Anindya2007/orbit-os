import '../../CSS/Running.css';

export default function Running({data}){
    return(<div id='running-apps'>

        {data.filter((apps)=>{
            return apps.isOpen==true;})

            .map((app,ind)=>{
            return <button key={ind} className='running-app'>{app.icon}</button>
        })}
    </div>)
}