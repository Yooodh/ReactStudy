import { useState } from 'react';
import './App.css';

function App() {

  // document.querySelector('h4').innerHTML = post;
  let post = '강남 우동 맛집';
  
  /** State 사용법
   * 1. import { useState }
   * 2. useState(보관할 자료)
   * 3. let[작명, 작명]
   */

  // [ state에 보관했던 자료, state 변경 도와주는 함수 ]
  let [글제목, a] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬독학']);

  /** Destructuring 문법 
   * let num = [1, 2];
   * let [a, c] = [1, 2];
   * 
   * // let a = num[0];
   * // let c = num[1];
  */

  return (
    <div className="App">
      <div className='black-nav'>
        {/* <h4 style={ {color : 'red', fontSize : '16px'} }>블로그임</h4> */}
        <h4>ReactBlog</h4>
      </div>
      <div className='list'>
        <h4>{ 글제목[0] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
}

export default App;
