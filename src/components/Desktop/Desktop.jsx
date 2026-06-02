import '../../CSS/Desktop.css';


export default function Desktop({ Wallpaper }) {

    const apps = [
  {
    id: "notes",
    name: "Notes",
    icon: "📝",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 700,
      height: 500,
    },

    position: {
      x: 100,
      y: 100,
    },

    zIndex: 0,
  },

  {
    id: "todo",
    name: "Todo",
    icon: "✅",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 600,
      height: 500,
    },

    position: {
      x: 120,
      y: 120,
    },

    zIndex: 0,
  },

  {
    id: "calculator",
    name: "Calculator",
    icon: "🧮",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 350,
      height: 500,
    },

    position: {
      x: 140,
      y: 140,
    },

    zIndex: 0,
  },

  {
    id: "pomodoro",
    name: "Pomodoro",
    icon: "⏱️",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 450,
      height: 550,
    },

    position: {
      x: 160,
      y: 160,
    },

    zIndex: 0,
  },

  {
    id: "settings",
    name: "Settings",
    icon: "⚙️",

    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    isFocused: false,

    dimensions: {
      width: 800,
      height: 600,
    },

    position: {
      x: 180,
      y: 180,
    },

    zIndex: 0,
  },
];


    return (
        <div
            style={{ backgroundImage: `url(${Wallpaper.wallpaper})`, padding:'30px 10px 10px 30px ',overflow: 'hidden', backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover', backgroundPosition: 'center', minHeight: '94vh', borderRadius: '10px',gridArea:'stack',}} >

          <div style={{width:'500px',height:'88vh',display:'flex',gap:'10px'}}>  

            {apps.map((app)=>{
                return(<div  className='apps'>

                    <button key={app.id} className='icon-app'>{app.icon}</button>
                    <p style={{margin:0, fontSize:'15px',cursor:'default'}}>{app.name}</p>

                </div>)
            })}

            </div>
        </div>

    )
}
