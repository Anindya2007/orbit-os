import './image.css'


export default function Image({ link,name }){
    return ( 
        <img src={link} style={{height:'150px',width:'200px',margin:'0px 0px 0px 0px'}}></img>
    )
}