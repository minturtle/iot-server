import axios from "axios";
import Header from "./Header";
import { useState } from 'react';
import {Buffer} from 'buffer';

function App() {
  const [images, setImages] = useState([]);
    
  const searchApi = ()=>{
      axios.get("http://localhost:8000/images")
      .then(res=>{
        setImages(res.data)
      })
  }

  // 조회 데이터 존재할 경우
  if(images.length > 0) {
    return (
      <>
        <Header />
        {images.map(image => (
          <div>
            <img src={"data:image/jpg;base64," + Buffer.from(image.img.data, 'base64')} alt="img" />
            <div>{image.captured_time}</div>
          </div>
            ))}
      </>
    );
  }
  else { // 조회 데이터 존재하지 않을 경우
    return (
      <>
      <Header />
        <div>
            <button onClick={searchApi}>사진 불러오기 </button>
        </div>
      </>
    )
}

}

export default App;