import React from 'react'

const ColorPicker = () => {
  return (
    <div className='w-28'>
        <h1>Colors</h1>
        <div className="flex flex-wrap gap-3">
            <span className="bg-danger w-6 rounded-full"></span>
            <span className="bg-info w-6 rounded-full"></span>
            <span className="bg-black w-6 rounded-full"></span>
            <span className="bg-white w-6 rounded-full"></span>
            <span className="bg-success w-6 rounded-full"></span>
            <span className="bg-secondary w-6 rounded-full"></span>
        </div>
    </div>
  )
}

export default ColorPicker