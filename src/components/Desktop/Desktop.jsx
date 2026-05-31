import './Desktop.css'


export default function Desktop({ obj }) {
    return (
        <div
            style={{ backgroundImage: `url(${obj.wallpaper})`, overflow: 'hidden', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '100vh', borderRadius: '10px',gridArea:'stack'}} >
            
        </div>
    )
}
