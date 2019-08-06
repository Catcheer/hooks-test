import  {useState,useEffect} from 'react'
import _ from 'lodash'

const useDrag=(list=[])=>{
    let [colorArr,setList]=useState([...list])  
    let [startComp,setStartComp]=useState(null)

    const drop=item=>{
        console.log(item) 
        if(startComp===item){
            return
        }
        let startIndex=colorArr.findIndex(o=>o===startComp)
        let targetIndex=colorArr.findIndex(o=>o===item)
        if(startIndex>-1 && targetIndex>-1){
            colorArr.splice(startIndex,1,item)
            colorArr.splice(targetIndex,1,startComp)
            setList([...colorArr])
        }
       
    }
    

    const dragStart=(item)=>{
        console.log(item)
        setStartComp(item)
    }

    useEffect(()=>{
        console.log(list)
    },[colorArr, list])


    return {colorArr,dragStart,drop}
    
}

export default useDrag