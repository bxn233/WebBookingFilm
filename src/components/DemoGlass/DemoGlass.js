import React from 'react'

export default function DemoGlass() {

  let [click, setClick] = React.useState(false)

  let clickFocus = click === true ? 'bg-blue-500' : ''


  return (
    <div className='lg:flex hidden lg:flex-col items-center justify-center h-screen'>
      <button onClick={() => {
        setClick(!click)
      }} className={`bg-green-400 text-white p-2 rounded-lg border-2 border-gray-400 w-fit mb-2 ${clickFocus}`} style={{backgroundColor: 'red'}}>open</button>
      <button className='bg-red-400 text-white p-2 rounded-lg border-2 border-gray-400 w-fit mb-2'>close</button>
    </div>
  )
}
