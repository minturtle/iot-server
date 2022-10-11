import axios from "axios";
import { useState, useEffect } from 'react';

function Header(){
    const [isRun, setIsRun] = useState(1);
    
    useEffect(()=>{
        axios.get("http://localhost:8000/captureCode")
            .then(res=>setIsRun(parseInt(res.data.code)))
    }, [])

    const sendCapture = (code)=>{
        setIsRun(code)   
        axios.post("http://localhost:8000/captureCode", {
            isRun : code})
    }
    
    return (<>
        <h1>라즈베리 파이 모션 감지 CCTV</h1>
        <hr /> 모션감지 센서에 모션이 감지되면 사진이 찍힙니다.<br/>

        {
        (isRun===1)?
        <button onClick ={()=>sendCapture(0)}>CCTV 캡쳐 기능 끄기</button>
      :<button onClick ={()=>sendCapture(1)}>CCTV 캡쳐 기능 켜기</button>
        }
        <br />
</>)
}

export default Header;