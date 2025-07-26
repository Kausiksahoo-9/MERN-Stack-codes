import { useState } from 'react'


function App() {
  const [color,setColor] = useState("olive");

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center bg-white px-3 py-2 rounded-3xl shadow-xl gap-2'>
          <button onClick={()=> setColor("red")} className='outline-none px-4 py-1 bg-red-600 text-white rounded-full'>Red</button>
          <button onClick={()=> setColor("green")} className='outline-none px-4 py-1 bg-green-600 text-white rounded-full'>Green</button>
          <button onClick={()=> setColor("blue")} className='outline-none px-4 py-1 bg-blue-600 text-white rounded-full'>Blue</button>
          <button onClick={()=> setColor("black")} className='outline-none px-4 py-1 bg-black text-white rounded-full'>Black</button>
          <button onClick={()=> setColor("pink")} className='outline-none px-4 py-1 bg-pink-600 text-white rounded-full'>Pink</button>
          <button onClick={()=> setColor("purple")} className='outline-none px-4 py-1 bg-purple-600 text-white rounded-full'>Purple</button>
        </div>
      </div>
    </div>
  )
}

export default App
