import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남우동맛집';
  let[글제목,change] =useState(['남자 코트 추천','맛집추천','야롱야롱']); // 글제목 : 들어간 값,  b: state도와주는 함수
  
  let[발행날짜] = useState('6월12일 발행')
  let[따봉,따봉변경] = useState(0);
/* 
  function fncClick(){
    console.log(1);
  }
 */

  let [modal,setModal] = useState(true);



  return (
    <div className="App">
      <div className='black-nav'>
        <h4 style={{fontSize : '16px'}}>React Blog</h4>
      </div>
      <button onClick={()=>{
        let copy = [...글제목]
        copy.sort()
        change(copy)

      }}>가나다순정렬</button>
      <div className="list">
        <h4>{글제목[0]}<span onClick={()=>{따봉변경(따봉+1)}}>👍</span>{따봉}</h4>
        <p>{발행날짜}</p><button onClick={()=>{
          // let arr = [1,2,3];
          let copy = [...글제목];
          copy[0]='여자 코트 추천';
          change(copy);
        }}>🤷‍♀️</button>
      </div>
      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>{발행날짜}</p>
      </div>
      <div className="list">
        <h4 onClick={()=>{setModal(false?true:false)}}>{글제목[2]}</h4>
        <p>{발행날짜}</p>
      </div>
      <h4>{post}</h4>
        {
          modal == true? <Modal /> : null
        }
    </div>
  );
}


function Modal(){
  return (
    <div className='modal'>
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}



export default App;


// 기존 state가 array/object 라면 독립적 카피본을 만들어서 수정해야 함

// 의미 없는 div대신 <></> 도 가능

/* 어떤걸 컴포넌트로 만들면 좋은가
1. 반복적인 html축약할 때
2. 큰 페이지들
3. 자주 변경되는 것들 */

/*동적인 UI만드는 STEP
1. html css로 미리 디자인 완성
2. UI의 현재 상태 state로 저장
3. state에 따라 UI가 어떻게 보일지 작성  */

// 삼항연산자  --->  조건식 ? 참일 때: 거짓일 때