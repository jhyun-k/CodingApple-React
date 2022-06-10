import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동맛집';
  let[글제목] =useState(['남자 코트 추천','맛집추천','야롱야롱']); // 글제목 : 들어간 값,  b: state도와주는 함수
  
  let[발행날짜] = useState('6월12일 발행')






  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{fontSize : '16px'}}>React Blog</h4>
      </div>
      <div className="list">
        <h4>{글제목[0]}</h4>
        <p>{발행날짜}</p>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{발행날짜}</p>
      </div>
      <div className="list">
        <h4>{글제목[2]}</h4>
        <p>{발행날짜}</p>
      </div>
      <h4>{post}</h4>
    </div>
  );
}

export default App;
