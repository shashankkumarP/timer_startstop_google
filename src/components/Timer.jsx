import React from 'react'
import { useState,useRef,useEffect } from 'react'
// import styles from "./Timer.modules.css"
export const Timer = () => {
    let [btt,setBtt] =useState(false);
    let timerid = useRef(null)
    let sec = useRef(60);
    let initial = useRef(4);
    let min = useRef(initial.current);
    let [timer,setTimer] = useState(60);
    let handlestsp = (e)=>{
        // btntog.current= !btntog.current;
        setBtt(!btt);
        
    }
    useEffect(()=>{
        if(btt)
        {
            let id = setInterval(()=>{
                setTimer((prev)=>(
                    sec.current 
                   
                ));
                if(sec.current==0){
                     sec.current=60
                     min.current=min.current-1;
                }
                
                sec.current =sec.current-1
                if(min.current<0){
                    min.current=0;
                    setTimer(0);
                    clearInterval(timerid.current)
                    console.log("end")
                }
                

            },1000)
            timerid.current= id;
            
        }
        else{
            clearInterval(timerid.current)
        }
        
        return ()=>{
            clearInterval(timerid.current);
        }
        
    },[btt])
    // if(min.current<0){
    //     min.current=0;
    //     setTimer(0);
    //     clearInterval(timerid.current)
    //     console.log("end")
    // }
    // useEffect(()=>{
         
    // })

    let stoping = ()=>{
        setTimer(60);
        sec.current=60;
        clearInterval(timerid.current);
        min.current=initial.current;
        // sec.current=60;
        
        timerid.current=null;
        setBtt(false);
    }
    let handleinput =(e)=>{
        let ind = e.target.value;
        min.current =ind;
        sec.current=0;
        setTimer(0);
        
        // clearInterval(timerid.current);
        // setTimer()
    }

  return (
    <div >
       <input type="number" name='inputwa' onChange={handleinput} />
       <h3>{min.current}min {timer}sec</h3>
       {btt ? <button onClick={handlestsp}>stop</button>:<button onClick={handlestsp}>start</button>}
       <button onClick={stoping}>reset</button>
    </div>
  )
}
