import React,{useState,useEffect,useRef} from 'react';


export const Stopwatch = () => {
    let [btn1,setBtn1] = useState(false);
    let initial = useRef(0);
    let [timer,setTimer] = useState(initial.current);
    let timerid = useRef();
    let min = useRef(0);
    let sec = useRef(0);

    function handlestsp(){
        setBtn1(!btn1);
        console.log(btn1);
        // if(!btn1){
        //     if(timerid.current){
        //         clearInterval(timerid.current);
        //     }
        // }
    }
    function myreset()
    {
        setBtn1(false)
        clearInterval(timerid.current);
        sec.current=0;
        min.current=0;
        initial.current=0;
        setTimer(0);
        // timerid
    }
    useEffect(()=>{
        if(btn1)
        {
          let id =  setInterval(()=>{
                setTimer((prev)=>(
                    sec.current
                ))
                sec.current = sec.current+1;
                if(sec.current==100){
                    sec.current=0;
                    min.current=min.current+1;
                }
                
            },100)
            timerid.current=id;
        }
        else{
            clearInterval(timerid.current);
        }
        return ()=>{
            clearInterval(timerid);
        }
    },[btn1])
    
  return (
    <div>
        <h3>{min.current}sec {timer}</h3>
        {btn1 ? <button onClick={handlestsp}>stop</button>:<button onClick={handlestsp}>start</button>}
        <button onClick={myreset}>reset</button>
        
    </div>
  )
}
