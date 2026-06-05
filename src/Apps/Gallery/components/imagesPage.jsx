import Image from './image.jsx';

export default function Page({ info }){
    return (
        <div style={{display:'flex',flexWrap:'wrap',gap:'20px',width:'100%', alignContent:'flex-start',minHeight:'82%'}}>
            {info.map((i)=>{
                return <Image link={i.download_url} name={i.author} key={i.id}/>
            })}
            
        </div>
    )
}