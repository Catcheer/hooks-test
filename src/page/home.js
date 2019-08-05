import React, { useState, useEffect } from 'react'
import CompModal from './CompModal'

function Home() {

    let [state, setCount] = useState({count:0,interValFlag:true})

    useEffect(() => {
        let timer = null
        if (state.interValFlag) {
            timer = setInterval(() => {
                setCount(changeCount(state))
            }, 1000)
        }
        return () => {
            clearInterval(timer)
        }
    })

const changeCount=(state)=>{
        return {...state,count:state.count+1}
}
// console.log('render---')
    return <React.Fragment>
        <div>{state.count}</div>
        <button onClick={() => { setCount(changeCount(state)) }}>add</button>
        <button onClick={() => { setCount((perState)=>({...perState,interValFlag:!perState.interValFlag})) }}>{state.interValFlag?'off':'on'}</button>
        <CompModal count={state.count} />
    </React.Fragment>
}

export default Home