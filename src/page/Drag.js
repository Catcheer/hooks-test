
import React ,{useState,useEffect}from 'react'
import useDrag from '../usehooks/useDrag'


import _ from 'lodash'



function DragCompent(){  
   let {colorArr,
    dragStart,
    drop}=useDrag(['#ff0000','#00ff00','#0000ff'])
    useEffect(()=>{
        console.log(colorArr)
    },[colorArr])

   return <React.Fragment>
       <h3>拖拽色块换顺序</h3>
   {colorArr.map((item,index)=>{
        return <div key={index} draggable onDragStart={()=>{dragStart(item)}} onDragOver={(e)=>{e.preventDefault()}} onDrop={()=>{drop(item)}} style={{backgroundColor:item}} className='block'></div>
    })}
    </React.Fragment>
}

export default DragCompent